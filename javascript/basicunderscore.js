// var ar=[-1,3,6,-3,6]
// console.log(_(ar).first())
// console.log(_(ar).last())

    

// var stateRegion= [
//     { State: 'Madhya Pradesh', Region: 'Central' },
//     { State: 'Assam', Region: 'Eastern' },
//     { State: 'Gujarat', Region: 'West' },
//     { State: 'Bihar', Region: 'Eastern' },
//     { State: 'West Bengal', Region: 'Eastern' }
//     ];
//     var getRegionOfState= function(state){
//     return _.chain(stateRegion).where({ State: state}).pluck('Region').first().value();
//     }
//     console.log(getRegionOfState('Gujarat'));

//     var indianCities= [
//         { City: 'Kolkata', State: 'West Bengal' },
//         { City: 'Patna', State: 'Bihar' },
//         { City: 'Indore', State: 'Madhya Pradesh' },
//         { City: 'Darjeeling', State: 'Assam'}];
//          var indianCitiesWithRegion= _.map(indianCities, function(nc){
//         return { City: nc.City, State: nc.State, Region: getRegionOfState(nc.State) };
//         });
//         console.log(indianCitiesWithRegion);
//         var indianCitiesWithRegion = _.reduce(indianCitiesWithRegion,
//             function (memo, ncr) {
            
//             return memo + ((ncr.Region == "Eastern") ? 1 : 0);
            
//             }, 0);
//             console.log(indianCitiesWithRegion);
//             console.log(_.filter([1,3,11,9,12,21,29,28], function(n) { return (n % 3) === 0;}));
//             console.log("Contains 25?: " + _.contains([1,3,16,25,44], 25));
//             var mergedObject = _.object([ "Trondheim", "Oslo", "Lillehammer", "Bergen" ], [
//                 "South-Trondelag", "Oslo", "Oppland", "Hordaland" ])
//             console.log(mergedObject)
//         console.log(_.union([2,4,3,6,1],[7,8,2,4]))
//         console.log(_.intersection([2,4,3,6,1],[7,8,2,4]))
//         console.log(_.difference([2,4,3,6,1],[7,8,2,4]))
 // console.log(_.difference([2,4,3,6,1],7,8,2,4));
//_.defer(function(){ console.log("This will execute when idle"); });
//  var onceFunc= _.once(function(){ console.log("Listen very carefully, I shall say this only once."); });
//  onceFunc();
//  onceFunc();
// var greeting = function(greeting) { return greeting + this.name +' who is a '+this.profession; }
// greeting = _.bind(greeting, { name: "Appu", profession: "nurse" });
// console.log(greeting("It is I, "));
// var fibonacci = _.memoize(function(n) {    
//    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);//0,1,1,2,3,5,8,13
//  })      
//  console.log(fibonacci(7));
// console.log(_.delay(function(){ console.log("hi") }, 1000));
// console.log("Item at: " + _.indexOf([1,2,3,5,11,17], 11));
// console.log("Item at: " + _.lastIndexOf([1,2,3,5,11,11,17], 11));

// console.log(_.keys({ "City": "Kolkata", "State": "West Bengal" }));

// console.log(_.values({ "City": "Darjeeling", "State": "Assam" }));
 
console.log(_.isEqual([1,2,3,4,17], [1,2,3,4,17]));

console.log( _.some([1,2,7,10,13,15], function(n) { return n % 2 == 0; }));//at least one value is a multiple of 2

console.log(_.every([2,4,9,8,10], function(n) { return n % 2 == 0; }));//every value is a multiple of 2

