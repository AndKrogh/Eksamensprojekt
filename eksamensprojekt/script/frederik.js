console.log("this is working");

//afdeling dropdown start
function afdelingFunction() {
  let afdelingArray = new Array("København", "Aarhus", "Odense", "Malmø");

  let dropdown = document.getElementById("afdeling");

  for (let i = 0; i < afdelingArray.length; ++i) {
    dropdown[dropdown.length] = new Option(afdelingArray[i], afdelingArray[i]);
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


<!DOCTYPE html>
<html lang="da" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pentia</title>
    <!--Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    <!--Stylesheet-->
    <link rel="stylesheet" href="..\eksamensprojekt\styles\index.css">
    <link rel="stylesheet" href="..\eksamensprojekt\styles\main.css">
    <!--Javascript-->
    <script src="..\eksamensprojekt\script\frederik.js" defer></script>
  </head>
  <body>
    <!--Header start-->
    <header>
      <div class="navbar">
          <div class="logo" onclick="index.html"> <img src="images/pentia_logo.svg" alt="logo">
            <nav class="nav">
              <ul class="navPunkter">
                <li><a href="">Stratecution</a></li>
                <li><a href="cases.html">Cases</a></li>
                <li><a href="">Services</a></li>
                <li><a href="karriere.html">Karriere</a></li>
                <li><a href="">Nyt</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Om Pentia</a></li>
              </ul>
              <div class="burgerlinjer">
                <div class="linje1"></div>
                <div class="linje2"></div>
                <div class="linje3"></div>
              </div>
            </nav>
          </div>
      </div>
    </header>
    <!--Header slut-->

    <div class="banner">
      <div class="pentagon1"></div>
      <div class="pentagon2"></div>
      <h1 class="cases-titel">Pentia</h1>
      <br>
      <p class="cases-undertitel">Creating digital advances</p>
    </div>



    <section id="indeks-galleri" class="wrapper-galleri">
      <div class="galleri-img img4">
          <div><a href="#">Klik for at åbne billedet</a></div>
      </div>
      <div class="galleri-img img5">
          <div><a href="#">Klik for at åbne billedet</a></div>
      </div>
      <div class="galleri-img img6">
          <div><a href="#">Klik for at åbne billedet</a></div>
      </div>
    </section>


    <!--service sektion start-->
    <section class="index-service">
      <div class="row">
        <h2 class="section-heading">Our Services</h2>
      </div>
      <br>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Digital Forretningsudvikling</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h3>Digital Innovation & Konceptudvikling</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-pen-ruler"></i>
            </div>
            <h3>Design af Digitale Produkter & Services</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-magnifying-glass"></i>
            </div>
            <h3>Digital Governance & Organisering</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-brands fa-hubspot"></i>
            </div>
            <h3>enterprise Arkitektur & Integration</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-mobile-screen-button"></i>
            </div>
            <h3>Appudvikling</h3>
            <div class="index-ny">
              Vores nyeste tilføjelse
            </div>
          </div>
        </div>
      </div>
      <br>
        <button class="index-servbutton" type="button" name="button">Læs mere</button>
    </section>

    <section class="index-sektion">
      <div class="index-billede">
        <div class="index-imtekst">
          <h2 style="font-size: 35px">Karriere</h2>
          <p>Bliv en del af vores fantastiske team</p>
          <br>
          <button class="index-karbutton" type="button" name="button">Læs mere</button>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer">
        <h1 class="footerOverskrift">Lad os udfolde dit digitale potentiale</h1>
        <a href=""><button class="btn">Nyhedsbrev</button></a>
        <a href="kontakt.html"><button class="btn">Ring mig op</button></a>

        <div class="wrapper">
          <div class="colum">
            <div class="footertext">
              <h2>København</h2>
              <p>Islands Brygge 55
                2300 København S
                Danmark</p>
              <h2>AArhus</h2>
              <p>Skovvejen 2B
                8000 Aarhus C
                Danmark</p>
            </div>
          </div>

          <div class="colum">
            <div class="footertext">
              <h2>Odense</h2>
              <p>Edisonvej 2
                5000 Odense
                Danmark</p>
              <h2>Malmø</h2>
              <p>Storgatan 22a
                21142 Malmö
                Sverige</p>
            </div>
          </div>

          <div class="colum">
            <div class="footertext">
              <h2>Info</h2>
              <p>+45 70 23 33 30
                info@pentia.dk
                cvr-nr. 20868872</p>
              <p>Kontakt os
                LinkedIn
                Instagram
                Privatlivspolitik
                Presse</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>













* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.banner{
background-color: #0020BF;
}



/* galleri kontainer */
#indeks-galleri {

    z-index: 100;
    padding: 150px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: auto;
    grid-gap: 10px;
    grid-template-areas:
    "galleri-p galleri-p galleri-p "
    "galleri-h2 galleri-h2 galleri-h2 "
    "img1 img2 img3 "
    "img4 img5 img6 "
    "img7 img8 img9" ;
}

.wrapper-galleri {
margin-top: 0px;

}

#indeks-galleri .galleri-img {
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;

}

/* billeder */

#indeks-galleri p{
   grid-area: galleri-p;
}

#indeks-galleri h2{
   grid-area: galleri-h2;
}

#indeks-galleri .img4{
   grid-area: img4;
   background-image: url(../images/img-galleri/bil.png);

}

#indeks-galleri .img5{
   grid-area: img5;
   background-image: url(../images/img-galleri/bygning.png);
}

