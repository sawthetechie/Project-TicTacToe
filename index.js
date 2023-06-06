let board = document.querySelector(".board");
let circleArr = [];
let crossArr = [];
let clickedArr =[];
let differenceArr = [];
let correctBox = [ ["1","2","3"],
["4","5","6"],
["7","8","9"],
["1","4","7"],
["2","5","8"],
["3","6","9"],
["1","5","9"],
["3","5","7"] ];

let turn = 1;

board.addEventListener("click",(event)=>{
    let box = event.target;
    let boxId = box.id;

    if(!clickedArr.includes(boxId)){
        clickedArr.push(boxId);
        if(turn % 2 != 0){
            circleArr.push(boxId);
            box.innerHTML="<img src='image/circle-regular.svg'/>";
            check(circleArr, "circle");
            
        }
        else{
            crossArr.push(boxId);
            box.innerHTML="<img src='image/xmark-solid.svg'/>";
            check(crossArr, "cross");  
        }
        turn++;
    }
    console.log("circle",circleArr);
    console.log("cross",crossArr);
    console.log("cliked",clickedArr);
    console.log("diff",differenceArr);
})

let containsCheck =(Arr,rowArr)=>{
    const containsAll = rowArr.every(element => {
        return Arr.includes(element);
    });
    return containsAll;
}


let check = (Arr, currentName)=>{
    for(i=0;i<=correctBox.length-1;i++){
        let checkValue = containsCheck(Arr,correctBox[i]);
        if(checkValue == true){
            setTimeout(()=>{
                alert(`${currentName} Won`);
            },150);
        }
    }

}
