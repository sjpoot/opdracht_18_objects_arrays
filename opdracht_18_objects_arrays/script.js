//object person initialiseren
let person = {
    name: 'Bas',
    age: 50
};

//Object person loggen
console.log(person);

//alleen name loggen
console.log(person.name);
console.log(person['name']);

//Alleen age loggen
console.log(person.age);
console.log(person['age']);

//object literal evaluations toevoegen en loggen
person.evaluations = [7, 10, 9];
console.log(person.evaluations);
console.log(typeof(person.evaluations));

//Reference Type - lege Array
let selectedColors = [];

selectedColors = ['rood', 'wit', 'blauw'];
console.log(selectedColors);

//Hoeveel elements in deze array
console.log(selectedColors.length);

//eerste element loggen
console.log(selectedColors[0]);

//laatste element loggen
console.log(selectedColors[selectedColors.length -1]);

//geel toevoegen aan selectedColors met .push method
selectedColors.push('geel');

//het getal 5 toevoegen aan selectedColors met .push method
selectedColors.push(5);

//een object toevoegen aan selectedColors met .push method
selectedColors.push({
    greeting: "Hi, ik ben een object"
});

console.log(selectedColors);
console.log(selectedColors[selectedColors.length -1].greeting);

//Array met kattenrassen

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
];

//Zoekopdrachten in de catBreeds Array
//Naam laatste kattenras van catBreeds
console.log("Naam laatste kattenras:", catBreeds[catBreeds.length -1].name);
//Energylevels eerste kat van catBreeds
console.log("Energy levels van eerste kat:", catBreeds[0].energy_level);
//Eerste temperament van kat 2
console.log("Het eerste temperament van kat 2 is", catBreeds[1].temperament[0]);
//Laatste temperament van kat 3
let temperCat3 = catBreeds[2].temperament;
console.log("Het laatste temperament van kat 3 is", temperCat3[temperCat3.length -1]);

//Het favoriete voer van kat 3
console.log("Het favoriete voedsel van kat 3 is", catBreeds[2].food.favourite_food)
