// Classe responsável por fazer o menu mobile abrir e fechar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class MenuMobile {
  // O constructor é usado para definir os parâmetros que serão usados na classe.
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton); // Atribui ao this.menuButton o elemento passado pelo usuário no parâmetro menuButton.
    this.menuList = document.querySelector(menuList); // Atribui ao this.menuList o elemento passado pelo usuário no parâmetro menuList.
    this.activeClass = "active"; // Está definindo o valor padrão para o activeClass.
    this.openMenu = this.openMenu.bind(this); // Está atribuindo a função openMenu a variável openMenu e passando como parâmetro o bind(this) para que o this não seja perdido ao usar o addEventListener.

    // Se o events for undefined, ou seja, se o usuário não passar nenhum parâmetro, então irá executar o if.
    if (events === undefined) {
      this.events = ["touchstart", "click"]; // Está atribuindo a variável events um array com os eventos touchstart e click.
    } else {
      this.events = events; // Está atribuindo a variável events o parâmetro passado pelo usuário.
    }
  }

  // O método openMenu é responsável por abrir e fechar o menu mobile.
  openMenu(event) {
    event.preventDefault(); // Está prevenindo o comportamento padrão do evento.
    this.menuButton.classList.toggle(this.activeClass); // Está adicionando a classe active ao menuButton e se já tiver a classe active irá remover.
    this.menuList.classList.toggle(this.activeClass); // Está adicionando a classe active ao menuList e se já tiver a classe active irá remover.
    this.scrollDisable(); // Está chamando o método scrollDisable, fazendo com que o usuário não consiga rolar a tela quando o menu mobile estiver aberto.
  }

  // O método addMenuMobileEvents está sendo usado para adicionar os eventos ao menu mobile.
  addMenuMobileEvents() {
    // O forEach está sendo usado para percorrer cada item do array. O parâmetro event do forEach está sendo usado para referenciar cada item do array.
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu); // Está adicionando o evento ao menuButton e se houver o evento aciona o método openMenu.
    });
  }

  // O método scrollDisable está sendo usado para fazer com que o usuário não consiga rolar a tela quando o menu mobile estiver aberto.
  scrollDisable() {
    // Se o menuButton conter a classe active irá executar o if.
    if (this.menuButton.classList.contains(this.activeClass)) {
      document.body.style.overflow = "hidden"; // Está adicionando a propriedade overflow com o valor hidden ao body, fazendo com que o usuário não consiga rolar a tela.
    } else {
      document.body.style.overflow = "initial"; // Está adicionando a propriedade overflow com o valor initial ao body, fazendo com que o usuário consiga rolar a tela.
    }
  }

  // O init está sendo usado para iniciar o objeto criado.
  init() {
    // Se o menuButton e o menuList existirem irá executar o if.
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents(); // Está chamando o método addMenuMobileEvents para adicionar os eventos ao menu mobile.
    }
    return this;
  }

  // O stop está sendo usado para parar o objeto criado.
  stop() {
    // O forEach está sendo usado para percorrer cada item do array. O parâmetro event do forEach está sendo usado para referenciar cada item do array.
    this.events.forEach((event) => {
      this.menuButton.removeEventListener(event, this.openMenu); // Está removendo o evento ao menuButton e se houver o evento aciona o método openMenu.
    });
  }
}
