
function checkNameFaciliator(str){
    var strLower = str.value.toLowerCase();
    if (strLower.match("fazil") || strLower.match("laura") || strLower.match("harsh")){
        return true;
    }
    else {
        alert("You must enter the first name of one of the current faciliators: Fazil, Laura or Harsh")
        return false;
    }
    
}
function checkStringChar(str){
    var regex = /^[a-zA-Z]+$/
    debugger;
    if (regex.test(str.value)) {
        return true;
    }
    else {
        debugger;
        var msg = "You must enter only characters, not numbers";
        alert(msg)
        return false;
    }
}
debugger;
function checkLengthString(element, minlength){
    if (element.value.length < minlength || element.value === null){
        var msg = "Length needs to be greater than" + minlength;
        alert(msg)
        element.focus();
        return false;
    }
    else {
        return true;
    }

}

function ValidateForm() {
    var minlength = 2;
    var firstname =document.getElementById("firstName");
    var lastname = document.getElementById("lastName");
    var facil = document.getElementById("facilitator");

    if (checkLengthString(lastname, minlength)){
        if (checkLengthString(firstname, minlength)){
            if(checkStringChar(firstname)){
                if(checkStringChar(lastname)){
                    if(checkNameFaciliator(facil)){
                        return true
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }  
}

