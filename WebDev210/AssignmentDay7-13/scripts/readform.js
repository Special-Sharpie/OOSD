/**Daniel Palmer
 * Web Application Development (CPRG-210-A)
 * Assignemt 8 - 13
 * 2021-11-26
*/
var postalCheck = /(^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$)|(^\d{5}-\d{4}$)|(^\d{5}$)/
var phoneCheck = /(^\d{10}$)|(^\(\d{3}\)-\d{3}-\d{4}$)|(^\d{3}-\d{3}-\d{4}$)/

// A simple function for test Regex against a submitted value.
function checkValue(value, reg){
    if (reg.test(value)){
        return true
    }else{
        return false
    }
}

function validate(){
    var elements = document.getElementById("registerform").elements;
    var form = document.forms[0]
    var filledFields = 0;
    var values = []
/**
 * Below interates over all inputs in the forms, incrementing "unfilledFields"
 * when ever an empty string is found as the input value 
 */
    for (var i = 0, element; element = elements[i++];) {
        values.push(element.value)
        if (element.value === ""){
            filledFields++
        };
    };
/**
 * Below is the form validation.
 * First confirming all fields are filled
 * Second verifying the password and confirm password are the same
 * Third verifies postal code / zip code is formated properly
 * Forth verifies that the phone number is formated properly
 * Last, and ALWAYS LAST, the page requests confirmation to submit information server.
 */
    if (filledFields != 0){
        alert(filledFields + " required fields are missing.")
        return false;
    }else if (form.password.value != form.cpassword.value){
        alert("Password and Confirm Password do not match!")
        return false;
    }else if(!checkValue(form.postalcode.value, postalCheck)){
        alert("Invalid Postal Code!")
        return false;
    }else if(!checkValue(form.phonenumber.value, phoneCheck)){
        console.log(form.phonenumber.value)
        alert("Invalid Phone Number or Format")
        return false
    }else{
        confirm("Confirm and Submit information?")
        //Removes the "send" and "clear" items from the vales array
    };
};

