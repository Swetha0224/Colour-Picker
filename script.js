window.onload=()=>{
    main();
}
function main(){
    const swetha=document.getElementById('swetha');
    const surya=document.getElementById('surya');
    const btn=document.getElementById('btn');
    const btn1=document.getElementById('btn1');
    btn.addEventListener('click',function(){
        const bgColor=col();
        swetha.style.backgroundColor=bgColor;
        surya.value=bgColor;
    });
    btn1.addEventListener('click',function(){
        navigator.clipboard.writeText(surya.value);
    });
}
function  col(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
