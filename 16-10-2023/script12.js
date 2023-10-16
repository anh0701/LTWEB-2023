function compute(form){
    if (confirm('Are you sure?')){
        form.ketqua.value = eval(form.expr.value)
    }else{
        alert('Please come back again.')
    }
}

function checkNum(num){
    if( num === ""){
        alert("Please enter a number")
        return false;
    }
    if(isNaN(num)){
        alert("Please enter a numeric value")
        return false
    }
    else{
        alert("Thank you!")
    }
}

function showLink(num){
    if(num === 1){
        document.forms[4].elements[0].value = "You have selected America"
    }
    if(num === 2){
        document.forms[4].elements[0].value = "You have selected Korea"
    }
    if(num === 3){
        document.forms[4].elements[0].value = "You have selected Vietnam"
    }
}