var list = ['a', 'b', 'c'];
var message;
for (var i in list) {
    message = 'indeks' + i + 'berisi data' + list[index];
    console.log (message);
};

// for-in juga bisa kita gunakan untuk memprises semua atribut (key) sebuah object seperti contoh berikut ini.

var person = {
    'nama' : 'boss',
    'age' : 40,
    'sex' : 'male'
}

var message;

for (var attr in person) {

    message = 'atribut' + attr + 'berisi data' + person[attr];
    console.log(message);
}