let phone = prompt('Введите номер телефона');
let lenPhone = phone.length;
let tt=phone.split('');
if(lenPhone == 11){
    tt.splice(0,"", "+")
    tt.splice(1,1,"7 ")
    tt.splice(2,"", "(");
    tt.splice(6,"", ") ");
    tt.splice(10,"", "-");
    tt.splice(13,"", "-");
}else if(lenPhone == 12){
    tt.splice(2,"", " (");
    tt.splice(6,"", ") ");
    tt.splice(10,"", "-");
    tt.splice(13,"", "-");
}else if(lenPhone != 12,11){
    alert('Проверьте номер телефона!')
}

alert(tt.join(''))