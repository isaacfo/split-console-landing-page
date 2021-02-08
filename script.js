const playstation = document.querySelector('.playstation');
const xbox = document.querySelector('.xbox');
const container = document.querySelector('.container');

playstation.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
playstation.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);
xbox.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
xbox.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
