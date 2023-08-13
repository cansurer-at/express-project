const path = require("path");
// /folders/files.jpg

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });
  //  res.send("<ul><li>Hi enstein</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
