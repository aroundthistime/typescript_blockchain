const name = "aroundthistime",
    age = 25,
    isMale = true;

const sayHi = (name:string, age:number, isMale?:boolean):boolean => {
    console.log(`Hello ${name}! - ${age}, you are ${isMale ? "man" : "woman"}`);
    return true;
}

sayHi(name, age, isMale);

export {};