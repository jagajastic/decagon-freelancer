$(document).ready(function(){

    // get single user infor from localforage
    var single_data = localStorage.getItem("singleView");
    //  console.log(single_data);
    // single_data =(single_data+`"}`);
    // single_data =JSON.parse(single_data);
    return console.log(single_data);
    // view for Aiki

    //create html element and append it
    var aiki_card = `
    <p class="h2">${single_data.desciption}</p>
    <small class="row ml-0">rating</small>
    <hr />
    <div class="row pr-5">
        <span class="col">${single_data.amount}</span>
        <a href="#" class="col btn btn-primary ">
            Continue
        </a>
    </div>
    `;

    $("#singleView").append(aiki_card);

    // user information cards
    var user_card = `
    <p class="h2">${single_data.user.fname + " "+ single_data.user.lname}</p>
    <small class="row ml-0">${single_data.user.email}</small>
    <hr />
    <p class="h5">${single_data.user.country}</p>
    <ul class="">
        <li>
            <small>${single_data.user.city}</small>
        </li>
    </ul>
    <hr />
    <div class="row pr-5">
        <span class="col">${single_data.user.address}</span>
    </div>
    `;

    $("#user-infor-card").append(user_card);

});
