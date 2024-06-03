// 2.3 값 자체가 타입인 리터럴 타입이 있다.
// 자바스크립트에서는 변수를 let으로 선언하면 어떤값이든 자유롭게 대입할 수 있다.
// 그러나, ts에서는 표기한 타입과 일치하는 값만 대입가능하다
// 자유를 포기하는 대신 타입 안정성을 챙길 수 있다.
var str_v = 'hello';
// @ts-ignore
str_v = 'test';
var obj_v = { name: 'zero' };
var arr_v = [1, 3, 'five'];
var arr_v_1 = [1, 3, 'five'];
// 콜론 대신이 =>
var func = function (amount, unit) { return amount + unit; };
// 값이 변하지 않는 것이 확실하다면 as const
var obj2 = { name: 'zero' }; // 타입이 고정되어 추론되는걸 볼 수 있다. obj의 속상 앞에 readonly라는 수식어를 붙는다
var arr2 = [1, 3, 'five'];
