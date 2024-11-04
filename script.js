function showSection(sectionId) {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function submitOrder() {
    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const nomorWa = document.getElementById("nomorWa").value;
    const rasaCake = document.getElementById("RasaCake").value;
    const jenisPesanan = document.getElementById("jenisPesanan").value;

    if (nama && alamat && nomorWa && rasaCake && jenisPesanan) {
        alert(`Terima kasih, ${nama}! Pesanan Anda telah kami terima.\n\nDetail Pemesanan:\nNama: ${nama}\nAlamat: ${alamat}\nNomor WA: ${nomorWa}\nRasa Cake: ${rasaCake}\nJenis Pesanan: ${jenisPesanan === "sekarang" ? "Pesan Sekarang" : "Pesan untuk Nanti"}`);
        document.getElementById("orderForm").reset();
    } else {
        alert("Mohon lengkapi semua data pemesanan.");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav_toggle');
    const navClose = document.querySelector('.nav_close');
    const navMenu = document.getElementById('navMenu');
  
    // Fungsi untuk membuka menu navigasi
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  
    // Fungsi untuk menutup menu navigasi
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  
    // Menutup menu saat salah satu link navigasi diklik (opsional)
    const navLinks = document.querySelectorAll('.nav_list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    });
  });
  