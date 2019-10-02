btnSaveFunction = function() {
    /*
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getUTCMilliseconds();
    console.log("come btnSaveFunction =",time);
    */
    firstnameTag = $("#firstname");
    firstname = firstnameTag.val();
    lastnameTag = $("#lastname");
    lastname = lastnameTag.val(); 
    nicknameTag = $("#nickname");
    nickname = nicknameTag.val(); 
    url = "/update.php?firstname="+firstname+"&"+"lastname="+lastname+"&"+"nickname="+nickname 
    successFunction = function(result) {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getUTCMilliseconds();
        console.log("btnSaveFunction successFunction=",time);
        console.log("CREATE");
    resultDiv = $("#resultDiv");
        resultDivText = resultDiv.text(result);
    }
    ajaxParams = {
        type: "GET",
        url: url,
        success: successFunction
    }
    callAjax = $.ajax(ajaxParams);
};