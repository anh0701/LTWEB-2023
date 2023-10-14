function bai1() {
	var sum = 0;
	for (var i = 1; i <= 200; i++) {
		sum = sum + i
	}
	document.write("Tong cac so tu 1 - 100 la: " + sum)
}

function bai2(){
	var multi = 1
	for (var i = 3; i <= 300; i+=2) {
		multi = multi * i
	}
	document.write("tich so le tu 1 - 300 la: " + multi)
}

function bai3(){
	var a = prompt("Nhap so a: ")
	var check = 1
	for (var i = 2; i < a; i++) {
		if(a % i == 0){
			document.write("so " + a + " khong phai la so nguyen to")
			check = 0
			break
		}
	}
	if(check === 1){
		document.write("so " + a + " la so nguyen to")
	}
}

function bai4() {
	var x = prompt("nhap vao so x")
	var n = prompt("nhap vao so n")
	var exp = 1
	for (var i = 1; i <= n; i++) {
		exp = exp * x
	}
	document.write("x mu n bang: " + exp)
}

function bai5(){
	var x = ""
	do{
		x = prompt("nhap ho ten: ")
	} while(x === "")
}

function bai6(){
	document.write("cac nam nhuan trong khoang tu 1699 - 2008 la: ")
	for(var i = 1699; i <= 2008; i++){
		if((i % 4 == 0 && i % 100 != 0) || i % 400 == 0){
			document.write(i + " ")
		}
	}
}