const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static("dist"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
