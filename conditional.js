let mhs = {
    name: "Fulan",
    age : 20,
    major : "Tata Boga",
    skills: ['Sys admin', 'OOP', 'Designer'],
    poor: true,
}

// console.log('Mahasiswa boleh daftar : ' + (mhs.age > 17));

//ini blok
// if (mhs.major == "TRMG") {
//     console.log(mhs.name + " Jurusan TRMG");
// } else if (mhs.major == "TRKJ") {
//     console.log(mhs.name + " Jurusan TRKJ");
// } else if (mhs.major == "TRPL"){
//     console.log(mhs.name + " Jurusan TRPL");
// } 
// else {
//     console.log(mhs.name + " Jurusan" + mhs.major);
// }

//ternary
// console.log(mhs.major == "TRPL" ? mhs.name + "Jurusan TRPL" : mhs.name + "Bukan TRPL")

//Switch Case
// switch (mhs.major) {
//     case "TRMG":
//         console.log(mhs.name + " Jurusan TRMG");
//         break;
//     case "TRKJ":
//         console.log(mhs.name + " Jurusan TRKJ");
//         break;
//     case "TRPL":
//         console.log(mhs.name + " Jurusan TRPL");
//         break;
//     default:
//         console.log(mhs.name + " Bukan anak IDN");
//     }

    // conditional function
    // kriteria : umur < 21, miskin, skill lebih dr 2
    function cekKelulusan(peserta) {
        let name = peserta.name;
        let age = peserta.age;
        let poor = peserta.poor;
        let skills = peserta.skills;
        // console.log('function jalan' , peserta)
        if (age < 21 && poor == true && skills.length > 2) {
            // Peserta Lulus
            console.log (name + " kamu lulus");
        } else if (age < 21 || poor == true || skills.length > 2) {
            // Peserta Hampir Lulus
            console.log (name + " kamu hampir lulus");
        } else {
            // Peserta Tidak Lulus
            console.log (name + " kamu tidak lulus");
        }
    }
    cekKelulusan(mhs)
