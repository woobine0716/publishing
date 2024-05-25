const fruits = ["사과","오렌지","파인애플","키위","망고","아보카도"]

// 사과 버튼
// 오렌지 버튼
// 파인애플 버튼
// html에 만들고
//각각 버튼을 누르면 ~~가 선택되었습니다. 태그를 만들기


// fruits.forEach((v)=>{
// const btn = document.createElement("button");
// btn.innerText = v
// btn.addEventListener('click',()=>{
//     window.alert(`${v} 과일이 클릭되었습니다.`);
// })
// document.body.appendChild(btn);
// });


const coffe = ["아메리카노 3000원","라떼 4000원","바닐라라떼 5000원"]
coffe.forEach((v)=>{
    const btn = document.createElement("button");
    btn.innerText = v;
    btn.addEventListener('click',()=>{
        const total = document.querySelector(".total");
        const price = Number(v.split("")[1]);
       total.innerText = Number(total.innerText) + price;
    });
    document.body.appendChild(btn);
});