const trashCanContent = document.getElementById("trashCanContent");
const retrievedNote = JSON.parse(localStorage.getItem("deletedNotes")) || [];
const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

if (trashCanContent) {
  retrievedNote.forEach((delnote, index) => {
    console.log(delnote);
    console.log(delnote.title);

    const retrievDiv = document.createElement("div");
    retrievDiv.className = "note-review";

    const titleHead = document.createElement("h4");
    titleHead.textContent = `Note Title: ${delnote.title || "Untitled Note"}`;
    retrievDiv.appendChild(titleHead);

    const restoreB = document.createElement("button");
    restoreB.textContent = "Restore";
    restoreB.className = "restoreNote";
    restoreB.style.backgroundColor = "green";
    restoreB.addEventListener("click", () => {
      const restoreNote = retrievedNote.filter(
        (note) => note.id !== delnote.id
      );
      
      localStorage.setItem("deletedNotes", JSON.stringify(restoreNote));
      console.log(delnote);
      
      savedNotes.push(delnote);
      localStorage.setItem("notes", JSON.stringify(savedNotes));

      retrievDiv.remove();
    });
    retrievDiv.appendChild(restoreB);


    const deleteTrash = document.createElement("button");
    deleteTrash.className = "deleteTrash";
    deleteTrash.textContent = "Delete";
    retrievDiv.appendChild(deleteTrash);
    deleteTrash.addEventListener("click", (event) => {
      event.stopPropagation();
      const userConfirm = confirm(
        "Are you sure you want to delete this note permanently?"
      );
      if (userConfirm) {
        const updatedNotes = retrievedNote.filter(
          (note) => note.id !== delnote.id
        );
        localStorage.setItem("deletedNotes", JSON.stringify(updatedNotes));
        retrievDiv.remove();
        alert("Note deleted permanently");
        console.log(updatedNotes);

      }
    });

    retrievDiv.appendChild(deleteTrash);

    trashCanContent.appendChild(retrievDiv);
  });
}


