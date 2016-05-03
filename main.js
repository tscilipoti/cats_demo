var Cat = {
  
  init: function(catName) {
    this.name = catName;
    return this;
  },
  
  name: null,
  
  getColor: function() {
    switch(this.name){
      case 'sparky':
        return 'orange';
      case 'clara':
        return 'black';
      default:
        return 'tabby';
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



