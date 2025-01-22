 $(document).ready(function(){

  $("#btn_login").click(function (e) {
    //verification
    if ($("#txtEmailLogin").val().trim().length < 1) {
        alert("Please Enter Email");
        $("#txtEmailLogin").focus();
        return false;
    }

    if ($("#txtPasswordLogin").val().trim().length < 1) {
        alert("Please Enter Password");
        $("#txtPasswordLogin").focus();
        return false;
    }
    
    var formData = new FormData();
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
    formData.append("txtEmailLogin", $("#txtEmailLogin").val());
    formData.append("txtPasswordLogin", $("#txtPasswordLogin").val());

    $.ajax({
      beforeSend: function () {
        // $(".btn .spinner-border").show();
        $("#btn_submit").attr("disabled", true);
      },
      url: "/web_login/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {

      	if(result == "0") {
      		alert("Invalid Email OR Password, OR you are not Registered User");
      	} else {
          alert("Login Successful");
      		window.location = '/web_index/';
      	}
        
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {
        // $(".btn .spinner-border").hide();
        $("#btn_submit").attr("disabled", false);
      },
    });
  });

});