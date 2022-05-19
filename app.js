
let light = false;

// defining bulb switching function
function bulbSwitch(){

    const bulb = document.getElementById('bulb');

    if(light){
        bulb.src = 'images/bulboff.jpg';
    }else{
        bulb.src = 'images/bulbon.jpg';
    }

    light = !light
}