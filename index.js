let board = document.querySelector(".board");
let circleArr = [];
let crossArr = [];
let clickedArr =[];
let differenceArr = [];
let row1 = ["1","2","3"];
let row2 = ["4","5","6"];
let row3 = ["7","8","9"];
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
    console.log(circleArr);
    console.log(crossArr);
    console.log(clickedArr);
    console.log(differenceArr);
})

let rowCheck =(Arr,rowArr)=>{
    const containsAll = rowArr.every(element => {
        return Arr.includes(element);
    });
    return containsAll;
}

let check = (Arr, currentName)=>{
    differenceArr = [];
    let rowCheckValue =false;
    let colCheckValue =false;
    for(let i=0; i<=Arr.length-1; i++){
        for(let j=i; j<=Arr.length-1; j++){
            if(i===j){
                continue;
            }
            let difference = Arr[i] - Arr[j];
            if(difference<=0){
                difference = -difference;
            }
            if(!differenceArr.includes(difference)){
                differenceArr.push(difference);
            }
            else{
                if(difference == 1){
                    if(rowCheck(Arr,row1) || rowCheck(Arr,row2)|| rowCheck(Arr,row3)){
                        rowCheckValue = true;
                    }
                    else{
                        break;
                    }
                }
                differenceArr.push(difference);
                setTimeout(()=>{
                    alert(`${currentName} Won`);
                },150)
            }
        }
    }

}