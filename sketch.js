let can;
let vst;
let vend;
let vmid;
let vlho;
let vrho;
let vees=[];
let input;
let sum;

function setup() {
can=createCanvas(1100,500);
can.position(50,50);
can.class("bord");

vst=createVector(width/2,height);
vend=createVector(width/2,height/2);
vees.push(new vclass(vst,vend));


createburrito();


}

function draw() {
background(0);
for(let j=0;j<vees.length;j++){
	vees[j].show();//vees[j].giggles(1);
	//vees[j].push(new vclass(vst,vend));
drawburrito();
}
}


