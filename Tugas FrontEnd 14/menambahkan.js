document.addEventListener("DOMContentLoaded", function () {
    // Asumsikan ada elemen 'select' dengan id 'category' di HTML Anda
    // Jika tidak, hapus bagian ini
    const select = document.getElementById("category");

    // Kode yang ada untuk mengambil kategori menu ...

    const form = document.querySelector("form");

    form.onsubmit = function (event) {
        event.preventDefault();

        const nama = document.querySelector("#nama").value;
        const harga = document.querySelector("#harga").value;
        const description = document.querySelector("#description").value;
        const gambar = document.querySelector("#gambar").files[0]; // Diubah menjadi files[0] untuk mendapatkan file

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('harga', harga);
        formData.append('description', description);
        formData.append('gambar', gambar);

        fetch("https://aa2c-120-188-87-141.ngrok-free.app/menu", {
            method: "POST",
            body: formData // Kita tidak lagi menetapkan header Content-Type, browser akan mengaturnya dengan benar
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Data berhasil ditambahkan:", data);
        })
        .catch((error) => {
            console.error("Terjadi kesalahan:", error);
        });
    };
});
