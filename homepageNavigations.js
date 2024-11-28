let hamburger = document.getElementById("item1b");
let sideBar = document.getElementById("sidebar");
let bodyElement = document.body;
let add = document.getElementById("add");
let checkList = document.getElementById("addchecklist");
let note = document.getElementById("addnote");
let sidebarHalf = document.getElementById("sidebarHalf");

//side bar
if (hamburger && sideBar && bodyElement && sidebarHalf) {
  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();

    sideBar.classList.add("active");
    sidebarHalf.classList.add("active");
  });

  sidebarHalf.addEventListener("click", () => {
    sideBar.classList.remove("active");
    sidebarHalf.classList.remove("active");
  });
  sideBar.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

// Note or Checklist navigation
if (add && checkList && note) {
  add.addEventListener("click", () => {
    if (add.innerText === "+") {
      add.innerText = "x";
      checkList.style.top = "0";
      note.style.top = "0";
      let tooltip1 = document.getElementById("tooltip1");
      tooltip1.style.visibility = "visible";

      let tooltip2 = document.getElementById("tooltip2");
      tooltip2.style.visibility = "visible";
    } else {
      checkList.style.top = "120px";
      note.style.top = "60px";
      add.innerText = "+";

      let tooltip1 = document.getElementById("tooltip1");
      let tooltip2 = document.getElementById("tooltip2");

      tooltip1.style.visibility = "hidden";
      tooltip2.style.visibility = "hidden";
    }
    note.addEventListener("click", () => {
      window.location.href = "text.html";
    });
    checkList.addEventListener("click", () => {
      window.location.href = "checklist.html";
    });
  });
}

// window.addEventListener("DOMContentLoaded", () => {
//   const currentNoteId = localStorage.getItem("currentNoteId");
//   if (currentNoteId) {
//     const notes = JSON.parse(localStorage.getItem("notes")) || [];
//     const currentNote = notes.find((note) => note.id === Number(currentNoteId));
//     if (currentNote) {
//       document.getElementById("title").value = currentNote.title;
//       document.getElementById("note").value = currentNote.content;
//     }
//   }
//    else {
//     document.getElementById("title").value = ""; // Clear for new note
//     document.getElementById("note").value = ""; // Clear for new note
//   }
// });

//  if (saveNote && backButton){
//     saveNote.addEventListener("click", ()=>{
//         const noteContent = document.getElementById("note").value;
//         const noteTitle = document.getElementById("title").value;

//         if ( noteContent.trim() !== ""){
//             const notes = JSON.parse(localStorage.getItem("notes"))||[];
//             const newNote ={
//                 id: Date.now(),
//                 title: noteTitle,
//                 content: noteContent,

//             };
//             notes.push(newNote);
//             localStorage.setItem("notes", JSON.stringify(notes));
//             alert("Note saved!");
//             window.location.href = "index.html";
//         }else{
//             alert("Please write something")
//         }
//      });
//      backButton.addEventListener("click", ()=>{
//         window.location.href = "index.html"
//     });
//  }
//  let noteContainer = document.getElementById("maincontent");
//  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//  if(noteContainer){
//     savedNotes.forEach((note)=> {
//         const noteDiv = document.createElement("div");
//          noteDiv.className= "note-preview"

//         const titleH = document.createElement("h4");
//         titleH.id = "titleH";
//         titleH.textContent=`Title: ${note.title}`;
//         noteDiv.appendChild(titleH);

//         const contentParagraph = document.createElement("p");
//         contentParagraph.className="content-paragraph"
//         contentParagraph.textContent = note.content;
//         noteDiv.appendChild(contentParagraph);

//         noteDiv.addEventListener("click", ()=>{
//             localStorage.setItem("currentNoteId", note.id)
//             window.location.href = "text.html";
//         });

//         noteContainer.appendChild(noteDiv);
//     });

//  }
//  window.addEventListener("DOMContentLoaded", () =>{
//     const currentNoteId= localStorage.getItem("currentNoteId");
//     if(currentNoteId){
//         const notes = JSON.parse(localStorage.getItem("notes")) || [];
//         const currentNote = notes.find((note)=>note.id === Number(currentNoteId));
//         if (currentNote){
//             document.getElementById("note").value = currentNote.content;
//             document.getElementById("title").value= currentNote.title;
//         }
//     }
//  });

//  saveNote.addEventListener("click", ( )=>{
//     const currentNoteId = localStorage.getItem("currentNoteId");
//     const noteContent = document.getElementById("note").value;
//     const noteTitle = document.getElementById("title").value;
//     if(noteContent !== ""){
//         const notes = JSON.parse(localStorage.getItem("notes")) || [];
//         if(currentNoteId){
//             const noteIndex = notes.findIndex((note) => note.id === Number(currentNoteId));
//             if(noteIndex !== -1){
//                 notes[noteIndex].content = noteContent.trim();
//                 notes[noteIndex].title = noteTitle.trim();
//                 localStorage.setItem("notes", JSON.stringify(notes));
//                 alert("Note updated!");
//             }
//         }else{
//             // Save new note
//       const newNote = {
//         id: Date.now(),
//         content: noteContent.trim(),
//       };
//       notes.push(newNote);
//       localStorage.setItem("notes", JSON.stringify(notes));
//       alert("Note saved!");
//         }
//         window.location.href = "index.html"; // Redirect to home page
//     }else {
//         alert("Please write something");
//       }
//     });

//  let notesListContainer = document.getElementById("maincontent");
// const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

// if (notesListContainer) {
//   savedNotes.forEach((note, index) => {
//     const noteDiv = document.createElement("div");
//     noteDiv.textContent = `Note ${index + 1}: ${note}`;
//     noteDiv.className = "note-preview";
//     noteDiv.addEventListener("click", () => {
//       // Implement functionality to open/edit saved notes if needed
//       window.location.href="text.html"
//       alert(note);
//     });
//     notesListContainer.appendChild(noteDiv);
//   });
// }
