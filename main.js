myList = [];

//arrow img
const upArrow = "img/up.png";
const downArrow = "img/down.png";

function makeNewDiv(rapper) {
  let box = document.createElement("div");
  box.setAttribute("id", "box");
  document.body.appendChild(box);

  let finalImg;
  if(rapper.preRanking >= rapper.ranking){
    finalImg = downArrow;
  }else{
    finalImg = upArrow;
  }
  
  let percent = rapper.preRanking / rapper.ranking;
  percent = Math.round(100 * percent) / 10;
  percent = percent * 2;

  let percentSymbol, percentClass;
  if(rapper.ranking > rapper.preRanking) {
    percentSymbol = "+";
    percentClass = "percentage-pos";
  }else{
    percentSymbol = "-";
    percentClass = "percentage-neg";
  }

  let curAge = new Date().getFullYear();
  let age = curAge - rapper.age;


  let output = document.createElement("div");
  output.innerHTML = `<div class="container">
        <div class="flex-container center">
            <div id="temp-box">
                <div class="nameBox">
                    <h3 id="rapper-name">${rapper.name}</h3>
                    <div class="tinybox"><img id="arrow" src=${finalImg}></div>
                    <h6 class="percentage ${percentClass}">${percentSymbol}${percent}%</h6>
                </div>
                <div class="picBox pb"><img src="${rapper.img}" id="picture"></div>
            </div>
            <div class="picBox" id="infoBox">
                <ul id="info">
                    <li id="name"><span id="first-word">name</span>: ${rapper.name}</li>
                    <li id="age"><span id="first-word">age</span>: ${age}</li>
                    <li id="from"><span id="first-word">from</span>: ${rapper.from}</li>
                    <li id="label"><span id="first-word">label</span>: ${rapper.label}</li>
                    <li id="similar-sound"><span id="first-word">potential</span>: ${rapper.similarSound}</li>
                    <li id="songs">
                    <span id="first-word">
                        hits: 
                    </span>
                    <ol id="song-names">
                        <li id="song1">${rapper.song1}</li>
                        <li id="song2">${rapper.song2}</li>
                        <li id="song3">${rapper.song3}</li>
                    </ol>
                    </li>
                </ul>
            </div>
        </div>
    </div>`;
  box.appendChild(output);
}

//array of rappers

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    rapperInfo = JSON.parse(xhttp.responseText);
    // console.log(rapperInfo);
    upDate(rapperInfo);
  }
};
xhttp.open("GET", "rapper.json", true);
xhttp.send();

//
function upDate(myList) {
  myList.sort(function (a, b) {
    return b.ranking - a.ranking;
  });
  
  for (var i = 0; i < myList.length; i++) {
    makeNewDiv(myList[i]);
  }
  let test = (document.querySelectorAll("#arrow")[0].src = "/img/crown.png");
}


