var vehicle = (function () {
    function vehicle(theyear, themake, themodel) {
        this.year = theyear
        this.make = themake
        this.model = themodel

    }
    vehicle.prototype.getinfo = function () {
        return this.year + this.make + this.model;
    }
    vehicle.prototype.startengine = function () {
        return 'Vroom'
    };
    return vehicle;
})();
var car = (function (parent) {
    car.prototype = new vehicle();
    car.prototype.constructor = car;
    function car(year, make, model, wq) {
        parent.call(this, year, make, model);
        this.wheelQuantity = wq;
    }
    car.prototype.getinfo = function () {
        return 'Vehicle Type: car ' + parent.prototype.getinfo.call(this) + ' ' + this.wheelQuantity

    }
    return car
})(vehicle);
var c = new car(2012, 'Toyota', 'Rav4', 4)
alert(c.year)
alert(c.getinfo())