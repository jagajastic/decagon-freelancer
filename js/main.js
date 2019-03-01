(function ($) {

    $("#dashboardButton").on("click", function (e) {
        e.preventDefault();
        var user = (localStorage.getItem("user_full"));
        if (user) {
            window.location.replace("profile.html");
        } else {
            alert("Sign in first");
        }
    });

    // enable input field for user profile
    $("#enableInputField").on("click", function () {
        $(".form-control").prop("disabled", false);
        $("#updateButton").prop("disabled", false);
    });






    //profile page
    // check if user is already sign in before you take hi  to sign in page
    var user_exist = localStorage.getItem("user_full");
    if (user_exist) {
        $.ajax({
            url: `http://localhost:3000/users?email=${user_exist}`,
            method: "GET"
        }).done(function (data) {
            data = data[0];
            var profile_data = "";
            profile_data += "<h3>" + data.fname + "  " + data.lname + "</h3>";
            profile_data += `<div class="h5 font-weight-300">${data.email}</p>`;
            profile_data += `<hr class="my-4">`;
            // profile_data += '<button class="btn btn-danger" id="deleteAccount" onclick="alert("hello");">Delete Account</button>';

            var display_name = "";
            var fname = "";
            var lname = "";
            var email = "";
            var address = "";
            var city = "";
            var country = "";
            var about_me = "";
            var id = "";
            var password = "";

            display_name += `<input type="text" id="input-username" class="form-control form-control-alternative"
            placeholder="${data.fname + ' ' + data.lname}" value="${data.fname + ' ' + data.lname}" disabled>`;
            email += `<input type="email" id="input-email" class="form-control form-control-alternative"
            placeholder="${data.email}" value="${data.email}" disabled>`;
            fname += `<input type="text" id="input-first-name" class="form-control form-control-alternative"
            placeholder="${data.fname}" value="${data.fname}" disabled>`;
            lname += `<input type="text" id="input-last-name" class="form-control form-control-alternative"
            placeholder="${data.lname}" value="${data.lname}" disabled>`;
            address += `<input id="input-address" class="form-control form-control-alternative"
            placeholder="${data.address || "Enter Address"}" value="${data.address}"
            type="text" disabled>`;
            city += `<input type="text" id="input-city" class="form-control form-control-alternative"
            placeholder="${data.city || "Enter City"}" value="${data.city}" disabled>`;
            country += `<input type="text" id="input-country" class="form-control form-control-alternative"
            placeholder="${data.country || "Enter Country"}" value="${data.country}" disabled>`;
            about_me += `<textarea rows="4" class="form-control form-control-alternative"
            placeholder="${data.about || " Enter About me"}" id="editAboutMe" disabled>${data.about}</textarea>`
            id += `<input type="text" id="loadedid" value="${data.id}" style="display:none;">`;
            password += `<input type="password" id="input-password" class="form-control form-control-alternative"
            placeholder="Country" value="${data.password}" disabled>`;

            $("#loadedPassword").append(password);
            $("#loadedID").append(id);
            $("#loadedAboutme").append(about_me);
            $("#loadedCountry").append(country);
            $("#loadedCity").append(city);
            $("#loadAddress").append(address);
            $("#loadLname").append(lname);
            $("#loadedFname").append(fname);
            $("#loadedEmail").append(email);
            $("#loadedDisplayname").append(display_name);
            $("#profileData").append(profile_data);
        });
    }

    // trigger delete button
    $("#deleteMyAccountNow").on("click", function (e) {
        e.preventDefault();
        alert("Delete record");

    });

    // edit user record
    $("#editFormrecord").on("submit", function (e) {
        e.preventDefault();
        var edit_fname = $("#input-first-name").val();
        var edit_lname = $("#input-last-name").val();
        var edit_email = $("#input-email").val();
        var edit_address = $("#input-address").val();
        var edit_city = $("#input-city").val();
        var edit_country = $("#input-country").val();
        var edit_about = $("#editAboutMe").val();
        var edit_id = $("#loadedid").val();
        var edit_password = $("#input-password").val();
        var edit_file = "";
        // $('#fileUploadEdit').change(function () {
        //     console.dir(this.files[0].mozFullPath)
        //     // edit_file = this.files[0].mozFullPath ;
        // });

        // alert(edit_file);
        // if(edit_fname === ""){

        // }

        // if(edit_lname === ""){

        // }

        // if(edit_email === ""){

        // }

        // if(edit_address === ""){

        // }

        // if(edit_city === ""){

        // }
        // if(edit_country === ""){

        // }
        // if(edit_about === ""){

        // }
        // if(edit_id === ""){

        // }

        $.ajax({
            url: `http://localhost:3000/users/${edit_id}`,
            method: "PUT",
            data: {
                fname: edit_fname,
                lname: edit_lname,
                email: edit_email,
                address: edit_address,
                country: edit_country,
                city: edit_city,
                about: edit_about,
                password: edit_password,
                deleted: 0
            }
        }).done(function (resp) {
            alert("record updated successfully");
            location.reload();

        });
    });

    // get all jobber man for landing page
    $.ajax({
        url: "http://localhost:3000/aiki?_expand=user",
        method: "GET"
    }).done(function (data) {
        var jobber_man = "";
        var current_data = {};
        $.each(data, function (index, value) {
            jobber_man += `<div class="card m-md-2" style="width: 18rem;">`
            jobber_man += `<img class="card-img-top" src="media/team-4-800x800.jpg" alt="Card image cap" style="height: 14rem;">`
            jobber_man += `<div class="card-body">`
            jobber_man += `<h5 class="card-title">${value.user.fname + " " + value.user.lname}</h5>`
            jobber_man += `<p class="card-text">${value.desc_aiki || "I can serve You"}</p>`;
            jobber_man += `<a href="single.html?user_id=${value.user.id}&aiki_id=${value.id}" class="btn btn-primary" id="singleView">Go somewhere</a>`;
            jobber_man += `</div>`;
            jobber_man += `</div>`;

        });
        $("#jobberMan").append(jobber_man);

    });

    /// serch functionalty 
    



}(jQuery));