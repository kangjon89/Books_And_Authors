const controller = require("../Controllers/controllers");
const path = require("path");
module.exports = app => {
  app.get("/api/Authors", controller.allAuthors);
  app.get("/api/Authors/:id", controller.oneAuthor);
  app.post("/api/Authors", controller.createAuthor);
  app.put("/api/Authors/:id", controller.updateAuthor);
  app.delete("/api/Authors/:id", controller.deleteAuthor);
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
