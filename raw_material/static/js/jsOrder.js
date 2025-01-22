
function getAdminData() {

  var formData = new FormData();
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());

  $.ajax({

      url: "/get_data/order/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        $("#tableData tr:gt(0)").remove();
        for(var i = 0; i < response.length; i++) {
          var j = i + 1;
          let image = "/static/"+response[i].ps_image;
          $("#tableData").append('<tr><td>'+j+'</td><td style="display: none;">'+response[i].ps_id+'</td><td>'+response[i].ps_product_name+'</td><td><a href="'+image+'" download>download</a></td><td>'+response[i].ps_weight+'</td><td>'+response[i].ps_price+'</td><td>'+response[i].ps_total_amt+'</td><td>'+response[i].ps_user_name+'</td></tr>');
        }
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {

      },
    });

}

getAdminData();