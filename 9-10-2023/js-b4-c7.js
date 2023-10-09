document.write('<br/><hr>Kiem tra diem: ')
var a = prompt('Nhap diem: ')


if(a < 0 || a > 10){
	document.write('điểm nhập vào không hợp lệ.')
}
else if(a >= 0 && a < 5){
	document.write('xếp loại yếu.')
}
else if(a >= 5 && a <= 6){
	document.write('xếp loại trung bình.')
}
else if(a > 6 && a <= 8){
	document.write('xếp loại khá.')
}
else{
	document.write('xếp loại giỏi.')
}