document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('deleteForm');
    const inputId = document.getElementById('number');
    const inputName = document.getElementById('name'); // Hapus komentar jika diperlukan

    let id = 0;
    let name = ''; // Hapus komentar jika diperlukan

    inputId.oninput = function () {
      id = inputId.value;
      console.log("ID:", id);
    };


    inputName.oninput = function () {
      name = inputName.value;
      console.log("Name:", name);
    };


    form.onsubmit = function (event) {
      event.preventDefault();
      
      let fetchOptions = {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json', // Tambahkan atau ubah sesuai kebutuhan API
        }
      };


      if (name) {
        fetchOptions.body = JSON.stringify({ name: name });
      }


      fetch(`https://aa2c-120-188-87-141.ngrok-free.app/menu/${id}`, fetchOptions)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error status: ${res.status}`);
          }
          return res.json();
        })
        .then((json) => {
          console.log("Data berhasil dihapus:", json);
          // Tambahkan kode untuk memperbarui UI jika diperlukan
        })
        .catch((error) => {
          console.error("Terjadi kesalahan:", error);
        });
    };
  });