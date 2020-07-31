function getDOMInfo () {
  return {
    numOfWarning: document.querySelectorAll('.warning').length,
    numOfP: document.querySelectorAll('p').length,
    text: document.querySelector('textArea').textContent,
    numInPrimary: document.querySelectorAll('ul.primary li').length,
    textInSecondary: document.querySelectorAll('ul.secondary li')[1].innerText,
    textInButton: [...document.querySelectorAll('input.button')].map(btn => btn.value).join(' '),
  }
}