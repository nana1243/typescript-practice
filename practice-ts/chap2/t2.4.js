//2.4 배열 말고 튜플도 있다.
// `<>` 표기법을 제네릭이라고 부른다.
// 빈 배열은 any[]로 추론 되므로 주의해야한다.
var arr_v1 = ['1', '2', '3'];
var arr2_v1 = [1, 2, 3];
var arr3_v1 = [];
// array_v1[3] 은 `undefined`인데도 toFixed() 메서드를 붙일 수 있는 문제가 잇다.
// 이러한 문제를 튜플로 해결 할 수 있다.
var array_v1 = [123, 4, 56];
array_v1[3].toFixed();
// 아래 예제를 확인해보자!
var tuple = [1, false, 't'];
tuple[0] = 3;
// tuple[2] = 5
// tuple[3] = 'no' //type "no" is not assignalbe to type 'undefined'
tuple.push('yes');
