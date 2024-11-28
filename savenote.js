let saveNote = document.getElementById("save-note");
const currentDelNoteID =localStorage.getItem("currentDelNoteId");


 if (saveNote ){
  saveNote.addEventListener("click", () => {
    if(currentDelNoteID){
      const retrievedNote = JSON.parse(localStorage.getItem("deletedNotes")) || [];
      const retrievDiv = document.querySelectorAll(".note-review");
      retrievedNote.forEach((delnote, index) => {
        const updatedNotes = retrievedNote.filter(
          (note) => note.id !== delnote.id
        );
        localStorage.setItem("deletedNotes", JSON.stringify(updatedNotes));
        // retrievDiv.remove();
      });
    }
    const currentNoteId = localStorage.getItem("currentNoteId");
    const noteContent = document.getElementById("note").value.trim();
    const noteTitle = document.getElementById("title").value.trim();
  
    if (noteContent !== "") {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      if (currentNoteId) {
        // Edit existing note
        const noteIndex = notes.findIndex((note) => note.id === Number(currentNoteId));
        if (noteIndex !== -1) {
          notes[noteIndex].content = noteContent;
          notes[noteIndex].title = noteTitle || `Untitled Note`; // Default title if empty
        }
      } else {
        // Create a new note
        const newNote = {
          id: Date.now(),
          title: noteTitle || `Untitled Note`, // Default title if empty
          content: noteContent,
        };
        notes.push(newNote);
      }
      localStorage.setItem("notes", JSON.stringify(notes));
      alert(currentNoteId ? "Note updated!" : "Note saved!");
      localStorage.removeItem("currentNoteId"); // Clear selected note
      window.location.href = "index.html";
    } else {
      alert("Please write something");
    }
  });
 }
 let backsButton = document.getElementById("back");
    if(backsButton){
      backsButton.addEventListener("click", ()=>{
           localStorage.removeItem("currentNoteId");
           localStorage.removeItem("currentDelNoteID");
           window.location.href = "index.html";
         });
    }