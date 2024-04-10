import mongoose,{Schema} from 'mongoose';

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

export const User = mongoose.model("User", userSchema);