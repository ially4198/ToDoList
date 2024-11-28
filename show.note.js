window.addEventListener("DOMContentLoaded", () => {
  const currentNoteId = localStorage.getItem("currentNoteId");
  const currentDelNoteId = localStorage.getItem("currentDelNoteId");
    if (currentDelNoteId) {
      console.log("deleted Note id found, skipping saved note logic");
      
        // If there's a deleted note ID, skip loading a saved note
        return;
    }

    
    if (currentNoteId) {
      
      
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      const currentNote = notes.find((note) => note.id === Number(currentNoteId));
      if (currentNote) {
        document.getElementById("title").value = currentNote.title;
        document.getElementById("note").value = currentNote.content;
      }else {
        document.getElementById("title").value = ""; // Clear
        document.getElementById("note").value = ""; // Clear
    }
    }
     else {
      document.getElementById("title").value = ""; // Clear for new note
      document.getElementById("note").value = ""; // Clear for new note
    }
  });