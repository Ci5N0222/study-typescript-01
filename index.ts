// ts 파일은 js로 변환해야 한다.
// 자바스크립트 파일로 컴파일 한다.

let userName: string = "NohSion";

// error : userName = 123;

let nameArray: string[] = ["NohSion", "Noh"];

// error nameArray = [123, "Noh"];

let nameObject: {name?: string} = {name: "NohSion"};

// error nameObject = {name: 123};

// Union type
let nameType: string | number = 123;

// type save
type MyType = string | number;

// function type
const func = (x: number) : number => {
    return x*2;
}

// (Array) tuple type
type Member1 = [number, boolean];

type Member2 = {
    [key: string] : string,
    name: string
}

class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}