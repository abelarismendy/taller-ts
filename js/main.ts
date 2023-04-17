import { Serie } from "./serie";
import { series } from "./data";

const tableBody = document.createElement("tbody");

series.forEach((serie: Serie) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const channelCell = document.createElement("td");
    const seasonsCell = document.createElement("td");

    // Create an anchor element for the title with the link
    const nameLink = document.createElement("a");
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

const tableElement = document.querySelector("table") ?? document.createElement("table");
tableElement.appendChild(tableBody);
