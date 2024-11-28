// window.addEventListener("DOMContentLoaded", () => {
//   const currentListId = localStorage.getItem("currentListId");
//   console.log(currentListId);

//   if (currentListId) {
//     const lists = JSON.parse(localStorage.getItem("lists")) || [];
//     const currentList = lists.find((list) => list.id === Number(currentListId));

    
//     if (currentList) {
//       document.getElementById("list-title").value = currentList.title;
//       currentList.content.forEach((contentItem) =>{
//         const checkListDiv = document.createElement("div");
//         checkListDiv.className = "checklistDiv";

//         const checkbox = document.createElement("input");
//         checkbox.className = "checkbox";
//         checkbox.type = "checkbox";
//         checkListDiv.appendChild(checkbox);

//         const checkboxText = document.createElement("input");
//         checkboxText.className = "checktext";
//         checkboxText.placeholder = "Name...";
//         checkboxText.type = "text";
//         checkboxText.value = contentItem;
//         checkListDiv.appendChild(checkboxText);

//         const checklistDivDelete = document.createElement("button");
//         checklistDivDelete.id = "deletecheck-div";
//         checklistDivDelete.textContent = "X";
//         checkListDiv.appendChild(checklistDivDelete);
//         checklistDivDelete.addEventListener("click", () => {
//           checkListDiv.remove();
//         });
//         document.body.appendChild(checkListDiv);
//       });
      
      
//     }
//   } else {
//     document.getElementById("list-title").value = "";
//     document.querySelectorAll(".checktext").forEach((input) => (input.value = ""));
//   }
// });
window.addEventListener("DOMContentLoaded", () => {
  const currentListId = localStorage.getItem("currentListId");
  console.log(currentListId);

  if (currentListId) {
    const lists = JSON.parse(localStorage.getItem("lists")) || [];
    const currentList = lists.find((list) => list.id === Number(currentListId));
    console.log(currentList);
    
    
    if (currentList) {
      document.getElementById("list-title").value = currentList.title;
      currentList.content.forEach((contentItem) =>{
        const checkListDiv = document.createElement("div");
        checkListDiv.className = "checklistDiv";

       
          const checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox";
        checkListDiv.appendChild(checkbox);
        // checkbox.checked ="contentItem.checked"
        console.log(contentItem.checked);
        if(contentItem.checked){
          checkbox.checked= true;
        }else{
          checkbox.checked= false;
        }
        

        

     

        const checkboxText = document.createElement("input");
        checkboxText.className = "checktext";
        checkboxText.placeholder = "Name...";
        checkboxText.type = "text";
        checkboxText.value = contentItem.text;
        checkListDiv.appendChild(checkboxText);

        const checklistDivDelete = document.createElement("button");
        checklistDivDelete.id = "deletecheck-div";
        checklistDivDelete.textContent = "X";
        checkListDiv.appendChild(checklistDivDelete);
        checklistDivDelete.addEventListener("click", () => {
          checkListDiv.remove();
        });
        document.body.appendChild(checkListDiv);
      });
      
      
    }
  } else {
    document.getElementById("list-title").value = "";
    document.querySelectorAll(".checktext").forEach((input) => (input.value = ""));
    document.querySelectorAll(".checkbox").forEach((input)  => (input.checked = false));
  }
});
