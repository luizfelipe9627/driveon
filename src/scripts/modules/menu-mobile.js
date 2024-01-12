export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);
    this.scrollDisable();
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  scrollDisable() {
    if (this.menuButton.classList.contains(this.activeClass)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }

  stop() {
    this.events.forEach((event) => {
      this.menuButton.removeEventListener(event, this.openMenu);
    });
  }
}
