// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const membriTeam = [
      {
            Name: 'Wayne Barnett',
            Role: 'Founder & CEO',
            Image: 'wayne-barnett-founder-ceo.jpg'
      },
      {
            Name: 'Angela Caroll',
            Role: 'Chief Editor',
            Image: 'angela-caroll-chief-editor.jpg'
      },
      {
            Name: 'Walter gordon',
            Role: 'Office Manager',
            Image: 'walter-gordon-office-manager.jpg'
      },
      {
            Name: 'Angela Lopez',
            Role: 'Social Media Manager',
            Image: 'angela-lopez-social-media-manager.jpg'
      },
      {
            Name: 'Scott Estrada',
            Role: 'Developer',
            Image: 'scott-estrada-developer.jpg'
      },
      {
            Name: 'Barbara Ramos',
            Role: 'Grafic Designer',
            Image: 'barbara-ramos-graphic-designer.jpg'
      }
      
]
console.log(membriTeam);
// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membriTeam.length; i++) {
      const membroTeam = membriTeam[i];
      console.log(membroTeam);
      for (const key in membroTeam) {
            console.log(key, membroTeam[key]);
      }
      
}
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
/* const stringsElement = document.querySelector('.strings')
for (let i = 0; i < membriTeam.length; i++) {
      const membroTeam = membriTeam[i];
      const stringElement = document.createElement('div');
      stringsElement.append(stringElement);
      
      for (const key in membroTeam) {
            stringElement.append(key, ' ', membroTeam[key]);
      }
      
} */
// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede
const rowElement = document.querySelector('.row');

for (let i = 0; i < membriTeam.length; i++) {
      const membroTeam = membriTeam[i];
      generateMarkup(membroTeam, rowElement);
}


function generateMarkup(singleTeam, element) {
      const colElement = document.createElement('div');
      colElement.classList.add('col');
      const cardMember = document.createElement('div');
      cardMember.classList.add('card_member');
      colElement.append(cardMember);
      generateCardMember(cardMember, singleTeam);
      element.insertAdjacentElement('beforeend', colElement);     
}

function generateCardMember(card, singleTeam){
      card.innerHTML = `
      <img src="./assets/img/${singleTeam.Image}" alt="">
      <h3 class="pt-3 text-uppercase">Nome</h3>
      <h4>${singleTeam.Name}</h4>
      <h3 class="pt-3 text-uppercase">Ruolo</h3>
      <h5 class="pb-4">${singleTeam.Role}</h5>
      `
}
