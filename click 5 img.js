let click =1;
let click2 =1;
let click3 =1;
let click4 =1;
let click5=1;

function anh1() {
    ketqua.innerHTML = "";
    if (click===1){
        img1.src = "monkey_part1x1.jpg";
        click = 2
    }else if(click === 2){
        img1.src = "panda_swap_part1x1.jpg"
        click=0
    }else {
        img1.src ="funny-cat1_part1x1.jpg"
        click=1
    }
    if((click===0 && click2===0 && click3===0 && click4===0 && click5===0)
    || (click===1 && click2===1 && click3===1&& click4===1 && click5===1)
    || (click===2 && click2===2 && click3===2 && click4===2 && click5===2)){
        document.getElementById("ketqua").innerHTML ='Right'
    }
    
}
function anh2() {
    ketqua.innerHTML = "";
    if (click===1){
        img2.src = "monkey_part2x1.jpg";
        click = 2
    }else if(click === 2){
        img2.src = "panda_swap_part2x1.jpg"
        click=0
    }else {
        img2.src ="funny-cat1_part2x1.jpg"
        click=1
    }
    if((click===0 && click2===0 && click3===0 && click4===0 && click5===0)
        || (click===1 && click2===1 && click3===1&& click4===1 && click5===1)
        || (click===2 && click2===2 && click3===2 && click4===2 && click5===2)){
        document.getElementById("ketqua").innerHTML ='Right'
    }
}
function anh3() {
    ketqua.innerHTML = "";
    if (click === 1) {
        img3.src = "monkey_part3x1.jpg";
        click = 2
    } else if (click === 2) {
        img3.src = "panda_swap_part3x1.jpg"
        click = 0
    } else {
        img3.src = "funny-cat1_part3x1.jpg"
        click = 1
    }
    if ((click === 0 && click2 === 0 && click3 === 0 && click4 === 0 && click5 === 0)
        || (click === 1 && click2 === 1 && click3 === 1 && click4 === 1 && click5 === 1)
        || (click === 2 && click2 === 2 && click3 === 2 && click4 === 2 && click5 === 2)) {
        document.getElementById("ketqua").innerHTML = 'Right'
    }
}
function anh4() {
    ketqua.innerHTML = "";
    if (click === 1) {
        img4.src = "monkey_part4x1.jpg";
        click = 2
    } else if (click === 2) {
        img4.src = "panda_swap_part4x1.jpg"
        click = 0
    } else {
        img4.src = "funny-cat1_part4x1.jpg"
        click = 1
    }
    if ((click === 0 && click2 === 0 && click3 === 0 && click4 === 0 && click5 === 0)
        || (click === 1 && click2 === 1 && click3 === 1 && click4 === 1 && click5 === 1)
        || (click === 2 && click2 === 2 && click3 === 2 && click4 === 2 && click5 === 2)) {
        document.getElementById("ketqua").innerHTML = 'Right'
    }
}
function anh5() {
    ketqua.innerHTML = "";
    if (click === 1) {
        img5.src = "monkey_part5x1.jpg";
        click = 2
    } else if (click === 2) {
        img5.src = "panda_swap_part5x1.jpg"
        click = 0
    } else {
        img5.src = "funny-cat1_part5x1.jpg"
        click = 1
    }
    if ((click === 0 && click2 === 0 && click3 === 0 && click4 === 0 && click5 === 0)
        || (click === 1 && click2 === 1 && click3 === 1 && click4 === 1 && click5 === 1)
        || (click === 2 && click2 === 2 && click3 === 2 && click4 === 2 && click5 === 2)) {
        document.getElementById("ketqua").innerHTML = 'Right'
    }
}