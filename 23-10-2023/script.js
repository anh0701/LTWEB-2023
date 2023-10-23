function check(){
    len = document.getElementById('textbox').ariaValueMax.length
    if(len < 6){
        alert('Nhập tối thiểu 6 ký tự.')
    }
}