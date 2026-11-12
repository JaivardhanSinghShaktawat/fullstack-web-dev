// this is just a wrapper on top of async function.
const fs = require("fs");

function customReadFileFunction(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data);
}

customReadFileFunction(onDone);
