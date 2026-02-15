function openLetter() {
  document.getElementById('heart-screen').classList.add('opacity-0', 'scale-95');
  
  setTimeout(() => {
    document.getElementById('heart-screen').classList.add('hidden');
    document.getElementById('letter-screen').classList.remove('hidden');
    document.getElementById('letter-screen').classList.add('opacity-100');
  }, 600);
}

function closeLetter() {
  document.getElementById('letter-screen').classList.add('opacity-0');
  
  setTimeout(() => {
    document.getElementById('letter-screen').classList.add('hidden');
    document.getElementById('heart-screen').classList.remove('hidden', 'opacity-0', 'scale-95');
  }, 600);
}