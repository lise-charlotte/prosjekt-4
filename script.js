// Reference to HTML elements
const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addButton = document.querySelector("#addButton");

// Function to add a new item to the list
function addItem() {
  const item = inputField.value;

    // Create a new list item and give content
    const li = document.createElement("li");
    li.textContent = item;

    // Create a remove button for the new list item
    const removeButton = document.createElement("Button");
    removeButton.textContent = "Slett";
    removeButton.classList.add("remove-btn");

    // Add an event listener to the remove button
    removeButton.addEventListener("click", function () {
      removeItem(li)
    });

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the list
    list.appendChild(li);
}

// Function to remove an item from the list
function removeItem(listItem) {
  // Remove the list item from the DOM
  listItem.remove();
}

// Event listener for the Add button
addButton.addEventListener("click", addItem);