
document.addEventListener('DOMContentLoaded', () => {
  const text = "أدخل لتكتشف مشاريعي وابداع البرمجة...";
  const typedText = document.querySelector('.typed-text');
  let i = 0;

  function type() {
    if (i < text.length) {
      typedText.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
});
