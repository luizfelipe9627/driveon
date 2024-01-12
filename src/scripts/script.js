// Está importando o módulo scroll-animation.js e atribuindo a variável AnimationScroll.
import AnimationScroll from "./modules/scroll-animation.js";
import MenuMobile from "./modules/menu-mobile.js";

const animationScroll = new AnimationScroll("[data-anime='scroll']"); // Está criando um objeto e passando o dataset anime="scroll" como parâmetro.
animationScroll.init(); // Está chamando o método init do objeto criado.

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']"); // Está criando um objeto e passando o dataset menu="button" e menu="list" como parâmetro.
menuMobile.init(); // Está chamando o método init do objeto criado.
