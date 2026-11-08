# Cravejado · a landing page

O site só do Felipe: o trabalho dele e um botão pro WhatsApp. Separado do site do studio (cravejado.art.br), que mostra a casa toda.

## O jeito mais fácil de editar

Fala pro VIVO no chat ("troca a foto do Senna pela do Zeus cicatrizado", "muda a agenda pra dezembro"). Ele edita e sobe.

## Se quiser mexer na mão

Quase tudo que muda mora em **um arquivo só: `conteudo.js`**.

| Quero... | Onde |
|---|---|
| mudar o mês ou a cidade da agenda | `conteudo.js` → `agenda` |
| trocar o número do WhatsApp | `conteudo.js` → `whatsapp` (só números, 55 + DDD) |
| mudar a mensagem que já vem escrita | `conteudo.js` → `mensagem` |
| pôr uma tattoo nova na galeria | joga a foto em `fotos/` (nome simples, sem acento nem espaço, em .jpg) e copia uma linha da `galeria` no `conteudo.js` |
| tirar uma tattoo | apaga a linha dela na `galeria` |
| mudar a ordem | muda a ordem das linhas |

Os textos fixos (o título, "como funciona", as perguntas) ficam no `index.html`.

## Como é feito

- Um arquivo HTML, sem programa pra instalar e sem mensalidade. Roda no GitHub Pages, de graça.
- Fotos em dois tamanhos: `fotos/` (a grande, abre quando toca) e `fotos/p/` (a pequena, da grade). Se faltar a pequena, o site usa a grande sozinho.
- Todo botão manda pro WhatsApp com a mensagem pronta e o "vim pelo seu site", pra você saber de onde veio.
- Preço não aparece no site. Preço só na conversa (regra do método).
