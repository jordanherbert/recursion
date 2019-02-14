var Logo=function(x,y,as) {
//  this.xs;this.ys;this.xf;this.yf;this.angle;
  this.xs=x;this.ys=y;this.angle=as;}
var Logo=function(){this.xs=0;this.ys=0;this.xf=0;
  this.yf=0;this.angle=0;}
  
  Logo.prototype.fd=function( len) {this.xf=this.xs+len*cos(3.141592*this.angle/180);
  this.yf=this.ys+len*sin(3.141592*this.angle/180);
  line(this.xs,this.ys,this.xf,this.yf);
  this.xs=this.xf;this.ys=this.yf;
  }
    
 Logo.prototype.bk=function( len) {this.xf=this.xs-len*cos(3.141592*this.angle/180);
  this.yf=this.ys-len*sin(3.141592*this.angle/180);
  line(this.xs,this.ys,this.xf,this.yf);
  this.xs=this.xf;this.ys=this.yf;
  };
  
Logo.prototype.set1=function(x,y, an){this.xs=x;this.ys=y;this.angle=an;};  

Logo.prototype.rt=function( an){this.angle=this.angle+an;
 if(this.angle>360||this.angle<0){this.angle=this.angle%360;}
 }

Logo.prototype.lt=function( an){this.angle=this.angle-an;
  if(this.angle>360||this.angle<0){this.angle=this.angle%360;} 
}
Logo.prototype.xpos=function(){return this.xf;};
Logo.prototype.ypos=function(){return this.yf;};
Logo.prototype.dir=function(){return this.angle;};
Logo.prototype.set1=function(x,y){this.xs=x;this.ys=y;this.angle=0;}

Logo.prototype.sketch=function(l,a,senten){
  var news="";//sentence="A+A--A+A";
  for(var j=0;j<senten.length;j++){
    news=senten.charAt(j);
    switch(news){
      case "A":this.fd(l);break;
      case "B":this.fd(l);break;
      case "+":this.lt(a);break;
      case "-":this.rt(a);break;
      case "C":this.fd(l/2);break;
}
  }
  
};
