function validate() {
    if(document.Myform.Qone.value=="") {
        alert("Please check one answer.");
        document.Myform.Qone.focus();
        return false;
    }

    if(document.Myform.Qtwo.value=="") {
        alert("Please check one answer.");
        document.Myform.Qtwo.focus();
        return false;
    }
    return(true);
}