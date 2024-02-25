// 타입스크립트 기본 타입 (Primitive types) 정리
// 변수에 타입 지정
let memberName = "Kim";
/**
 * 다른 타입의 값을 입력 시
 * memberName = 123;
 * error : Type 'number' is not assignable to type 'string'.ts(2322)
 */
// Array 자료 형
let members = ['kim', 'park'];
// Object 형
let memberInfo = { name: memberName };
let memberObject = [memberInfo];
/*  타입지정은 원래 자동으로 된다 (타입지정 문법 생략 가능) */
let noneType = "noneType";
let myName = "SionNoh";
let myAge = 33;
let myLocation = "경기도 부천시";
let likeMusic = {
    name: "얀",
    music: "부탁"
};
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
