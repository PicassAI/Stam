(function (d3) {
  'use strict';

  const svg = d3.select('svg');
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  
  const margin = { top: 10, right: 0, bottom: 0, left: -5180};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const treeLayout = d3.tree().size([innerHeight*12.5, innerWidth/9.7]); // Tree Size Instellen

// Rect Shadow
var defs = svg.append("defs");

var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "150%");

filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 1.3)
    .attr("result", "blur");

filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 0)
    .attr("dy", 3)
    .attr("result", "offsetBlur");

var feMerge = filter.append("feMerge");
feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");    

// Gradient Male
var gradient_M = svg.append("defs").append("linearGradient")
    .attr("id", "gradient_M")
    .attr("x1", "0%")
    .attr("y1", "40%")
    .attr("x2", "0%")
    .attr("y2", "100%");

gradient_M.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#1a1aff");// background:linear-gradient(to top,#0000b3,#1a1aff);

gradient_M.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#0000b3"); 

// Gradient Female
var gradient_V = svg.append("defs").append("linearGradient")
    .attr("id", "gradient_V")
    .attr("x1", "0%")
    .attr("y1", "40%")
    .attr("x2", "0%")
    .attr("y2", "100%");

gradient_V.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#ff1a4b"); // background:linear-gradient(to top,#cc002c,#ff1a4b);

gradient_V.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#cc002c");    

  const zoomG = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr("transform","translate(100,50)scale(.9,.9)"); // Start Zoom level instellen

  const g = zoomG.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

  svg.call(d3.zoom().on('zoom', () => {
    zoomG.attr('transform',  d3.event.transform.scale(.9)); // Start Zoom level instellen
  }));
  
