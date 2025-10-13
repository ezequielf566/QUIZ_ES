// === SEU FUNIL PRONTO — SCRIPT PRINCIPAL ===
// controla a navegação entre as etapas do quiz e a barra de progresso

const steps = [...document.querySelectorAll('.quiz-step')];
const buttons = [...document.querySelectorAll('.next, .option')]; // agora inclui .option
const progress = document.getElementById('progress');
let i = 0;

function goNext() {
  steps[i].classList.remove('active');
  i++;

  if (i < steps.length) {
    steps[i].classList.add('active');
    progress.style.width = (i / (steps.length - 1)) * 100 + '%';
  }
}

// adiciona evento de clique em todos os botões
buttons.forEach(btn => btn.addEventListener('click', goNext));

// garante que o primeiro passo apareça ao carregar
steps[0].classList.add('active');
