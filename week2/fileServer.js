/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/files", (req, res) => {
    fs.readdir(__dirname + "/files", (err, data) => {

        if (err) {
            console.log(err);
        }
        else {
            res.status(200).json({
                success: true,
                message: "OK",
                files: {data},
                Status: 200,
            });
        }
    });

});

app.get("/files/:fileName", (req, res) => {
    console.log(fileList);
    const fileName = req.params.fileName;

    fs.readFile(__dirname + "/files/" + fileName, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            throw new Error("there is an error");
        } else {
            res.json({
                success: true,
                message: "OK",
                content: { data },
                Status: 200,
            });
        }
    });

});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});
app.listen(3000, () => {
    console.log("app is listening on http://localhost:3000");
});

module.exports = app;