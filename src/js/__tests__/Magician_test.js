import RangedCharacter from '../class/RangedCharacter';
import Magician from '../class/Magician';

test("Создание мага", () => {
    expect(new Magician("Маг")).toEqual(new RangedCharacter("Маг", "Magician", 10, 40));
})

test.each([
    [1],
    ["М"],
    ["Наилучший Маг"]
])("Создание мага с невозможным именем %s", name => {
    expect(() => new Magician(name)).toThrow(new Error("Character's name must be a string between 2 and 10 characters long"));
})