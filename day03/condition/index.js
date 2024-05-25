// condition[조건]
// const a = Number(prompt("숫자입력:"));
// if(a > 0){
// alert("0보다 큽니다.");
// }else if(a==0){
// alert("0입니다.");
// }else{
// ("0보다 작습니다.")
// }
// prompt로 영어점수 입력 받고

// 90점 이상 'a'
// 80점 이상 'b;
// 70점 이상 'c'
// 60점 이상 'd;
// 60점 미만 "나락";

// const point= Number(prompt("점수 입력:"));
// if (point >= 90){
//     alert("a");
// }
// else if (point >= 80){
//     alert("b");
// }
// else if (point >= 70){
//     alert("c");
// }

// else if (point >= 60){
//     alert("d");
// }
// else {
// alert("나락");
// };

// 유저에게 비밀번호 설정을 물어보고

// const special = ["!","@","#","$"]
// special.some((v)=>{
//    return v == "$"
// })
// special.every((v)=>{
//     return v != "@";
// })


// const number = [1,2,3,4,5];
// number.some((v)=>{
//     return v % 2 == 1; // true;
// })

// number.every((v)=>{
//     return v < 6;
// })

// 1. 비밀번호 길이가 8글자 이상이고
// 2. 특수문자 !@#$ 가 하나 들어가야 하고
// 3. I로 시작하고, T로 끝나야 하고 // I와 T를 꼭 시작과 끝에 넣어야 합니다.
// 위의 조건을 모두 통과하면 비밀번호 설정 완료!
const passWord = prompt("비밀번호를 입력하세요.");
const isLengthOver8 = passWord.length >= 8;
const hasSpecialChar = ["!","@","#","$"].some((v)=>{
    return passWord.includes(v);
});
const isValidIT = passWord.startsWith("I")&&passWord.endsWith("T");
if(!isLengthOver8) {
    alert("비밀번호가 짧음");
}
else if(!isValidIT){
alert("I와T를 시작과 끝에 넣으십쇼.");    
}
else{
    alert("비밀번호 생성 완료");
};