#indeks-galleri .img6{
   grid-area: img6;
   background-image: url(../images/img-galleri/vindmoelle.png);
}


/* galleri billede titler ved hoover */
.galleri-img div {
    width:  100%;
    height: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}



.galleri-img a {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #ffff;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 4px #5E5E5E;
}

.galleri-img div:hover {
    opacity: 1;
    transition: all ease-in-out 100ms;
}

/* popup vindue når klikket på */

.img-window {
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.8);
   position: fixed;
   top: 0;
   left: 0;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 100;
}

.img-window img {
   max-height: 80vh;
   max-width: 80vw;
}

/* næste billede styling */
.img-btn-next {
   display: block;
   padding: 6px 10px;
   border-radius: 4px;
   background-color: #111111;
   position: fixed;
   top: 48vh;
   z-index: 500;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   color: white;
   cursor: pointer;
   text-transform: uppercase;
}

.img-btn-next:hover {
   opacity: 0.8;
}

.img-btn-prev {
   display: block;
   padding: 6px 10px;
   border-radius: 4px;
   background-color: #111111;
   position: fixed;
   top: 48vh;
   z-index: 500;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   color: white;
   cursor: pointer;
   text-transform: uppercase;
}

.img-btn-prev:hover {
   opacity: 0.8;
}

h2{
   margin: 0;
}


.overlay-text-popup {
  display: block;
   padding: 6px 10px;
   border-radius: 4px;
   background-color: #111111;
   position: fixed;
   top: 30vh;
   left: 50vw;
   z-index: 500;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   color: white;
   cursor: pointer;
   text-transform: uppercase;
}



















/* Service segment start */
.index-service {
  width: 100%;
  display: grid;
  place-items: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.column {
  width: 100%;
  padding: 0 1em 1em 1em;
  text-align: center;
}

.card {
  width: 100%;
  height: 100%;
  padding: 2em 1.5em;
  background: linear-gradient(#ffffff 50%, #0020BF 50%);
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f194c;
  margin: 1em 0;
}

p {
  color: white;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 0.03em;
  align-items: center;
}

.icon-wrapper {
  background-color: #0020BF;
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
}

.card:hover {
  background-position: 0 100%;
}

.card:hover .icon-wrapper {
  background-color: #ffffff;
  color: #0020BF;
}

.card:hover h3 {
  color: #ffffff;
}

.card:hover p {
  color: #f0f0f0;
}

.index-ny{
  font-weight: bold;
  font-size: 13px;
  color: #FF5B4C;
}

.index-servbutton {
color: #333232;
background: transparent;
border: solid #0020BF;
width: 200px;
height: 40px;
font-size: 18px;
font-weight: 600;
letter-spacing: 1px;
border-radius: 15px;
cursor: pointer;
transition-property: background;
box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.index-servbutton:hover{
background: #0020BF;
color: #fff;
}
/* Service segment slut */


/* Karriere segment start */
.index-sektion{
  padding: 5em 1em;
  width: 100%;
  height: 500px;
  display: grid;
  place-items: center;
}

.index-billede {
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("C:/Users/frede/OneDrive/Dokumenter/GitHub/Eksamensprojekt/eksamensprojekt/images/andre/karriere.jpg");
}

.index-imtekst{
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-shadow: 2px 2px 4px #5E5E5E;

}

.index-karbutton {
color: #F7F4F4;
background: transparent;
border: solid #F7F4F4;
width: 200px;
height: 40px;
font-size: 18px;
font-weight: 600;
letter-spacing: 1px;
border-radius: 15px;
cursor: pointer;
transition-property: background;
box-shadow: 2px 2px 4px #5E5E5E;
text-shadow: 2px 2px 4px #5E5E5E;
}

.index-karbutton:hover{
background: #F7F4F4;
color: #666565;
text-shadow: 2px 2px 4px #F7F4F4;

}
/* Karriere segment slut*/


@media screen and (min-width: 768px) {
  /* Service segment start */
  .index-service {
    padding: 0 2em;
  }

  .column {
    flex: 0 50%;
    max-width: 50%;
  }
/* Service segment slut */


/* Karriere segment start */
  .index-sektion{
    padding: 5em 3em;
    width: 100%;
  }
/* Karriere segment slut */
}


@media screen and (min-width: 992px) {


  /* Service segment start */
  .index-service {
    padding: 1em 3em;
  }

  .column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
/* Service segment slut */


/* Karriere segment start */
  .index-sektion{
    padding: 5em 4em;
    width: 100%;
  }
  /* Karriere segment slut */
}


@media (max-width: 1200px) {

   .banner{
   height: 30vh;
   padding-top: 210px;
   }

   .cases-titel {
   font-size: 2.2rem;
   }

   .pentagon1 {
   height: 25%;
    width: 35%;
   left: -62%;
   bottom: 70%;
  }

  .pentagon2{
   height: 25%;
    width: 35%;
   left: 60%;
   bottom: 38%;
  }

  #indeks-galleri .galleri-img {
     height: 300px;
  }


}

@media (max-width: 800px) {

   .banner{
   height: 25vh;
   padding-top: 210px;
   }

   .cases-titel {
   font-size: 1.rem;
   }

     .pentagon1 {
   height: 20%;
    width: 40%;
   left: -58%;
   bottom: 75%;
   }

  .pentagon2{
   height: 20%;
    width: 40%;
   left: 60%;
   bottom: 43%;
  }

  #indeks-galleri .galleri-img {
     height: 130px;
  }
  .galleri-img a {
    font-size: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
