function Menu(config) {
  this.nav = document.querySelector(config.container);
  this.btn = document.querySelector(config.toggleBtn);
  this.maxWidth = config.widthEnable || false;

  var _opened = false;
  var _this = this;

  this.btn.removeAttribute("style");
  this.btn.addEventListener("click", openOrClose);

  if (this.maxWidth) {
    window.addEventListener("resize", e => {
      if (window.innerWidth > _this.maxWidth) {
        _this.nav.removeAttribute("style");
        _opened = true;
      } else if (!_this.nav.getAttribute("style")) closeMenu();
    });

    if (window.innerWidth <= _this.maxWidth) closeMenu();
  }

  function openOrClose() {
    !_opened ? openMenu() : closeMenu();
  }

  function openMenu() {
    var _top = _this.nav.getBoundingClientRect().top + "px";

    var _style = {
      maxHeight: "calc(100vh - " + _top + " )",
      overflow: "hidden"
    };

    applyStyleToNav(_style);
    _opened = true;
  }

  function closeMenu() {
    var _style = {
      maxHeight: "0px",
      overflow: "hidden"
    };

    applyStyleToNav(_style);

    _opened = false;
  }

  function applyStyleToNav(_style) {
    Object.keys(_style).forEach(stl => {
      _this.nav.style[stl] = _style[stl];
    });
  }
}
