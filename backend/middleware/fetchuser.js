var jwt = require("jsonwebtoken");
const JWT_SECRET = "vikashtanwer$123";

const fetchuser = (req, res, next)=>{
    //get the user from the jwt token and add id to req object 
    const tokken = req.header("auth-token");
    if(!tokken){
        res.status(401).send({error: "please authenticate using a valid tokken"})
    }
    try {
        const data = jwt.verify(tokken, JWT_SECRET );
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({error: "please authenticate using a valid tokken"})
    }
}

module.exports = fetchuser;