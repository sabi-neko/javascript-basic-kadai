const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  window.setTimeout(() => {
    text.textContent ='ボタンをクリックしました';
    
  }, 2000);
})