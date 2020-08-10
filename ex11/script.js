const poundInput = document.getElementById('pound-input');
const kiloInput = document.getElementById('kilo-input');

poundInput.addEventListener('input', () => {
  const poundValue = poundInput.value;
  const kilos = (poundValue * 0.45359237).toFixed(2);
  kiloInput.value = isNaN(kilos) ? 0 : kilos;
})

kiloInput.addEventListener('input', () => {
  const kiloValue = kiloInput.value;
  const pounds = (kiloValue * 2.20462).toFixed(2);
  poundInput.value = isNaN(pounds) ? 0 : pounds;
})
