// 타입을 미리 정하기 애매할 때 (union type, any, unknown)
// Union type (타입이 2개 이상 합친 새로운 타입)
let memberUser = 123;
// Union type 이지만 변수에 number로 할당을 한 경우 string 타입이 될 수 없다.
// error : memberUser = 'kim'
// Array union type
let memberUsers = [1, '2', 3];
// Object union type
let memberUsersObject = { a: 123 };
// Any type (모든 자료형을 허용)
// 타입을 사용하지 않는 일반 JS로 사용하겠다는 뜻 --> 버그가 나와도 잡아주지 않는다.
let memberNames;
memberNames = 123;
memberNames = [];
// unknown tpye
let userNames;
userNames = 123;
userNames = {};
// [unknown] let uN: string = userNames;
// uN은 string type만 가능하여 {}값을 할당받은 userNames이 들어올 시 오류 발생
// [any]  let uN: string = memberNames;
// any type은 모든 것이 다 들어올 수 있기 때문에 오류로 잡지 못함
// 타입스크립트는 타입에 대해 엄격하다.
// 간단한 수학 연산도 타입이 맞아야 가능하다. (any, number, bigint)
// error : userNames - 1
// unknown은 number 타입이 아님 하지만 any 타입일 경우 오류가 발생하지 않음
let userAge;
// error : userAge + 1;
// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string | number 타입 + 1 (불허)
let userAges = 1;
// error : userAges + 1;
// userAges는 숫자 1이 들어갔지만 타입이 number가 아니기 때문에 오류 발생
let userName1 = 'kim';
let userAge1 = undefined;
let married = false;
let Sion = [userName1, userAge1, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
