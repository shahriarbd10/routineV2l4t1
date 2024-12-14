document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("#examTable tbody tr");
    rows.forEach((row) => {
        row.addEventListener("mouseenter", () => {
            row.style.boxShadow = "0px 4px 10px rgba(241, 196, 15, 0.5)";
        });
        row.addEventListener("mouseleave", () => {
            row.style.boxShadow = "none";
        });
    });
});
