// Narrowing (typeof 연산자)
// 변수의 타입이 불확실하면 if문으로 Narrowing 해야 조작 가능하다.
function myFunction1(x) {
    // if (x의 타입이: string 이면)
    if (typeof x === 'string') {
        x + '1';
    }
    else {
        x + 1;
    }
    let array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    // Narrowing으로 판정해주는 문법
    // 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 된다.
}
// Assertion 문법 (타입 덮어쓰기)
function myFunctio2(x) {
    let array = [];
    array[0] = x;
    // x를 number로 인식
    /**
     * as 문법의 용도
     * 1. Narrowing 할 때 사용
     * 2. type을 변경할 때 사용하는 것이 아니다.
     * 3. 무슨 타입이 들어올지 100% 확실할 때 쓰는 방법
     * 4. 왜 타입 에러가 발생하는 지 모를때, 비상용, 디버깅 용으로 사용
     */
}
