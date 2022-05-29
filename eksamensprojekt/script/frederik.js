console.log("this is working");

//afdeling dropdown start
function afdelingFunction() {
  let afdelingArray = new Array("København", "Aarhus", "Odense", "Malmø");

  let dropdown = document.getElementById("afdeling");

  for (let i = 0; i < afdelingArray.length; ++i) {
    dropdown[dropdown.length] = new Option(afdelingArray[i], afdelingArray[i]);
    // linje 10 tager fat i linje 7 og oprætter en option hvor den tager fat i første element i array og sætter value og text til at være netop denne//
  }
}
  afdelingFunction()
//afdeling dropdown slut

//God dag text start
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

hilsenfunction()
//God dag text slut
