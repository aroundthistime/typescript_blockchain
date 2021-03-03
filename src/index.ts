class Human {
    public name : string;
    public age : number;
    public isMale : boolean;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.isMale = gender === "male";
    }
}

// interface Human {
//     name : string,
//     age : number,
//     isMale : boolean
// }

const me = new Human("aroundthistime", 20, "male");

const sayHi = (person : Human):boolean => {
    console.log(`Hello ${person.name}! - ${person.age}, you are ${person.isMale ? "man" : "woman"}`);
    return true;
}

sayHi(me);

export {};