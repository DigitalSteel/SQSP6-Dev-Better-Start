
Y.use('node', function(Y) {

  Y.on('domready', function() {
    // Init ImageLoader  
    new Y.Squarespace.Loader({
      img:Y.all('img[data-image]')
    });       
  });
});
