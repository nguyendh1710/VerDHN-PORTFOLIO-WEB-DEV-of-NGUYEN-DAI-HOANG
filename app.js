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

  ///////////////////////

  const buttons = document.querySelectorAll('.nav-link');

  function updateActiveButton(clickedButton) {
      // Remove active from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add active to the clicked button
      clickedButton.classList.add('active');

      // Remove old tooltips
      buttons.forEach(btn => btn.removeAttribute('data-tooltip'));

      // Find index of active button
      const index = Array.from(buttons).indexOf(clickedButton);

      // Set tooltip for buttons next to active
      if (buttons[index + 1]) {
          buttons[index + 1].setAttribute('data-tooltip', '👇 Click to view related skills.');
      }
      if (buttons[index - 1]) {
          buttons[index - 1].setAttribute('data-tooltip', '👇 Click to view related skills.');
      }
  }

  // Initialize event listeners
  buttons.forEach(button => {
      button.addEventListener('click', function () {
          updateActiveButton(this);
      });
  });

  // Initialize tooltip on page load
  updateActiveButton(document.querySelector('.nav-link.active'));

