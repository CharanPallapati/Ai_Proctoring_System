function MakeFullScreen(){

    FullScreen();

    const x = document.getElementById("buttons");

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "prev";
    prevButton.onclick = prev;
    x.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "next";
    nextButton.onclick = next;
    x.appendChild(nextButton);

    x.appendChild(document.createElement("br"));

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "submit";
    submitButton.onclick = submit;
    x.appendChild(submitButton);

    document.getElementById("MakeFullScreen").remove();

    next();
}