function doCal(x){
    var a;
    a = Math.PI * x * x;
    var b;
    b = Math.PI * x * 2;
    alert("The area of a circle with a radius of " + x + " is " + a + "\nChu vi la: " + b)
}

function FString(){   
    document.write("<a href=\"index.html  \">Back</a> <br>")
    var a = "big"
    var b = "small"
    var c = "bold"
    var d = "blink"
    var e = "UpperCase"
    var f = "LowerCase"
    document.write("<br> This is " +  a.big() + " text")
    document.write("<br> This is " +  b.small() + " text")
    document.write("<br> This is " +  c.bold() + " text")
    document.write("<br> This is " +  d.blink() + " text")
    document.write("<br> This is " +  e.toUpperCase() + " text")
    document.write("<br> This is " +  f.toLowerCase() + " text")

}

function F114(){
    document.write("<title>Tim kiem trong chuoi</title>")
    document.write("<a href=\"index.html  \">Back</a> <br>")
    str1 = "Day la ket thuc mot dong. ";
    document.write(str1)
    document.write("<br>")
    document.write("Vi tri cua tu 'ket' la " + str1.search('ket'))
}

function F115(){
    document.write("<title>Dinh vi ky tu trong chuoi</title>")
    document.write("<a href=\"index.html  \">Back</a> <br>")
    str = "Trong cac mua, mua xuan la mua hoa va cay dam choi nay loc.";
    document.write(str)
    document.write("<br>")
    document.write("Vi tri cua tu 'mua' dau tien la " + str.indexOf('mua'))
}

function F116(){
    document.write("<title>Dinh vi ky tu trong chuoi</title>")
    document.write("<a href=\"index.html  \">Back</a> <br>")
    str = "Trong cac mua, mua xuan la mua hoa va cay dam choi nay loc.";
    document.write(str)
    document.write("<br>")
    document.write("Vi tri cua tu 'mua' cuoi cung la " + str.lastIndexOf('mua'))
}

function F117(){
    document.write("<a href=\"index.html  \">Back</a> <br>")
    document.write("<p>The time is displayed on the next textbox:</p> <br> <br> <form name=\"MyPage\"><input type = \"text\" name=\"time\"></form>")
    var time = new Date()
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var temp = " " + ((hour > 12) ? hour - 12: hour)
    temp += ((min < 10) ? ':0' : ':') + min
    temp += ((sec < 10) ? ':0' : ':') + sec
    temp += (hour >= 12) ? "P.M." : "A.M."
    document.MyPage.time.value = temp
}