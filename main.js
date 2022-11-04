function creategame(player1, hora, player2) {
  return `<li>
            <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
            <strong>${hora}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da Serbia" />
          </li>`
}

let delay = -0.3;
function createcard(data, day, games) {
  delay = delay + 0.3;
  return `<div class="card" style="animation-delay: ${delay}s">
          <h2>${data} <span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>`
}

   document.querySelector("#cards").innerHTML = 
      
      createcard("24/11","quinta", creategame("brazil", "16:00", "serbia"))+
      createcard(
        "28/11",
        "segunda",
       creategame("switzerland", "13:00", "brazil") +
         creategame("portugal", "16:00", "uruguay")
      )+
      createcard("02/12", "sexta", creategame("brazil", "16:00", "cameroon"))
      
