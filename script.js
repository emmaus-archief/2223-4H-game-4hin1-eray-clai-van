/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;


var spelerX = 640; // x-positie van speler
var spelerY = 600; // y-positie van speler
var snelheidX = 0;
var snelheidY = 0;
var vijandX = 620;
var vijandY = 80;

var mouseIsPressedVorige = false;
var mouseIsPressedNu = false;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler

   mouseIsPressedVorige = mouseIsPressedNu;
  mouseIsPressedNu = mouseIsPressed;
  if (mouseIsPressedNu === true && mouseIsPressedVorige === false) {
    // nieuwe waaarde voor snelheidX en snelheidY maken
    snelheidX = (mouseX - spelerX) /100;
    snelheidY = (mouseY - spelerY) /100;
    
  }
  
  
  
  if (spelerX < 50 ) {
    snelheidX = snelheidX * -1;
  }

  if (spelerY < 54) {
    snelheidY = snelheidY * -1;
   }

  if (spelerX > 1270) {
    snelheidX = snelheidX * -1;
  }  

  if (spelerY > 810) {
    snelheidY = snelheidY * -1;
  }
  spelerX = spelerX + snelheidX;
  spelerY = spelerY + snelheidY;
  console.log("snelheidX =" + snelheidX);
  // speler remmen
 snelheidX = snelheidX * 1;
 snelheidY = snelheidY * 1;
    
  }
  
  
  // vijand
 
  // kogel


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
    if (spelerX - vijandX < 100 &&
        spelerX - vijandX > -100 &&
        spelerY - vijandY < 100 &&
        spelerY - vijandY > -100 ) {
       console.log("botsing")
        }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
    fill("green");
    rect(0,0, 1280, 720);

  // keepersvak
    fill("white");
    rect(400,1,10,100);
    rect(820,1,10,100);
    rect(920,1,10,200);
    rect(300,1,10,200);
    strokeWeight(5);
    stroke(255,255,255); 
    
    
    line(830,100,400,100);
    line(920,200,300,200);
  // penalty en 16 metergebied
    ellipse(620, 480, 70, 70);
 
  // vijand
  fill("red");
  ellipse(vijandX, vijandY, 50, 50);
  

  // kogel

  // speler
  fill("gray");
  ellipse(spelerX - 20, spelerY -120, 50, 50);


  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background("green");
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}



