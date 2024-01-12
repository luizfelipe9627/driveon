import debounce from "./debounce.js";

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.7;
    this.activeClass = "active";
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offSet = section.offsetTop;
      return {
        element: section,
        offSet: Math.floor(offSet - this.windowHalf),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offSet) {
        item.element.classList.add(this.activeClass);
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();

      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
