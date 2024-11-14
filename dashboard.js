// JavaScript untuk menambahkan class 'hover-active'
window.onload = function () {
  const textBoderElements = document.querySelectorAll(".textboder");
  const borderTextElements = document.querySelectorAll(".bordertext");

  // Fungsi untuk menambah dan menghapus kelas hover-active
  function toggleHoverEffect() {
    textBoderElements.forEach((el) => {
      el.classList.toggle("hover-active");
    });

    borderTextElements.forEach((el) => {
      el.classList.toggle("hover-active");
    });
  }

  // Setiap 2 detik, ganti kelas hover-active
  setInterval(toggleHoverEffect, 3000);
};
