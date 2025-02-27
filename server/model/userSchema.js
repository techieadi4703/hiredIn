const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  console.log("inside pre");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword = await bcrypt.hash(this.cpassword, 10);
    console.log("Password Encrypted");
  }
  next();
});

//we are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    console.log("inside generate token");
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // console.log(token);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    // console.log('my token inside function is ',token);
    return token;
  } catch (err) {
    return err;
  }
};

//addMessage fucntion
userSchema.methods.addMessage = async function (name,email,phone,message) {
    try {
        console.log("inside addMessage function");
        this.messages=this.messages.concat({name,email,phone,message})
        await this.save();
        return this.messages;
    }catch(e){
        console.log("error in addMessage function");
    }
}

const User = mongoose.model("USER", userSchema);
module.exports = User;
