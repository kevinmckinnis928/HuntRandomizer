import Weapon from './Weapon.js'
import WeaponSlot from './WeaponSlot.js'
import Tool from './Tool.js'
import Consumable from './Consumable.js'
import * as fs from 'fs';

function Loadout(weaponSlot1, weaponSlot2, toolList, consumableList) {
	this.weaponSlot1 = weaponSlot1;
	this.weaponSlot2 = weaponSlot2;
	this.toolList = toolList;
	this.consumableList = consumableList;

	/*get getWeaponSlot1() {
		return this.weaponSlot1;
	}

	set setWeaponSlot1(newWeaponSlot1) {
		this.weaponSlot1 = newWeaponSlot1;
	}

	get getWeaponSlot2() {
		return this.weaponSlot2;
	}

	set setWeaponSlot2(newWeaponSlot2) {
		this.weaponSlot2 = newWeaponSlot2;
	}

	get getToolList() {
		return this.toolList;
	}

	set setToolList(newToolList) {
		this.toolList = newToolList;
	}

	get getConsumableList() {
		return this.consumableList;
	}

	set setConsumableList(newConsumableList) {
		this.consumableList = newConsumableList;
	}*/

}

function createLoadout(quartermaster, forceMedKit, forceMelee) {
	var ws1, ws2, consumables, tools;
	//Check for quartermaster
	var weaponSlotTotal = 4;
	if (quartermaster) {
		weaponSlotTotal = 5;
	}
	//Create first weapon and assign it a randomly generated slot
	var weapon1 = getRandomWeapon();
	if (weapon1.canDualWield == 1) {
		var dual = (Math.floor(Math.random() * 2) == 0);
		if (dual == true || quartermaster == 1) {
			ws1 = new WeaponSlot(weapon1, 2, true);
		}
		else {
			ws1 = new WeaponSlot(weapon1, weapon1.slots, false);
		}
	}
	else {
		ws1 = new WeaponSlot(weapon1, weapon1.slots, false);
	}
	weaponSlotTotal -= ws1.slotsUsed;
	//Create the second weapon
	var weapon2 = getRandomWeapon();
    while (weapon2.slots > weaponSlotTotal) {
    	weapon2 = getRandomWeapon();
    }
    ws2 = new WeaponSlot(weapon2, weapon2.slots, false);

    //create the tools list
    var tL = [];
    if (forceMedKit == true) {
    	tL.push(new Tool("First Aid Kit", 5));
    }
    //LEFT OFF HERE
    if (forceMelee == true) {
    	switch (Math.floor(Math.random() * 4)) {
    		case 0:
    			tL.push(new Tool("Knife", 30));
    			break;
    		case 1:
    			tL.push(new Tool("Heavy Knife", 20));
    			break;
    		case 2:
    			tL.push(new Tool("Knuckle Knife", 15));
    			break;
    		case 3:
    			tL.push(new Tool("Dusters", 15));
    	}
    }


	var loadout = new Loadout(ws1, ws2, null, null);
	//return 0;
	return loadout;
}

function getRandomWeapon() {
	var weapons = csvToArr('weapons.csv');
	const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
	const weapon = new Weapon(randomWeapon[0], randomWeapon[1], randomWeapon[2], randomWeapon[3]);
	return weapon;
}
//console.log(getRandomWeapon());

function getRandomTool() {
	var tools = csvToArr('tools.csv');
	const randomTool = tools[Math.floor(Math.random() * tools.length)];
	const tool = new Tool(randomTool[0], randomTool[1]);
	return tool;
}
//console.log(getRandomTool());

function getRandomConsumable() {
	var consumables = csvToArr('consumables.csv');
	const randomConsumable = consumables[Math.floor(Math.random() * consumables.length)];
	const consumable = new Consumable(randomConsumable[0], randomConsumable[1]);
	return consumable;
}
//console.log(getRandomConsumable());

function csvToArr(fileName) {
	let file = fs.readFileSync(fileName, "utf-8");
    let jsObj = [];
    let items = file.split('\n')
    for (let attributes in items) {
        let data = items[attributes].split(',');
        if (attributes > 0) {
        	for(let x in data){
        		data[x] = data[x].replace(/(\r\n|\n|\r)/gm, "");
        	}
        	if (data != '') {
        		jsObj.push(data)
        	}
        }
        
    }
    return jsObj;
}
//console.log(csvToArr('weapons.csv'));
//console.log(getRandomWeapon());
console.log(createLoadout(1, 0, 0));
