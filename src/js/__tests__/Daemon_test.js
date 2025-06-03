import RangedCharacter from '../class/RangedCharacter';
import Daemon from '../class/Daemon';

test("Создание демона", () => {
    expect(new Daemon("Демон")).toEqual(new RangedCharacter("Демон", "Daemon", 10, 40));
})

test.each([
    [1],
    ["Д"],
    ["Наиучший демон"]
])("Создание демона с невозможным именем %s", name => {
    expect(() => new Daemon(name)).toThrow(new Error("Character's name must be a string between 2 and 10 characters long"));
})