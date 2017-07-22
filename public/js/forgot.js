(function(window) {
  var forgotPasswordClickEvt = document.getElementById('forgotPasswordClickEvt');

  forgotPasswordClickEvt.addEventListener('click', forgotPasswordClicked);

  function forgotPasswordClicked(event) {
    event.preventDefault();
    var data = "email=" + document.getElementById('email').value;
    ajaxCall(data, "http://localhost:3000/auth/forgot_password", function(status, response) {
      if (status == 200) {
        console.log(response)
      } else {
        console.log('status', status)
        console.log('response', response)
      }
    });
  }

  function ajaxCall(data, url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        return callback(this.status, JSON.parse(xhttp.response));
      }
    }
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);
  }


})();
