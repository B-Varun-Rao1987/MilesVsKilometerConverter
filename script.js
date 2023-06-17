(function(){
    "use strict";
    const getValEle=document.getElementById('dVal');
    const resBtn=document.getElementById('subBtn');
    const resMsgEle=document.getElementById('resMsg');
    const contentTxt=document.getElementById('textCon');
    const mainHeading=document.getElementById('mainHead');
    const defaultMsg="Hello,Here would be the result";
    let convertType="miles";
    document.addEventListener('keydown',function(evt){
        if(evt.code==="KeyM"){
            getValEle.value="";
            convertType="miles";
            mainHeading.textContent="MILES TO KILOMETERS CONVERTER";
            contentTxt.textContent="Type in a number of miles and click the button to convert the distance to kiometers";
            resMsgEle.textContent=defaultMsg;
        }
        else if(evt.code==="KeyK"){
            getValEle.value="";
            convertType="kms";
            mainHeading.textContent="KILOMETERS TO MILES CONVERTER";
            contentTxt.textContent="Type in a number of kilometers and click the button to convert the distance to miles";
            resMsgEle.textContent=defaultMsg;
        }
    });   
    resBtn.addEventListener('click',function(){
        if(getValEle.value=="")
            resMsgEle.textContent="Enter a value first!";
        else if(isNaN(getValEle.value)){
            getValEle.value="";
            resMsgEle.textContent="Enter valid input!!"; 
        }
        else {
            let distance=parseFloat(getValEle.value);
            if(convertType=="miles"){
                let resMsg=`${distance} miles converts to ${Math.round((distance*1.609344)*1000)/1000} kilometers`;
                resMsgEle.textContent=resMsg;
                getValEle.value="";
            }
            else if(convertType=="kms"){
                let resMsg=`${distance} kilometers converts to ${Math.round((distance*0.621371192)*1000)/1000} miles`;
                resMsgEle.textContent=resMsg;
                getValEle.value="";
            }
        }
    }); 
})();