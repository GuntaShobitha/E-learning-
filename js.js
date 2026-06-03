const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

const style = document.createElement("style");

style.innerHTML = `
.dark{
background:#111827;
color:white;
}

.dark .navbar,
.dark .card,
.dark .course-card,
.dark .testimonial-card{
background:#1f2937;
color:white;
}
`;

document.head.appendChild(style);