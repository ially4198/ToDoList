// let noteContainer = document.getElementById("maincontent");
// const searchIcon = document.getElementById("search-icon");
// const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
// const savedLists = JSON.parse(localStorage.getItem("lists")) || [];
// const searchDiv = document.getElementById("search-div");
// searchIcon.addEventListener("click", () => {
//   const logo = document.getElementById("logo");
//   logo.remove();
//   const searchInput = document.createElement("input");
//   searchInput.type = "text";
//   searchInput.id = "search-input";
//   searchInput.placeholder = "Search...";
//   searchInput.style.height = "30px";
//   searchInput.style.borderRadius ="4px";
//   searchDiv.appendChild(searchInput);
//   const searchDel = document.createElement("span");
//   searchDel.textContent = "  X";
//   searchDel.style.fontSize = "20px"
//   searchDiv.appendChild(searchDel);
//   searchDel.addEventListener("click", ()=>{
//     searchInput.remove();
//     searchDel.remove();
//     location.reload();
    
//   })
//   const searchIcon = document.getElementById("search-icon");
//   searchIcon.remove();
  
//   const viewStyle = document.getElementById("item3b2");
//   const theme = document.getElementById("item3b3");
//   viewStyle.remove();
//   theme.remove();
// });
// let noteContainer = document.getElementById("maincontent");
const searchIcon = document.getElementById("search-icon");
// const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
// const savedLists = JSON.parse(localStorage.getItem("lists")) || [];
const searchDiv = document.getElementById("search-div");

searchIcon.addEventListener("click", () => {
  const logo = document.getElementById("logo");
  if (logo) logo.remove();

  // Create search input field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "search-input";
  searchInput.placeholder = "Search...";
  searchInput.style.height = "30px";
  searchInput.style.borderRadius = "4px";
  searchDiv.appendChild(searchInput);

  // Create delete button for search
  const searchDel = document.createElement("span");
  searchDel.textContent = "  X";
  searchDel.style.fontSize = "20px";
  searchDiv.appendChild(searchDel);

  // Handle search delete button click
  searchDel.addEventListener("click", () => {
    searchInput.remove();
    searchDel.remove();
    location.reload();
  });

  // Remove unnecessary icons
  const searchIcon = document.getElementById("search-icon");
  if (searchIcon) searchIcon.remove();
  const viewStyle = document.getElementById("item3b2");
  const theme = document.getElementById("item3b3");
  if (viewStyle) viewStyle.remove();
  if (theme) theme.remove();

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
  
    // Filter results for both notes and lists
    const filteredNotes = savedNotes.filter(note =>
      note.title.toLowerCase().includes(query)
    );
    const filteredLists = savedLists.filter(list =>
      list.title.toLowerCase().includes(query)
    );
  
    // Clear current display
    noteContainer.innerHTML = "";
  
    // Render filtered notes
    filteredNotes.forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note-preview";
  
      const titleH = document.createElement("h4");
      titleH.textContent = `Note Title: ${note.title}`;
      noteDiv.appendChild(titleH);
  
      const formattedDate = new Date().toLocaleDateString("en-GB");
      const timePara = document.createElement("p");
      timePara.className = "timeP";
      timePara.textContent = formattedDate;
      noteDiv.appendChild(timePara);
  
      const contentParagraph = document.createElement("p");
      contentParagraph.textContent = note.content;
      contentParagraph.className = "contentPara";
      noteDiv.appendChild(contentParagraph);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete";
      deleteButton.addEventListener("click", event => {
        event.stopPropagation();
        if (confirm("Are you sure you want to delete this note?")) {
          const deletedNote = savedNotes.splice(index, 1)[0];
          deletedNote.title = deletedNote.title || "Untitled Note";
          const deletedNotes = JSON.parse(localStorage.getItem("deletedNotes")) || [];
          deletedNotes.push(deletedNote);
          localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
          localStorage.setItem("notes", JSON.stringify(savedNotes));
          alert("Note moved to trash!");
          noteDiv.remove();
        }
      });
      noteDiv.appendChild(deleteButton);
  
      noteDiv.addEventListener("click", () => {
        localStorage.setItem("currentNoteId", note.id);
        window.location.href = "text.html";
      });
      noteContainer.appendChild(noteDiv);
    });
  
    // Render filtered lists
    filteredLists.forEach((list, index) => {
      const listDiv = document.createElement("div");
      listDiv.className = "list-preview";
  
      const titleHeader = document.createElement("h4");
      titleHeader.textContent = `List Title: ${list.title}`;
      listDiv.appendChild(titleHeader);
  
      const formattedDate = new Date().toLocaleDateString("en-GB");
      const timeParagraph = document.createElement("p");
      timeParagraph.className = "timeParagraph";
      timeParagraph.textContent = formattedDate;
      listDiv.appendChild(timeParagraph);
  
      list.content.forEach(item => {
        const contentsParagraph = document.createElement("span");
        contentsParagraph.className = "contentParagraph";
        contentsParagraph.textContent = item.text;
        listDiv.appendChild(contentsParagraph);
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.checked;
        checkbox.disabled = true;
        listDiv.appendChild(checkbox);
      });
  
      const delButton = document.createElement("button");
      delButton.textContent = "Delete";
      delButton.className = "del";
      delButton.addEventListener("click", event => {
        event.stopPropagation();
        if (confirm("Are you sure you want to delete this list?")) {
          const deletedList = savedLists.splice(index, 1)[0];
          deletedList.title = deletedList.title || "Untitled List";
          const deletedLists = JSON.parse(localStorage.getItem("deletedLists")) || [];
          deletedLists.push(deletedList);
          localStorage.setItem("deletedLists", JSON.stringify(deletedLists));
          localStorage.setItem("lists", JSON.stringify(savedLists));
          alert("List moved to trash!");
          listDiv.remove();
        }
      });
      listDiv.appendChild(delButton);
  
      listDiv.addEventListener("click", () => {
        localStorage.setItem("currentListId", list.id);
        window.location.href = "checklist.html";
      });
      noteContainer.appendChild(listDiv);
    });
  
    // Show message if no results
    if (filteredNotes.length === 0 && filteredLists.length === 0) {
      noteContainer.innerHTML = "<p>No matching results found.</p>";
    }
  });
  
});

  