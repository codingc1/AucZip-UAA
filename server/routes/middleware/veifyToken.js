// Fomat of token
//authorization : Bearer <access_token>
//Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  //Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //Split at the space
    const bearer = bearerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    next();
  } else {
    //Forbidden
    res.status(403).send("need user session");
    // res.sendStatus(403);
  }
}
export default verifyToken;
