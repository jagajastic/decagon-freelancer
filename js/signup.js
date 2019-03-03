//on submiting signup
$("#signupButton").on("click", function (e) {
    //prevent default form action 
    e.preventDefault();
  
    // get val from input field
    var fname = $("#InputFname").val();
    var lname = $("#Inputlname").val();
    var email = $("#InputEmail1").val();
    var phone_number = $("#phoneNumber").val();
    var password = $("#InputPassword1").val();
    var confirm_password = $("#InputConfrimPassword1").val();

    // error tex for user notification
    var error_password_confirm = document.getElementById("confirmPasswordHelp");
    var error_password = document.getElementById("passwordHelp");
    var error_lname = document.getElementById("lnameHelp");
    var error_fname = document.getElementById("fnameHelp");
    var error_email = document.getElementById("emailHelp");
    var error_login_password = document.getElementById("incorrectCredential");
    var error_phone_number = document.getElementById("phoneNumberHelp");


      // hide error message on focus
    // on focus hide error text for fname
    $("#InputFname").focus(function (e) {
        e.preventDefault();
        //error field for password
        var error_fnam = document.getElementById("fnameHelp");
        error_fnam.style.display = "none";
    });

    // on focus hide error text for lname
    $("#Inputlname").focus(function (e) {
        e.preventDefault();
        //error field for password
        var error_fnam = document.getElementById("lnameHelp");
        error_fnam.style.display = "none";
    });

    // on focus hide error text for lname
    $("#InputEmail1").focus(function (e) {
        e.preventDefault();
        //error field for password
        error_login_password.style.display = "none";
        var error_fnam = document.getElementById("emailHelp");
        error_fnam.style.display = "none";
    });
   
    // on focus hide error text for phone number
    $("#phoneNumber").focus(function (e) {
        e.preventDefault();
        //error field for password
        error_phone_number.style.display = "none";
        var error_fnam = document.getElementById("emailHelp");
        error_fnam.style.display = "none";
    });

    // on focus hide error
    $("#InputPassword1").focus(function (e) {
        e.preventDefault();
        //error field for password
        var error_fnam = document.getElementById("passwordHelp");
        error_fnam.style.display = "none";
    });

    // on focus hide error text for lname
    $("#InputConfrimPassword1").focus(function (e) {
        e.preventDefault();
        //error field for password
        var error_fnam = document.getElementById("confirmPasswordHelp");
        error_fnam.style.display = "none";
    });

    // //for first name field if is emty
    if (fname === "") {
        return error_fname.style.display = "block";
    }

    //for last name field if is emty
    if (lname === "") {
        return error_lname.style.display = "block";
    }

    //for email field if is emty
    if (email === "") {
        return error_email.style.display = "block";
    }
    
    //for phone number field if is emty
    if (phone_number === "") {
        return error_phone_number.style.display = "block";
    }

    //for password field if is emty
    if (password === "") {
        return error_password.style.display = "block";
    }
    //for password confirmation field if is emty
    if (password !== confirm_password) {
        return error_password_confirm.style.display = "block";
    }

    var error_login_password = document.getElementById("incorrectCredential");
    // check if email already exist
    $.ajax({
        url: `http://localhost:3000/users?email=${email}`,
        method: "GET"
    }).done(function(data){
    var data_length = data.length;
    if(data_length >= 1){
        return error_login_password.style.display = "block";
    }else{
        $.ajax({
            url: "http://localhost:3000/users",
            method: "POST",
            data: {
                "fname": fname,
                "lname": lname,
                "email": email,
                "phone_number": phone_number,
                "address": "",
                "country": "",
                "city": "",
                "about": "",
                "location": "",
                "password": password,
                "deleted": 0
    
            }
        }).done(function (res) {
            // set localstorage
            var stringified_obj = JSON.stringify(res);
            localStorage.user = res.email;
            localStorage.user_full = stringified_obj;
            alert("Record creaded successfully");
            // test if it works
            // alert(localStorage.getItem('user'));
            window.location.replace("index.html");
        });
    }
    });


});