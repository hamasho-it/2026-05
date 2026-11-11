document.addEventListener('DOMContentLoaded', () => {
  // 星評価UIのクリック処理
  const stars = document.querySelectorAll('.star-rating span');
  if (stars.length > 0) {
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        stars.forEach((s, i) => {
          s.textContent = i <= index ? '★' : '☆';
        });
      });
    });
  }
});
