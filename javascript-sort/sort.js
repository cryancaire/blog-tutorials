const input = document.querySelector('.input-sort');
const sortedDiv = document.querySelector('.sorted-output');

let characters = [];
let apiURL = `https://hp-api.herokuapp.com/api`;

window.addEventListener('DOMContentLoaded', (event) => {
    fetch(`${apiURL}/characters`)
    .then(response => response.json())
    .then(data => {
        data.map(character => character);

        data.forEach(character => {
            characters.push({
                name: character.name,
                house: character.house,
                image: character.image
            });
        });

        displayCharacters(characters);
    });
});

input.addEventListener('keyup', e => {
    while (sortedDiv.firstChild) {
        sortedDiv.removeChild(sortedDiv.firstChild);
    }
    let results = characters.filter(char => char.name.includes(e.target.value));
    displayCharacters(results);
});

const displayCharacters = chars => {
    chars.forEach(char => {
        let charDiv = document.createElement('div');
        charDiv.setAttribute('id', char.name.replace(' ', '_'));
        charDiv.classList.add('character-div');

        let mysteryPic = 'mysteryperson.webp';

        let picDiv = document.createElement('div');
        picDiv.innerHTML = `<img src=${char.image ? char.image : mysteryPic}>`;
        picDiv.classList.add('pic-div');

        charDiv.append(picDiv);

        let charNameDiv = document.createElement('div');
        charNameDiv.innerText = `Name: ${char.name}`;

        charDiv.append(charNameDiv);

        let charHouseDiv = document.createElement('div');
        charHouseDiv.innerText = `House: ${char.house}`;

        charDiv.append(charHouseDiv);

        sortedDiv.append(charDiv);
    });
}
