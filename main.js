const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalButton = document.querySelector('.modal-button');
const box = document.getElementById('box');

modalButton.addEventListener('click', function(){
    closeModal();
});

box.addEventListener('click', function(){
    // Open box
    box.classList.add('box-opened');
    // Insert content
    // Open modal
    openModal();
    // Add id to open ies
});

function openModal(){
    modal.classList.remove('modal-hidden');
}

function closeModal(){
    modal.classList.add('modal-hidden');
}