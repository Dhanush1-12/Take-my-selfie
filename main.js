var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start(){
    document.getElementById ("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById ("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
    
}
function speak(){
    synth=window.speechSynthesis;
    speak_data="Taking selfie in 5 seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
    
}
function take_snapshot()
{
    Webcam.snap(function (data_uri){
        document.getElementById ("result").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
    });

}
function save(){
    link=document.getElementById ("link");
    link.href=document.getElementById("snapshot").src;
    link.click();
}
Webcam.set({
    width:350,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
camera=document.getElementById ("camera");
