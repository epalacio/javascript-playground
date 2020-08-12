export default class Note {
  constructor(textArea, saveButton) {
    // Set up your properties on 'this'
    this.textArea = textArea;
    this.saveButton = saveButton;
  }

  onSave(fn) {
    // Add an event listener to save button
    // that calls fn with the value property of textArea onClick
    this.saveButton.addEventListener('click', () => {
      fn(this.textArea.value);
    });
  }

  setText(text) {
    // Set the value of textArea to be text
    this.textArea.value = text;
  }
}