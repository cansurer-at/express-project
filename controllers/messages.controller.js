const path = require("path");
// /folders/files.jpg

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", 'images', "skimountain.jpg"));
  //  res.send("<ul><li>Hi enstein</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
