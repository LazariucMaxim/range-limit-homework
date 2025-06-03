const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

export default class Character {
    constructor(name, type, attack, defence) {
        if (typeof name != "string" || name.length < 2 || name.length > 10) {
            throw new Error("Character's name must be a string between 2 and 10 characters long");
        }
        if (!types.includes(type)) {
            throw new Error(`Invalid CharacterType: ${type}. See types declaration in src/js/class/Character line 1`);
        }
        if (typeof attack != "number" || attack < 0) {
            throw new Error("Character's attack must be a positive number");
        }
        if (typeof defence != "number" || defence < 0 || defence >100) {
            throw new Error("Character's defence must be a positive number lower than 100");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
}
