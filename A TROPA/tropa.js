var som1 = new Audio();
    som1.src = "musicas/beijomp3.mp3"

var som2 = new Audio();
    som2.src = "musicas/gusmp3.mp3"

var som3 = new Audio();
    som3.src = "musicas/tropamp3.mp3"

var som4 = new Audio();
    som4.src = "musicas/laritimp3.mp3"

    var som5 = new Audio();
    som5.src = "musicas/danmente.ogg"

function tocar(x){
        x.play()
    }

function pausar(x){
    x.pause()
}    


function toc(){

    if (document.getElementById('slide1').checked == true){
        tocar(som3)} 
    if (document.getElementById('slide1').checked != true){
        pausar(som3)}
    
    if (document.getElementById('slide2').checked == true){
        tocar(som1)} 
    if (document.getElementById('slide2').checked != true){
        pausar(som1)} 

    if (document.getElementById('slide3').checked == true){
        tocar(som4)}
    if (document.getElementById('slide3').checked != true){
        pausar(som4)}

    if (document.getElementById('slide4').checked == true){
         tocar(som2)}
    if (document.getElementById('slide4').checked != true){
        pausar(som2)}   

    if (document.getElementById('slide5').checked == true){
         tocar(som5)}
    if (document.getElementById('slide5').checked != true){
         pausar(som5)} 
}
    
function pau(){
        pausar(som3)
        pausar(som1) 
        pausar(som4)    
        pausar(som2)  
        pausar(som5)             
}
   
        
      

