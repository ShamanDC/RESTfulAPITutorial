(function(window) {

  var resetPasswordClickEvt = document.getElementById('resetPasswordClickEvt');

  resetPasswordClickEvt.addEventListener('click', resetPasswordClicked);

  function resetPasswordClicked(event) {
    event.preventDefault();
    var token = document.location.href.split('token=')[1];
    console.log('token', token);
    var data = "newPassword=" + document.getElementById('newPassword').value+'&verifyPassword='+ document.getElementById('verifyPassword').value+ '&token='+token;
    ajaxCall(data, "http://localhost:3000/auth/reset_password", function(status, response) {
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
