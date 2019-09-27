<?php
    $id = $_GET['id'];
    $readData = file_get_contents("results.json",'r');
    $rows = json_decode($readData,'true');
    for($i=0;$i<sizeof($rows);$i++) {
        $row_id = $rows[$i]['id'];
        $row_string_id = (string)$row_id;
        if($row_string_id == $id) {
            $results = $rows[$i];
            echo($results);
            exit();
        }
    }
    
?>