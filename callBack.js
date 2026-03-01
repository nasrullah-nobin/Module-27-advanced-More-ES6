// document.getElementById('btn').addEventListener('click',function(event){})

function setalLife(isBcs, name, marriage, girlsName) {
  if (isBcs) {
    console.log(name);
    marriage(girlsName)
  }
}

function boloKobul(patri) {
  console.log("Bolo ma kobul", patri);
}
setalLife(true, "asgor", boloKobul, "rita");
