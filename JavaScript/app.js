import {
    pictures
} from "../data/pictures.js";

const searchBtn = document.getElementById('searchBtn').addEventListener('click', searchPictures);

function searchPictures() {
    const searchField = document.getElementById('searchField');
    const searchTrim = searchField.value.trim();
    const searchResult = pictures.filter(checkResult => {
        return checkResult.name.toLowerCase().includes(searchTrim.toLowerCase());
    });
    displayPictures(searchResult);
}

function displayPictures(arr) {
    const productsArea = document.getElementById('productsContainer');
    let html = '';

    arr.forEach(arr => {
        html +=
            `
        <div class="card"
        style="width: 18rem;">
        <img src="${arr.getImg()}"
        class="card-img-top"
        alt="${arr.getName()}">
        <div class="card-body">
        <h5 class="card-title">${arr.getName()}</h5>
        <p class="card-text">${arr.getArt()}</p>
        <p class="card-text">${arr.getPrice()}</p>
        <p class="card-text" style="color: red;">${arr.getStock()}</p>
        <a href="#" class="btn btn-primary">Add To Cart</a>
        </div>
        </div>
        `
    });
    productsArea.innerHTML = html;
}

displayPictures(pictures);