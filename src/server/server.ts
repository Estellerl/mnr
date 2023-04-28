import express from "express" ;


const server = express();

// add middleware 
server.use(express.static("dist"));

server.set("view engine","ejs" );

server.use("/",(req, res) => {
    res.render("index", {
        content: "EJS is cool"
    });
});

// takes three arguments: 1.The port that it will be listing to 2.Machine host (IP of the machine) 3. function that will be exicuted when the server is done mounting itself off that port 
server.listen(8080, "0.0.0.0" , () => { console.info(
    "Express server is listening at http://0.0.0.0:8080"
);
})
