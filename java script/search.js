const search = document.getElementById('search');
const inputSearch = document.getElementById('input-search');
const buttonSearch = document.getElementById('button-search')

buttonSearch.addEventListener('click', (e) => {
    e.preventDefault();
    const q = inputSearch.value;
    searchAll(q);
});

function searchAll(q) {
    const apikey = 'ZTX9Sfj2is08jDjkVFgPDLBnFrBXJwKy';
    const link = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;

    fetch(link).then((res) => {
        return res.json();
    }).then((json) => {
        const resultadosEl = document.getElementById('resultados');
        let resultadosHTML = '';


        json.data.forEach((obj) => {

            console.log(obj.images);
            const url = obj.images.fixed_width.url;
            const width = obj.images.fixed_width.width;
            const height = obj.images.fixed_width.height;
            const title = obj.title;
            resultadosHTML += `<img class="item" src="${url}"
                                width="${width}" 
                                heigth="${height}"
                                alt="${title}">`;
        });
        resultadosEl.innerHTML = resultadosHTML;
    }).catch((error) => {
        console.log(error.message)
    });
}

const searchBarra = document.getElementById('search-barra');
const inputSearchBarra = document.getElementById('input-search-barra');
const buttonSearchBarra = document.getElementById('button-search-barra')

buttonSearchBarra.addEventListener('click', (e) => {
    e.preventDefault();
    const q = inputSearchBarra.value;
    searchAll(q);
});

function searchAll(q) {
    const apikey = 'ZTX9Sfj2is08jDjkVFgPDLBnFrBXJwKy';
    const link = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=12`;

    fetch(link).then((res) => {
        return res.json();
    }).then((json) => {
        const resultadosEl = document.getElementById('resultados');
        let resultadosHTML = '';


        json.data.forEach((obj) => {

            console.log(obj.images);
            const url = obj.images.fixed_width.url;
            const width = obj.images.fixed_width.width;
            const height = obj.images.fixed_width.height;
            const title = obj.title;
            resultadosHTML += `<img class="item" src="${url}" width="${width}" heigth="${height}" alt="${title}">`;
        });
        resultadosEl.innerHTML = resultadosHTML;
    }).catch((error) => {
        console.log(error.message)
    });

}

function autoCompletar(arreglo) {
    /*  const inputSearch = `api.giphy.com/v1/tags/related/{term}`; */
    const inputSearch = document.getElementById('input-search');
    let indexFocus = -1;

    inputSearch.addEventListener('input', () =>{

    });
    inputSearch.addEventListener('keydown', () =>{
        
    })
}

autoCompletar([`api.giphy.com/v1/tags/related/{term}`])