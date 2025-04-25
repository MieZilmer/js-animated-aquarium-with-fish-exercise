"use strict";

document.addEventListener("DOMContentLoaded", function () {
   // All JavaScript goes inside here
const anchor = document.querySelector(".anchor");
const anchorTooltip = document.getElementById("anchor-tooltip");
const audio = document.querySelector("audio");
const tooltip = document.getElementById("tooltip");


anchor.addEventListener("mouseenter", () => {
   const rect = anchor.getBoundingClientRect();
   anchorTooltip.style.opacity = "1";
   anchorTooltip.style.left = `${rect.left + 60}px`;
   anchorTooltip.style.top = `${rect.top - 30}px`;
 
   if (audio.paused) {
     anchorTooltip.innerText = "Klik for at starte musikken";
   } else {
     anchorTooltip.innerText = "Klik for at stoppe musikken";
   }
 });

 anchor.addEventListener("mouseleave", () => {
   anchorTooltip.style.opacity = "0";
 });

 anchor.addEventListener("click", () => {
   audio.muted = false;
   if (audio.paused) {
     audio.play();
   } else {
     audio.pause();
   }
 });


 const fishInfo = [
   {
      className: "redfish",
      art: "Rød Snapper🐟",
      alder: "2 år",
      latinsknavn: "Lutjanus campechanus",
      længde: "Op til 100 cm 📏",
      vægt: "Typisk 2–4 kg⚖️",
      levested: "Mexicanske Golf og det sydøstlige USA🌍"
    },
    {
      className: "orangefish",
      art: "Tropefisk (orange) 🐠",
      alder: "1–3 år",
      latinsknavn: "Amphiprioninae",
      længde: "5–15 cm 📏",
      vægt: "100–300 g ⚖️",
      levested: "Koralrev i Stillehavet og Det Indiske Ocean 🌍"
    },
    {
      className: "flatbluefish",
      art: "Kirurgfisk (blå) 🐟",
      alder: "Op til 20 år",
      latinsknavn: "Paracanthurus hepatus",
      længde: "Op til 30 cm 📏",
      vægt: "Typisk 600 g ⚖️",
      levested: "Korallrev i det tropiske Stillehav 🌍"
    },
    {
      className: "bluefish",
      art: "Blåfisk 🐟",
      alder: "Op til 9 år",
      latinsknavn: "Pomatomus saltatrix",
      længde: "Op til 1 m 📏",
      vægt: "Typisk 2–14 kg ⚖️",
      levested: "Tempererede og tropiske havområder 🌍"
    },
    {
      className: "codfish",
      art: "Torsk 🐟",
      alder: "Op til 25 år",
      latinsknavn: "Gadus morhua",
      længde: "Op til 150 cm 📏",
      vægt: "Op til 40 kg ⚖️",
      levested: "Nordlige Atlanterhav, især omkring Danmark 🌍"
    },
    {
      className: "tropicalfish",
      art: "Tropisk fisk 🐠",
      alder: "1–5 år",
      latinsknavn: "Chaetodon (sommerfuglefisk)",
      længde: "5–20 cm 📏",
      vægt: "100–500 g ⚖️",
      levested: "Koralrev i varme oceaner 🌍"
    },
    {
      className: "pirate-fish",
      art: "Piratfisk 🏴‍☠️",
      alder: "10 år",
      latinsknavn: "Fictus piraticus",
      længde: "20-30 cm 📏",
      vægt: "1-3 kg ⚖️",
      levested: "Amazonfloderne 🌍"
    },
    {
      className: "red-booble-fish",
      art: "Rød boblefisk 🐡",
      alder: "Ukendt",
      latinsknavn: "Fictus ruber bulla",
      længde: "20 cm 📏",
      vægt: "300 g ⚖️",
      levested: "Fantasihav 🌍"
    },
    {
      className: "striped-orange-fish",
      art: "Klovnfisk 🐠",
      alder: "Op til 6 år",
      latinsknavn: "Amphiprion ocellaris",
      længde: "Op til 11 cm 📏",
      vægt: "Op til 250 g ⚖️",
      levested: "Koraller i Stillehavet og Det Indiske Ocean 🌍"
    }

 ];

 fishInfo.forEach((fish) => {
   const fishElem = document.querySelectorAll("." + fish.className);
 
   fishElem.forEach((el) => {
     el.addEventListener("click", (e) => {
      tooltip.innerHTML = `
      <strong>${fish.art}</strong><br>
      Latinsk navn: ${fish.latinsknavn}<br>
      Alder: ${fish.alder}<br>
      Længde: ${fish.længde}<br>
      Vægt: ${fish.vægt}<br>
      Levested: ${fish.levested}
    `;
       tooltip.style.top = `${e.pageY - 40}px`;
       tooltip.style.left = `${e.pageX + 20}px`;
       tooltip.style.opacity = "1";
       tooltip.style.fontSize = "1.15rem";
 
       // Hide tooltip after 3 seconds
       setTimeout(() => {
         tooltip.style.opacity = "0";
       }, 3000);
     });
   });
 });



 });


