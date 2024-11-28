const savedLists = JSON.parse(localStorage.getItem("lists")) || [];
const retrievedList = JSON.parse(localStorage.getItem("deletedLists")) || [];
if (trashCanContent) {
  retrievedList.forEach((delList, index) => {
    const retrievDivL = document.createElement("div");
    retrievDivL.className = "list-review";

    const titleHeadL = document.createElement("h4");
    titleHeadL.textContent = `List Title: ${delList.title || "Untitled List"}`;
    retrievDivL.appendChild(titleHeadL);


    const restoreBtn = document.createElement("button");
    restoreBtn.textContent = "Restore";
    restoreBtn.className = "restoreList";
    restoreBtn.style.backgroundColor = "green";
    restoreBtn.addEventListener("click", () => {
      const restoreList = retrievedList.filter(
        (list) => list.id !== delList.id
      );
      
      localStorage.setItem("deletedLists", JSON.stringify(restoreList));
      console.log(delList);
      
      savedLists.push(delList);
      localStorage.setItem("lists", JSON.stringify(savedLists));

      retrievDivL.remove();
    });
    retrievDivL.appendChild(restoreBtn);

    const deleteTrashL = document.createElement("button");
    deleteTrashL.className = "deleteTrashL";
    deleteTrashL.textContent = "Delete";
    retrievDivL.appendChild(deleteTrashL);
    deleteTrashL.addEventListener("click", (event) => {
      event.stopPropagation();
      const userConfirm = confirm(
        "Are you sure you want to delete this list permanently?"
      );
      if (userConfirm) {
        const updatedLists = retrievedList.filter(
          (list) => list.id !== delList.id
        );
        console.log(updatedLists);

        localStorage.setItem("deletedLists", JSON.stringify(updatedLists));
        retrievDivL.remove();
        alert("List deleted permanently");
        console.log(updatedLists);

        // if (updatedLists.length === 0) {
        //   trashCanContent.innerHTML = "<p>No notes here.</p>";
        // }
      }
    });

    retrievDivL.appendChild(deleteTrashL);
    trashCanContent.appendChild(retrievDivL);
  });
}
