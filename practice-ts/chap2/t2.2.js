// 2.2 타입 추론을 적극 활용하자
// ** 타입스크립트가 타입을 제대로 추론하면 그대로 쓰고, 틀리게 추론하면 올바른 타입을 표기한다
function plus(x, y) {
    return x + y;
}
var result = plus(2, 3);
var result2 = plus(4, 5);
// 타입 표기시 리터럴 타입으로 표기 할 수 있다.
var env = 'dev';
// 타입 표기시 넓은 타입으로 표기해도 문제가 없다.
var str1 = 'hello';
var str2 = 'hello';
var str3 = 'hello'; // 객체 의미 X, null or `undefined`를 제외한 모든 타입
// let을 쓰면 const와는 전혀 다르게 타입을 추론한다. => 타입 넓히기 라고 부른다
// 특이한점은, null과 undefined를 let변수에 대입할때는 any로 추론합니다.
var sym1 = Symbol.for('sym');
var sym2 = Symbol.for('sym');
var sym3 = Symbol.for('sym');
var sym4 = Symbol.for('sym');
// if(sym1 === sym2){} => 에러남
if (sym3 === sym4) { }
if (sym2 === sym3) { }
