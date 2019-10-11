<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="/list.js"></script>
    <script src="/show.js"></script>
    <script src="/create.js"></script>
</head>
<body>
    <div class="container">

    <h1>Enter Your Data</h1>
    <hr>
    Firstname : <input type="text" name="firstname" id="firstname"><br><br>
    Lastname : <input type="text" name="lastname" id="lastname"><br><br>
    Nickname : <input type="text" name="nickname" id="nickname"><br><br>
    <input type="submit" value="Submit" id="btnSave" name="btnSave" class="btn btn-primary"/>
    <h1>Ajax Post Result</h1>
    <div id="resultDiv"></div>
    <hr>
    <div id='showDiv'></div>
    <script type="text/javascript">
        documentTag = $(document);
        readyFunction = function() {
            
            lists = listsFunction();
            //lists type = undefined
            
            btnSave = $("#btnSave");
            
            btnSaveOnClick = btnSave.click(btnSaveFunction);
        };
        documentTagReady = documentTag.ready(readyFunction);
        
    </script>
    </div>

</body>
</html>