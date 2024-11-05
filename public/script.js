let target = document.getElementById('target');
let hits = document.getElementById('hits');
let reactionTimeDisplay = document.getElementById('reactionTime');
let targetVisible = false;
let hitCount = 0;
let startTime = 0;

function startGame() {
  hitCount = 0;
  hits.textContent = hitCount;
  reactionTimeDisplay.textContent = 0;
  showTarget();
}

function showTarget() {
  const randomX = Math.floor(Math.random() * window.innerWidth - 50);
  const randomY = Math.floor(Math.random() * window.innerHeight - 50);
  
  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
  target.style.display = 'block';

  targetVisible = true;

  setTimeout(() => {
    if (targetVisible) {
      target.style.display = 'none';
      targetVisible = false;
    }
  }, Math.floor(Math.random() * 2000) + 1000);
}

target.addEventListener('click', function() {
  if (!targetVisible) return;

  target.style.display = 'none';
  targetVisible = false;
  
  hitCount++;
  hits.textContent = hitCount;

  if (startTime === 0) {
    startTime = Date.now();
  }

  const reactionTime = Date.now() - startTime;
  reactionTimeDisplay.textContent = reactionTime;
  startTime = 0;

  setTimeout(showTarget, 1000);
});
