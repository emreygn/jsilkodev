function showTime(){
    let date = new Date();
    let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    
    if(h == 0){
        h = 24;
    }
    
    if(h > 24){
        h = h - 24;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    document.getElementById("test").innerHTML = ` ${gunler[date.getDay()]}`;
    setTimeout(showTime, 1000); 
}
showTime();



let fullName = prompt("Lütfen Adınızı Giriniz:")
let textInfo;
let info = document.querySelector("#info")

info.classList.add('text1')
if (fullName >= "") {
    info.innerHTML = `Merhaba ${fullName}! Hoş geldin!`
}
if (fullName >= "") {
    info2.innerHTML = `tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript bölümü 1. Ödevindesiniz.`
}