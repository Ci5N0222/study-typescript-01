// ts 파일은 js로 변환해야 한다.
// 자바스크립트 파일로 컴파일 한다.
let userName = "NohSion";
// error : userName = 123;
let nameArray = ["NohSion", "Noh"];
// error nameArray = [123, "Noh"];
let nameObject = { name: "NohSion" };
// error nameObject = {name: 123};
// Union type
let nameType = 123;
// function type
const func = (x) => {
    return x * 2;
};
class User {
    constructor(name) {
        this.name = name;
    }
}
