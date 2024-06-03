// 2.1 변수, 매개 변수, 반환 값에 타입을 붙이면 된다.

const str: string = 'hello';
const num: number = 21;
const bool: boolean = true;
const u: undefined = undefined;
const sys: symbol = Symbol('sym');
const big: bigint = 100000000n; // es2020 버전이 낮은 건 지원 안함.
const obj: object = {age: 21, name: 'test'};

// 반환값의 타입은 소괄호 뒤에 표기한다.
function plus(x: number, y: number): number {
    return x + y;
}
const minus = (x: number, y : number) : number => x - y;