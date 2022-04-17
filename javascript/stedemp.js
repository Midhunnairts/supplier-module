var person= (function () {
    function person(theage, thename, thephone) {
        this.age = theage
        this.name = thename
        this.phone = thephone

    }
    person.prototype.getinfo = function () {
        return this.age +' '+ this.name +' ' +this.phone;
    }

    return person;
})();
var employee = (function (parent) {
    employee.prototype = new person();
    employee.prototype.constructor = employee;
    function employee(age, name, phone, company,salery) {
        parent.call(this, age, name, phone);
        this.cname= company;
        this.csalery=salery;
    }
    employee.prototype.getinfo = function () {
        return 'person Type: employee ' + parent.prototype.getinfo.call(this) + ' ' + this.cname +' '+this.csalery

    }
    return employee
})(person);
var c = new employee(21, 'midhu' ,8546253152, 'signdesk' ,8000)
// alert(c.age)
alert(c.getinfo())