import pandas as pd

#Defining constants
WEAPON_SLOTS_DEFAULT = 4
WEAPON_SLOTS_QUARTERMASTER = 5
WEAPON_SLOTS_LARGE = 3
WEAPON_SLOTS_MEDIUM = 2
WEAPON_SLOTS_SMALL = 1
TOOL_AND_CONSUMABLE_SLOTS = 4

#Creating toggle booleans and assigning them to false by default
force_medkit = False
has_quartermaster = False
use_special_ammo = False
force_melee_tool = False
force_healing_consumable = False
dual_wield_chance = False
#creating non-boolean variables
bloodline_rank = 100
max_cost_loadout = 10000
item_exclusion_list = []

#lists for the loadout slots to be assigned to
weapon_slots = ["none", "none"]
tool_slots = ["none", "none", "none", "none"]
consumable_slots = ["none", "none", "none", "none"]

class Loadout:
	def __init__(self, weapon_slot_1, weapon_slot_2, tool_slot_1, tool_slot_2, tool_slot_3, tool_slot_4, consumable_slot_1, consumable_slot_2, consumable_slot_3, consumable_slot_4):
		self.weapon_slot_1 = weapon_slot_1
		self.weapon_slot_2 = weapon_slot_2
		self.tool_slot_1 = tool_slot_1
		self.tool_slot_2 = tool_slot_2
		self.tool_slot_3 = tool_slot_3
		self.tool_slot_4 = tool_slot_4
		self.consumable_slot_1 = consumable_slot_1
		self.consumable_slot_2= consumable_slot_2
		self.consumable_slot_3= consumable_slot_3
		self.consumable_slot_4= consumable_slot_4


weapons = pd.read_csv(r'weapons.csv')


def check_conditionals():
	return

def randomize_loadout():
	check_conditionals()


