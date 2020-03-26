var nama = "Dona";
var peran = "";

if (nama === "") {
  console.log(`Nama harus diisi!`);
} else if (!peran || 0 === peran.length) {
  console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
} else if (peran == "Ksatria") {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo Ksatria ${nama} kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "Tabib") {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir") {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
