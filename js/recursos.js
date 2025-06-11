document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.recurso-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const link = card.querySelector('a');
      if (link && link.href) {
        window.location.href = link.href;
      }
    });
  });
});
