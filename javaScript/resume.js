var split;
var query=window.location.search.substring(1).split("?");
var resumeData;
query.map((data)=>{
  let split=data.split("=");
  resumeData=parseInt(split[1]);
  console.log(resumeData);
});
var indexedDB=window.indexedDB||window.webKit.indexedDB||window.mozindexedDB;
indexedDB?console.log("Success"):console.log("not Supported");


// creating IndexedDB DataBase with version
var request=indexedDB.open("formDB",1);
var result;
var store;

request.onupgradeneeded=function(e) {
result=e.target.result;
store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true
});
}

request.onsuccess=function(e) {
// console.log("Db Created");
result=e.target.result;
// console.log(result);
var tx=result.transaction("resume","readwrite");
store=tx.objectStore("resume");
var getData=store.getAll(resumeData);
getData.onsuccess=function(e){
console.log(e.target.result);
profile(e.target.result);

}
var main=document.querySelector(".main");
console.log(main);

function profile(profile){
  profile.map((i)=>{
  let left=document.createElement("div");
  left.classList.add("left");
  let left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);
  let image=document.createElement("img");
  image.src="img/profile.jpg";
  left1.appendChild(image);
  let name=document.createElement("h2");
  name.textContent=i.Name;
  left1.appendChild(name);
  let address=document.createElement("h4");
  address.textContent=i.Roll;
  left1.appendChild(address);
  left.appendChild(document.createElement("hr"));
  var left2=document.createElement("div");
  left2.classList.add("left2");
  left.appendChild(left2);
  let email=document.createElement("p");
  email.textContent=i.Email;
  left2.appendChild(email);
  let phoneno=document.createElement("p");
  phoneno.textContent=i.PhoneNo;
  left2.appendChild(phoneno);
  main.appendChild(left);
  console.log(i.Educational);
  // right Div
  var right=document.createElement("div");
  right.classList.add("right");
  main.appendChild(right);
  // career Object
  let h3=document.createElement("h3");
  h3.textContent="Career Object:";
  right.appendChild(h3);
  right.appendChild(document.createElement("hr"));
  let p=document.createElement("p");
  p.textContent=i.Career;
  right.appendChild(p);
  // educational qualifications
  var education=document.createElement("h3");
  education.textContent="EDUCATIONAL QUALIFICATIONS";
  right.appendChild(education);
  right.appendChild(document.createElement("hr"));
  for (j in i.Educational) {
    let h4=document.createElement("li");
    h4.textContent=i.Educational[j].degree;
    right.appendChild(h4);
    let collegename=document.createElement("p");
    collegename.textContent=i.Educational[j].collegename;
    right.appendChild(collegename);
    let branch=document.createElement("p");
    branch.textContent=i.Educational[j].branch;
    right.appendChild(branch);
    let dmarks=document.createElement("p");
    dmarks.textContent=i.Educational[j].dmarks+"%";
    right.appendChild(dmarks);
  }
  let techSkills=document.createElement("h3");
  techSkills.textContent="Techanical Skills";
  right.appendChild(techSkills);
  right.appendChild(document.createElement("hr"));
  let techSkillsData=document.createElement("p");
  techSkillsData.textContent=i.skils;
  right.appendChild(techSkillsData);
});
}

}
