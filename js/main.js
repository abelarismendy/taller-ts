var _a, _b;
import { series } from "./data.js";
const tableBody = document.createElement("tbody");
let totalSeasons = 0;
let totalSeries = 0;
const currentShowCard = document.getElementById("current-show");
// Función que actualiza la tarjeta de información de la serie
function updateCurrentShowCard(serie) {
    var _a;
    (_a = currentShowCard === null || currentShowCard === void 0 ? void 0 : currentShowCard.querySelector(".card-img-top")) === null || _a === void 0 ? void 0 : _a.setAttribute('src', serie.imageUrl);
    currentShowCard.querySelector(".card-title").textContent = serie.name;
    currentShowCard.querySelector(".card-text").textContent = serie.description;
    // Actualizamos el texto y el enlace del botón "Go somewhere"
    const watchButton = currentShowCard === null || currentShowCard === void 0 ? void 0 : currentShowCard.querySelector(".btn-primary");
    watchButton.textContent = `Watch on ${serie.channel}`;
    watchButton === null || watchButton === void 0 ? void 0 : watchButton.setAttribute('href', serie.link);
    watchButton === null || watchButton === void 0 ? void 0 : watchButton.setAttribute('target', '_blank'); // Agregamos el atributo target para abrir en una nueva pestaña
}
series.forEach((serie) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const channelCell = document.createElement("td");
    const seasonsCell = document.createElement("td");
    // Create an anchor element for the title with the link
    const nameLink = document.createElement("a");
    nameLink.href = '#';
    nameLink.id = serie.id.toString();
    nameLink.textContent = serie.name;
    // Agregamos el evento de clic al enlace de la serie
    nameLink.addEventListener('click', () => {
        updateCurrentShowCard(serie);
    });
    idCell.textContent = serie.id.toString();
    nameCell.appendChild(nameLink);
    channelCell.textContent = serie.channel;
    seasonsCell.textContent = serie.seasons.toString();
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(channelCell);
    row.appendChild(seasonsCell);
    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
    totalSeries++;
});
const tableElement = (_a = document.querySelector("table")) !== null && _a !== void 0 ? _a : document.createElement("table");
tableElement.appendChild(tableBody);
const averageSeasons = totalSeasons / totalSeries;
const averageSeasonsElement = (_b = document.querySelector("#seasonsAverage")) !== null && _b !== void 0 ? _b : document.createElement("span");
averageSeasonsElement.textContent = averageSeasons.toString();
// Actualizamos la tarjeta de información de la serie por defecto
updateCurrentShowCard(series[0]);
