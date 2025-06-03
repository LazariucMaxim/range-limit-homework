import Character from '../class/Character';

test("Создание персонажа", () => {
    expect(new Character("Лучник", "Bowman", 25, 25)).toEqual({name: "Лучник", type: "Bowman", health:100, level:1, attack: 25, defence: 25});
})

test.each([
    [1, "Bowman", 25, 25, "Character's name must be a string between 2 and 10 characters long"],
    ["Л", "Bowman", 25, 25, "Character's name must be a string between 2 and 10 characters long"],
    ["Наиучший лучник", "Bowman", 25, 25, "Character's name must be a string between 2 and 10 characters long"],
    ["Лучник", "Bowerman", 25, 25, "Invalid CharacterType: Bowerman. See types declaration in src/js/class/Character line 1"],
    ["Лучник", "Bowman", -25, 25, "Character's attack must be a positive number"],
    ["Лучник", "Bowman", "25hp", 25, "Character's attack must be a positive number"],
    ["Лучник", "Bowman", 25, -25, "Character's defence must be a positive number lower than 100"],
    ["Лучник", "Bowman", 25, 125, "Character's defence must be a positive number lower than 100"],
    ["Лучник", "Bowman", 25, "25%", "Character's defence must be a positive number lower than 100"]
])("Создание невозможного персонажа: {имя: %s, тип: %s, атака: %s, защита: %s}", (name, type, attack, defence, error) => {
    expect(() => new Character(name, type, attack, defence)).toThrow(new Error(error));
})