const apiKey = '227c6dc2';
const frmPesquisa = document.querySelector("form");
const lista = document.querySelector("div.lista");

lista.style.display = 'none';

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value.trim();

    if (pesquisa === "") {
        alert('Preencha o campo');
        return;
    }

    fetch(`https://omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
        .then(result => result.json())
        .then(json => carregaLista(json));
};

const carregaLista = (json) => {
    lista.innerHTML = "";

    if (!json.Search) {
        lista.style.display = 'none';
        lista.innerHTML = "<p>Filme não encontrado.</p>";
        return;
    }

    json.Search.forEach(element => {
        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}" alt="${element.Title}" /><h2>${element.Title}</h2>`;

        lista.appendChild(item);
    });

    lista.style.display = 'grid';
};