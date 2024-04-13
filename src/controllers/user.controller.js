import { asyncHandler } from "../utils/AsyncHandler.js";

// higher order function ke andar ek function liya hai

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Register User Route",
  });
});

export { registerUser };
