var hour = 0
var min = 0
var sec = 0
var milisec = 0


function stopwatch(){
    milisec++
    document.getElementById('milisec').innerHTML = milisec  
    if( milisec == 1000){
        sec++
        document.getElementById('sec').innerHTML = sec + ":" 
        milisec = 0

    }else if ( sec == 60 ){
        min++
        document.getElementById("min").innerHTML = min + ":"
        sec = 0

    }else if ( min == 60){
        hour++
        document.getElementById('hour').innerHTML = hour + ":"
        min = 0
    }
}


function start(){
    sir_isko_bananei_mei_bohot_mushkil_aai = setInterval(stopwatch , 1)
    document.getElementById('start').style.display = "none"
}

function stop(){
    clearInterval(sir_isko_bananei_mei_bohot_mushkil_aai)
    document.getElementById('start').style.display = "inline-block"
}

function reset(){
    clearInterval(sir_isko_bananei_mei_bohot_mushkil_aai)
    hour = 0
    min = 0
    sec = 0
    milisec = 0
    document.getElementById('hour').innerHTML = "00"
    document.getElementById('min').innerHTML = "00"
    document.getElementById('sec').innerHTML = "00"
    document.getElementById('milisec').innerHTML = "00"
    document.getElementById('start').style.display = "inline-block"
}