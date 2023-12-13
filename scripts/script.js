// JavaScript Document
console.log("hi");

// variable is jampot, menuknop is het label (naam kan je zelf kiezen)
// tussen de haakjes is wat er in de jampot gaat (wat je ophaalt)
// document zoekt het document door, de queryselector kijkt wel stukje er geselecteerd moet worden 
//(zoekt naar wat er tussen de haakjes staat)
var menuknop = document.querySelector("nav button");

// nu hoef je var er niet voor te zetten en document.query etc ook niet
// onclick is gewoon een actie. openMenu is de functie
// Eerst zeggen activeer de functie, dan uitleggen wat dat inhoud
menuknop.onclick = openMenu;

// definieer de functie, haakjes kan je leeglaten
function openMenu () {
   var navlijst = document.querySelector("nav ul");
   navlijst.classList.toggle("menuopen");
}




