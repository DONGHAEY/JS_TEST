// let example = 'Wah!';
// console.log(example.padStart(10, 'W'));
// console.log(example.padEnd(10, '!'));

class Animal {
    constructor(type, legs) {
        this._type = type;
        this.legs = legs;
    }
    makeNoise(sound='loud noise') {
        console.log(sound);
    }
    get type() {
        return this._type.toUpperCase();
    }
    set type(newType) {
        if(newType) {
            this._type = newType;
        }
    }
    static return10() {
        return 10;
    }
}

class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
    makeNoise(sound="Meow") {
        console.log(sound);
    }
}


let dog = new Animal('shiba inu', 4);
let cat = new Cat('Spyynx', 4, 1);

dog.makeNoise('Bark! Bark!');
cat.makeNoise('Meow');
dog._type = 'Jindo';
console.log(dog.legs);
console.log(dog._type);
console.log(Animal.return10());
console.log(cat);

//https://velog.io/@onejaejae/JavaScript-%EB%AC%B8%EB%B2%95-static-%EB%A9%94%EC%86%8C%EB%93%9C-%EB%B0%8F-static-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0