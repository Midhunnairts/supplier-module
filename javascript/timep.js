//const moment = require("./moment");

var div=document.getElementById('divid')
var i,dt;
div.innerHTML=moment()
document.getElementById('cd').addEventListener('change',function(){
    i=this.value;
    dt=new Date(i)
    var m=moment(dt);
    var today=moment();
    var diff=m.diff(today,'days')
    if (diff<0){
        alert('error')

    }
    else{
        alert('successfull')
        //div.innerHTML=' '+i
    }
})