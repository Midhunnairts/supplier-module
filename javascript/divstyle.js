var Divstyle=(function(){


function Divstyle(id,lft,bgc,h,w){
    this.id=id
    this.lft=lft
    this.bgc=bgc
    this.h=h
    this.w=w
}
return Divstyle
})();
var roundDivstyle = (function (parent) {
    roundDivstyle.prototype = new Divstyle();
    roundDivstyle.prototype.constructor = roundDivstyle;
    function roundDivstyle(id,lft,bgc,h,w,br) {
        parent.call(this,id,lft,bgc,h,w);
        this.br=br;
    }
    return roundDivstyle
})(Divstyle);
var sum=0
function createDiv(id) {
    var br=10
    var h=returnRandomVal()
    var w=returnRandomVal()
    var color='rgb('+returnRandomVal()+','+returnRandomVal()+','+returnRandomVal()+')'
    var divstyle=new roundDivstyle(id,0,color,h,w,br)
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('getText').innerHTML;
    div.setAttribute("id",divstyle.id);
    document.body.appendChild(div);
    sum=sum+h*w
    // var h=returnRandomVal();
    // var w=returnRandomVal();    
    // var lft=0;
    // var bgc=prompt("Enter the background color")
    //alert(div.id);
    changeDivStyle(div,divstyle)
    }
    function returnRandomVal(){
        return Math.floor(Math.random()*(255-100*1)+100);
    }
    function changeDivStyle(d,divstyle){
        var newdiv =document.getElementById(d.id)
        var strstyle='Left:'+divstyle.lft+'px;'+'background-color:'+divstyle.bgc+";"+'height:'+divstyle.h+'px;'+'width:'+divstyle.w+'px;'+'border-radius:'+divstyle.br+'px;'
        newdiv.style.cssText=strstyle
    }
    var k=0
    function creatArr(){
        for(var i=k;i<k+5;i++){
            var id='newdiv'+i
            createDiv(id)
        }
        k=k+5
        var el=document.createElement('h1')
        el.innerHTML = '<h3>'+sum+'</h3>'
        document.body.appendChild(el)
    }


    