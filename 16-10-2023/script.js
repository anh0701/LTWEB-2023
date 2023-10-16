myArray = new Array(3)
myArray[0] = "Ha Noi"
myArray[1] = "TP Da Nang"
myArray[2] = "TP Ho Chi Minh"
document.writeln(myArray[0] + "<br/>")
document.writeln(myArray[1] + "<br/>")
document.writeln(myArray[2] + "<br/>")

document.writeln("<br/> <hr/>")

a = new Array('a', 'b', 'c')
a1 = a.join();
a2 = a.join(',');
a3 = a.join('+');
document.writeln(a1 + "<br>")
document.writeln(a2 + "<br>")
document.writeln(a3 + "<br>")

document.writeln("<br/> <hr/>")

myArray0 = new Array(3)
myArray0[0] = "Ha Noi"
myArray0[1] = "Da Nang"
myArray0[2] = "Ho Chi Minh"
myArray0.reverse();
document.writeln(myArray0[0] + "<br>")
document.writeln(myArray0[1] + "<br>")
document.writeln(myArray0[2] + "<br>")

document.writeln("<br/> <hr/>")

myArray1 = new Array(3, 3)
myArray1[0, 0] = "One"
myArray[0, 1] = "1"
myArray1[1, 0] = "Two"
myArray1[1, 1] = "2"
myArray1[2, 0] = "Three"
myArray1[2, 1] = "3"
document.write("The world " + myArray1[1, 0])
document.write(" is correlatived with the number " + myArray1[1, 1])

document.writeln("<br/> <hr/>")
