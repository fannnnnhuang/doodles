

//顯示刪除新增修改 按鈕
function myFunction() {
var x = document.getElementById("myDIV");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}


function myFunction2() {
var x = document.getElementById("myDIV2");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}


function myFunction3() {
var x = document.getElementById("myDIV3");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}
//顯示刪除新增修改 按鈕


//連動下拉選單
CharacterVoice=new Array();

CharacterVoice[1]=["畫具", "畫筆", "其他"];

CharacterVoice[2]=["顏料", "畫紙"];

CharacterVoice[3]=["畫架", "畫板", "畫框"];
function renew(index){
for(var i=0;i<CharacterVoice[index].length;i++)
//新增select的選項
member.options[i]=new Option(CharacterVoice[index][i]);
member.length=CharacterVoice[index].length;
}


CharacterVoice2=new Array();

CharacterVoice2[1]=["畫具", "畫筆", "其他"];

CharacterVoice2[2]=["顏料", "畫紙"];

CharacterVoice2[3]=["畫架", "畫板", "畫框"];
function renew2(index){
for(var i=0;i<CharacterVoice2[index].length;i++)
//新增select的選項
member2.options[i]=new Option(CharacterVoice2[index][i]);
member2.length=CharacterVoice2[index].length;
}

//連動下拉選單