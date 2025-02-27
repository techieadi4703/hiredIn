const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwToken;

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log("HUHHH\n\n\n\n",verifyToken)

    console.log("Verified Token:", verifyToken);
    console.log("Token Match Query:", {
      _id: verifyToken._id,
      "tokens.token": token,
    });

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(err);
  }
};

module.exports = auth;
