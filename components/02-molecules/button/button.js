((Drupal) => {

  // wrap in DOM load so Storybook does not throw errors
  document.addEventListener('DOMContentLoaded', function () {
    // const menuTrigger = document.getElementById("menu-toggle");
    //   ['mousedown', 'focus.keydown'].forEach(event => menuTrigger.addEventListener(event, showHideMenuToggler));
    //   
    //   function showHideMenuToggler(event) {
    //     event.preventDefault();
    //     // change toggle button to is-open
    //     menuTrigger.classList.toggle("is-open");
    //   };  
      
      // // Create form wrapper object - this contains the form being opened/closed
      // const mainMenu = document.getElementById("main-menu-hider");
      // 
      //   function showHideMenu(event) {
      //     
      //     // preventDefault so focus does not fire on click
      //     event.preventDefault();
      //   
      //     // Search-open removes the closed transform from the form it contains
      //     mainMenu.classList.toggle("menu-opened");
      //     mainMenu.classList.toggle("menu-closed");
      //   
      //     // change toggle button to is-open
      //     menuTrigger.classList.toggle("is-open");
      //   
      //     // aria-expanded switch
      //     // get the aria-expanded state of the toggler and if it's true, make it false
      //     if (mainMenu.getAttribute("aria-expanded") === "true") {
      //       mainMenu.setAttribute("aria-expanded", "false");
      //     } else {
      //       // otherwise if it's false, make it true
      //       mainMenu.setAttribute("aria-expanded", "true");
      //     };
      //   }; 
  });
})(Drupal);