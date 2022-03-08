import * as  express from "express";
const app = express();
const port = process.env.PORT || 3000;


//console.log(process.env.USER_FULLNAME);
//LO DE ABAJO ES LO QUE ESCRIBO EN LA TERMINAL TAL CUAL
//export USER_FULLNAME=silvi
//$ echo $USER_FULLNAME
// $ yarn dev
// $ ts-node index.ts

// console.log(process.env.NODE_ENV); 
// console.log(process.env.DB_HOST); 


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

app.listen(port, () => {
    console.log("hola soy express y estoy corriendo en el " + port);
});