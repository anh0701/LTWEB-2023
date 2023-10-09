document.write('<br/><hr>Kiem tra diem: ')
var a = prompt('Nhap diem: ')

switch (a){
	case '9':
	case '10':
		document.write('xếp loại giỏi.')
		break
	case '7':
	case '8':
		document.write('xếp loại khá.')
		break
	case '5':
	case '6':
		document.write('xếp loại trung bình.')
		break
	case '4':
	case '3':
	case '2':
	case '1':
	case '0':
		document.write('xếp loại yếu.')
		break
	default:
		document.write('điểm nhập vào không hợp lệ.')

}