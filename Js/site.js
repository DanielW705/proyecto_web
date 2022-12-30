(() => {
  let burge_box = document.querySelector(".left-menu .burger-box");

  let close_menu = document.querySelector(".left-menu .btn-close-menu");

  let menu = document.querySelector(".cuerpo-completo");

  burge_box.addEventListener("click", () => {
    // menu.classList.contains("close-menu")
    menu.classList.replace("close-menu", "open-menu");
  });

  close_menu.addEventListener("click", () => {
    menu.classList.replace("open-menu", "close-menu");
  });
})();
