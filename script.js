const fecha= new Date()
let pregunta= prompt("ingresa fecha")
const fecha2= new Date(pregunta)
console.log(fecha)
console.log(fecha2)

const anoActual=fecha.getFullYear()
console.log(anoActual)
const hoy= fecha.getDate()
const mes=fecha.getMonth()
console.log(hoy+" "+mes + " "+ anoActual)


let resta=fecha.getTime()-fecha2.getTime()


console.log(Math.round(resta/ (1000*60*60*24)-1))