/* ============================================================
   O CONTEÚDO DO SITE
   É aqui que se mexe. O resto do site se ajusta sozinho.
   Regra: mudou, salva e sobe. Se quebrar, é vírgula ou aspas.
   ============================================================ */

window.SITE = {

  // Seu WhatsApp: só números, com 55 + DDD
  whatsapp: "5562982864646",

  // A mensagem que já vem escrita quando a pessoa toca no botão
  mensagem: "Oi, Felipe! Vim pelo seu site e quero fazer uma tattoo.",

  // A linha da agenda. Igual na bio: só muda o mês e a cidade
  agenda: "Agenda de novembro aberta · Goiânia",

  // OS AVISOS: as linhas embaixo da agenda, na capa. Mudam toda semana.
  // texto = o que aparece · mensagem = o que vai escrito no WhatsApp quando a pessoa toca
  // Pra tirar um aviso, apaga a linha inteira. Sem aviso nenhum, deixa: avisos: []
  avisos: [
    { texto: "Restam 2 vagas em novembro", mensagem: "Oi, Felipe! Vim pelo seu site e quero uma das vagas de novembro." },
    { texto: "Guest em São Paulo · 19 a 22/11", mensagem: "Oi, Felipe! Vim pelo seu site. Vi que você vai estar em São Paulo de 19 a 22/11 e quero tatuar." }
  ],

  // A PERGUNTA ("O que vamos tatuar?"), logo depois da capa. A pessoa toca numa opção, aparece a resposta
  // e o botão manda uma mensagem diferente no WhatsApp: você já sabe o tipo de projeto antes de abrir.
  opcoes: [
    { tipo: "Peça nova", titulo: "Tenho uma ideia e quero ver onde ela encaixa", detalhe: "Pronta ou não. O lugar a gente acha junto.",
      resposta: "A gente começa pelo lugar.", texto: "Me manda a ideia e uma foto de onde você pensou. Eu te mostro onde ela encaixa melhor no seu corpo, antes de qualquer desenho.",
      botao: "Quero ver onde encaixa", mensagem: "Oi, Felipe! Vim pelo seu site. Tenho uma ideia de tattoo e quero ver onde ela encaixa." },
    { tipo: "Projeto grande", titulo: "Quero fechar um braço, as costas ou a perna", detalhe: "Uma peça só, ocupando a região inteira.",
      resposta: "Projeto grande se planeja inteiro.", texto: "Antes da primeira sessão, a gente define o encaixe da arte inteira e quantas sessões vão ser. Cada parte já nasce no lugar certo.",
      botao: "Quero fechar uma região", mensagem: "Oi, Felipe! Vim pelo seu site e quero fechar uma região inteira (braço, costas ou perna)." },
    { tipo: "Primeira tattoo", titulo: "É minha primeira tattoo", detalhe: "Não precisa saber o quê nem onde. A gente começa pela conversa.",
      resposta: "A primeira a gente faz com calma.", texto: "Me conta o que te dá vontade de tatuar, mesmo que ainda seja só uma ideia solta. Se preferir, vem conhecer o studio antes, sem compromisso.",
      botao: "Quero fazer a minha primeira", mensagem: "Oi, Felipe! Vim pelo seu site. É minha primeira tattoo e queria conversar." }
  ],

  // O "E ONDE?": o bonequinho que aparece depois da escolha. A pessoa toca numa parte do corpo,
  // ela pinta, aparece a dica de encaixe e as suas peças daquela parte (o nome da foto na galeria).
  regioes: {
    pescoco:   { nome: "Pescoço",   dica: "No pescoço, a peça segue a curva que desce até o ombro.", pecas: [] },
    peito:     { nome: "Peito",     dica: "No peito, a peça abre junto com os ombros e respeita o centro do corpo.", pecas: ["o-escudo"] },
    costela:   { nome: "Costela",   dica: "Na costela, a peça acompanha as linhas do tronco, de cima pra baixo.", pecas: [] },
    costas:    { nome: "Costas",    dica: "Nas costas, a coluna é o eixo: a peça nasce nela e se abre pros lados.", pecas: ["o-eixo", "o-irrevogavel", "a-flor-do-silencio"] },
    braco:     { nome: "Braço",     dica: "No braço, a peça abraça o músculo e fica bonita de qualquer ângulo.", pecas: ["a-fera", "o-zeus"] },
    antebraco: { nome: "Antebraço", dica: "No antebraço, a peça segue o comprimento e acompanha o giro do braço.", pecas: ["a-onda", "o-cacique", "o-malandro", "o-ornamental", "o-senna"] },
    mao:       { nome: "Mão",       dica: "Na mão, a peça tem que ser lida de longe: traço forte, desenho limpo.", pecas: ["jesus-cristo"] },
    coxa:      { nome: "Coxa",      dica: "Na coxa cabe peça grande, de frente ou de lado, sem brigar com o joelho.", pecas: [] },
    perna:     { nome: "Perna",     dica: "Na perna, a peça acompanha o volume da panturrilha, do joelho ao tornozelo.", pecas: ["o-zeca", "o-joaquim", "o-flamingo", "a-preta"] }
  },

  // O Uber pro studio (mesmo destino do cravejado.art.br)
  uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=-16.6981144&dropoff[longitude]=-49.2238241&dropoff[nickname]=CRVJD%20Studio",

  instagram: "ocravejado",
  instagramStudio: "cravejado.studio",

  // A GALERIA. Não mexe aqui: ela é escrita sozinha a partir da pasta
  // 5 TATTOOS/GALERIA DO SITE, na Torre. Muda a pasta e pede pro VIVO atualizar.
  galeria: [
    { foto: "o-eixo",             v: "226d89", nome: "O Eixo", estilo: "Cravejado" },
    { foto: "o-zeus",             v: "224772", nome: "O Zeus", estilo: "Realismo" },
    { foto: "a-fera",             v: "3c30bc", nome: "A Fera", estilo: "Cravejado" },
    { foto: "o-zeca",             v: "ffad15", nome: "O Zeca", estilo: "Realismo · pet" },
    { foto: "a-chave-e-o-rifle",  v: "73d82a", nome: "A Chave e o Rifle", estilo: "Cravejado" },
    { foto: "a-onda",             v: "81a8bf", nome: "A Onda", estilo: "Cravejado · colorido" },
    { foto: "o-malandro",         v: "af5ecf", nome: "O Malandro", estilo: "" },
    { foto: "jesus-cristo",       v: "b624d4", nome: "Jesus Cristo", estilo: "Lettering" },
    { foto: "o-senna",            v: "3fbc07", nome: "O Senna", estilo: "Realismo" },
    { foto: "o-cacique",          v: "ae344f", nome: "O Cacique", estilo: "Autoral" },
    { foto: "o-ornamental",       v: "f69b47", nome: "O Ornamental", estilo: "Cravejado" },
    { foto: "o-escudo",           v: "75b62c", nome: "O Escudo", estilo: "Cravejado" },
    { foto: "o-joaquim",          v: "ec60b0", nome: "O Joaquim", estilo: "Realismo · pet" },
    { foto: "a-preta",            v: "b4ed9e", nome: "A Preta", estilo: "Cravejado" },
    { foto: "o-flamingo",         v: "cbbf8a", nome: "O Flamingo", estilo: "Cravejado" },
    { foto: "a-abelha",           v: "605588", nome: "A Abelha", estilo: "Cravejado" },
    { foto: "a-flor-do-silencio", v: "0886ae", nome: "A Flor do Silêncio", estilo: "Fineline" },
    { foto: "o-irrevogavel",      v: "fa2b90", nome: "O Irrevogável", estilo: "Cravejado" }
  ]

};
