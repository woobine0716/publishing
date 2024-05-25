// const 변수이름 = 데이터[타입: 기본 + 참조]
//기본 타입: number, string

// 타입 변환
// 1.명시적 타입 변환 [대놓고]
// 2. 암묵적 타입 변환 [몰래]


// 숫자화
// 1. Number("1004") [명시적]
// 2. parseInt("1004") //  parseFloat("3.14")  [명시적]
// parse = 해석하세요 Int = 정수 Float 실수
// - 숫자가 아닌 문자를 만나면 그 즉시 해석 ㅅㄱ 안함
// 3. + [암묵적]

// 문자화 [명시적]
// 1.String(123)
// 2.somethihg + "문자" + something [암묵적]
// 문자가 하나라도 있으면 문자화 된다.

// div: w 100 h 100 bg: 아무거나
// -, + div 유동적으로 넓이 높이가 변하도록 하는 프로그램 만드세요

const divTag = document.createElement("div");
divTag.style.height = "100px";
divTag.style.width = "100px";
divTag.style.backgroundColor = "red";
document.body.appendChild(divTag);

const minus = document.createElement("button");
minus.innerText = `-`;
const plus = document.createElement("button");
plus.innerText = `+`;

minus.addEventListener("click", () => {
    divTag.style.height = parseInt(divTag.style.height) - 1 + "px";
    divTag.style.width = parseInt(divTag.style.width) - 1 + "px";
})
plus.addEventListener("click", () => {
    divTag.style.height = parseInt(divTag.style.height) + 1 + "px";
    divTag.style.width = parseInt(divTag.style.width) + 1 + "px";
})
document.body.appendChild(minus);
document.body.appendChild(plus);