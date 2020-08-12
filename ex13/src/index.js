// Need to import Note
import Note from './note';

// Need to import save
// Need to import load
import { save, load } from './storage';

const note = new Note(document.getElementById('text'), document.getElementById('save-button'));
note.onSave((text) => save(text))
note.setText(load());
