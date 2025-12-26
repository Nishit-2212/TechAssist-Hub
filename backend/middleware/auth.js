import jwt from "jsonwebtoken"



export const authenticate = (req,res,next) => {


    const token = req.header.authorization.split(" ")[1];

    if(!token) {
        return res.status(401).json({error: "Acess Denied. No token found."})
    }

    try {

        const decode = jwt.verify(token.process.env.JWT_SECRET);
        req.user = decode;
        next()

    }
    catch(error) {

        res.status(401).json({error: "Invalid token"})

    }


}