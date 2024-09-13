// Mengambil data dari backend saat tombol diklik
document.getElementById('fetch-data').addEventListener('click', async function() {
  const response = await fetch('https://mrmisterius.xyz/logs/index.php');
  const data = await response.json();

  // Tampilkan data di dalam div #data-output
  document.getElementById('data-output').textContent = `Name: ${data.name}, Email: ${data.email}`;
});
