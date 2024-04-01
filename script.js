const sideBarBtn = document.querySelector(".toggle-btn");
const sideBar = document.querySelector(".sidebar");

sideBarBtn.addEventListener("click", () =>{
    sideBar.classList.toggle("active")
})