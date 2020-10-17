<?php
// Use this to get data from GeoNames.org

    $url='http://api.geonames.org/countryCodeJSON?formatted=true&lat=' . $_REQUEST['lat'] . '&lng=' . $_REQUEST['lng'] . '&username=ollyijb&style=full';

    //Initiate curl with url
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    // Forcing curl to return a string
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    // Result of making a curl request
    $result = curl_exec($curl);

    // closing curl connection
    curl_close($curl);

    $decode = json_decode($result,true);	

	//$output['status']['code'] = "200";
    //$output['status']['name'] = "ok";
    
    // Storing API response an object with a data property
    $output['data'] = $decode;
	
    header('Content-Type: application/json; charset=UTF-8');
    //http_response_code(400);

	echo json_encode($output); 
    
?>