class vclass{
constructor(vst,vend,vmid,vlhori,vrhori){
	this.vs=vst;
	this.ve=vend;
	this.vm=vmid;
	this.vlho=vlhori;
	this.vrho=vrhori;
}
show(){
	//strokeWeight(random(3));
	stroke(255);
	line(this.vs.x,this.vs.y,this.ve.x,this.ve.y);
	
}
st1(){
	return this.vs;
}
end1(){
	return this.ve;
}
vmid1(){
	return this.vm;
}
vlho1(){
	return this.vlho;
}
vrho1(){
	return this.vrho;
}
right(){
	let vr=p5.Vector.sub(this.ve,this.vs);
	vr.mult(.5);
	vr.rotate(PI/6);
	let vnr=p5.Vector.add(this.ve,vr);
	return vnr;
}
left(){
	let vl=p5.Vector.sub(this.ve,this.vs);
	vl.mult(.5);vl.rotate(PI/-6);
	let vnl=p5.Vector.add(this.ve,vl);
	return vnl;
}
middle(){
	let vlr=p5.Vector.sub(this.ve,this.vs);
	vlr.mult(.5);vlr.rotate(PI/180);
	let vnlr=p5.Vector.add(this.ve,vlr);
	return vnlr;
}
lefthori(){
	let vlh=p5.Vector.sub(this.ve,this.vs);
	vlh.mult(.5);vlh.rotate(60*PI/180);
	let vnlh=p5.Vector.add(this.ve,vlh);
	return vnlh;
}
righthori(){
	let vlrh=p5.Vector.sub(this.ve,this.vs);
	vlrh.mult(.5);vlrh.rotate(-60*PI/180);
	let vnlrh=p5.Vector.add(this.ve,vlrh);
	return vnlrh;
}
giggles(num){
this.ve.x=this.ve.x+random(0-num,num);
}
}







function gen2(){
	let next=[];
	for(let j=0;j<vees.length;j++){
	let vnr=vees[j].right();let vstart=vees[j].st1();
	let vnl=vees[j].left();let vend=vees[j].end1();
next.push(new vclass(vend,vnr));
next.push(new vclass(vend,vnl));
next.push(new vclass(vstart,vend));
	}
vees=next;
}

function gen3(){
	let next=[];
	for(let j=0;j<vees.length;j++){
	let vnr=vees[j].right();let vstart=vees[j].st1();
	let vnl=vees[j].left();let vend=vees[j].end1();
	let vnlr=vees[j].middle();let vmid=vees[j].vmid1();
next.push(new vclass(vend,vnr));
next.push(new vclass(vend,vnl));
next.push(new vclass(vend,vnlr));
next.push(new vclass(vstart,vend));
	}
vees=next;
}


function gen5(){
	let next=[];
	for(let j=0;j<vees.length;j++){
	let vnr=vees[j].right();let vstart=vees[j].st1();
	let vnl=vees[j].left();let vend=vees[j].end1();
	let vnlr=vees[j].middle();let vmid=vees[j].vmid1();
	let vnlh=vees[j].lefthori();let vlhori=vees[j].vlho1();
   let vnlrh=vees[j].righthori();let vrhori=vees[j].vrho1();
next.push(new vclass(vend,vnr));
next.push(new vclass(vend,vnl));
next.push(new vclass(vend,vnlr));
next.push(new vclass(vend,vnlh));
next.push(new vclass(vend,vnlrh));
next.push(new vclass(vstart,vend));
	}
vees=next;
}






let radio;
function createburrito(){
radio = createRadio();
radio.position(100,60);
   radio.class("bord");
  radio.option('2 Branches',1);
  radio.option('3 Branches',2);
  radio.option('5 Branches',4);
  radio.option('Reset',5);
}

function drawburrito(){
	var val = radio.value();
  switch(val){
case '1': addmoregen2();break;
case '2': addmoregen3();break;
case '4': addmoregen5();break;
case '5': reset();break;
  }
}




function addmore2(){
gen2();
}
function addmoregen2(){
	if(radio.value()==1){can.mousePressed(addmore2);}
}




function addmore3(){
gen3();
}
function addmoregen3(){
	if(radio.value()==2){can.mousePressed(addmore3);}
}



function addmore5(){
gen5();
}
function addmoregen5(){
	if(radio.value()==4){can.mousePressed(addmore5);}
}


function reset(){
	background(0);
	let subvees = subset(vees,vees.length-1,1);
	vees = subvees;
}
