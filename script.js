let menuNama = "";
let hargaMenu = 0;

function pesan(nama, harga) {
    menuNama = nama;
    hargaMenu = harga;
    document.getElementById("popupPembayaran").style.display = "block";
    document.getElementById("menuDipilih").innerText = "Menu: " + nama;
    hitungTotal();
}

function hitungTotal() {
    let jumlah = document.getElementById("jumlah").value;
    let total = hargaMenu * jumlah;
    document.getElementById("totalHarga").innerText = "Total Harga: Rp" + total;
}

function bayar(metode) {
    let jumlah = document.getElementById("jumlah").value;
    let total = hargaMenu * jumlah;

    document.getElementById("popupPembayaran").style.display = "none";
    document.getElementById("struk").style.display = "block";

    document.getElementById("strukMenu").innerText = "Menu: " + menuNama;
    document.getElementById("strukJumlah").innerText = "Jumlah: " + jumlah;
    document.getElementById("strukTotal").innerText = "Total: Rp" + total;
    document.getElementById("strukMetode").innerText = "Pembayaran: " + metode;
}

function tutupPopup() {
    document.getElementById("popupPembayaran").style.display = "none";
}

function tutupStruk() {
    document.getElementById("struk").style.display = "none";
}
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}
