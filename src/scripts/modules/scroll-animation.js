import debounce from "./debounce.js"; // Importa a função debounce do arquivo debounce.js.

// Classe responsável por fazer conteúdo aparecer animado ao rolar o scroll e abrir o site.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class AnimationScroll {
  // O constructor é usado para definir os parâmetros que serão usados na classe.
  constructor(sections) {
    this.sections = document.querySelectorAll(sections); // Atribui ao this.sections os elementos passados pelo usuário.
    this.windowHalf = window.innerHeight * 0.7; // Está pegando 70% da altura da tela do usuário.
    this.activeClass = "active"; // Está definindo o valor padrão para o activeClass.

    this.checkDistance = debounce(this.checkDistance.bind(this), 50); // Está atribuindo a função debounce a variável checkDistance e passando como parâmetro a função checkDistance e o tempo de 200 milissegundos. O bind(this) está sendo usado para que o this não seja perdido ao usar o debounce.
  }

  // O método getDistance está sendo usado para pegar a altura do elemento em relação ao topo da página.
  getDistance() {
    // O this.distance está sendo usado para referenciar o objeto que está sendo criado, sendo assim, o this.sections está se referindo aos elementos passados pelo usuário. O this.section está sendo transformado em um array e está sendo usado o map para percorrer cada section.
    this.distance = [...this.sections].map((section) => {
      const offSet = section.offsetTop; // Está pegando a altura do elemento em relação ao topo da página.
      // Está retornando um objeto com o elemento e a altura do elemento em relação ao topo da página.
      return {
        element: section, // Está retornando o elemento.
        offSet: Math.floor(offSet - this.windowHalf), // Está retornando a altura do elemento em relação ao topo da página.
      };
    });
  }

  // O método checkDistante é responsável por fazer os elementos aparecerem na tela ao scrollar para baixo.
  checkDistance() {
    // O forEach está sendo usado para percorrer cada item do array.  parâmetro item do forEach está sendo usado para referenciar cada item do array.
    this.distance.forEach((item) => {
      // Se o window.scrollY for maior que a altura do elemento em relação ao topo da página, então irá executar o if.
      if (window.scrollY > item.offSet) {
        item.element.classList.add(this.activeClass); // Adiciona a classe active a section que tiver sua altura negativada(de cima para baixo).
      }
      // Se não, se a section conter a classe active irá executar o escopo do else if que é responsável por fazer os elementos sumirem da tela ao scrollar para cima.
      else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass); // Remove a classe active a section que tiver sua altura positiva(de baixo para cima).
      }
    });
  }

  // O init está sendo usado para iniciar o objeto criado.
  init() {
    // Se o this.sections.length for maior que 0, então irá executar o if.
    if (this.sections.length) {
      this.getDistance(); // Está executando a função para que assim que o site carregue não fique tudo em branco.

      this.checkDistance(); // Está executando a função para que assim que o site carregue não fique tudo em branco.

      window.addEventListener("scroll", this.checkDistance); // Adiciona o evento de scroll ao window e se houver scroll aciona o método checkDistance.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }

  // O stop está sendo usado para parar o objeto criado.
  stop() {
    window.removeEventListener("scroll", this.checkDistance); // Remove o evento de scroll ao window e se houver scroll aciona o método checkDistance.
  }
}