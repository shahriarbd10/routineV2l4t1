document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("#examTable tbody tr");
    const floatingCard = document.getElementById("floatingCard");
    const examTitle = document.getElementById("examTitle");
    const examDate = document.getElementById("examDate");
    const roomDetails = document.getElementById("roomDetails");
    const closeCard = document.getElementById("closeCard");

    // Show Floating Card on Row Click
    rows.forEach((row) => {
        row.addEventListener("click", () => {
            const data = JSON.parse(row.dataset.exam);

            // Inject Title and Date
            examTitle.textContent = row.children[2].textContent;
            examDate.textContent = row.children[0].textContent;

            // Generate Room and Column Details
            roomDetails.innerHTML = "<strong>Room and Column Details:</strong>";
            const list = document.createElement("ul");

            data.rooms.forEach((room) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${room.room} - ${room.column}`;
                list.appendChild(listItem);
            });

            roomDetails.appendChild(list);

            // Show the Floating Card
            floatingCard.classList.remove("hidden");
        });
    });

    // Close Floating Card
    closeCard.addEventListener("click", () => {
        floatingCard.classList.add("hidden");
    });
});