var tooltip = d3.select("svg").append("div")            
    .style("opacity", 0); 
    
  d3.json('vanherle.json') // test_4
    .then(data => {
      console.log(data);
      const root = d3.hierarchy(data[3]);
      const links = treeLayout(root).links();
      const linkPathGenerator = d3.linkHorizontal() // Verander hier horizontal of vertical tree
        .x(d => d.x) // Verander hier horizontal of vertical tree door x & y te wisselen
        .y(d => d.y); // Verander hier horizontal of vertical tree door x & y te wisselen  

   
      g.selectAll('path').data(links)
        .enter().append('path')
          .attr("d", function(d){  
            return "M" + d.source.x + "," + d.source.y + " v 35 H" + d.target.x + " V" + d.target.y;}); 
 
       g.selectAll('rect').data(root.descendants())
         .enter().append("rect") 
        .attr('width', function(d){
         if (d.depth === 0){ return "90px"; } 
         else if (d.depth === 1){return "81px";}
         else if (d.depth === 2){return "72px";}
         else if (d.depth === 3){return "63px";}
         else if (d.depth === 4){return "54px";}
         else if (d.depth === 5){return "45px";}
         else if (d.depth >= 5){return "36px";}
          }) 
        .attr('height', function(d){
         if (d.depth === 0){ return "40px"; } 
         else if (d.depth === 1){return "36px";} 
         else if (d.depth === 2){return "32px";}
         else if (d.depth === 3){return "28px";} 
         else if (d.depth === 4){return "24px";}
         else if (d.depth === 5){return "20px";} 
         else if (d.depth >= 5){return "16px";}
          })
    //.attr("class", "sm-button")
        .attr('x', function(d){
         if (d.depth === 0){ return d.x-45; } 
         else if (d.depth === 1){return d.x-41;}
         else if (d.depth === 2){return d.x-37;}
         else if (d.depth === 3){return d.x-34;}
         else if (d.depth === 4){return d.x-28;}
         else if (d.depth === 5){return d.x-24;}
         else if (d.depth >= 5){return d.x-18;}
          }) 
        .attr('y', function(d){
         if (d.depth === 0){ return d.y-20; } 
         else if (d.depth === 1){return d.y-12;} 
         else if (d.depth === 2){return d.y-12;}
         else if (d.depth === 3){return d.y-10;} 
         else if (d.depth === 4){return d.y-8;}
         else if (d.depth === 5){return d.y-4;} 
         else if (d.depth >= 5){return d.y-2;}
          })
          .style("filter", "url(#drop-shadow)")
        .attr('rx', function(d){
         if (d.depth === 0){ return 5; } 
         else if (d.depth === 1){return 5;}
         else if (d.depth === 2){return 4;}
         else if (d.depth === 3){return 4;}
         else if (d.depth === 4){return 3;}
         else if (d.depth === 5){return 3;}
         else if (d.depth >= 5){return 2;}
          }) 
        .attr('ry', function(d){
         if (d.depth === 0){ return 5; } 
         else if (d.depth === 1){return 5;} 
         else if (d.depth === 2){return 4;}
         else if (d.depth === 3){return 4;} 
         else if (d.depth === 4){return 3;}
         else if (d.depth === 5){return 3;} 
         else if (d.depth >= 5){return 2;}
          })
          .attr("id", d => d.data.id) 
          .style("fill", function(d,gender){
        if (d.data.gender === "m"){
            return "url(#gradient_M)";  //.attr("fill", "url(#gradient)")
          } else {
            return "url(#gradient_V)";  
          }
           })
           .on("click", toggleCP)
  .append('title')
    .text(d => d.data.voornaam + "\n" + d.data.fam_naam); 
      
// ----  TEXT ---- //
      g.selectAll().data(root.descendants())
        .enter().append('text')
        .attr('x', function(d){
         if (d.depth === 0){ return d.x-43; } 
         else if (d.depth === 1){return d.x-19;}
         else if (d.depth === 2){return d.x-33;}
         else if (d.depth === 3){return d.x-29;}
         else if (d.depth === 4){return d.x-19;}
         else if (d.depth === 5){return d.x-18;}
         else if (d.depth >= 5){return d.x-13;}
          }) 
        .attr('y', function(d){
         if (d.depth === 0){ return d.y-12; } 
         else if (d.depth === 1){return d.y-4;} 
         else if (d.depth === 2){return d.y-4;}
         else if (d.depth === 3){return d.y-4;} 
         else if (d.depth === 4){return d.y-2;}
         else if (d.depth === 5){return d.y+1;} 
         else if (d.depth >= 5){return d.y+2;}
          })
          .attr('dy', '0.32em') 
        .attr('font-size', function(d){
         if (d.depth === 0){ return "10px"; } 
         else if (d.depth === 1){return "10px";} 
         else if (d.depth === 2){return "9px";}
         else if (d.depth === 3){return "7px";} 
         else if (d.depth === 4){return "5px";}
         else if (d.depth >= 4){return "4px";}
          })
          .text(d => d.data.voornaam);//.text(d => d.data.data.desc);  
          
      g.selectAll().data(root.descendants())
        .enter().append('text')
        .attr('x', function(d){
         if (d.depth === 0){ return d.x-20; } 
         else if (d.depth === 1){return d.x-20;}
         else if (d.depth === 2){return d.x-20;}
         else if (d.depth === 3){return d.x-15;}
         else if (d.depth === 4){return d.x-10;}
         else if (d.depth === 5){return d.x-10;}
         else if (d.depth >= 5){return d.x-12;}
          }) 
        .attr('y', function(d){
         if (d.depth === 0){ return d.y; } 
         else if (d.depth === 1){return d.y+8;} 
         else if (d.depth === 2){return d.y+8;}
         else if (d.depth === 3){return d.y+6;} 
         else if (d.depth === 4){return d.y+6;}
         else if (d.depth === 5){return d.y+7;} 
         else if (d.depth >= 5){return d.y+7;}
          })
          .attr('dy', '0.32em') 
        .attr('font-size', function(d){
         if (d.depth === 0){ return "10px"; } 
         else if (d.depth === 1){return "10px";} 
         else if (d.depth === 2){return "9px";}
         else if (d.depth === 3){return "7px";} 
         else if (d.depth === 4){return "5px";}
         else if (d.depth >= 4){return "4px";}
          })
          .text(d => d.data.fam_naam);
                 
     // adds images as nodes
     g.selectAll().data(root.descendants())
        .enter().append("image")
          .attr("class", "Familie")
          .attr("opacity", "1")
        .attr("xlink:href", function(d){
         if (d.data.schild != false){ return "../../../../" + d.data.schild; } 
         else {return d.data.schild}
          })
        .on("click", toggleCP)
        .attr('x', function(d){
         if (d.depth === 0){ return d.x-20.5; } 
         else if (d.depth === 1){return d.x-18;}
         else if (d.depth === 2){return d.x-16;}
         else if (d.depth === 3){return d.x-14;}
         else if (d.depth === 4){return d.x-12;}
         else if (d.depth === 5){return d.x-10;}
         else if (d.depth >= 5){return d.x-10;}
          }) 
        .attr('y', function(d){
         if (d.depth === 0){ return d.y-58; } 
         else if (d.depth === 1){return d.y-46;} 
         else if (d.depth === 2){return d.y-42;}
         else if (d.depth === 3){return d.y-37;} 
         else if (d.depth === 4){return d.y-31;}
         else if (d.depth === 5){return d.y-24;} 
         else if (d.depth >= 5){return d.y-22;}
          })
        .attr('width', function(d){
         if (d.depth === 0){ return "40px"; } 
         else if (d.depth === 1){return "36px";} 
         else if (d.depth === 2){return "32px";}
         else if (d.depth === 3){return "28px";} 
         else if (d.depth === 4){return "24px";}
         else if (d.depth === 5){return "20px";} 
         else if (d.depth >= 5){return "20px";}
          }) 
        .attr('height', function(d){
         if (d.depth === 0){ return "40px"; } 
         else if (d.depth === 1){return "36px";} 
         else if (d.depth === 2){return "32px";}
         else if (d.depth === 3){return "28px";} 
         else if (d.depth === 4){return "24px";}
         else if (d.depth === 5){return "20px";} 
         else if (d.depth >= 5){return "20px";}
          }); 
      
  // adds images as nodes
     g.selectAll().data(root.descendants())
        .enter().append("image")
          .attr("class", "Gemeenten")
          .attr("opacity", "0")
          .on("click", toggleCP)
        .attr("xlink:href", function(d){
         if (d.data.geb_plaats == "Bilzen" || d.data.geb_plaats == "Rosmeer" || d.data.geb_plaats == "Rijkhoven" || d.data.geb_plaats == "Merem" || d.data.geb_plaats == "Schoonbeek" || d.data.geb_plaats == "Munsterbilzen" || d.data.geb_plaats == "Eigenbilzen" || d.data.geb_plaats == "Waltwilder"){ return "../../../../Gemeenten/Bilzen.png";}
         else if (d.data.geb_plaats == "St-Truiden" || d.data.geb_plaats == "Zepperen" || d.data.geb_plaats == "Gelinden" || d.data.geb_plaats == "Melveren" || d.data.geb_plaats == "Groot Gelmen"){ return "../../../../Gemeenten/Sint-Truiden.png";}
        else if (d.data.geb_plaats == "Hasselt" || d.data.geb_plaats == "Kuringen" || d.data.geb_plaats == "Kermt" || d.data.geb_plaats == "St Lambrechts Herk" || d.data.geb_plaats == "Stevoort" || d.data.geb_plaats == "Stokrooie"){ return "../../../../Gemeenten/Hasselt.png";}
         else if (d.data.geb_plaats == "Borgloon" || d.data.geb_plaats == "Hoepertingen" || d.data.geb_plaats == "Rijkel"){ return "../../../../Gemeenten/Borgloon.png";} 
         else if (d.data.geb_plaats == "Herk de Stad" || d.data.geb_plaats == "Donk" || d.data.geb_plaats == "Berbroek"){ return "../../../../Gemeenten/Herk-de-Stad_wapen2.png";}
         else if (d.data.geb_plaats == "Nieuwerkerken" || d.data.geb_plaats == "Kozen" || d.data.geb_plaats == "Wijer"){ return "../../../../Gemeenten/Kozen_Nieuwerkerken.png";}
         else if (d.data.geb_plaats == "Diepenbeek"){ return "../../../../Gemeenten/Diepenbeek.png";}
         else if (d.data.geb_plaats == "Alken"){ return "../../../../Gemeenten/Alken.png";}
         else if (d.data.geb_plaats == "Wellen" || d.data.geb_plaats == "Ulbeek"){ return "../../../../Gemeenten/Wellen.png";}
         else if (d.data.geb_plaats == "Hoeselt" || d.data.geb_plaats == "Romershoven"){ return "../../../../Gemeenten/Hoeselt.png";}
         else if (d.data.geb_plaats == "Kortessem" || d.data.geb_plaats == "Vliermaal"){ return "../../../../Gemeenten/Kortessem.png";} 
         else if (d.data.geb_plaats == "Miel boven Aalst"){ return "../../../../Gemeenten/Miel-boven-Aalst_Gingelom.png";}
         else if (d.data.geb_plaats == "Mechelen"){ return "../../../../Gemeenten/Mechelen.png";}
         else if (d.data.geb_plaats == "Zutendaal"){ return "../../../../Gemeenten/Zutendaal.png";}
         else if (d.data.geb_plaats == "Genk" || d.data.geb_plaats == "Winterslag"){ return "../../../../Gemeenten/Genk.png";}
         else if (d.data.geb_plaats == "Valkenburg (Nederland)"){ return "../../../../Gemeenten/Valkenburg.png";}
         else if (d.data.geb_plaats == "Heusden" || d.data.geb_plaats == "Zolder"){ return "../../../../Gemeenten/Heusden-Zolder.png";} 
        
         else if (d.data.schild != false){ return "../../../../" + d.data.schild; } 
         else {return d.data.schild}
          })
        .attr('x', function(d){
         if (d.depth === 0){ return d.x-20.5; } 
         else if (d.depth === 1){return d.x-18;}
         else if (d.depth === 2){return d.x-16;}
         else if (d.depth === 3){return d.x-14;}
         else if (d.depth === 4){return d.x-12;}
         else if (d.depth === 5){return d.x-10;}
         else if (d.depth >= 5){return d.x-10;}
          }) 
        .attr('y', function(d){
         if (d.depth === 0){ return d.y-58; } 
         else if (d.depth === 1){return d.y-46;} 
         else if (d.depth === 2){return d.y-42;}
         else if (d.depth === 3){return d.y-37;} 
         else if (d.depth === 4){return d.y-31;}
         else if (d.depth === 5){return d.y-24;} 
         else if (d.depth >= 5){return d.y-22;}
          })
        .attr('width', function(d){
         if (d.depth === 0){ return "40px"; } 
         else if (d.depth === 1){return "36px";} 
         else if (d.depth === 2){return "32px";}
         else if (d.depth === 3){return "28px";} 
         else if (d.depth === 4){return "24px";}
         else if (d.depth === 5){return "20px";} 
         else if (d.depth >= 5){return "20px";}
          }) 
        .attr('height', function(d){
         if (d.depth === 0){ return "40px"; } 
         else if (d.depth === 1){return "36px";} 
         else if (d.depth === 2){return "32px";}
         else if (d.depth === 3){return "28px";} 
         else if (d.depth === 4){return "24px";}
         else if (d.depth === 5){return "20px";} 
         else if (d.depth >= 5){return "20px";}
          }); 

  // NAV checked OR NOT - Change color
$('.check1').click(function(){
    if (this.checked) {
        $('.Familie').css('opacity', '1')
        $('.Gemeenten').css('opacity', '0')
    }
})     
$('.check2').click(function(){
    if (this.checked) {
        $('.Gemeenten').css('opacity', '1')
        $('.Familie').css('opacity', '0')
    }
})  

    });
}(d3));