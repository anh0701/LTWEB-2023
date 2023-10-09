// document.write('hello')
function vidu(){
	alert('Xin chao')
}

var fruit = 'apples';
var numfruit = 12;
numfruit = numfruit + 20;
var temp ="There are " + numfruit + " "+ fruit + ".";
document.write(temp);

function displayName(name){
	alert('Xin chao: ' + name);
}

var x = 4
if(x % 2 === 0){
	document.write('</br> ' + x + ' la so chan.')
}


var y = prompt('nhap so n: ')
if(y % 2 === 0){
	document.write('<br/> ' + y + ' la so chan.')
}
else{
	document.write('<br/> ' + y + ' la so le.')
}

document.write('<br/><hr>')
document.write('1. Oranges')
document.write('<br/> 2. Apples')
document.write('<br/> 3. Bananas')
document.write('<br/> 4. Cherries')

var exp = prompt('vui long nhap mot loai qua: ')
switch(exp){
	case 'Oranges':
		document.write('<br/> Oranges are $0.59 a pound.')
		break
	case 'Apples':
		document.write('<br/> Apples are $0.32 a pound.')
		break
	case 'Bananas':
		document.write('<br/> Bananas are $0.48 a pound.')
		break
	case 'Cherries':
		document.write('<br/> Cherries are $3.00 a pound.')
		break
	default:
		document.write('<br/> Sorry, we have no this kind of fruits!!')
}
document.write('<hr>')