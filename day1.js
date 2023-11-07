// const nilai = 90;

// if(nilai >= 90) {
//     console.log('a')
// } else if (nilai <=75 ){
//     console.log('b')
// } else {
//     console.log('C')
// }


// const nilai = 10 ;

// const nilaiString = 'C';

// switch (nilaiString) {
//     case('A'):
//         console.log('Bagus');
//     break;
//     case('B'):
//         console.log('lumayan');
//     break;
//     case('C'):
//         console.log('remed');
//     break;
// }

// let n = 0;
// for (let i = 0; i < 10;++ i ) {
//     console.log(++n);
// }

// console.log('------------------')

// const array = [1, 5, 9, 10];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


// let i = 0;

// do {
//     console.log(array[i]);
// } while (i < array.length)  

// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }


// const student = [
//     {
//         nama: 'sheira',
//         nilai: 90,
//     },
//     {
//         nama: 'sasi',
//         nilai: 87,
//     },
//     {
//         nama: 'saomi    ',
//         nilai: 90,
//     }
// ];

// const underNilaiStudent = student.map(student => {
//     let grade;
//     if (student.nilai >= 90) {
//         grade = 'A';
//     } else if (student.nilai >= 75) {
//         grade = 'B';
//     } else {
//         grade =  "C";
//     }
//     return {
//         ...student,
//         grade,
//     }
// })
// // mencari total dan rata rata
// console.log(underNilaiStudent);

// const totalNilai = student.reduce ((total, student) => total + student.nilai, 0 );
// console.log('totalNilai', totalNilai);
// console.log('rata-rata nilai', totalNilai / student.length);

// menghitung total harga barang yang sudah degan keadaan true or false

const cart = [
    {
        id: 1,
        Nproduk: 'Kaos kaki',
        harga: 10000,
        checked: true,
    },
    {
        Nproduk: 'Sepatu',
        harga: 100000,
        checked: false,
    },
    {
        Nproduk: 'Sabun',
        harga: 50000,
        checked: true,
    }
];

const totalHarga = cart.reduce((total, produk) => produk.checked ? total + produk.harga: total, 0 );

console.log('totalHarga', totalHarga);

// mengurutkan nilai 

const nilai = [100, 50, 78, 11, 89, 500];

nilai.sort((a, b) => a < b ? -1: 1 );

console.log(nilai);

// mencari sesuatu dalam aray menggunakan value

const produk = cart.find(produk => produk.Nproduk == 'Sabun');
console.log('produk', produk ? produk.Nproduk : 'produk tidak ditemukan');
