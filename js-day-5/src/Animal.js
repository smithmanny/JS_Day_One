export const Animal = class {
    constructor(name , sound) {
        this._name = name
        this._sound = sound
    }

    get name () {
        return this._name
    }

    set name (name) {
        this._name = name
    }

    get sound () {
        return this._sound
    }

    set sound (sound) {
        this._sound = sound
    }

    makeSound () {
        console.log(this._sound)
    }
}

export const Dog = class extends Animal {
    constructor(name, sound) {
        super(name, sound = 'Bark') 
    }
}

export const Cat = class extends Animal {
    constructor(name, sound) {
        super(name, sound = 'Meow')  
    }
}

export const Cow = class extends Animal {
    constructor(name, sound) {
        super(name, sound = 'Moo') 
    }
}