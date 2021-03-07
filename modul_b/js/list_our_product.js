var btn_humanoid = document.getElementById("btn-humanoid");
var btn_lego = document.getElementById("btn-lego");
var btn_industrial = document.getElementById("btn-industrial");
var btn_transportation = document.getElementById("btn-transportation");

btn_humanoid.onclick = function(){
    var l = 1,i = 1,h = 1;

    for(l ; l<6 ;l++){
        $('#lego'+l).fadeOut();
    }
    for(i ; i<4 ;i++){
        $('#industrial'+i).fadeOut();
    }    
    $('#transportation').fadeOut();
    for(h ; h<4 ; h++){
        $('#humanoid'+h).fadeIn();
    }
}

btn_lego.onclick = function(){
    var h = 1,i = 1, l = 1;

    for(h ; h<4 ; h++){
        $('#humanoid'+h).fadeOut();
    }
    for(i ; i<4 ;i++){
        $('#industrial'+i).fadeOut();
    }   
    $('#transportation').fadeOut();
    for(l ; l<6 ;l++){
        $('#lego'+l).fadeIn();
    }
}

btn_industrial.onclick = function(){
    var h = 1, i = 1, l = 1;

    for(h ; h<4 ; h++){
        $('#humanoid'+h).fadeOut();
    }
    for(l ; l<6 ;l++){
        $('#lego'+l).fadeOut();
    }
    $('#transportation').fadeOut();
    for(i ; i<4 ;i++){
        $('#industrial'+i).fadeIn();
    } 
}

btn_transportation.onclick = function(){
    var h = 1,i = 1, l = 1;

    for(h ; h<4 ; h++){
        $('#humanoid'+h).fadeOut();
    }
    for(l ; l<6 ;l++){
        $('#lego'+l).fadeOut();
    }
    for(i ; i<4 ;i++){
        $('#industrial'+i).fadeOut();
    }  
    $('#transportation').fadeIn();
}