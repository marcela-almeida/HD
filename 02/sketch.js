//El siguiente es un ejercicio que inicié desde cero.

//variable a para cambio de color, b para crecimiento de elipse de fondo 1
var a, b; 

function setup() {
  createCanvas(800, 800);
	a = 70;
  b = 10;
  
  //el frameRate determina el número de cuadros por segundos
	frameRate(25);
 
}

function draw() {
  background(10, 26, 39);
	a = a + 5;
  b = b + 100;
  
  //elipse de fondo 1
  stroke(45, 88, 123);
  noFill(0)
  ellipse(width / 2, height / 2, b, b);
  
  //condicional para que cuando la elipse de fondo 1 llegue a los bordes del canvas, inicie de nuevo su crecimiento
  if (b > 1150) {
    b = 10;
    }
  
	//elipse 2 (flor)
  push();
  //translate define la ubicación del eje de rotación del objeto en el plano
	translate(width / 2, height / 2);
  //el frameCount es la variable que determina el movimiento de la figura al incrementar el ángulo de rotación.
  rotate(frameCount);
	noStroke(0);
	fill(a, 158, 157);
  ellipse(80, 0, 150, 50);
  pop();
  
  //condicional para que una vez el color se mofique por la variable a, retorne al color inicial.
  if(a > 255) {
    a = 70
    }
		
  //elipse 3 amarilla. Se usan push y pop para tener mayor control sobre una función nueva. Lo anterior dado que permite modificar el estilo en una acción puntual. 
  push();
  //translate define la ubicación del eje de rotación del objeto en el plano
	translate(width / 2, height / 2);
  rotate(random (-100, 100));
	noStroke(0);
	fill(242, 195, 53);
  ellipse(200, 200, 50, 50);
  pop();
  
  //variables para crear varios círculos que roten sin un eje definido)
  for (var c = 5; c < 800; c = c + 10) {
    for(var d = 5; d < 800; d = d + 10) {
    
      rotate(frameCount / 5);
      noStroke(0);
      fill(140, 31, 71);
      ellipse(c * 10, d * 10, 20, 20);
    
    }
  }
}