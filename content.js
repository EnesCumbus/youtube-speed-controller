const navbar = document.querySelector('.ytp-chrome-controls');
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Speed Control';
toggleButton.id = 'toggle-speed-controls';

const controlsContainer = document.createElement('div');
controlsContainer.id = 'speed-controls-container';
controlsContainer.style.display = 'none';

const speeds = [
  { label: '0.1x', speed: 0.1 },
  { label: '0.5x', speed: 0.5 },
  { label: '1x', speed: 1 },
  { label: '2x', speed: 2 },
  { label: '5x', speed: 5 },
  { label: '10x', speed: 10 }
];

speeds.forEach(speedInfo => {
  const button = document.createElement('button');
  button.innerText = speedInfo.label;
  button.addEventListener('click', () => {
    document.querySelector('video').playbackRate = speedInfo.speed;
  });
  controlsContainer.appendChild(button);
});

toggleButton.addEventListener('click', () => {
  if (controlsContainer.style.display === 'none') {
    controlsContainer.style.display = 'flex';
  } else {
    controlsContainer.style.display = 'none';
  }
});

navbar.appendChild(toggleButton);
navbar.appendChild(controlsContainer);
