var bilangan

bilangan = 10
if(bilangan == 10){
    console.log('Variabel bilangan memiliki nilai\t= ' + bilangan)
}

bilangan = 14
if(bilangan % 2 == 0){
    console.log(bilangan + ' adalah bilangan genap')
}else{
    console.log(bilangan + ' adalah bilangan ganjil')
}

bilangan = -30
if(bilangan > 0){
    console.log(bilangan + ' adalah bilangan Positif')
}else if(bilangan < 0){
    console.log(bilangan + ' adalah bilangan Negatif')
}else{
    console.log(bilangan + ' adalah bilangan Netral')
}