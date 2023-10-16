function bai1(){
    document.write("<a href=\"chuong11.html \">Back</a> <br> <br>")
    var str1 = new String('HELLO')
    var str2 = new String("world")
    document.write("Str1 in lower case: " + str1.toLowerCase() + "<br>")
    document.write("Str2 in UPPER case: " + str2.toUpperCase() + "<br>")
    document.write("Character at 4th position in Str2 is: " + str2[4] + "<br>")
    document.write("Length of Str1 is: " + str1.length)
}

function bai2(){
    document.write("<a href=\"chuong11.html \">Back</a> <br> <br>")
    var time = new Date()
    document.write("Todays day is: " + time.getDate() + "<br>")
    document.write("Month is: " + time.getMonth() + "<br>")
    document.write("Year is: " + time.getFullYear() + "<br>")
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var temp = " " + ((hour > 12) ? hour - 12: hour)
    temp += ((min < 10) ? ':0' : ':') + min
    temp += ((sec < 10) ? ':0' : ':') + sec
    document.write("System time is: " + temp)
}
function bai3(){
    document.write("<a href=\"chuong11.html \">Back</a> <br> <br>")
    num1 = 10
    num2 = 20
    max = num1
    if(max < num2){
        max = num2
    }
    document.write("Between number 1 = 10 and number 2 = 20, maximum number is: " + max)
}
function bai4(){
    document.write("<a href=\"chuong11.html \">Back</a> <br> <br>")
    document.write("  <input type=\"text\" name=\"rad\" id=\"rad\"><br><br><input type=\"button\" value=\"Display\" onclick=\"doCal(document.getElementById('rad').value)\">")
}
function doCal(x){
    var a;
    a = Math.PI * x * x;
    var b;
    b = Math.PI * x * 2;
    alert("Dien tich la: " + x + " is " + a + "<br>Chu vi la: " + b)
}
function bai5(){
    document.write("<a href=\"chuong11.html \">Back</a> <br> <br>")
    var time = new Date()
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var mess =""
    var temp = " " + ((hour > 12) ? hour - 12: hour)
    temp += ((min < 10) ? ':0' : ':') + min
    temp += ((sec < 10) ? ':0' : ':') + sec
    mess += ((hour <= 12) ? "Chào buổi sáng. Bây giờ là " : "Chào buổi chiều. Bây giờ là ") + temp
    document.write(mess)
}