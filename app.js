"use strict";
const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const getPage = (path, type, res) => {
  res.status = 200;
  res.setHeader("content-type", type);
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      getPage("views/home.html", "text/html", res);
      break;
    case "/about":
      getPage("views/about.html", "text/html", res);
      break;
    case "/projects":
      getPage("views/projects.html", "text/html", res);
      break;
    case "/contact":
      getPage("views/contact.html", "text/html", res);
      break;
    case "/style/style.css":
      getPage("style/style.css", "text/css", res);
      break;
    default:
      getPage("views/notfound.html", "text/html", res);
      break;
  }
});

server.listen(port, () => {
  console.log("we are live!");
});
