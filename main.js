

function insert(num){

   document.getElementById("textview").value=document.getElementById("textview").value+num;
 
}

function equal(){


    var sum=document.getElementById("textview").value;
    if(sum){
        document.getElementById("textview").value=eval(sum);
    }
}

function clean(){
    document.getElementById("textview").value="";
}

function back(){

    var exp=document.getElementById("textview").value;
    document.getElementById("textview").value=exp.substring(0,exp.lenght-1);
}

