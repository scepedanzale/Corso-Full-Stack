
// ESERCIZIO 1

class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    confrontoEta(persona){
        if(this.age > persona.age){
            return this.firstName + ' è più saggia di ' + persona.firstName;
        }else if(this.age < persona.age){
            return this.firstName + ' è più giovane di ' + persona.firstName;
        }else{
            return this.firstName + ' ha la stessa età di ' + persona.firstName;
        }
    }
}

let user1 = new User('Anna', 'Cerasoli', 25, 'Roma');
let user2 = new User('Cielo', 'Artuso', 23, 'Milano');
console.log(user1.confrontoEta(user2))



// ESERCIZIO 2

class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    ownerPet(pet){
        if(this.ownerName === pet.ownerName){
            return true;
        }else{
            return false;
        }
    }
}

let p1 = new Pet('Toby', 'Mario', 'cane', 'labrador');
let p2 = new Pet('Billy', 'Mario', 'coniglio', 'nano');
let p3 = new Pet('Fuffi', 'Luigi', 'gatto', 'soriano');

console.log(p1.ownerPet(p3));


let btn = document.querySelector('form button');
btn.addEventListener('click', (e)=>{
    let f = document.querySelector('form');
    let petName = f[0].value;
    let ownerName = f[1].value;
    let species = f[2].value;
    let breed = f[3].value;

    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<strong>PetName: </strong>${petName} 
                    <strong>OwnerName: </strong>${ownerName} 
                    <strong>Species: </strong>${species} 
                    <strong>Breed: </strong>${breed} `;
    ul.appendChild(li);
    /* console.log(petName)
    console.log(ownerName)
    console.log(species)
    console.log(breed) */
    e.preventDefault();
})

