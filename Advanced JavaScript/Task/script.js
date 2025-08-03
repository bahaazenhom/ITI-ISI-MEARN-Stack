var lnkdLstObj = {
    data: [],
    pushVal: function (val) {
        if (this.data.length == 0) this.data.push(val);
        else if (this.data[this.data.length - 1] < val) this.data.push(val);
        else throw "Value is not in ascending order or duplicated value";

    },
    insertVal: function (index, val) {
        if (index < 0 || index > this.data.length) throw "Index out of range";
        if (this.data[index - 1] < val && val < this.data[index]) this.data.splice(index, 0, val);
        else throw "Value is not in ascending order or duplicated value";
    },
    popVal: function () {
        if (this.data.length == 0) throw "List is empty";
        this.data.pop();
    },
    removeVal: function (val) {
        if (this.data.length == 0) throw "List is empty";
        var index = this.data.indexOf(val);
        if (index != -1) {
            this.data.splice(index, 1);
        }
        else {
            throw "Value not found";
        }
    },
    dequeueVal: function () {
        if (this.data.length == 0) throw "List is empty";
        return this.data.shift();
    },
    enqueueVal: function (val) {
        if (this.data.length == 0) this.data.unshift(val);
        else if (this.data[0] > val) this.data.unshift(val);
        else throw "Value is not in ascending order or duplicated value";
    },
    printList: function () {
        console.log(this.data);
    }
}
// testing
lnkdLstObj.pushVal(5);
lnkdLstObj.pushVal(10);
lnkdLstObj.pushVal(15);
lnkdLstObj.insertVal(2, 12);
lnkdLstObj.removeVal(10);
lnkdLstObj.popVal();
lnkdLstObj.enqueueVal(1);
lnkdLstObj.pushVal(100);
lnkdLstObj.printList();
