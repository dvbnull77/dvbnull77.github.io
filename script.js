// Dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Cek mode sebelumnya
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("darkMode", body.classList.contains("dark") ? "enabled" : "disabled");
});

// Komentar
const commentInput = document.getElementById("comment-input");
const commentSubmit = document.getElementById("comment-submit");
const commentList = document.getElementById("comment-list");

function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    commentList.innerHTML = comments.map(comment => `<li>${comment}</li>`).join("");
}

commentSubmit.addEventListener("click", () => {
    const comment = commentInput.value.trim();
    if (comment) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(comment);
        localStorage.setItem("comments", JSON.stringify(comments));
        commentInput.value = "";
        loadComments();
    }
});

// Load komentar saat halaman dimuat
if (commentList) loadComments();
