interface Human {
    name : string,
    age : number,
    isMale : boolean
}

const person = {
    name : "aroundthistime",
    age : 25,
    isMale : true
}

const sayHi = (person : Human):boolean => {
    console.log(`Hello ${person.name}! - ${person.age}, you are ${person.isMale ? "man" : "woman"}`);
    return true;
}

sayHi(person);

export {};