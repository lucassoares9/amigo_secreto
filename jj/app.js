// app.js

// Seleção dos elementos do DOM
const nameInput = document.getElementById('amigo');
const addButton = document.querySelector('.button-add');
const participantsList = document.getElementById('listaAmigos');
const resultList = document.getElementById('resultado');
const drawButton = document.querySelector('.button-draw');
const restartButton = document.querySelector('.button-restart');

// Array para armazenar os participantes
let participants = [];

// Função para adicionar um nome à lista
function addParticipant() {
    const name = nameInput.value.trim();

    // Validação de entrada
    if (name === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Adiciona o nome ao array e atualiza a lista
    participants.push(name);
    updateParticipantsList();
    nameInput.value = ''; // Limpa o campo de entrada
}

// Função para atualizar a lista de participantes na tela
function updateParticipantsList() {
    participantsList.innerHTML = ''; // Limpa a lista atual
    participants.forEach(participant => {
        const listItem = document.createElement('li');
        listItem.textContent = participant;
        participantsList.appendChild(listItem);
    });
}

// Função para realizar o sorteio
function drawSecretFriend() {
    if (participants.length < 2) {
        alert('Adicione pelo menos 2 participantes para sortear!');
        resultList.innerHTML = '';
        return;
    }

    // Sorteio simples: escolhe um participante aleatoriamente
    const randomIndex = Math.floor(Math.random() * participants.length);
    const selectedFriend = participants[randomIndex];

    // Exibe o resultado
    resultList.innerHTML = `<li>Amigo Secreto sorteado: ${selectedFriend}</li>`;
}

// Função para reiniciar o jogo
function restartGame() {
    participants = [];
    nameInput.value = '';
    participantsList.innerHTML = '';
    resultList.innerHTML = '';
}

// Eventos dos botões
addButton.addEventListener('click', addParticipant);
drawButton.addEventListener('click', drawSecretFriend);
restartButton.addEventListener('click', restartGame);

// Permite adicionar nomes com a tecla Enter
nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addParticipant();
    }
});