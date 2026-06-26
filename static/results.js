let answers=new Array(Object.keys(questions).length+1).fill(0);
let visited=new Array(Object.keys(questions).length+1).fill(-1);
document.addEventListener("change", (e) => {
    answers[e.target.name] = parseInt(e.target.value,10);
    visited[e.target.name] = parseInt(e.target.id,10);
     
});

function cal_score(){
    let score=Number(0);
    answers.forEach((i)=>{
        score+=Number(i);
    });
     return score;
}

