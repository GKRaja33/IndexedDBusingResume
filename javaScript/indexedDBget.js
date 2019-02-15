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
var getData=store.getAll();
getData.onsuccess=function(get) {
  console.log(get.target.result);
  Personal(get.target.result);
}
function Personal(Personal) {
var cards=document.querySelector(".cards");
console.log(cards);
for (var i in Personal){
  var card=document.createElement("div");
  card.classList.add("card")
  cards.appendChild(card);
  var img=document.createElement("img");
  img.src="img/profile.jpg";
  card.appendChild(img);
  var name=document.createElement("h2");
  name.textContent=Personal[i].Name;
  var a=document.createElement("a");
  a.href="resume.html?id="+Personal[i].Id;
  a.appendChild(name);
  card.appendChild(a);

}
}
}
