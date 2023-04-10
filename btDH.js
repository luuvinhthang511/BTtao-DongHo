function clock(){
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var now_gio = new Date().getHours();
    var now_phut = new Date().getMinutes();
    var now_giay = new Date().getSeconds();
    gio.innerHTML = now_gio;
    phut.innerHTML = now_phut;
    giay.innerHTML = now_giay;
}
var play = setInterval(clock, 1000);