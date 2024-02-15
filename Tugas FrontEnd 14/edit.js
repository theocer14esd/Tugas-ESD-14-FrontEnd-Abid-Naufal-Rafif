document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('editForm');
    const inputId = document.getElementById('id');
    const inputNama = document.getElementById('nama');
    const inputHarga = document.getElementById('harga');
    const inputDescription = document.getElementById('description');
    const inputGambar = document.getElementById('gambar');

    form.onsubmit = function (event) {
      event.preventDefault();
      
      const id = inputId.value;
      const nama = inputNama.value;
      const harga = inputHarga.value;
      const description = inputDescription.value;
      const gambar = inputGambar.files[0];

      const formData = new FormData();
      formData.append('nama', nama);
      formData.append('harga', harga);
      formData.append('description', description);
      formData.append('gambar', gambar);

      fetch(`https://aa2c-120-188-87-141.ngrok-free.app/menu/${id}`, {
        method: "PUT",
        body: formData
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log("Data berhasil diubah:", json);
        // Tambahkan kode untuk memperbarui UI jika diperlukan
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
    };
});
