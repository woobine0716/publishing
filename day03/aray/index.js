// 데이터 타입 : 
// 기본[str, num, bool, undefined]
// 참조[aray]
// const a = !!"" // false

// a[0] = 10;
// a[1] = 20;
// a[2] = 30;
// a[3] = 40;
// a[4] = 50;
// console.log(a[0]+a[4]) 60

// const a = [10,20,30,40,50];
// const b = a.push(60)
// console.log(b)
// const c = a.pop()
// console.log(c)

const menu = ["아메리카노","리떼","바닐라"];
// 추가
menu.push("민트");
menu.push("딸기스무디");
menu.push("디카페인 아메리카노");
// menu.length //아메리카노, 라뗴, 바닐라, 민트, 디카페인 아메리카노(6글자)
// 갱신
menu[0] = "빅아메리카노";
// 삭제
delete menu[3];
menu.pop();
// console.log(menu);

//forEach 순회[한명씩 보기]
menu.forEach((v)=>{
    console.log(v);
});

const nums = [1, 3, 5, 7, 9];
nums.forEach((v)=>{
    console.log(v + 10); // 11, 13, 15, 17, 19
});
nums.forEach((v)=>{
    console.log(v ** v);
});