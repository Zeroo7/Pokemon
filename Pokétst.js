const id = document.getElementById('search');
const submit = document.getElementById('submit');
const target = document.querySelector('.Pokeinfo');


const req = ()=>{
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id.value}`;
    fetch(apiUrl).then((data) => data.json())
    .then((poki) => htmlGenerator(poki))
    .catch((Error) => htmlFalse(Error))
    id.value = ''
};

submit.addEventListener('click', req)

document.addEventListener('keypress',(k)=>{
    if (k.key === 'Enter') {req()}
});

const htmlGenerator = (data)=>{
    const html = `<h3 class='name'>${data.name}</h3>
    <img src=${data.sprites.front_default}>
    <h5> type: ${data.types[0].type.name}</h5>`;
    target.innerHTML = html;
    target.classList.add('pokeTrue')
    target.classList.remove('pokeFalse')
};

const htmlFalse = (error)=>{
    const html = '<h3 class=\'name\'>there\'s no Pokémons with that Id <br> Please enter a number between 1 and 898</h3>';
    target.innerHTML = html;
    target.classList.add('pokeFalse')
    target.classList.remove('pokeTrue')
};
