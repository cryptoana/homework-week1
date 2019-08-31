// Write your JS here

//Main Character
const hero = {
    "name": "OANA",
    "heroic": true,
    "inventory": [],
    "health": 10,
    "weapon": {
        "type": "JavaScript",
        "damage": 2
    }
};

//Rest Function
function rest (obj) {
    if (obj.health == 10) {
        alert("You are good to go!");
    } else {
        obj.health = 10;
        return obj; 
    };
};

//UI for Rest
const health = document.getElementById("inn");
health.addEventListener('click', function(obj) {
    rest(hero);
});

//PickUp Function
function pickUpItem (obj, obj2) {
    obj.inventory.push(obj2);
};

//UI for PickUp
const dagger = document.getElementById('dagger');
dagger.addEventListener('click', function() {
    pickUpItem(hero, {"type": "dagger", "damage": 2});
});

//EquipWeapon Function
function equipWeapon (obj) {
    if (obj.inventory.length >= 1) {
        obj.weapon = obj.inventory[0];
    } 
};

//UI for EquipWeapon
const bag = document.getElementById('bag');
bag.addEventListener('click', function() {
    equipWeapon(hero);
});

//displayStats function
function displayStats() {
    const name = document.createElement('p');
    name.innerText = "hero: " + hero.name;
    const myDiv = document.getElementById('myDiv');
    myDiv.appendChild(name);
    const health = document.createElement('p');
    health.innerText = "health: " + hero.health;
    myDiv.appendChild(health);
    const weapon = document.createElement('p');
    weapon.innerText = "weapon: " + hero.weapon.type;
    myDiv.appendChild(weapon);
    const weaponDamage = document.createElement('p');
    weaponDamage.innerText = "damage: " + hero.weapon.damage;
    myDiv.appendChild(weaponDamage);
    myDiv.style.color = "#ff0000";
    myDiv.style.margin = "10px";
    myDiv.style.border = "1px solid black";
    myDiv.style.width = "130px";
    myDiv.style.padding = "10px";
}

displayStats();