for(var i = 0 ; i < 5; i++)
    console.log(i + ". Berfikir")
console.log('\n')

var nama = [{fName : 'Bagus', lname : 'Bayu', age : 20}, {fname : 'Ajeng', lname : 'Fitria', age : 19}]
for(var x in nama){
    console.log('Asprak\t: ')
    console.log(nama[x].fName)
    console.log(nama[x].lName)
    console.log(nama[x].age)
    console.log('\n')
}

var buah = ['apel', 'anggur', 'jeruk']
for(var x of buah){
    console.log('Ini buah ' + x)
}