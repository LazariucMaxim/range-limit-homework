import RangedCharacter from "../class/RangedCharacter";

test("Создание дальника", () => {
    expect(new RangedCharacter("Маг", "Magician", 10, 40)).toEqual({name: "Маг", type: "Magician", _attack: 10, defence: 40, health: 100, level: 1, _stoned: false});
})

test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60],
])("Проверка урона дальника на дистанции: %i", (distance, attack) => {
    const character = new RangedCharacter("Маг", "Magician", 100, 40);
    expect(character.attack[distance]).toBe(attack);
})

test.each([
    [1, 100],
    [2, 85],
    [3, 72],
    [4, 60],
    [5, 48],
])("Проверка урона одурманненого дальника на дистанции: %i", (distance, attack) => {
    const character = new RangedCharacter("Маг", "Magician", 100, 40);
    character.stoned=true;
    expect(character.attack[distance]).toBe(attack);
})