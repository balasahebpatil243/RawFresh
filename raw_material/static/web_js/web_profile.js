function getData() {

  var formData = new FormData();
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());

  $.ajax({

      url: "/get_profile/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        $("#userName").text(response[0].rg_name);
        $("#txtName").val(response[0].rg_name);
        $("#txtMobileNo").val(response[0].rg_mobile);
        $("#txtEmail").val(response[0].rg_email);
        $("#txtAddress").val(response[0].rg_address);
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {

      },
    });

}

getData();