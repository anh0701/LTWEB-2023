document.write('<br/><hr>Kiem tra so lon nhat trong ba so: ')
var a = prompt('Nhap so a: ')
var b = prompt('Nhap so b: ')
var c = prompt('Nhap so c: ')

max = a 
if(max < b){
	max = b
} 
else if (max < c){
	max = c
} 

document.write("so lon nhat la: " + max)