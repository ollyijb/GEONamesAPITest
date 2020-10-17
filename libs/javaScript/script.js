// Use jQuery to ake an AJAX call to the PHP getInfo.php routine
$('#btn1').click(function () {
    console.log('lat is' + $('#lat').val());
    console.log('long is' + $('#long').val());

    // Making ajax query to php file
    $.ajax({
        url: "libs/php/getInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#long').val()
        },
        // success handler
        success: function (result) {

            //checking result
            console.log(result);


            if (!result.data.countryCode) {
                $('#ccresult').html(result.data.status.message);
            } else {
                $('#ccresult').html(result.data.countryCode);
            }
        },
        // API only returns status 200 codes 
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

});

// Get Postal Codes btn2
$('#btn2').click(function () {
    console.log('lat is' + $('#lat').val());
    console.log('long is' + $('#long').val());

    // Making ajax query to php file
    $.ajax({
        url: "libs/php/getPostalCodes.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#long').val()
        },
        // success handler
        success: function (result) {

            //checking result
            console.log(result);

            if (result.data.status) {
                $('#pcresult').html(result.data.status.message);
            }
            else if (result.data.postalCodes.length === 0) {
                $('#pcresult').html('No Postcodes found nearby');
            } else {
                $('#pcresult').html(result.data.postalCodes[0].postalCode);
            }
        },
        // API only returns status 200 codes 
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

});

// Get Postal Codes btn3
$('#btn3').click(function () {
    console.log('lat is' + $('#lat').val());
    console.log('long is' + $('#long').val());

    // Making ajax query to php file
    $.ajax({
        url: "libs/php/getNearbyPlace.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#long').val()
        },
        // success handler
        success: function (result) {

            //checking result
            console.log(result);


            if (!result.data.geonames) {
                $('#ppresult').html(result.data.status.message);
            }
            else if (result.data.geonames.length === 0) {
                $('#ppresult').html('No populate place found nearby');
            }
            else {
                $('#ppresult').html(result.data.geonames[0].name);
            }
        },
        // API only returns status 200 codes 
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

});