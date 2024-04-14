import { Serie } from './Serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioSerieElm: HTMLElement = document.getElementById("promedio-seasons")!;

promedioSerieElm.innerHTML = `${getPromedioSeasons(dataSeries)}`;

renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    trElement.onclick = () => onSerieClicked(serie);
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons += serie.seasons);
  return totalSeasons / series.length;
}

function onSerieClicked(serie: Serie): void {
    // Obtener los elementos del Card
    const card = document.getElementById("serie-detail") as HTMLElement;
    const img = card.querySelector(".card-img-top") as HTMLImageElement;
    const title = card.querySelector(".card-title") as HTMLElement;
    const description = card.querySelector(".card-text") as HTMLElement;
    const link = card.querySelector(".card-link") as HTMLAnchorElement;
  
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
  
