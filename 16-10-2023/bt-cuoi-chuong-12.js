function bai1() {
	if(document.getElementById('radio1').checked === true){
		document.getElementById('inputtext').setAttribute('type', 'hidden')
	}else{

		document.getElementById('inputtext').setAttribute('type', 'text')

	}
}

function bai2() {
	if(document.getElementById('checkbox1').checked === true){
		document.getElementById('button').setAttribute('type', 'hidden')
	}else{

		document.getElementById('button').setAttribute('type', 'button')

	}
}

function bai3(){
	alert(document.getElementById("textbox").value)
}

function bai41() {
	document.getElementById('button1').classList.remove('isHidden');
}

function bai42() {
	// body...
	alert(document.getElementById("textbox1").value)
}

function bai5(){
	user = document.getElementById('username').value
	pass = document.getElementById('pass').value
	alert(user + " " + pass)
}

function validateFirstName()
{
	var str=form1.fname.value;
	if (str == "")
	{
		alert ("The first name cannot be empty");
		return false;
	}
	return true;
}

function validateLastName()
{
	var str=form1.lname.value;
	if (str == "")
	{
		alert ("The last name cannot be empty");
		return false;
	}
	return true;
}

function validateEmail()
{
	var str=form1.email.value;
	if (str == "")
	{
		alert ("The Email field cannot be empty");
		return false;
	}
}

function proccessForm()
{
	disp = open("","result")
	disp.document.write("<TITLE> Result Page </TITLE>"+"<PRE>")
	disp.document.write("<H2 ALIGN='CENTER'>" + "Thanks for signing in " + "</H2>"+"<HR>"+"<BR><BR>")
	disp.document.write("First name \t\t:" + form1.fname.value+"<BR>")
	disp.document.write("Last name \t\t:"+ form1.lname.value+"<BR>")
	disp.document.write("Email \t\t\t:" + form1.email.value+"<BR>")
	disp.document.write("Your comments \t\t:" + form1.comment.value+"<BR>")
	disp.document.write("<PRE>")
	// if (disp.confirm("Is this information correct"));
	// disp.close()
}