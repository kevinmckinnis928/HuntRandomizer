import Weapon from './Weapon.js'

function WeaponSlot(weapon, slotsUsed, dualWield) {
	this.weapon = weapon;
	this.slotsUsed = slotsUsed;
	this.dualWield = dualWield;

	/*get getWeapon() {
		return this.Weapon;
	}

	set setWeapon(newWeapon) {
		this.weapon = newWeapon;
	}

	get getSlotsUsed() {
		return this.slotsUsed;
	}

	set setSlotsUsed(newSlotsUsed) {
		this.slotsUsed = newSlotsUsed;
	}

	get getDualWield() {
		return this.dualWield;
	}

	set setDualWield(newDualWield) {
		this.dualWield = newDualWield;
	}*/
}

export default WeaponSlot;