export const save = text => {
  localStorage.setItem('note', text);
}

export const load = () => localStorage.getItem('note') || '';