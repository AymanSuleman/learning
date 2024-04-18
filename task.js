 function  Emailexample(input){

    var validRegex= /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/ ;
    if (input.value.match(validRegex)) {

        alert("Valid email Address!!")

        document.form.text1.focus();

        return true;
        
    } else {

        alert("invalid email address!!");
        document.form.text1.focus();
        return false;
        
    }

 }