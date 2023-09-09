const contactForm = document.getElementById("contact-form");
const contactTable = document.getElementById("contact-table");
const contactList = document.getElementById("contact-list");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (name && phone) {
    const newRow = contactTable.insertRow(-1);
    
    const nameCell = newRow.insertCell(0);
    nameCell.textContent = name;
    
    const phoneCell = newRow.insertCell(1);
    phoneCell.textContent = phone;
    
    const deleteCell = newRow.insertCell(2);
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function() {
        newRow.remove();
    });
    deleteCell.appendChild(deleteButton);
    
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}
});

