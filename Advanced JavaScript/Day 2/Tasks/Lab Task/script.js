function Sequence(start, end, step){
    this.start = start;
    this.end = end;
    this.step = step;

    var list = [];
    var fillList = function(){
        for(var i=start;i<=end;i+=step){
            list.push(i);
        }
    };
    fillList();
    this.getList = function(){
        return list;
    };
    this.append = function(value){
        if(value -  list[list.length-1] == step)list.push(value);
        else throw "Value is not in sequence";
    }
    this.prepend = function(value){
        if(list[0] - value == step)list.unshift(value);
        else throw "Value is not in sequence";
    }
    this.popp = function(){
        if(list.length==0)throw "List is empty";
        else list.pop();
    }
    this.dequeue = function(){
        if(list.length==0)throw "List is empty";
        else list.shift();
    }
}

var seq = new Sequence(1, 10, 2);
console.log(seq.getList()); // [ 1, 3, 5, 7, 9 ]
seq.append(11);
console.log(seq.getList()); // [ 1, 3, 5, 7, 9, 11 ]
seq.prepend(-1);
console.log(seq.getList()); // [ -1, 1, 3, 5, 7, 9, 11 ]
seq.popp();
console.log(seq.getList()); // [ -1, 1, 3, 5, 7, 9 ]
console.log(seq.dequeue()); 
console.log(seq.getList()); // [ 1, 3, 5, 7, 9 ]