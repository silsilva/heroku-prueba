import * as  express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/env", (req, res) => {
    res.json({
        environment: process.env.NODE_ENV,
    });
});

app.get("/db-env", (req, res) => {
    res.json({
        "db-host": process.env.DB_HOST,
    });
});

app.get("/hola", (req, res) => {
    res.json({
        message: "hola soy Silvi",
    });
});

app.use(express.static("dist"));
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
    console.log("hola soy express y estoy corriendo en el " + port);
});