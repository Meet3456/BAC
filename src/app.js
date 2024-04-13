import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

// backend hai kis-kis jagah se hamm frontend me requeat accept karenge -> cors origin

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/api/v1/users", userRouter);


app.use(express.json({ limit: "50mb" }));

// This line is middleware in Express.js that parses incoming requests with URL-encoded payloads. The extended: true option allows for the parsing of complex objects and arrays. This is useful when you want to send data from the client to the server via POST requests, for example from an HTML form.
app.use(express.urlencoded({ extended: true }));

// This line tells Express.js to serve static files (like HTML, CSS, and JavaScript files) from the "public" directory. This means that if you have a file at public/index.html, it can be accessed on your website at yourwebsite.com/index.html. This is useful for serving your static assets like images, scripts, and stylesheets.
app.use(express.static("public"));

app.use(cookieParser());


// http://localhost:8000/api/v1/users/register

export default app;
