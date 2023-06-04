let Info = {
  nom: "Khaled",
  campus: "Clermont-Ferrand",
};

module.exports = Info;

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Hello I'm Khaled from Clermont-Ferrand Campus!",
    e: "oO",
    T: "U ",
  })
);
