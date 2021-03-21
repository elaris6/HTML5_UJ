/** FOR IN */
console.log('Bucle FOR IN');
// Recorriendo un array
let numbers = [45, 4, 9, 16, 25];
//let x;
for (let x in numbers) {
    console.log(x+5);
}
// Recorriendo un objeto
let person = { fname: "John", lname: "Doe", age: 25 };
//let x;
for (let x in person) {
    console.log("Atributo: "+x+" | Valor: "+person[x]);
}

/** FOR OF */
console.log('Bucle FOR OF');
// Recorriendo un array
let cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x);
}

// Recorriendo un String
let language = "JavaScript";

for (let x of language) {
    console.log(x);
}

/** FOR EACH Array.forEach */
// Específicos para recorrer arrays
console.log('Bucle Array.forEach');
let cadena = 'texto';
cadena.split("").forEach(element => {
    element == 'x' ? console.log("char es 'x'") : console.log('char no es "x"');
});