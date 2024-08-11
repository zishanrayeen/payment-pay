





// visa payment code mode system

var visa = document.getElementById("frm_set");
visa.onsubmit= function(){

    var vist = [];
    vist[0]=document.getElementById("card_no");
    vist[1]=document.getElementById("card_amt");
    vist[2]=document.getElementById("card_slt");
    vist[3]=document.getElementById("card_cvv");
    vist[4]=document.getElementById("card_month");


    //if condtion for a visa format
    if(vist[0].value == "" && vist[1].value == "" && vist[2].value == "" && vist[3].value == "" && vist[4].value == ""){

        window.alert("Please Input Data in Empty Feild! ");

        return false;
    }



    //if sec condtion
    if(vist[0].value == ""){

        window.alert("Enter Name on Card");
        vist[0].style.borderColor="red";
        return false;
    }


    //if third condtion
    if(vist[1].value == ""){

        window.alert("Please Enter Your Amount!");
        vist[1].style.borderColor="red";
        return false;
    }


    //if fourth condtion
    if(vist[2].value == ""){

        window.alert("Enter Your Card No!");
        vist[2].style.borderColor="red";
        return false;
    }


    //if fifth condtion
    if(vist[3].value == ""){

        window.alert("Enter Your CVV!");
        vist[3].style.borderColor="red";
        return false;
    }


    //if sixth condtion
    if(vist[4].value == ""){

        window.alert("Enter Expiration Date!")
        return false;

    }



    //final value of if and submit fucntion
    if(vist[0].value != "" && vist[1].value != "" && vist[2].value != "" && vist[3].value != "" && vist[4].value != ""){

        //value one
        var blck = document.getElementById("one_box");
        blck.style.display="none";


        //value two
        var opn = document.getElementById("success_pay");
        opn.style.display="block";


        //new value format
        var one = document.getElementById("card_no").value;
        var two = document.getElementById("card_amt").value;
        var datas = document.getElementById("data_id");


        //main code
        datas.innerHTML="RS " + two + " Payment is Successfully Done by " + one+"!";


        return false;

    }

   
}







 //if frist condtion with oncilck function 
 var nm = document.getElementById("card_no");
 nm.oninput = function(){

    var on = document.getElementById("card_no");
    on.style.borderColor="gray";

 }



//if sec condtion with oncilck function 
var amt  = document.getElementById("card_amt");
amt.oninput= function(){

    var amo = document.getElementById("card_amt");
    amo.style.borderColor="gray";

}



//if third condtion with onclick function
var not = document.getElementById("card_slt");
not.oninput= function(){

    var noe = document.getElementById("card_slt");
    noe.style.borderColor="gray";
}




//if four condtion with onclick function
var cv = document.getElementById("card_cvv");
cv.oninput= function(){


    var cvo = document.getElementById("card_cvv");
    cvo.style.borderColor="gray";

}











//960826 is the password of sysyem data.



//QR code block and none function system 

var qrd = document.getElementById("upi_bxe");
qrd.onclick=function(){

    var qrn = [];
    qrn[0]=document.getElementById("upi_box");
    qrn[1]=document.getElementById("qr_cd");
    qrn[2]=document.getElementById("disply_frm")


    //function code one
    qrn[0].style.display="none";
    qrn[2].style.display="none";

    //finction code two
    qrn[1].style.display="block";
    qrn[1].setAttribute("class", "animate__animated animate__slideInRight animate__repeat-1")
}










//QR code opening function code 

var qr = document.getElementById("shuter");
qr.onclick= function(){

    var scn =[];

    scn[0]= document.getElementById("shuter");
    scn[1]= document.getElementById("qr_ana");
    scn[2]= document.getElementById("qr_anb");


    //function code here
    scn[0].style.display="none";

    //second animate function
    scn[1].style.display="none";
    scn[1].setAttribute("class", "animate__animated animate__slideOutLeft animate__repeat-1");
    scn[1].style.transition="0.8s";

    //third code animation function
    scn[2].style.display="none";
    scn[2].setAttribute("class", "animate__animated animate__slideOutRight animate__repeat-1");
    scn[2].style.transition="0.8s";

}








//return qr code to UPI system code

var qrp = document.getElementById("upi");
qrp.onclick=function(){

    var jaan = [];
    jaan[0]= document.getElementById("upi_box");
    jaan[1]= document.getElementById("qr_cd");


    //start main function
    jaan[0].style.display="block";
    jaan[0].setAttribute("class", "animate__animated animate__slideInLeft animate__repeat-1")

    //second
    jaan[1].style.display="none";

}








//upi alert msg  system 

var msd = document.getElementById("upi_guide");
msd.onclick=function(){

    window.open("Unified Payments Interface .pdf");
}







//visa to upi block and none system

var vis = document.getElementById("upi");
vis.onclick=function(){

    var vit =[];
    vit[0]=document.getElementById("upi_box");
    vit[1]=document.getElementById("disply_frm");
    vit[2]=document.getElementById("qr_cd");

    //block and none function
    vit[1].style.display="none";
    vit[0].style.display="block";
    vit[2].style.display="none";
}




//upi to visa none and block function

var beta = document.getElementById("card");
beta.onclick=function(){


    var bet =[];

    bet[0]=document.getElementById("upi_box");
    bet[1]=document.getElementById("disply_frm");
    bet[2]=document.getElementById("qr_cd");


    //final code yet
    bet[0].style.display="none";
    bet[1].style.display="block";
    bet[2].style.display="none";
}







//upi id code system

var ucd = document.getElementById("sedn");
ucd.onsubmit=function(){

    var abc = document.getElementById("upi_sys");

    //if condtion
    if(abc.value == ""){

        window.alert("Enter UPI Id!");
        return false;
    }
}






//redrict system for payment methods

var babu = document.getElementById("upi_bxb");
babu.onclick=function(){

    window.location="https://phon.pe/pwp6nyue";
}


//second redrict system

var jaan = document.getElementById("upi_bxa");
jaan.onclick=function(){

    window.location="https://i.airtel.in/refandearn72IDI3CKYC";
}


//third redrict system

var love = document.getElementById("upi_bxc");
love.onclick=function(){

    window.location="https://p.paytm.me/xCTH/ctzkim04";
}


//fourth redrict system

var beta = document.getElementById("upi_bxd");
beta.onclick=function(){

    window.location="https://g.co/payinvite/th4vv64";
    
}



//developer name

console.log("Developed By: Zishan Rayeen(S.Z)");

