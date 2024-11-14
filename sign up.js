function goToPage(url) {
    document.body.classList.add('fade-out'); // Menambahkan kelas fade-out
    
    setTimeout(function() {
        window.location.href = url; // Mengganti halaman setelah animasi selesai
    }, 500); // Sesuaikan waktu dengan durasi animasi (0.5s = 500ms)
}

window.addEventListener('load', () => {
    document.body.classList.add('fade-in'); // Memasukkan animasi fade-in saat halaman dimuat
});
