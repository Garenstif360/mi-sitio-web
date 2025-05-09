window.onload = function () {
  const gato = document.querySelector('.gato');
  const cartaCerrada = document.querySelector('.carta-cerrada-container');
  const mensajeCarta = document.querySelector('.mensaje-carta');

  gato.addEventListener('click', () => {
    document.querySelector('.gato-container').classList.add('hidden');
    cartaCerrada.classList.remove('hidden');
  });

  cartaCerrada.addEventListener('click', () => {
    cartaCerrada.classList.add('hidden');
    mensajeCarta.classList.remove('hidden');
  });
};
