<?php
    $firstname = $_GET['firstname'];
    echo(gettype($_GET['firstname']));
    exit();
    $lastname = $_GET['lastname'];
    $nickname = $_GET['nickname'];
    $id = rand(1111111111,9999999999);
    $data = [];
    $rows =  file_get_contents("results.json"); // return type string
    $array = json_decode($rows, 'true'); // return list of dict or array size = 0
    $fp = fopen('results.json', 'r');   // return type resource
    $results = [];
    $results['id'] = $id;
    $results['firstname'] = $firstname;
    $results['lastname'] = $lastname;
    $results['nickname'] = $nickname;
    array_push($data,$results); // array_push return type int
    for($i=0;$i<sizeof($array);$i++) {
        array_push($data,$array[$i]); // array_push return type int
    }
    $fp = fopen('results.json', 'w'); //return type resource
    $file_write = fwrite($fp, json_encode($data)); //json_encode($data) return type string : $file_write type = integer
    $file_close = fclose($fp); // type boolean value = true
    echo("CREATE");
?>