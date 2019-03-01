$(document).ready(function(){

    //get user id and aiki id
    var n = new URLSearchParams(window.location.search);
    n.has('user_id');
    var userId = n.get('user_id');
    var aiki_id = n.get('aiki_id');

    $.ajax({
        url: `http://localhost:3000/aiki/${aiki_id}`,
        method: "GET",
    }).done(function(resp){
        //create html element and append it
        var aiki_card = `
        <p class="h2">${resp.description}</p>
        <small class="row ml-0">rating</small>
        <hr />
        <div class="row pr-5">
            <span class="col">${resp.amount}</span>
            <a href="tel:+2348036798575" class="col btn btn-primary ">
                Call Me
            </a>
        </div>
        `;
    
        $("#singleView").append(aiki_card);
    });

    $.ajax({
        url: `http://localhost:3000/users/${userId}`,
        method: "GET",
    }).done(function(resp){
        console.log(resp);
        // user information cards
        var user_card = `
        <p class="h2">${resp.fname + " " + resp.lname}</p>
        <small class="row ml-0">${resp.email}</small>
        <hr />
        <p class="h4">${resp.country}</p>
        <p class="h6">${resp.city}</p>
        <hr />
        <div class="row pr-5">
            <span class="col">${resp.about}</span>
        </div>
        `;
    
        $("#user-infor-card").append(user_card);
    });


});
