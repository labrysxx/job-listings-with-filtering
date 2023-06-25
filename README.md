# Frontend Mentor - Lista de empregos com solução de filtragem

Esta é uma solução para o desafio Lista de empregos com filtragem do Frontend Mentor. Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação ao construir projetos realistas.
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Sumário

- [Visão geral](#visão-geral)
    - [O desafio](#o-desafio)
    - [Captura de tela](#captura-de-tela)
    - [Links](#links)
- [Meu processo](#meu-processo)
    - [Construído com](#construído-com)
    - [O que aprendi](#o-que-aprendi)
    - [Desenvolvimento futuro](#desenvolvimento-futuro)
    - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal do site, dependendo do tamanho da tela de seu dispositivo
- Ver estados de hover para todos os elementos interativos na página
- Filtrar os anúncios de emprego com base nas categorias

### Captura de tela

![](./screenshot.jpg)

### Links

- URL da solução: [Solução aqui](https://github.com/labrysxx/job-listings-with-filtering/tree/main)
- URL do site ao vivo: [Site aqui](https://labrysxx.github.io/job-listings-with-filtering/)

## Meu processo

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas de CSS
- Flexbox
- Grid CSS 
- JavaScript

### O que aprendi

O que mais gostei neste código e no meu desafio inicial foi recuperar dados de um arquivo JSON usando o método ```fetch``` e manipulá-los.

```js
window.addEventListener('DOMContentLoaded', () => {
  fetch('./data.json')
          .then(response => {return response.json()})
          .then(data => {
            jobs = data
            createArticle(data)
            filterTool()
          })
          .catch(error => {
            // captura e trata erros ocorridos durante a requisição
            console.error('Erro: ' + error);
          });
})
```

### Desenvolvimento futuro

Em projetos futuros, pretendo praticar a funcionalidade de exclusão tanto na interface visual quanto no localStorage.

### Recursos úteis

- [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Este guia me ajudou a escolher as propriedades do CSS Grid para usar em minha página da web. Foi muito informativo e fácil de entender.
- [Padrões de commits](https://github.com/iuricode/padroes-de-commits) - Neste repositório do GitHub, encontrei padrões de commits para ter um código mais organizado. Desde que o descobri, não consigo parar de usá-los.

## 📫 Contribuindo

Para contribuir, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Autor

- GitHub - [@labrysxx](https://github.com/labrysxx)
- Frontend Mentor - [@labrysxx](https://www.frontendmentor.io/profile/labrysxx)
- LinkedIn - [Caroline Faria](https://www.linkedin.com/in/carolinegfaria/)
