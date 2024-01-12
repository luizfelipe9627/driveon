import AnimationScroll from "./modules/scroll-animation.js";
import MenuMobile from "./modules/menu-mobile.js";

const animationScroll = new AnimationScroll("[data-anime='scroll']");
animationScroll.init()

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();
