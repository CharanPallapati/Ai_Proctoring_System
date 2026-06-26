
let qno=0;
const q=document.getElementById('question');
const op=document.getElementById('options'); 
function next(){
     qno++;
    if(qno> Object.keys(questions).length){
        qno = Object.keys(questions).length;
    }
    displayQuestions();
}

function displayQuestions(){
    if(qno<= Object.keys(questions).length && qno!=0){
        q.innerHTML=questions[qno].q;
        const div = document.createElement("div");
        questions[qno].option.forEach((data , index )=> {
            
            const radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = qno;  
            radioButton.value = data.value;
            radioButton.id=index;
            
            const label = document.createElement("label");
            label.htmlFor =  index;
            label.textContent = data.text;
             
            if(visited[qno]===index){
                radioButton.checked=true;
            }

            div.appendChild(radioButton);
            div.appendChild(label);
            div.appendChild(document.createElement("br"));
             
            });
        op.innerHTML="";
        op.appendChild(div);
        }
    
    }
  
function prev(){
    qno--;
    if(qno <= 0){
        qno=1;
    }
    displayQuestions();         
}