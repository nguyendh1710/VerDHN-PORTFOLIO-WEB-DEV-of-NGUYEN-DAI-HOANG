(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".myactive-btn").classList.remove("myactive-btn");
            this.classList.add("myactive-btn");
            document.querySelector(".myactive").classList.remove("myactive");
            document.getElementById(button.dataset.id).classList.add("myactive");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })



/////////////////














})();


document.addEventListener('DOMContentLoaded', function () {
    // Hiển thị tab đầu tiên khi tải trang
    document.querySelector('.tab-pane').classList.add('active');
  
    document.querySelectorAll('.nav-link').forEach(function (tab) {
      tab.addEventListener('click', function (event) {
        event.preventDefault();

      


        // Ẩn tất cả các tab pane
        document.querySelectorAll('.tab-pane').forEach(function (pane) {
          pane.classList.remove('active');
        });
  
        // Hiển thị tab pane được chọn
        const target = document.querySelector(tab.getAttribute('href'));
        target.classList.add('active');
      });
    });
  });