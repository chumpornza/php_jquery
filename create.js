btnSaveFunction = function() {
    firstnameTag = $("#firstname");
    firstname = firstnameTag.val();
    lastnameTag = $("#lastname");
    lastname = lastnameTag.val(); 
    nicknameTag = $("#nickname");
    nickname = nicknameTag.val(); 
    url = "/update.php?firstname="+firstname+"&"+"lastname="+lastname+"&"+"nickname="+nickname 
    successFunction = function(result) {
        console.log(result);
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