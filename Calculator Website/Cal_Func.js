function outclear(){
    document.getElementById("output").innerHTML="0";
}
function number(n){
    var value=document.getElementById("output").innerHTML;
    if (value=="0"){
        value="";
    }
    value=value+n;
    document.getElementById("output").innerHTML=value;
}
function percent(){
    document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+"%";
    var value=document.getElementById("output").innerHTML;
    var regex=/[0-9]+%$/g;
    var found=value.match(regex);
    console.log(found);
    var num=(found[0].substring(0,found[0].length-1))/100;
    value=value.replace(regex,num);
    document.getElementById("output").innerHTML=value;
}
function math_op(){
    var eq=document.getElementById("output").innerHTML;
    var result=eval(eq);
    document.getElementById("output").innerHTML=result;
}