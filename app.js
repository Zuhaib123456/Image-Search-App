const apikey="k5RXqB696rraQ-wf9pEpcD_9Kv63h2wbLXKNx-FbCBo"

const searchbox=document.getElementById("search-box");
const search=document.getElementById("search");
const resultbox=document.querySelector(".resultbox")
const seemorebtn=document.querySelector(".seemore")
let pages=1;



async function getImages(word,pagenumber,clear=false){
  const response= await fetch(`https://api.unsplash.com/search/photos?query=${word}&page=${pagenumber}&per_page=6&client_id=${apikey}

`)
const results=await response.json();
console.log(results)
if (clear) {
    resultbox.innerHTML = "";
  }

results.results.forEach((word)=>{
  console.log(word)
  const newdiv=document.createElement("div")
  newdiv.classList.add("card")
  resultbox.appendChild(newdiv)
  if (results.results.length > 0) {
    seemorebtn.style.display = "block";
    resultbox.appendChild(seemorebtn)
  } else {
    seemorebtn.style.display = "none";
  }

  newdiv.innerHTML=`<img src=${word.urls.small}><a href=${word.links.html}target="_blank">${word.alt_description} </a>`
  
  
  
})



  
  
  
}

search.addEventListener("click",()=>{
  console.log("clicked");
  pages=1
  getImages(searchbox.value,pages,true);
})
seemorebtn.addEventListener("click",()=>{
  getImages(searchbox.value,pages++,false)
})