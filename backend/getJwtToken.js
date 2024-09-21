const jwt=require("jsonwebtoken");

function getJwtToken(id){
    const token=jwt.sign({id},process.env.JWT_KEY,
        {
            expiresIn:"Id"
        });
}
module.exports=getJwtToken;