"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var tableBody = document.createElement("tbody");
data_1.series.forEach(function (serie) {
    var row = document.createElement("tr");
    var idCell = document.createElement("td");
    var nameCell = document.createElement("td");
    var channelCell = document.createElement("td");
    var seasonsCell = document.createElement("td");
    // Create an anchor element for the title with the link
    var nameLink = document.createElement("a");
    nameLink.href = serie.link;
    nameLink.textContent = serie.name;
    nameLink.target = "_blank";
    idCell.textContent = serie.id.toString();
    nameCell.appendChild(nameLink);
    channelCell.textContent = serie.channel;
    seasonsCell.textContent = serie.seasons.toString();
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(channelCell);
    row.appendChild(seasonsCell);
    tableBody.appendChild(row);
});
var tableElement = (_a = document.querySelector("table")) !== null && _a !== void 0 ? _a : document.createElement("table");
tableElement.appendChild(tableBody);
