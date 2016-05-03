var Cat = function(catName){
  this.name = catName;
};

Cat.prototype.getColor = function() {
    switch(this.name){
      case 'sparky':
        return 'orange';
      case 'clara':
        return 'black';
      default:
        return 'tabby';
    }
 };

Cat.prototype.speak = function() {
    switch(this.name){
      case 'sparky':
        return 'I like chipmunks.';
      case 'clara':
        return 'I like poultry.';
      default:
        return 'I like fish.';
    }
}; 


function populate(catName) {
  console.log(catName);
  var theCat = new Cat(catName);
  $("#catName").text(theCat.name);
  $("#catColor").text(theCat.getColor());
  $("#catSpeech").text(theCat.speak());
}



