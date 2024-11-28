
let listContainer = document.getElementById("maincontent");
console.log( document.getElementById("maincontent"));
const savedLists = JSON.parse(localStorage.getItem("lists")) || [];
console.log(savedLists);

if (listContainer) {
    savedLists.forEach((list, index )=> {
        console.log("rendering list: ", list)
        const listDiv = document.createElement("div");
        listDiv.className = "list-preview";

        const titleHeader = document.createElement("h4");
        titleHeader.textContent = `List Title: ${list.title}`;
        listDiv.appendChild(titleHeader);

        const currentDates = new Date();
        const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
        const formatDate = currentDates.toLocaleDateString(undefined, dateOptions);
        const timeParagraph = document.createElement("p");
        timeParagraph.className = "timeParagraph";
        timeParagraph.textContent = formatDate;
        listDiv.appendChild(timeParagraph);
       
        // contentsParagraph.textContent = list.content.join(", ");
       list.content.forEach((item) =>{
        const contentsParagraph = document.createElement("span");
        contentsParagraph.className = "contentParagraph";
        contentsParagraph.textContent = item.text;
        console.log(item.text);
        
        listDiv.appendChild(contentsParagraph);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.checked;
        console.log(item.checked);
        
        checkbox.disabled = true;
        listDiv.appendChild(checkbox);
        
       });

        
        

        const delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.className = "del";
        delButton.addEventListener("click", event => {
            event.stopPropagation();
            const userConfirmed = confirm("Are you sure you want to delete this list?");
            if (userConfirmed) {
                 const deletedList = savedLists.splice(index, 1)[0]; // Remove the item from the array
                 if (!deletedList.title){
                    deletedList.title = "Untitled List"
                 }
                 const deletedLists = JSON.parse(localStorage.getItem("deletedLists")) || [];
                 deletedLists.push(deletedList);
                 localStorage.setItem("deletedLists", JSON.stringify(deletedLists));
                  localStorage.setItem("lists", JSON.stringify(savedLists));
                  alert("List moved to trash!");
                  listDiv.remove(); // Remove the div from the DOM
            } else {
                alert("List deletion canceled.");
            }
        });
        listDiv.addEventListener("click", (event) => {
            // event.stopPropagation();
            localStorage.removeItem("currentDelListId")
            localStorage.setItem("currentListId", list.id);
            window.location.href = "checklist.html";
        });
        listDiv.appendChild(delButton);
        listContainer.appendChild(listDiv);
        
    });
}
