let can;
let vst;
let vend;
let vees=[];

function setup() {
can=createCanvas(1100,500);
can.position(100,100);
can.class("bord");

vst=createVector(width/2,height);
vend=createVector(width/2,height/2);
vees.push(new vclass(vst,vend));

createburrito();

	anch=select('#sier');
	anch.position(0,0);
	anch.class("bord");
}

function draw() {
background(0);
for(let j=0;j<vees.length;j++){
	vees[j].show();
drawburrito();
}
}


