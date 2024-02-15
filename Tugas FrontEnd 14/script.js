document.addEventListener("DOMContentLoaded", () => {
  const usersList = document.getElementById("usersList");

  function displayUsers() {
      const api = fetch("https://aa2c-120-188-87-141.ngrok-free.app/menu", {
          mode: "cors",
          method: "GET",
          headers: {
              "ngrok-skip-browser-warning": "true",
          },
      })
      .then((res) => res.json())
      .then((data) => {
          // Kosongkan daftar pengguna sebelum menambahkan data baru
          usersList.innerHTML = '';

          data.forEach(item => {
              const listItem = document.createElement('div');
              listItem.classList.add('menu-item');
              listItem.innerHTML = `
                  <img src="https://aa2c-120-188-87-141.ngrok-free.app/gambar/${item.gambar}" alt="${item.nama}">
                  <div class="menu-item-details">
                      <h3>${item.nama}</h3>
                      <p>Harga: ${item.harga}</p>
                      <p>${item.description}</p>
                      <button onclick="pesanSekarang('${item.nama}')">Pesan Sekarang</button>
                  </div>
              `;
              usersList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Terjadi kesalahan:', error);
      });
  }

  // Tampilkan daftar pengguna saat halaman dimuat
  displayUsers();
});

function pesanSekarang(namaMenu) {
  // Mengarahkan ke halaman HTML lainnya untuk melakukan pemesanan
  window.location.href = `menambahkan.html?menu=${namaMenu}`; // tambahin link nya disini
}