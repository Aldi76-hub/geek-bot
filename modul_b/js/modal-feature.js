 // Get the modal
 var modal = document.getElementById("myModal");
 var modal2 = document.getElementById("myModal2");
 var modal3 = document.getElementById("myModal3");
 var modal4 = document.getElementById("myModal4");
 var modal5 = document.getElementById("myModal5");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 var btn2 = document.getElementById("myBtn2");
 var btn3 = document.getElementById("myBtn3");
 var btn4 = document.getElementById("myBtn4");
 var btn5 = document.getElementById("myBtn5");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 var span2 = document.getElementsByClassName("clo2")[0];
 var span3 = document.getElementsByClassName("clo3")[0];
 var span4 = document.getElementsByClassName("clo4")[0];
 var span5 = document.getElementsByClassName("clo5")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
   $('.overlay').hide();
 }
 btn2.onclick = function() {
   modal2.style.display = "block";
   $('.overlay').hide();
 }
 btn3.onclick = function() {
   modal3.style.display = "block";
   $('.overlay').hide();
 }
 btn4.onclick = function() {
   modal4.style.display = "block";
   $('.overlay').hide();
 }
 btn5.onclick = function() {
  modal5.style.display = "block";
}

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
   $('.overlay').show();
 }
 span2.onclick = function() {
   modal2.style.display = "none";
   $('.overlay').show();
 }
 span3.onclick = function() {
   modal3.style.display = "none";
   $('.overlay').show();
 }
 span4.onclick = function() {
   modal4.style.display = "none";
   $('.overlay').show();
 }
 span5.onclick = function() {
  modal5.style.display = "none";
}

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 window.onclick = function(event) {
   if (event.target == modal2) {
     modal2.style.display = "none";
   }
 }
 window.onclick = function(event) {
   if (event.target == modal3) {
     modal3.style.display = "none";
   }
 }
 window.onclick = function(event) {
   if (event.target == modal4) {
     modal4.style.display = "none";
   }
 }
 window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}