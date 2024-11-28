// window.addEventListener("DOMContentLoaded", () => {
//   const currentDelNoteId = localStorage.getItem("currentDelNoteId");
//     console.log("Current Deleted Note ID:", currentDelNoteId);
//   const currentNoteId = localStorage.getItem("currentNoteId");
//   if(currentNoteId){
//     return;
//   }
    
    
    
//     if (currentDelNoteId) {
//       const delnotes = JSON.parse(localStorage.getItem("deletedNotes")) || [];
//       const currentDelNote = delnotes.find((dnote) => String(dnote.id) === currentDelNoteId);
      
//       if (currentDelNote) {
//         console.log("retrieved Note", currentDelNote);
        
//         document.getElementById("title").value = currentDelNote.title || "Untitled Note";
//         document.getElementById("note").value = currentDelNote.content || "";
//       }else {
//         // alert("Note not found.");
//         document.getElementById("title").value = ""; // Clear
//         document.getElementById("note").value = ""; // Clear
//       }
//     }else {
//       document.getElementById("title").value = ""; // Clear for new note
//       document.getElementById("note").value = ""; // Clear for new note
//     }

    
//   });
