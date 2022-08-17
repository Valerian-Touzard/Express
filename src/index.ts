import express from "express";
import demoRouter from "./Router/demo.router";
import userRouter from "./Router/user.router";
import * as path from "path";
import 'dotenv/config'

const app = express();
const port = process.env.PORT

// midleware
app.use(express.json());
app.use(express.urlencoded());

// app.use(userRouter);
app.use(userRouter);

// configuration bootstrap
app.use("/bootstrap",express.static(path.join(process.cwd(), "/node_modules/bootstrap/dist/css")));

// configuration dossier public
app.use("/public", express.static(path.join(process.cwd(), "src/public")));

// configuration de ejs
app.set("views", path.join(process.cwd(), "src/View"));
app.set("view engine", "ejs");

// on lance le serveur
app.listen(port, ()=>{
    console.log(`Serveur lancé sur le port ${port} !`);
});

