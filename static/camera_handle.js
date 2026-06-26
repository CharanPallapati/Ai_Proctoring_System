
const img = document.createElement("img");

//use time stramp 
// include time in the url to call the route, 
// because the browser using cache instead of making a new request to the url or route.

img.src = "/video" //calling route here.
img.id = "img";
 

document.getElementById("videostream").appendChild(img);


function submit() {

    const img = document.getElementById("img");
    img.remove();
    clearInterval(timer);

    //calling cal_score function to get the scores
    const score = cal_score();

    // here calling stop route or url .
    //route is calling by including score as a argument in url.
     window.location.href = "/stop/" + score+ "/" +Object.keys(questions).length;

}

  let status=setInterval(async() =>{
        let res=await fetch("/status?time="+ new Date().getTime());
        let data=await res.json();
        if(data.status) {
            console.log(data)
             clearInterval(status);

            // here calling stop route or url .
            //route is calling by including score as a argument in url.
             window.location.href = "/stop/" + 0;
        }
    },1000);