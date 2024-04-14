document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".page-button");
    const pages = document.querySelectorAll(".page");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            const targetPageId = button.getAttribute("data-target");
            pages.forEach(page => page.style.display='none');
            document.getElementById(targetPageId).style.display='';
        });
    });
});
