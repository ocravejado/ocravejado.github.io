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

  // O Uber pro studio (mesmo destino do cravejado.art.br)
  uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=-16.6981144&dropoff[longitude]=-49.2238241&dropoff[nickname]=CRVJD%20Studio",

  instagram: "ocravejado",
  instagramStudio: "cravejado.studio",

  // A GALERIA. Não mexe aqui: ela é escrita sozinha a partir da pasta
  // 5 TATTOOS/GALERIA DO SITE, na Torre. Muda a pasta e pede pro VIVO atualizar.
  galeria: [
    { foto: "o-eixo",             v: "7eb538", nome: "O Eixo", estilo: "Cravejado" },
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
    { foto: "o-irrevogavel",      v: "ee5dc6", nome: "O Irrevogável", estilo: "Cravejado" }
  ]

};
