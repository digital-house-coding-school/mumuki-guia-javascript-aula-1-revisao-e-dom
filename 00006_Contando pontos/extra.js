  let ginobili = {
    nome: "Emanuel",
    sobrenome: "Ginobili",
    pontos: 0,
    cumprimentar(nome) {
      return "Olá " + nome + " eu sou o Emanuel";
    },
    mais2(){ 
      this.pontos += 2 
    },
    mais3(){ 
      this.pontos += 3
    },
  };
