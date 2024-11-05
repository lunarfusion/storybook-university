((Drupal) => {
  Drupal.behaviors.button = {
    attach(context) {
      console.log("testing button");
    },
  };
})(Drupal);
