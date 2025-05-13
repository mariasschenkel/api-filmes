# 🎬 Projeto Buscador de Filmes

Este é um projeto simples de busca de filmes e séries utilizando a [API OMDb (Open Movie Database)](https://www.omdbapi.com/). O usuário pode digitar o nome de um filme ou série, e o sistema retorna os resultados encontrados, exibindo o **nome** e o **pôster** de cada item.

---

## 📌 O que a API faz?

A API OMDb permite pesquisar informações sobre filmes e séries. Ao enviar uma requisição com o nome de um filme ou série, a API retorna uma lista com os resultados que correspondem à pesquisa, incluindo:

- **Título**
- **Pôster**
- Outros dados como ano, tipo (filme ou série), ID, etc. (mas neste projeto usamos apenas o título e o pôster)

---

## 🔗 Link da API utilizada

[https://www.omdbapi.com/](https://www.omdbapi.com/)

---

## 📦 Quais dados a API fornece?

Ao realizar uma busca com o parâmetro `s=`, a API retorna uma lista de resultados com os seguintes dados para cada item:

- `Title` – Título do filme/série
- `Year` – Ano de lançamento
- `imdbID` – ID único do IMDb
- `Type` – Tipo (movie, series, etc.)
- `Poster` – Link para a imagem do pôster

---

## ▶️ Como executar o projeto

### ✅ Pré-requisitos

- Navegador (Google Chrome, Firefox, Edge, etc.)
- Editor de código (VS Code recomendado)
- Servidor local (por exemplo, Live Server no VS Code)

### 💻 Como rodar

1. Clone ou baixe o repositório.
2. Abra o projeto em um editor como o VS Code.
3. Execute o arquivo `index.html` com uma extensão como **Live Server**.
4. Digite o nome de um filme ou série no campo de busca.
5. Clique em "Pesquisar" e veja os resultados com pôster e título.

---

## 💡 Observação

Para usar a API é necessário gerar uma **chave gratuita (API Key)** no site oficial da OMDb:  
👉 [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
