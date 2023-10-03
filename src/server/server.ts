import express from "express" ;
import os from "os";
import config from "./config";

import apiRouter from "./api-routers";

//console.log({PORT})


const server = express();

// add middleware 
server.use(express.static("dist"));

server.set("view engine","ejs" );

server.use("/api", apiRouter)

server.get("/",(req, res) => {
    res.render("index", {
        initialContent: "EJS is cool"
    });
});

// takes three arguments: 1.The port that it will be listing to 2.Machine host (IP of the machine) 3. function that will be exicuted when the server is done mounting itself off that port 
server.listen(/*config.PORT*/ 8080, config.HOST, () => { console.info(
    `Express server is listening at ${config.SERVER_URL}`
);
})
