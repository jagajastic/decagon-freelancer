$(document).ready(function(){

    // get all user to view by user who is signed in

    $.ajax({
        url: "http://localhost:3000/users",
        method: "GET"
    }).done(function(data){
        var users_card_on_signin = ``;
        $.each(data, function(index, value){
            users_card_on_signin += `

            <div class="card m-md-2" style="width: 18rem;">
            <img class="card-img-top" src="media/teacher.jpg" alt="Card image cap" style="height: 14rem;">
            <div class="card-body">
                <h5 class="card-title h3">${value.fname + " " + value.lname}</h5>
                <p class="card-text">${value.about || "I can serve You"}</p>
                <p class="card-text h5">${value.city} City</p>
                <a href="single-user.html?user_id=${value.id}&aiki_id=${value.id}" class="btn btn-primary" id="singleView">View</a>
            </div>
            </div>
            `
        });
        
        $("#all-created-users").append(users_card_on_signin);
    });

});