
    function validateEmail(paramEmailID) {
      var filter = /^[0-9a-z.]+\@[a-z0-9]+\.[a-zA-z0-9]{2,4}$/;
      
      if (filter.test(paramEmailID)) {
        return true;
      } else {
        return false;
      }
    }

    

$("#btn_add").click(function (e) {
  //verification
  if ($("#filePhoto").val().trim().length < 1) {
    snackbar_error("Please Select Photo");
    $("#filePhoto").focus();
    return false;
  }

  if ($("#selType").val().trim().length < 1) {
    snackbar_error("Please Select Type");
    $("#selType").focus();
    return false;
  }

  if ($("#txtName").val().trim().length < 1) {
    snackbar_error("Please Enter Name");
    $("#txtName").focus();
    return false;
  }

  if ($("#txtWeight").val().trim().length < 1) {
    snackbar_error("Please Enter Weight");
    $("#txtWeight").focus();
    return false;
  }

  if ($("#txtRate").val().trim().length < 1) {
    snackbar_error("Please Enter Rate");
    $("#txtRate").focus();
    return false;
  }

  if ($("#txtDesc").val().trim().length < 1) {
    snackbar_error("Please Enter Description");
    $("#txtDesc").focus();
    return false;
  }

  var formData = new FormData();

  var lclFile = document.getElementById("filePhoto");
  lclFile1 = lclFile.files[0];
  formData.append("filePhoto", lclFile1);
  
  formData.append("selType", $("#selType").val());
  formData.append("txtName", $("#txtName").val());
  formData.append("txtWeight", $("#txtWeight").val());
  formData.append("txtRate", $("#txtRate").val());
  formData.append("txtDesc", $("#txtDesc").val());
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
  formData.append("action", "add");

  var table = $("#tableData").DataTable();

  $.ajax({
    beforeSend: function () {
      $(".btn .spinner-border").show();
      $("#btn_add").attr("disabled", true);
    },
    url: "/add/product/",
    type: "POST",
    // headers: {'X-CSRFToken': '{{ csrf_token }}'},
    data: formData,
    processData: false,
    contentType: false,
    success: function (result) {

        snackbar_success("Product Added Successfully");
        location.reload();
        // table.ajax.reload();
        $("#add_modal").modal('hide');
      
    },
    error: function (request, error) {
      console.error(error);
    },
    complete: function () {
      $(".btn .spinner-border").hide();
      $("#btn_add").attr("disabled", false);
    },
  });
});
// var sl_no = 0;
// ADD Testimnials data Table (DONE)
$(document).ready(function () {

  $(window).on("load", function () {
    // alert("Hello");
    // getAdminData();
  });

  $.fn.dataTableExt.errMode = 'ignore';
  //show data
  var table = $("#tableData").DataTable();

    table.on( 'draw.dt', function () {
    var PageInfo = $('#tableData').DataTable().page.info();
         table.column(0, { page: 'current' }).nodes().each( function (cell, i) {
            cell.innerHTML = i + 1;
        });
    });

  //Edit modal submit click
  $(document).on("click", "#btn_update", function () {

    if ($("#txtName1").val().trim().length < 1) {
      snackbar_error("Please Enter Name");
      $("#txtName1").focus();
      return false;
    }

    if ($("#selType1").val().trim().length < 1) {
      snackbar_error("Please Select Type");
      $("#selType1").focus();
      return false;
    }

    if ($("#txtWeight1").val().trim().length < 1) {
      snackbar_error("Please Enter Weight");
      $("#txtWeight1").focus();
      return false;
    }

    if ($("#txtRate1").val().trim().length < 1) {
      snackbar_error("Please Enter Rate");
      $("#txtRate1").focus();
      return false;
    }

    if ($("#txtDesc1").val().trim().length < 1) {
      snackbar_error("Please Enter Description");
      $("#txtDesc1").focus();
      return false;
    }
    
    var formData = new FormData()
    formData.append("selType1", $("#selType1").val());
    formData.append("txtName1", $("#txtName1").val());
    formData.append("txtWeight1", $("#txtWeight1").val());
    formData.append("txtRate1", $("#txtRate1").val());
    formData.append("txtDesc1", $("#txtDesc1").val());
    formData.append("id", $("#edit_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());

    var table = $("#tableData").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
        $("#btn_update").attr("disabled", true);
      },
      url: "/update/product/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
        snackbar_success("Product Details Updated Succesfully");
        location.reload();
        // table.ajax.reload();
        $("#edit_modal").modal('hide');
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {
        $(".btn .spinner-border").hide();
        $("#btn_update").attr("disabled", false);
      },
    });
  });

  //Delete work step
  $(document).on("click", "#btn_delete", function () {

    var formData = new FormData();
    formData.append("id", $("#delete_id").val());
    formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());

    var table = $("#tableData").DataTable();

    $.ajax({
      beforeSend: function () {
        $(".btn .spinner-border").show();
      },

      url: "/delete/product/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function () {
        snackbar_success("Product deleted succesfully");
        location.reload();
        table.ajax.reload();
        $("#delete_modal").modal('hide');
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {
        $(".btn .spinner-border").hide();
        // Reset Form
        //$("#view_field_form")[0].reset();
        $(".close").click();
      },
    });
  });

  $(document).on("click", "#add_user", function () {

    $("#txtName").val('');
    $("#filePhoto").val('');
    $("#txtWeight").val('');
    $("#txtRate").val('');
    $("#txtDesc").val('');

  });
});

function getAdminData() {

  var formData = new FormData();
  formData.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());

  $.ajax({

      url: "/get_data/product/",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        $("#tableData tr:gt(0)").remove();
        for(var i = 0; i < response.length; i++) {
          var j = i + 1;
          let image = response[i].ap_image.substring(12);
          $("#tableData").append('<tr><td>'+j+'</td><td style="display: none;">'+response[i].ap_id+'</td><td><a href="'+image+'" download>download</a></td><td>'+response[i].ap_type+'</td><td>'+response[i].ap_name+'</td><td>'+response[i].ap_weight+'</td><td>'+response[i].ap_rate+'</td><td>'+response[i].ap_description+'</td><td></tr>');
        }
      },
      error: function (request, error) {
        console.error(error);
      },
      complete: function () {

      },
    });

}

function getRowsUpdate() {
  $("#tableData tr").click(function() {
      var currentRow = $(this).closest("tr");
      var lclID = currentRow.find("td:eq(1)").text();
      var lclImage = currentRow.find("td:eq(2)").text();
      var lclType = currentRow.find("td:eq(3)").text();
      var lclName = currentRow.find("td:eq(4)").text();
      var lclWeight = currentRow.find("td:eq(5)").text();
      var lclRate = currentRow.find("td:eq(6)").text();
      var lclDesc = currentRow.find("td:eq(7)").text();

      // alert(lclType);
      $("#imgURL1").val(lclImage);
      $("#txtName1").val(lclName);
      $("#selType1").val(lclType);
      $("#txtWeight1").val(lclWeight);
      $("#txtRate1").val(lclRate);
      $("#txtDesc1").val(lclDesc);
      $("#edit_id").val(lclID);

  });
}


function getRowsDelete() {
  $("#tableData tr").click(function() {
      var currentRow = $(this).closest("tr");
      var lclID = currentRow.find("td:eq(1)").text();
      // alert(lclID);
      $("#delete_id").val(lclID);

  });
}

getAdminData();
