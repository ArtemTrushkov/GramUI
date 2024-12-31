const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

let logo = document.querySelector(".logo");
logo.href = window.location.pathname;