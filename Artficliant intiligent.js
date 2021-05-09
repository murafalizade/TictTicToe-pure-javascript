var comp1=false;
var comp2=true;
function ai(){
if(comp1==true){
    bestmove();
if(comp1==true){
     if(board[1][1]==''){
        board[1][1]='X';
        document.getElementById("1 1").innerHTML="X";
        comp2=true;
        comp1=false;
    }
    else if(board[1][1]=='X' && board[0][2]=='O' && board[0][0]==''){
        board[0][0]='X';
        document.getElementById("0 0").innerHTML='X';
        comp2=true;
        comp1=false;
    }
    else if(board[2][0]==''){
        board[2][0]='X';
        document.getElementById("2 0").innerHTML="X";
        comp2=true;
        comp1=false;
    }
 else if(board[1][1]=='X' && board[1][0]=='O' && board[0][0]==''){
        board[0][0]='X';
        document.getElementById("0 0").innerHTML='X';
        comp2=true;
        comp1=false;
    }
 else if(board[1][2]==''){
        board[1][2]='X';
        document.getElementById("1 2").innerHTML="X";
        comp2=true;
        comp1=false;
    }
else if(board[0][0]==''){
    document.getElementById("0 0").innerHTML="X";
    board[0][0]='X';
    comp2=true;
    comp1=false;
}
else if(board[0][2]==''){
    board[0][2]='X';
    document.getElementById("0 2").innerHTML="X";
    comp2=true;
    comp1=false;
}
else if(board[0][1]==''){
    document.getElementById("0 1").innerHTML="X";
    board[0][1]='X';
    comp2=true;
    comp1=false;
}
else if(board[1][0]==''){
    board[1][0]='X';
    document.getElementById("1 0").innerHTML="X";
    comp2=true;
    comp1=false;
}
else if(board[2][2]==''){
    board[2][2]='X';
    document.getElementById("2 2").innerHTML="X";
    comp2=true;
    comp1=false;
}
else if(board[2][1]==''){
    board[2][1]='X';
    document.getElementById("2 1").innerHTML="X";
    comp2=true;
    comp1=false;
}}}}
function bestmove(){
    /*Sag-sol*/
if(board[0][0]==board[0][1]   &&  board[0][1]!=''&&  board[0][0]!='' && board[0][2]=='')
{
board[0][2]='X';
document.getElementById("0 2").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[0][2]==board[0][1]   &&  board[0][1]!=''&&  board[0][2]!='' && board[0][0]=='')
{
    board[0][0]='X';
    document.getElementById("0 0").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[0][2]==board[0][0]   &&  board[0][0]!='' &&  board[0][2]!='' && board[0][1]=='')
{
        board[0][1]='X';
        document.getElementById("0 1").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[1][0]==board[1][1]   &&  board[1][1]!='' &&  board[1][0]!='' && board[1][2]=='')
{
board[1][2]='X';
document.getElementById("1 2").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[1][2]==board[1][1]   &&  board[1][1]!='' &&  board[1][2]!='' && board[1][0]=='')
{
    board[1][0]='X';
    document.getElementById("1 0").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[1][2]==board[1][0]   &&  board[1][0]!=''&&  board[1][2]!='' && board[1][1]=='')
{
        board[1][1]='X';
        document.getElementById("1 1").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[2][0]==board[2][1]   &&  board[2][1]!=''&&  board[2][0]!='' && board[2][2]=='')
{
board[2][2]='X';
document.getElementById("2 2").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[2][2]==board[2][1]   &&  board[2][1]!=''&&  board[2][2]!='' && board[2][0]=='')
{
    board[2][0]='X';
    document.getElementById("2 0").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[2][2]==board[2][0]   &&  board[2][0]!=''&&  board[2][2]!='' && board[2][1]=='')
{
    board[2][1]='X';
        document.getElementById("2 1").innerHTML='X';
        comp2=true;
        comp1=false;
}
//Yukari-asagi
else if(board[0][0]==board[1][0]   &&  board[1][0]!=''&&  board[0][0]!='' && board[2][0]=='')
{
board[2][0]='X';
document.getElementById("2 0").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[2][0]==board[1][0]   &&  board[2][0]!=''&&  board[1][0]!='' && board[0][0]=='')
{
    board[0][0]='X';
    document.getElementById("0 0").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[2][0]==board[0][0]   &&  board[0][0]!='' &&  board[2][0]!='' && board[1][0]=='')
{
        board[1][0]='X';
        document.getElementById("1 0").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[0][1]==board[1][1]   &&  board[1][1]!='' &&  board[0][1]!='' && board[2][1]=='')
{
board[2][1]='X';
document.getElementById("2 1").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[2][1]==board[1][1]   &&  board[1][1]!='' &&  board[2][1]!='' && board[0][1]=='')
{
    board[0][1]='X';
    document.getElementById("0 1").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[2][1]==board[0][1]   &&  board[2][1]!=''&&  board[0][1]!='' && board[1][1]=='')
{
        board[1][1]='X';
        document.getElementById("1 1").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[2][2]==board[1][2]   &&  board[2][2]!=''&&  board[1][2]!='' && board[0][2]=='')
{
board[0][2]='X';
document.getElementById("0 2").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[2][2]==board[0][2]   &&  board[0][2]!=''&&  board[2][2]!='' && board[1][2]=='')
{
    board[1][2]='X';
    document.getElementById("1 2").innerHTML='X';
        comp2=true;
        comp1=false;
}
else if(board[1][2]==board[0][2]   &&  board[0][2]!=''&&  board[1][2]!='' && board[2][2]=='')
{
    board[2][2]='X';
        document.getElementById("2 2").innerHTML='X';
        comp2=true;
        comp1=false;
}
//caprazlar ilk
else if(board[0][0]==board[1][1] && board[0][0]!='' && board[1][1]!='' && board[2][2]==''){
    board[2][2]='X';
    document.getElementById("2 2").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[0][0]==board[2][2] && board[0][0]!='' && board[2][2]!='' && board[1][1]==''){
    board[1][1]='X';
    document.getElementById("1 1").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[2][2]==board[1][1] && board[2][2]!='' && board[1][1]!='' && board[0][0]==''){
    board[0][0]='X';
    document.getElementById("0 0").innerHTML='X';
    comp2=true;
    comp1=false;
}
//capraz ikinci
else if(board[0][2]==board[1][1] && board[0][2]!='' && board[1][1]!='' && board[2][0]==''){
    board[2][0]='X';
    document.getElementById("2 0").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[0][2]==board[2][0] && board[0][2]!='' && board[2][0]!='' && board[1][1]==''){
    board[1][1]='X';
    document.getElementById("1 1").innerHTML='X';
    comp2=true;
    comp1=false;
}
else if(board[2][0]==board[1][1] && board[2][0]!='' && board[1][1]!='' && board[0][2]==''){
    board[0][2]='X';
    document.getElementById("0 2").innerHTML='X';
    comp2=true;
    comp1=false;
}
}