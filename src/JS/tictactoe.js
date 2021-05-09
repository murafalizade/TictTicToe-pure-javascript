var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
var winpos = "";
var player1 = true;
var player2 = false;
var h6 = document.getElementById("gis");
var h5 = document.getElementById("so");
var h4 = document.getElementById("so1");
var h3 = document.getElementById("ber");
var ybtn = document.getElementById("multi");
var sbtn = document.getElementById("singler");
var table = document.getElementById("al");
var btn = document.getElementById("yeniden");
var ITengine = false;
table.style.display = "none";
h3.style.display = "none";
btn.style.display = "none";
document.getElementById("0 0").addEventListener("click", x1);
document.getElementById("0 1").addEventListener("click", x2);
document.getElementById("0 2").addEventListener("click", x3);
document.getElementById("1 0").addEventListener("click", x4);
document.getElementById("1 1").addEventListener("click", x5);
document.getElementById("1 2").addEventListener("click", x6);
document.getElementById("2 0").addEventListener("click", x7);
document.getElementById("2 1").addEventListener("click", x8);
document.getElementById("2 2").addEventListener("click", x9);
document.getElementById("multi").addEventListener("click", Basla);
sbtn.addEventListener("click", sifirla);
function sifirla() {
    player1 = false;
    player2 = false;
    table.style.display = "block";
    ybtn.style.display = "none";
    sbtn.style.display = "none";
    ITengine = true;
}
function Basla() {
    table.style.display = "block";
    ybtn.style.display = "none";
    sbtn.style.display = "none";
}
function x1() {
    if (player1 == true && board[0][0] == '' && ITengine == false) {
        document.getElementById("0 0").innerHTML = "X";
        player1 = false;
        player2 = true;
        board[0][0] = 'X';
        kazanan();
    }
    else if (player2 == true && board[0][0] == '' && ITengine == false) {
        document.getElementById("0 0").innerHTML = "O";
        player2 = false;
        player1 = true;
        board[0][0] = 'O';
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[0][0] == '') {
        document.getElementById("0 0").innerHTML = 'O';
        board[0][0] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x2() {
    if (player1 == true && board[0][1] == '' && ITengine == false) {
        document.getElementById("0 1").innerHTML = "X";
        player1 = false;
        player2 = true;
        board[0][1] = 'X';
        kazanan();
    }
    else if (player2 == true && board[0][1] == '' && ITengine == false) {
        document.getElementById("0 1").innerHTML = "O";
        player2 = false;
        player1 = true;
        board[0][1] = 'O';
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[0][1] == '') {
        document.getElementById("0 1").innerHTML = 'O';
        board[0][1] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x3() {
    if (player1 == true && board[0][2] == '' && ITengine == false) {
        document.getElementById("0 2").innerHTML = "X";
        player1 = false;
        player2 = true;
        board[0][2] = 'X';
        kazanan();
    }
    else if (player2 == true && board[0][2] == '' && ITengine == false) {
        document.getElementById("0 2").innerHTML = "O";
        player2 = false;
        player1 = true;
        board[0][2] = 'O';
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[0][2] == '') {
        document.getElementById("0 2").innerHTML = 'O';
        board[0][2] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x4() {
    if (player1 == true && board[1][0] == '' && ITengine == false) {
        document.getElementById("1 0").innerHTML = "X";
        player1 = false;
        player2 = true;
        board[1][0] = 'X';
        kazanan();
    }
    else if (player2 == true && board[1][0] == '' && ITengine == false) {
        document.getElementById("1 0").innerHTML = "O";
        player2 = false;
        player1 = true;
        board[1][0] = 'O';
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[1][0] == '') {
        document.getElementById("1 0").innerHTML = 'O';
        board[1][0] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x5() {
    if (player1 == true && board[1][1] == '' && ITengine == false) {
        document.getElementById("1 1").innerHTML = "X";
        player1 = false;
        player2 = true;
        board[1][1] = 'X';
        kazanan();
    }
    else if (player2 == true && board[1][1] == '' && ITengine == false) {
        document.getElementById("1 1").innerHTML = "O";
        player2 = false;
        player1 = true;
        board[1][1] = 'O';
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[1][1] == '') {
        document.getElementById("1 1").innerHTML = 'O';
        board[1][1] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x6() {
    if (player1 == true && board[1][2] == '' && ITengine == false) {
        document.getElementById("1 2").innerHTML = "X";
        player1 = false;
        player2 = true;
        board[1][2] = 'X';
        kazanan();
    }
    else if (player2 == true && board[1][2] == '' && ITengine == false) {
        board[1][2] = 'O';
        document.getElementById("1 2").innerHTML = board[1][2];
        player2 = false;
        player1 = true;
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[1][2] == '') {
        document.getElementById("1 2").innerHTML = 'O';
        board[1][2] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x7() {
    if (player1 == true && board[2][0] == '' && ITengine == false) {
        board[2][0] = 'X';
        document.getElementById("2 0").innerHTML = board[2][0];
        player1 = false;
        player2 = true;
        kazanan();
    }
    else if (player2 == true && board[2][0] == '' && ITengine == false) {
        board[2][0] = 'O';
        document.getElementById("2 0").innerHTML = board[2][0];
        player2 = false;
        player1 = true;
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[2][0] == '') {
        document.getElementById("2 0").innerHTML = 'O';
        board[2][0] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x8() {
    if (player1 == true && board[2][1] == '' && ITengine == false) {
        board[2][1] = 'X';
        document.getElementById("2 1").innerHTML = board[2][1];
        player1 = false;
        player2 = true;
        kazanan();
    }
    else if (player2 == true && board[2][1] == '' && ITengine == false) {
        document.getElementById("2 1").innerHTML = "O";
        player2 = false;
        player1 = true;
        board[2][1] = 'O';
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[2][1] == '') {
        document.getElementById("2 1").innerHTML = 'O';
        board[2][1] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function x9() {
    if (player1 == true && board[2][2] == '' && ITengine == false) {
        document.getElementById("2 2").innerHTML = "X";
        player1 = false;
        player2 = true;
        board[2][2] = 'X';
        kazanan();
    }
    else if (player2 == true && board[2][2] == '' && ITengine == false) {
        document.getElementById("2 2").innerHTML = "O";
        player2 = false;
        player1 = true;
        board[2][2] = 'O';
        kazanan();
    }
    else if (ITengine == true && comp2 == true && board[2][2] == '') {
        document.getElementById("2 2").innerHTML = 'O';
        board[2][2] = 'O';
        comp2 = false;
        comp1 = true;
        kazanan();
        ai();
        kazanan();
    }
}
function qalib() {
    if (player1 == true && ITengine == false) {
        h4.style.display = "block";
    }
    else if (player2 = true && ITengine == false) {
        h5.style.display = "block";
    }
    else if (comp1 == true && ITengine == true) {
        h4.style.display = "block";
    }
    else if (comp2 == true && ITengine == true) {
        h5.style.display = "block";
    }
    comp2 = false;
    comp1 = false;
    h6.style.display = "block";
    btn.style.display = "block";
    create(winpos);
}
function kazanan() {
    if (board[0][0] == board[0][1] && board[0][2] == board[0][1] && board[0][0] != '' && board[0][1] != '' && board[0][2] != '') {
        winpos = "r000102";
        qalib();
    }
    else if (board[1][0] == board[1][1] && board[1][2] == board[1][1] && board[1][0] != '' && board[1][1] != '' && board[1][2] != '') {
        winpos = "r101112";
        qalib();
    }
    else if (board[2][0] == board[2][1] && board[2][2] == board[2][1] && board[2][1] != '' && board[2][1] != '' && board[2][2] != '') {
        winpos = "r202122";
        qalib();
    }
    else if (board[1][0] == board[2][0] && board[2][0] == board[0][0] && board[1][0] != '' && board[2][0] != '' && board[0][0] != '') {
        ;
        winpos = "r001020";
        qalib();
    }
    else if (board[1][1] == board[2][1] && board[2][1] == board[0][1] && board[1][1] != '' && board[2][1] != '' && board[0][1] != '') {
        winpos = "r011121"
        qalib();
    }
    else if (board[1][2] == board[2][2] && board[2][2] == board[0][2] && board[1][2] != '' && board[2][2] != '' && board[0][2] != '') {

        winpos = "r021222";
        qalib();
    }
    else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '' && board[2][2] != '' && board[1][1] != '') {
        winpos = "r001122";
        qalib();
    }
    else if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[1][1] != '' && board[2][0] != '' && board[0][2] != '') {
        winpos = "r021120"
        qalib();
    }
    else if (board[1][1] != '' && board[2][0] != '' && board[0][2] != '' && board[1][2] != '' && board[1][0] != '' && board[0][1] != '' && board[0][0] != '' && board[2][1] != '' && board[2][2] != '') {
        console.log("berabere");
        player1 = false;
        player2 = false;
        h6.style.display = "block";
        h3.style.display = "block";
        btn.style.display = "block";
    }
    console.log(board);
}
function sifir() {
    window.location.reload();
}