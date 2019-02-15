function submit() {
  var career=document.getElementById('career').value;
  var name=document.getElementById('name').value;
  var role=document.getElementById('role').value;
  var phnumber=document.getElementById('phnumber').value;
  var email=document.getElementById('email').value;
  var degree=document.getElementById('degree').value;
  var collegename=document.getElementById('dcollege').value;
  var branch=document.getElementById('dbranch').value;
  var dmarks=document.getElementById('dmarks').value;
  var idegree=document.getElementById('idegree').value;
  var icollege=document.getElementById('icollege').value;
  var ibranch=document.getElementById('ibranch').value;
  var imarks=document.getElementById('imarks').value;
  var sdegree=document.getElementById('sdegree').value;
  var schoolName=document.getElementById('school').value;
  var schoolMedium=document.getElementById('medium').value;
  var smarks=document.getElementById('smarks').value;
  var skils=document.getElementById('skils').value;

// browser checking

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
// console.log(store);
store.put({
  Career:career,
  Name:name,
  Roll:role,
  PhoneNo:phnumber,
  Email:email,
  Educational:[
    {
      degree:degree,
      collegename:collegename,
      branch:branch,
      dmarks:dmarks
    },
    {
      degree:idegree,
      collegename:icollege,
      branch:ibranch,
      dmarks:imarks
    },
    {
      degree:sdegree,
      collegename:schoolName,
      branch:schoolMedium,
      dmarks:smarks
    }
  ],
  skils:skils
});
window.open("index.html","_blank");
}

request.onerror=function() {
console.log("error");
}
}
