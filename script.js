const siswaLulus = [
  { nama: "ABDUL AZIZ", tgl: "20-08-2006" },
  { nama: "AHMADI", tgl: "09-10-2005" },
  { nama: "MUNAWAROTUL ISTIANAH", tgl: "30-07-2007" },
  { nama: "MUTAWAKKIL ALALLAH", tgl: "24-10-2007" },
  { nama: "NUR AZIZAH KAMILA", tgl: "24-12-2005" },
  { nama: "RAHEMAH", tgl: "04-03-2008" },
  { nama: "REFA AYU RENATA", tgl: "05-02-2007" },
  { nama: "RITA AGUSTINA WAHYU NINGTIYAS", tgl: "13-08-2006" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim().toLowerCase();
  const tgl = document.getElementById("tgl").value.trim();
  const captcha = document.getElementById("captchaInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (captcha !== "1234") {
    resultDiv.innerHTML = "<p class='error'>Captcha salah!</p>";
    return;
  }

  const ditemukan = siswaLulus.find(
    (siswa) =>
      siswa.nama.toLowerCase() === nama &&
      siswa.tgl === tgl
  );

  if (ditemukan) {
    resultDiv.innerHTML =
      "<p class='success'>Selamat anda dinyatakan <strong>LULUS</strong> Penilaian Sumatif Akhir Jenjang di SMKS Darul Jannah Tahun Pelajaran 2024/2025</p>";
  } else {
    resultDiv.innerHTML =
      "<p class='error'>Data tidak ditemukan atau Anda belum dinyatakan lulus.</p>";
  }
});
