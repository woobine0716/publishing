const fruit = ["apple","banana","orange","melon","kiwi"];
fruit.forEach((v)=>{
    console.log(` ${v} a를 ${v.includes("a") ? "포함" : "미포함"}`);
});



fruit.forEach((v)=>{
   const isSixOver =  v.length >= 6;
   const result = isSixOver ? v.toUpperCase() : v.repeat(2);
   console.log(result);
});

// 6글자 이상이면 대문자화 하고, 아니면 해당단어를 두 번 반복한 단어로 표시
// ex) BANANA, appleapple
fruit.forEach((v)=>{
    console.log(v.toUpperCase().repeat(v.length));
});