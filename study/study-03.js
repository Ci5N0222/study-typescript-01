/**
 * 함수
 * 1. 길고 복잡한 코드를 한단어로 축약 가능
 * 2. 숫자 집어넣으면 숫자나오는 블랙박스 역할
 */
/**
 * parameter : input 값
 * return : output 값
 */
function myFunc(x) {
    return x * 2;
}
myFunc(2); // 4
// myFunc('2') : error
// void 타입 (return을 사용하지 않는 함수에 사용)
function myFunc1(x) {
    1 + 1;
    // return 1 + 1;  : return을 하므로 error
}
// 타입 지정된 파라미터는 필수로 입려해야한다 (자바스크립트와 다름)
function myFunc2(x) {
    // 파라미터가 옵션일 경우 
    // 파라미터 변수? : 타입
    // 파라미터 변수? --> x: number | undefined 와 같은 효과
}
function myFunc3(x) {
    if (x) {
        console.log("안녕하세요 ", x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
function myFunc4(x) {
    return x.toString().length;
}
function myFunc5(x, y, z) {
    let score = 0;
    score += x;
    if (y == true)
        score += 500;
    if (z == "상")
        score += 100;
    if (score >= 600) {
        return "결혼 가능";
    }
}
