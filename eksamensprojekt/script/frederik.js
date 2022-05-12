console.log("this is working");

//Region dropdown start//
function regionFunction() {
  let regionArray = new Array("København", "Aarhus", "Odense", "Malmø");

  let dropdown1 = document.getElementById("region");

  for (let i = 0; i < regionArray.length; ++i) {
    dropdown1[dropdown1.length] = new Option(regionArray[i], regionArray[i]);
  }
}
  regionFunction()
//Region dropdown slut//

//GOD DAG TEKST
function hilsenfunction() {

  const hour = new Date().getHours();
  let hilsen;

  if (hour < 18) {
    hilsen = "Tak for at henvende dig til os, hav en god dag!";
  } else {
    hilsen = "Tak for at henvende dig til os, hav en god aften";
  }

  document.getElementById("hilsen").innerHTML = hilsen;
}
å
hilsenfunction()
