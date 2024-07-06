import react, { useState } from 'react'
import noteContext from './noteContext'

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "660cd6d7acefa146d5505972",
          "user": "6609893c44261968ed803ee4",
          "title": "oefhijerbiefvhbijhefb",
          "description": "rge mkegvn kjfbivjbf",
          "tag": "kdehniudcvuhdfcvc",
          "date": "2024-04-03T04:11:03.302Z",
          "__v": 0
        },
        {
          "_id": "6688e2cce25fbef31f9ce753",
          "user": "6609893c44261968ed803ee4",
          "title": "my first mern app22 aaj",
          "description": "this is my first mern stack project",
          "tag": "this project is learning baised",
          "date": "2024-07-06T06:23:08.715Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return(
    <noteContext.Provider value = {{notes, setNotes}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState;