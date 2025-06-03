import Character from "./Character";

export default class RangedCharacter extends Character{
    constructor(name, type, attack, defence) {
        super(name, type, attack, defence);
        this.stoned = false;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = Boolean(value);
    }

    get attack() {
        // this.attack[x]; x-distance; 1<=x<=5
        let attacks = new Uint16Array(6);
        for (let i in attacks) {
            attacks[i] = (i>0)*(this._attack*(1-0.1*(i-1))-this.stoned*Math.log2(i)*5);
        }
        return attacks;
    }

    set attack(value) {
        this._attack = value;
    }
}