<?php
    $firstname = $_GET['firstname'];
    //echo(gettype($_GET['firstname']));
    //exit();
    $lastname = $_GET['lastname'];
    $nickname = $_GET['nickname'];
    $id = rand(1111111111,9999999999);
    $results = [];
    $input_data = [];
    $input_data['id'] = $id;
    $input_data['firstname'] = $firstname;
    $input_data['lastname'] = $lastname;
    $input_data['nickname'] = $nickname;
    array_push($results,$input_data);
    $file_get_contents =  file_get_contents("results.json"); // return type string
    $file_decode_contents = json_decode($file_get_contents);
    for($i=0;$i<sizeof($file_decode_contents);$i++) {
        array_push($results,$file_decode_contents[$i]);
    }
    $results_encode = json_encode($results);
    $file_put_contents = file_put_contents("results.json",$results_encode);
    echo("CREATED");
?>