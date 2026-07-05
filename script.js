'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const showModalButtons = document.querySelectorAll('.show-modal');

for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
  });
}

function closeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}
function openModal() {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}
closeButton.addEventListener('click', closeModal);
