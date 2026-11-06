// Deep Navi 共通スクリプト
document.addEventListener('DOMContentLoaded', () => {
  // 画像読み込みエラー時にプレースホルダーを表示する自動フォールバック処理
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', () => {
      const parent = img.parentElement;
      if (parent && parent.classList.contains('img-box')) {
        img.style.display = 'none';
        const placeholder = parent.querySelector('.img-placeholder-text');
        if (placeholder) {
          placeholder.style.display = 'block';
        }
      }
    });
  });

  // 星評価UIの操作シミュレーション
  const starContainer = document.querySelector('.star-rating');
  if (starContainer) {
    const stars = starContainer.querySelectorAll('span');
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        stars.forEach((s, idx) => {
          s.textContent = idx <= index ? '★' : '☆';
        });
      });
    });
  }
});
