let noteContainer = document.getElementById("maincontent");
console.log(noteContainer);
const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
const deletedNotes = JSON.parse(localStorage.getItem("deletedNotes")) || [];
if (noteContainer) {
  savedNotes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note-preview";

    const titleH = document.createElement("h4");
    titleH.textContent = `Note Title: ${note.title}`;
    noteDiv.appendChild(titleH);

    const currentDate = new Date();
    // const options ={ year: "numeric", month:"numeric", day:"numeric"};
    const formattedDate = currentDate.toLocaleDateString("en-GB");
    const timePara = document.createElement("p");
    timePara.className = "timeP";
    timePara.textContent = formattedDate;
    noteDiv.appendChild(timePara);

    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = note.content;
    console.log(note.content);
    contentParagraph.className = "contentPara";
    noteDiv.appendChild(contentParagraph);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const userConfirmed = confirm(
        "Are you sure you want to delete this note?"
      );
      if (userConfirmed) {
       const deletedNote = savedNotes.splice(index, 1)[0]; // Remove the item from the array
        if(!deletedNote.title){
          deletedNote.title ="Untitled Note";
        }
        const deletedNotes = JSON.parse(localStorage.getItem("deletedNotes")) || [];
       deletedNotes.push(deletedNote);
       localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
        localStorage.setItem("notes", JSON.stringify(savedNotes));
       
        alert("Note moved to trash!");
        noteDiv.remove();
      } else {
        alert("Note deletion canceled.");
      }
    });
    
  
    noteDiv.addEventListener("click", () => {
      localStorage.removeItem("currentDelNoteId");
      localStorage.setItem("currentNoteId", note.id);
      window.location.href = "text.html";
      
    });
    noteDiv.appendChild(deleteButton);
    noteContainer.appendChild(noteDiv);
  });
 
}
