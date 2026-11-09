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
    // boneco: true = só nessa opção aparece o "E onde?" (quem nunca tatuou precisa da referência)
    { tipo: "Primeira tattoo", boneco: true, titulo: "É minha primeira tattoo", detalhe: "Não precisa saber o quê nem onde. A gente começa pela conversa.",
      resposta: "A primeira a gente faz com calma.", texto: "Me conta o que te dá vontade de tatuar, mesmo que ainda seja só uma ideia solta. Se preferir, vem conhecer o studio antes, sem compromisso.",
      botao: "Quero fazer a minha primeira", mensagem: "Oi, Felipe! Vim pelo seu site. É minha primeira tattoo e queria conversar." }
  ],

  // O "E ONDE?": o bonequinho que aparece depois da escolha. A pessoa toca numa parte do corpo,
  // ela pinta, aparece a frase de encaixe (o músculo que manda ali) e as suas peças daquela parte.
  // em = como a parte entra na frase ("Pensei no antebraço") · pecas = nome da foto (galeria ou "mapa-")
  // lados = quando a parte tem por fora e por dentro (braço, antebraço): os dois aparecem juntos
  regioes: {
    "pescoco":          { nome: "Pescoço", em: "no pescoço", dica: "O músculo que desce da orelha até o ombro manda no desenho. A peça segue ele.", pecas: [] },
    "peito":            { nome: "Peito", em: "no peito", dica: "Quem manda é o peitoral: a peça abre junto com ele e respeita o centro do corpo.", pecas: ["o-escudo"] },
    "costela":          { nome: "Costela e tórax", em: "na costela", dica: "A peça segue as linhas do tórax e pode dar a volta no corpo.", pecas: ["mapa-costela-e-torax"] },
    "costas":           { nome: "Costas", em: "nas costas", dica: "A coluna é o eixo. A peça nasce nela e se abre junto com as escápulas.", pecas: ["o-eixo", "o-irrevogavel", "a-flor-do-silencio"] },
    "braco":            { nome: "Braço", em: "no braço", lados: [
                          { nome: "Por fora · ombro e tríceps", dica: "Quem manda é o ombro e o tríceps. A peça tem que seguir o desenho deles.", pecas: ["a-fera", "o-zeus", "o-lirio"] },
                          { nome: "Por dentro · bíceps", dica: "Uma tela parada. O que muda é a curva, que depende do tamanho do seu bíceps.", pecas: ["a-chave-e-o-rifle"] } ] },
    "antebraco":        { nome: "Antebraço", em: "no antebraço", lados: [
                          { nome: "Por fora", dica: "O músculo que vai do cotovelo ao polegar dita o fluxo do desenho. É o encaixe mais exigente, por isso eu começo por ele.", pecas: ["a-fera", "o-fluxo", "o-flash", "o-malandro", "yeshua", "inercia"] },
                          { nome: "Por dentro", dica: "Uma tela parada: cabe quase tudo. Por isso eu prefiro começar pela parte de fora.", pecas: ["a-onda", "o-senna", "o-cacique"] } ] },
    "mao":              { nome: "Mão", em: "na mão", dica: "Os ossos e os dedos mandam. Traço forte, pra ser lido de longe.", pecas: ["jesus-cristo"] },
    "coxa":             { nome: "Coxa", em: "na coxa", dica: "O músculo da frente da coxa é grande e firme: segura peça grande, de cima a baixo.", pecas: ["mapa-coxa"] },
    "lateral":          { nome: "Lateral da perna", em: "na lateral da perna", dica: "A peça segue a linha que desce do joelho ao tornozelo, de lado.", pecas: ["the-last-day-of-pompeii", "a-preta"] },
    "panturrilha":      { nome: "Panturrilha", em: "na panturrilha", dica: "A panturrilha é redonda. A peça acompanha o volume do músculo pra não ficar chapada.", pecas: ["mapa-o-zeca", "o-joaquim", "o-flamingo", "o-reflexo", "o-beija-flor", "mapa-a-faith"] }
  },

  // O Uber pro studio (mesmo destino do cravejado.art.br)
  uber: "https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=-16.6981144&dropoff[longitude]=-49.2238241&dropoff[nickname]=CRVJD%20Studio",

  instagram: "ocravejado",
  instagramStudio: "cravejado.studio",

  // AS FOTOS QUE SÓ APARECEM NO BONEQUINHO. Escritas sozinhas a partir da pasta
  // 5 TATTOOS/GALERIA DO SITE/SÓ NO BONECO. Não entram na galeria.
  mapa: [
    { foto: "mapa-a-faith",         v: "6b1b24", nome: "A Faith", estilo: "Lettering · fineline" },
    { foto: "mapa-costela-e-torax", v: "66fd9a", nome: "Costela e Tórax", estilo: "Fineline" },
    { foto: "mapa-coxa",            v: "cd8042", nome: "Coxa", estilo: "" },
    { foto: "mapa-o-zeca",          v: "261f74", nome: "O Zeca", estilo: "Realismo · pet" }
  ],

  // A GALERIA. Não mexe aqui: ela é escrita sozinha a partir da pasta
  // 5 TATTOOS/GALERIA DO SITE, na Torre. Muda a pasta e pede pro VIVO atualizar.
  galeria: [
    { foto: "o-eixo",                  v: "226d89", nome: "O Eixo", estilo: "Cravejado" },
    { foto: "o-zeus",                  v: "224772", nome: "O Zeus", estilo: "Realismo" },
    { foto: "a-fera",                  v: "3c30bc", nome: "A Fera", estilo: "Cravejado" },
    { foto: "o-zeca",                  v: "ffad15", nome: "O Zeca", estilo: "Realismo · pet" },
    { foto: "a-chave-e-o-rifle",       v: "73d82a", nome: "A Chave e o Rifle", estilo: "Cravejado" },
    { foto: "the-last-day-of-pompeii", v: "a6d39a", nome: "The Last Day of Pompeii", estilo: "Releitura realista" },
    { foto: "a-onda",                  v: "81a8bf", nome: "A Onda", estilo: "Cravejado · colorido" },
    { foto: "o-malandro",              v: "af5ecf", nome: "O Malandro", estilo: "" },
    { foto: "o-lirio",                 v: "a45a3d", nome: "O Lírio", estilo: "Fineline" },
    { foto: "jesus-cristo",            v: "b624d4", nome: "Jesus Cristo", estilo: "Lettering" },
    { foto: "o-reflexo",               v: "86c69d", nome: "O Reflexo", estilo: "Realismo" },
    { foto: "o-flash",                 v: "b90981", nome: "O Flash", estilo: "Cravejado · ornamental" },
    { foto: "o-senna",                 v: "3fbc07", nome: "O Senna", estilo: "Realismo" },
    { foto: "o-cacique",               v: "ae344f", nome: "O Cacique", estilo: "Autoral" },
    { foto: "o-fluxo",                 v: "f69b47", nome: "O Fluxo", estilo: "Cravejado" },
    { foto: "yeshua",                  v: "a1fd4d", nome: "Yeshua", estilo: "Realismo" },
    { foto: "o-escudo",                v: "75b62c", nome: "O Escudo", estilo: "Cravejado" },
    { foto: "o-joaquim",               v: "ec60b0", nome: "O Joaquim", estilo: "Realismo · pet" },
    { foto: "a-preta",                 v: "b4ed9e", nome: "A Preta", estilo: "Cravejado" },
    { foto: "o-beija-flor",            v: "cac3a7", nome: "O Beija-flor", estilo: "Realismo" },
    { foto: "o-flamingo",              v: "cbbf8a", nome: "O Flamingo", estilo: "Cravejado" },
    { foto: "inercia",                 v: "605588", nome: "Inércia", estilo: "Cravejado" },
    { foto: "a-flor-do-silencio",      v: "0886ae", nome: "A Flor do Silêncio", estilo: "Fineline" },
    { foto: "o-irrevogavel",           v: "fa2b90", nome: "O Irrevogável", estilo: "Cravejado" }
  ]

};
