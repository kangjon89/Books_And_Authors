const Author = require("../Models/models");

module.exports = {
  allAuthors: (req, res) => {
    Author.find()
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },

  oneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  createAuthor: (req, res) => {
    console.log(req.body);
    Author.create(req.body)
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  updateAuthor: (req, res) => {
    let { _id, ...restOfData } = req.body;
    Author.findOneAndUpdate({ _id: req.params.id }, restOfData, {
      runValidators: true,
      new: true
    })
      .then(data => {
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  },
  deleteAuthor: (req, res) => {
    console.log("work");
    Author.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        console.log(req.params.id);
        console.log(data);
        res.json({ message: "success", results: data });
      })
      .catch(err => {
        res.json({ message: "error", results: err });
      });
  }
};
