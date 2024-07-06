const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//route 1 : get all the notes: post "/fetchallnotes".loged in required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});

//route 2 : get all the notes: post "/addnotes".loged in required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "title must be atlest 3 character").isLength({ min: 3 }),
    body("description", "Description must be atlest 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

//route 3 : update an exsisting notes: post "/updatenote".loged in required
router.put(
  "/updatenote/:id",
  fetchuser,
  [
    body("title", "title must be atlest 3 character").isLength({ min: 3 }),
    body("description", "Description must be atlest 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    try {
      //create a newNote object
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }
      // find the note to be updated and update it
      let note = await Notes.findById(req.params.id);
      if (!note) {
        res.status(404).send("not found");
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("not allowed");
      }
      note = await Notes.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

//route 4 : deleating an exsisting notes: delete "/deletnote".loged in required

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // find the note to be delete and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).send("not found");
    }

    //allows deletion only if user owns the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"success": "note has been deleted", note: note})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});

module.exports = router;
