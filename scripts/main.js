import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var promedioSerieElm = document.getElementById("promedio-seasons");
promedioSerieElm.innerHTML = "".concat(getPromedioSeasons(dataSeries));
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.onclick = function () { return onSerieClicked(serie); };
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
function onSerieClicked(serie) {
    // Obtener los elementos del Card
    var card = document.getElementById("serie-detail");
    var img = card.querySelector(".card-img-top");
    var title = card.querySelector(".card-title");
    var description = card.querySelector(".card-text");
    var link = card.querySelector(".card-link");
    // Actualizar los elementos del Card con los datos de la serie
    img.src = serie.img;
    img.alt = serie.name;
    title.textContent = serie.name;
    description.textContent = serie.description;
    link.href = serie.link;
    link.textContent = serie.link;
    // Mostrar el Card
    card.style.display = "block";
}
