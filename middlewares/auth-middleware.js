import jwt from 'jsonwebtoken'

import UserModel from '../models/user.js'

var checkUserAuth = async(req, res,next)=>{
    let token 
    const {} =req.headers 
    if(authorization && authorization.startswith('Bearer') ){
        try{
            token = authorization.split(' ')[1]
            console.log("Token " , token)
            console.log("Authorization",authorization)

            //verify Token 
            const {userID} = jwt.verify(token,process.env.JWT_SECRET_KEY)
console.log(userID)
            //Get User From Token
            req.user = await UserModel.findById(userID).select('-password')
            next()
        }
        catch(error){
          console.log(error)
          res.status(401).send({"status" : "failed","message" : "Unauthorized User"})
        }
    }
    if(!token){
        res.send(401).send ({"status" : "failed" , "message":"Unauthorized User, No Token"})
    }
}
export default  checkUserAuth;