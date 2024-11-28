// const addItem = document.getElementById("add-item");
// addItem.addEventListener("click", () => {
//   const checkListDiv = document.createElement("div");
//   checkListDiv.className = "checklistDiv";

//   const checkbox = document.createElement("input");
//   checkbox.className = "checkbox";
//   checkbox.type = "checkbox";
//   checkListDiv.appendChild(checkbox);

//   const checkboxText = document.createElement("input");
//   checkboxText.className = "checktext";
//   checkboxText.placeholder = "Name...";
//   checkboxText.type = "text";
//   checkListDiv.appendChild(checkboxText);

//   const checklistDivDelete = document.createElement("button");
//   checklistDivDelete.id = "deletecheck-div";
//   checklistDivDelete.textContent = "X";
//   checkListDiv.appendChild(checklistDivDelete);
//   checklistDivDelete.addEventListener("click", () => {
//     checkListDiv.remove();
//   });

//   document.body.appendChild(checkListDiv);
// });

// let saveList = document.getElementById("save-list");
// if (saveList) {
//   saveList.addEventListener("click", () => {
//     const currentListId = localStorage.getItem("currentListId");
//     const checkBoxTextInputArray = Array.from(
//       document.querySelectorAll(".checktext")
//     ).map((input) => input.value.trim());

//     const listTitle = document.getElementById("list-title").value.trim();

//     console.log("saving list: ", listTitle, checkBoxTextInputArray);
//     if (checkBoxTextInputArray.some((text) => text !== "")) {
//       const lists = JSON.parse(localStorage.getItem("lists")) || [];
//       const newList = {
//         id: currentListId ? Number(currentListId) : Date.now(),
//         title: listTitle || `Untitled List`,
//         content: checkBoxTextInputArray,
//       };
//       if (currentListId) {
//         const listIndex = lists.findIndex(
//           (list) => list.id === Number(currentListId)
//         );
//         if (listIndex !== -1) lists[listIndex] = newList;
//       } else {
//         lists.push(newList);
//       }
//       localStorage.setItem("lists", JSON.stringify(lists));
//       console.log("list saved in locaStorage: ", lists);
//       alert(currentListId ? "List updated!" : "List saved!");
//       localStorage.removeItem("currentListId");
//       window.location.href = "index.html";
//     } else {
//       alert("Write something, please!");
//     }
//   });
// }

// let backButton = document.getElementById("backhome");
// if (backButton) {
//   backButton.addEventListener("click", () => {
//     localStorage.removeItem("currentListId");
//     window.location.href = "index.html";
//   });
// }
const addItem = document.getElementById("add-item");
const checklistContainer = document.getElementById("checklist-container");
addItem.addEventListener("click", () => {
  const checkListDiv = document.createElement("div");
  checkListDiv.className = "checklistDiv";

  const checkbox = document.createElement("input");
  checkbox.className = "checkbox";
  checkbox.type = "checkbox";
  checkListDiv.appendChild(checkbox);

  const checkboxText = document.createElement("input");
  checkboxText.className = "checktext";
  checkboxText.placeholder = "Name...";
  checkboxText.type = "text";
  checkListDiv.appendChild(checkboxText);

  const checklistDivDelete = document.createElement("button");
  checklistDivDelete.id = "deletecheck-div";
  checklistDivDelete.textContent = "X";
  checkListDiv.appendChild(checklistDivDelete);
  checklistDivDelete.addEventListener("click", () => {
    checkListDiv.remove();
  });

  checklistContainer.appendChild(checkListDiv);
});

let saveList = document.getElementById("save-list");

if (saveList) {
  saveList.addEventListener("click", () => {
    const currentListId = localStorage.getItem("currentListId");
    const checkBoxTextInputArray = Array.from(
      document.querySelectorAll(".checktext")
    ).map((input) => {
      return {
        text: input.value.trim(),
        checked: input.previousElementSibling.checked,
      };
    });
    console.log(checkBoxTextInputArray);

    const listTitle = document.getElementById("list-title").value.trim();
    console.log(listTitle);

    console.log("saving list: ", listTitle, checkBoxTextInputArray);
    if (checkBoxTextInputArray.some((text) => text !== "")) {
      const lists = JSON.parse(localStorage.getItem("lists")) || [];
      const newList = {
        id: currentListId ? Number(currentListId) : Date.now(),
        title: listTitle || `Untitled List`,
        content: checkBoxTextInputArray,
      };
      if (currentListId) {
        const listIndex = lists.findIndex(
          (list) => list.id === Number(currentListId)
        );
        if (listIndex !== -1) lists[listIndex] = newList;
      } else {
        lists.push(newList);
      }
      localStorage.setItem("lists", JSON.stringify(lists));
      console.log("list saved in locaStorage: ", lists);
      alert(currentListId ? "List updated!" : "List saved!");
      localStorage.removeItem("currentListId");
      window.location.href = "index.html";
    } else {
      alert("Write something, please!");
    }
  });
}

let backButton = document.getElementById("backhome");
if (backButton) {
  backButton.addEventListener("click", () => {
    localStorage.removeItem("currentListId");
    window.location.href = "index.html";
  });
}
