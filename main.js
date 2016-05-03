var Cat = {
  
  init: function(catName) {
    this.name = catName;
    return this;
  },
  
  name: null,
  
  getColor: function() {
    switch(this.name){
      case 'sparky':
        return 'My color is orange.';
      case 'clara':
        return 'My color is black.';
      default:
        return 'My color is tabby.';
    }
  }, 
  
  speak: function() {
    switch(this.name){
      case 'sparky':
        return 'I like chipmunks.';
      case 'clara':
        return 'I like poultry.';
      default:
        return 'I like fish.';
    }
  }
  
};

function populate(catName) {
  var theCat = Cat.init(catName);
  $("#catName").text(theCat.name);
  $("#catColor").text(theCat.getColor());
  $("#catSpeech").text(theCat.speak());
}



