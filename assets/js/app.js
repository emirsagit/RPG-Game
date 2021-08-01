import { Wizard, Warrier, Archer } from "./Heroes.js";
import { Spider, Dragon, Scorpion } from "./Enemies.js";
import { Dungeon } from "./Dungeon.js";
import { Food } from "./Food.js";

const croissant = new Food("🥐", 5);
const taco = new Food("🌮", 3);
const sandwich = new Food("🥪", 10);
const falafel = new Food("🧆", 7);

const dani = new Warrier("Dani", 1);
const moe = new Archer("Moe", 1);
const liz = new Wizard("Liz", 1);

const spider = new Spider(1);
const scorpion = new Scorpion(5);
const dragon = new Dragon(10);

moe.pickup(croissant);
moe.pickup(taco);
moe.pickup(sandwich);
moe.pickup(falafel);

let myDungeon = [new Spider(1), new Spider(1), new Spider(2), new Spider(3), new Spider(5), new Food("🎂", 25)];

let dungeon = new Dungeon(liz, myDungeon);

dungeon.start();
