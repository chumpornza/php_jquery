<?php
    $firstname = $_GET['firstname'];
    $lastname = $_GET['lastname'];
    $nickname = $_GET['nickname'];
    $id = rand(1111111111,9999999999); //Return integer such as 8192321565
    $results = []; // list
    $input_data = []; // dict
    $input_data['id'] = $id;
    $input_data['firstname'] = $firstname;
    $input_data['lastname'] = $lastname;
    $input_data['nickname'] = $nickname;
    array_push($results,$input_data);  // Returns the new number of elements in the array such as 1 2 3 ...
    $file_get_contents =  file_get_contents("results.json"); // Return type string
    $file_decode_contents = json_decode($file_get_contents); // Return list of dict
    for($i=0;$i<sizeof($file_decode_contents);$i++) {
        array_push($results,$file_decode_contents[$i]); // Returns the new number of elements in the array such as 1 2 3 ...
    }
    $results_encode = json_encode($results); // Retrn string such as [{"id":8192321565,"firstname":"3","lastname":"3","nickname":"3"}]
    $file_put_contents = file_put_contents("results.json",$results_encode); // Return boolean such as true
    echo("CREATED");
?>