document.addEventListener("DOMContentLoaded", () => {
  const steps = [...document.querySelectorAll('.quiz-step')];
  const buttons = [...document.querySelectorAll('.next')];
  const progress = document.getElementById('progress');
  let i = 0;

  function updateProgress() {
    const percent = (i / (steps.length - 1)) * 100;
    progress.style.width = percent + '%';
  }

  function showStep(index) {
    steps.forEach((step, j) => {
      step.classList.remove('active');
      if (j === index) step.classList.add('active');
    });
    updateProgress();
  }

  function goNext() {
    if (i < steps.length - 1) {
      i++;
      showStep(i);
    }
  }

  // Inicia no passo 1 (index 0)
  showStep(i);

  // Avança ao clicar nos botões
  buttons.forEach(b => b.addEventListener('click', goNext));
});
