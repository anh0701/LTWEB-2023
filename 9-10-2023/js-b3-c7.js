document.write("<br><hr> Kiem tra nam nhuan: ")
var year = prompt("nhap nam can kiem tra: ")
if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
	document.write( year + ' la nam nhuan.')
}
else{
	document.write( year + ' khong la nam nhuan.')
}