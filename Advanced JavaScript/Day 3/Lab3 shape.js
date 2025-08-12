function Shape(){
  if(this.constructor === Shape){
    throw new Error('this is an abstract class')
  }
}

function Rectangle(width, height) { 

  Shape.call(this);
    
  Object.defineProperties(this, {
    width: {
      value: Number(width),
      writable: false,
      enumerable: false,
      configurable: false
    },
    height: {
      value: Number(height),
      writable: false,
      enumerable: false,
      configurable: false
    },
    area: {
      get: function () { return this.width * this.height; },
      enumerable: false,
      configurable: false
    },
    perimeter: {
      get: function () { return 2 * (this.width + this.height); },
      enumerable: false,
      configurable: false
    }
  });
 
  Object.seal(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
// rect => shape => obj

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.toString = function () {
  return 'Rectangle: Width: ' + this.width + ', Height: ' + this.height + ', Area: ' +
         this.area + ', perimeter: ' + this.perimeter;
};
Rectangle.prototype.valueOf = function () {
  return this.area;
};


var r1 = new Rectangle(3, 4);  
var r2 = new Rectangle(6, 10);  
console.log(r1.toString());  
console.log(r2.toString());  
console.log(r1 + r2); 
console.log(r1 - r2); 


function Square(side) { 

   Rectangle.call(this, side, side);
   Square.counter++;
   Object.seal(this);
}

Square.prototype = Object.create(Rectangle.prototype);
// sqr => rect => shape => Object
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
  return 'Square side: ' + this.width + ', area: ' + this.area + ', perimeter: ' + this.perimeter;

};

Square.counter = 0

Square.getNumObj = function(){
  return Square.counter
}

var s1=new Square(3);
var s2=new Square(7); 
console.log(s1.toString());  
console.log(s2.toString()); 
console.log(Square.getNumObj())
 