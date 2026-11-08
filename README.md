# Cravejado · a landing page

O site só do Felipe: o trabalho dele e um botão pro WhatsApp. Separado do site do studio (cravejado.art.br), que mostra a casa toda.

## Trocar as tattoos: a pasta é a galeria

A galeria vem da pasta **`5 TATTOOS/GALERIA DO SITE`**, na Torre. O que estiver lá é o que aparece no site, na ordem dos números.

O nome do arquivo é o que aparece embaixo da foto:

```
03 A Chave e o Rifle - Calligraffiti.jpg
^ordem  ^nome              ^estilo
```

- **Nome de uma palavra só leva artigo:** `O Eixo`, `A Abelha`, nunca `Eixo`.
- **Pôr uma:** joga a foto na pasta e renomeia nesse formato. O VIVO marca onde a tattoo está na foto (o enquadramento), pra ela sair centralizada na grade.
- **Tirar uma:** apaga da pasta.
- **Mudar a ordem:** muda os números.

**A foto da seção "O dia"** (você tatuando) vem da subpasta `GALERIA DO SITE/O DIA`: a primeira foto de lá é a que aparece. Pra trocar, troca o arquivo.

Depois fala pro VIVO: "atualiza o site". Ele roda o `atualizar-galeria.py` (que mora fora do site, em `4 SISTEMAS/SITE/`), e o site muda em 1 ou 2 minutos.

## O resto

| Quero... | Onde |
|---|---|
| mudar o mês ou a cidade da agenda | `conteudo.js` → `agenda` |
| trocar o número do WhatsApp | `conteudo.js` → `whatsapp` (só números, 55 + DDD) |
| mudar a mensagem que já vem escrita | `conteudo.js` → `mensagem` |

Os textos fixos (o título, "como funciona", as perguntas) ficam no `index.html`.

## Como é feito

- Um arquivo HTML, sem programa pra instalar e sem mensalidade. Roda no GitHub Pages, de graça.
- Fotos em dois tamanhos: `fotos/` (a grande, abre quando toca) e `fotos/p/` (a pequena, da grade). Se faltar a pequena, o site usa a grande sozinho.
- Todo botão manda pro WhatsApp com a mensagem pronta e o "vim pelo seu site", pra você saber de onde veio.
- Preço não aparece no site. Preço só na conversa (regra do método).
