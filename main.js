function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="${player2}" />
  </li>
  `
}

let delay = -0.3
function createCard(date, day, groupPhases, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <p>${groupPhases}</p>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    "Fase de grupo",
    createGame("qatar", "13:00", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    "Fase de grupos",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("united_states", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    "Fase de grupos",
    createGame("argentina", "07:00", "saudi_arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    "Fase de grupos",
    createGame("morocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa_rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    "Fase de grupos",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south_korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    "Fase de grupos",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "united_states")
  ) +
  createCard(
    "26/11",
    "sábado",
    "Fase de grupos",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudi_arabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    "Fase de grupos",
    createGame("japan", "07:00", "costa_rica") +
      createGame("belgium", "10:00", "morocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    "Fase de grupos",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south_korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    "Fase de grupos",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "united_states") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    "Fase de grupos",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudi_arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    "Fase de grupos",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco") +
      createGame("japan", "16:00", "spain") +
      createGame("costa_rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    "Fase de grupos",
    createGame("south_korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  ) +
  createCard(
    "03 e 04 de DEZ",
    "sáb/dom",
    "*Oitavas de final",
    createGame("netherlands", "12:00", "wales") +
      createGame("argentina", "16:00", "france") +
      createGame("denmark", "12:00", "poland") +
      createGame("england", "16:00", "senegal")
  ) +
  createCard(
    "05 e 06 de DEZ",
    "seg/ter",
    "*Oitavas de Final",
    createGame("germany", "12:00", "croatia") +
      createGame("brazil", "16:00", "portugal") +
      createGame("belgium", "12:00", "spain") +
      createGame("uruguay", "16:00", "serbia")
  ) +
  createCard(
    "09 e 12 de DEZ",
    "sex/sáb",
    "*Quartas de Final",
    createGame("netherlands", "12:00", "argentina") +
      createGame("germany", "16:00", "brazil") +
      createGame("belgium", "12:00", "uruguay") +
      createGame("senegal", "16:00", "denmark")
  ) +
  createCard(
    "13 e 14 de DEZ",
    "ter/qua",
    "*Semifinal",
    createGame("argentina", "16:00", "brazil") +
      createGame("denmark", "16:00", "uruguay")
  ) +
  createCard(
    "17/DEZ",
    "sábado",
    "*Terceiro lugar",
    createGame("argentina", "12:00", "denmark")
  ) +
  createCard(
    "18/DEZ",
    "domingo",
    "*Final",
    createGame("brazil", "12:00", "uruguay")
  )
