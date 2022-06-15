/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Obi-Wan  Kenobi and
    Anakin Skywalker.
*/

let kenobiAttack = 20;
let anakinAttack = 30;

if (anakinAttack > kenobiAttack) {
    console.log(`Anakin has a better atack than Kenobi`);
} else if (kenobiAttack > anakinAttack) {
    console.log(`Kenobi has a better attack than Anakin`);
} else {
    console.log(`Anakin and Kenobi have the same attack`);
}

let kenobiHealth = 100;
let kenobiDefense = 0;

if (kenobiHealth > anakinAttack) {
    kenobiHealth -= anakinAttack;
    console.log(`Kenobi's health is now ${kenobiHealth}`);
} else {
    console.log(`Kenobi was slain`);
}

kenobiDefense += 25;

for (let i = 0; i < 5; i++){
    let damage = anakinAttack - kenobiDefense;
    kenobiHealth -= damage;
    console.log(`Kenobi's health is now ${kenobiHealth}`);
}

while (kenobiHealth > 0) {
    let damage = anakinAttack - kenobiDefense;
    kenobiHealth -= damage;
    
    if (kenobiHealth > 0){
        console.log(`Kenobi's health is now ${kenobiHealth}`);
    } else {
        console.log(`Kenobi has been slain`);
    }
}