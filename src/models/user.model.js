import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// const UserSchema = new mongoose.Schema({});
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,  
      trim: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    fullName: {
      type: String,
      required: true,
      trim: true, 
      index: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url
    },

    watchHistory:[
      {
        type: Schema.Types.ObjectId, 
        ref: 'Video'
      }
    ],

    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    refreshToken: {
      type: String
    },
  },
  {
    timestamps: true,
    // gives createdAt and updatedAt fields
  }
);

// jab bhi arrow function karte hai to uske pass this ka reference nahi hota , islie nnormal function use karte hai!(hame password ka reference chahiye)

// middleware hai to next aage pass karna oadta hai!

userSchema.pre("save", async function (next) {  
  // if there is no change in password then dont hash it again , just move to next middleware
  if (!this.isModified("password")) {
    return next();
  }
  // Hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


// method to compare password
userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password); 

  // this.password is the hashed password in the database
  // password is the password that user entered(in string form)
  // returns an boolean value True/False
};

// methods to generate Access and Refresh Tokens
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id : this._id,
      email : this.email,
      username : this.username,
      fullName : this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  )
}


userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id : this._id,

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  )
}


export const User = mongoose.model("User", userSchema);