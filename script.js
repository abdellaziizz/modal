'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const showModalButtons = document.querySelectorAll('.show-modal');
for (let i = 0; i < showModalButtons.length; i++) {
  document
    .querySelectorAll('.show-modal')
    [i].addEventListener('click', function () {
      modal.classList.remove('hidden');
    });
  if (!showModalButtons[i].classList.contains('hidden')) {
    closeButton.addEventListener('click', function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  }
}
