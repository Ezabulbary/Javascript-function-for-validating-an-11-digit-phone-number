function phonenumber(inputtxt) {
  var phoneno = /^\d{11}$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  }
  else {
    alert("Not a valid Phone Number");
    return false;
  }
}