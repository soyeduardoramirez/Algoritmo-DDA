//Pidiendo los valores de las coordenadas
let xUno = prompt("Ingrese el valor de x1 en la coordenada A");
let yUno = prompt("Ingrese el valor de y1 en la coordenada A");
let xDos = prompt("Ingrese el valor de x2 en la coordenada B");
let yDos = prompt("Ingrese el valor de y2 en la coordenada B");
saltarLinea();

let pendiente = (yDos-yUno)/(xDos-xUno); //calculando la pendiente
document.write("Pendiente: ",pendiente.toFixed(2)); 
saltarLinea();

let iteraciones = xDos-xUno; //calculando el numero de iteraciones
document.write("Iteraciones: ",iteraciones);
saltarLinea();

document.write("k");
saltarLinea();
for(i=0;i<iteraciones;i++){ //imprimiendo K(iteraciones)
    document.write(i); 
    saltarLinea();
}
saltarLinea();

document.write("x");
saltarLinea();
let arrayenx = [parseInt(xUno)*100];
for(i=0;i<iteraciones;i++){ //imprimiendo x
        if(i==0){
            document.write(xUno); 
            saltarLinea();
        }else{
            let x = parseInt(xUno)+1; 
            document.write(x);
            xUno = x; 
            saltarLinea();
            arrayenx.push(x*100);
        }
        
}
console.log(arrayenx);

saltarLinea();
document.write("y");
saltarLinea();
let arrayeny = [];
for(i=0;i<iteraciones;i++){
        yUno = parseFloat(yUno) + parseFloat(pendiente);
        document.write(parseInt(yUno));
        saltarLinea();
        arrayeny.push(parseInt(yUno)*100);
}
console.log(arrayeny)

//------------------------------------------------
let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 1000, 1000);

let coorx = 0;
let coory = 0;

for(i=0;i<iteraciones;i++){
    coorx = arrayenx[i]; 
    coory = arrayeny[i];
    dibujarCirculo(coorx,coory,5,"black");
console.log(coorx);
console.log(coory);
}


function dibujarCirculo(coorx, coory, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(coorx, coory, radio, 0, 2*3.14);
    pincel.fill();
}
    
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(300,200);
    pincel.lineTo(400,200);
    pincel.stroke();

    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(400,200);
    pincel.lineTo(500,300);
    pincel.stroke();
    
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(500,300);
    pincel.lineTo(600,300);
    pincel.stroke();

    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(600,300);
    pincel.lineTo(700,400);
    pincel.stroke();

    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(700,400);
    pincel.lineTo(800,400);
    pincel.stroke();

    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(800,400);
    pincel.lineTo(900,500);
    pincel.stroke();


//Ciclos for para Colocar los numeros en el canvas    
let coordenada = 1;
//COORDENADAS EN Y
for(let i=100;i<=1000;i++){
    
    if(i==100){
        pincel.strokeText(coordenada,5,i);
    
    }else{
        coordenada = parseInt(coordenada) + 1; 
        pincel.strokeText(coordenada,5,i);
    }
    
    i = i + 100;
}

let coordenadax = 1;
for(let i=100;i<=1000;i++){
    
    if(i==100){
        pincel.strokeText(coordenadax,i,10);
    }else{
        coordenadax = parseInt(coordenadax) + 1;
        console.log(coordenadax)
        pincel.strokeText(coordenadax,i,10);
    }
    i = i + 100;
}

pincel.strokeText("y",5,990);
pincel.strokeText("x",990,10);

function saltarLinea(){
    document.write("<br>");
}