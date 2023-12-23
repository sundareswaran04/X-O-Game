var count=9
var m1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let n=1;


function click_fun(event){
    if(n%2==0 && event.target.textContent==""){
event.target.innerHTML="O"

n++;
    }
    else if(n%2!=0&& event.target.textContent==""){
        event.target.innerHTML="X" 
       
        n++;
    }

    
    m1[0][0]=document.getElementById("1").textContent
    m1[0][1]=document.getElementById("2").textContent
    m1[0][2]=document.getElementById("3").textContent
    m1[1][0]=document.getElementById("4").textContent
    m1[1][1]=document.getElementById("5").textContent
    m1[1][2]=document.getElementById("6").textContent
    m1[2][0]=document.getElementById("7").textContent
    m1[2][1]=document.getElementById("8").textContent
    m1[2][2]=document.getElementById("9").textContent
    if(m1[0][0]+m1[0][1]+m1[0][2]=="XXX"||m1[1][0]+m1[1][1]+m1[1][2]=="XXX"||m1[2][0]+m1[2][1]+m1[2][2]=="XXX"||m1[0][0]+m1[1][0]+m1[2][0]=="XXX"||m1[0][1]+m1[1][1]+m1[2][1]=="XXX"||m1[0][2]+m1[1][2]+m1[2][2]=="XXX"||m1[0][0]+m1[1][1]+m1[2][2]=="XXX"||m1[2][0]+m1[1][1]+m1[0][2]=="XXX"){
        alert("A is Winner");
        document.getElementById("1").textContent=""
        document.getElementById("2").textContent=""
        document.getElementById("3").textContent=""
        document.getElementById("4").textContent=""
        document.getElementById("5").textContent=""
        document.getElementById("6").textContent=""
        document.getElementById("7").textContent=""
        document.getElementById("8").textContent=""
        document.getElementById("9").textContent=""
       
    
        n=1;

        
    }
    else if(m1[0][0]+m1[0][1]+m1[0][2]=="OOO"||m1[1][0]+m1[1][1]+m1[1][2]=="OOO"||m1[2][0]+m1[2][1]+m1[2][2]=="OOO"||m1[0][0]+m1[1][0]+m1[2][0]=="OOO"||m1[0][1]+m1[1][1]+m1[2][1]=="OOO"||m1[0][2]+m1[1][2]+m1[2][2]=="OOO"||m1[0][0]+m1[1][1]+m1[2][2]=="OOO"||m1[2][0]+m1[1][1]+m1[0][2]=="OOO"){
        alert("A is Winner");
        document.getElementById("1").textContent=""
        document.getElementById("2").textContent=""
        document.getElementById("3").textContent=""
        document.getElementById("4").textContent=""
        document.getElementById("5").textContent=""
        document.getElementById("6").textContent=""
        document.getElementById("7").textContent=""
        document.getElementById("8").textContent=""
        document.getElementById("9").textContent=""
       
    
        n=1;

        
    }
    else{
        if(n==10){
        alert("Match Draw")
        document.getElementById("1").textContent=""
        document.getElementById("2").textContent=""
        document.getElementById("3").textContent=""
        document.getElementById("4").textContent=""
        document.getElementById("5").textContent=""
        document.getElementById("6").textContent=""
        document.getElementById("7").textContent=""
        document.getElementById("8").textContent=""
        document.getElementById("9").textContent=""
    }
}
    
}