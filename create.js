btnSaveFunction = function() {
    
    firstnameTag = $("#firstname");
    firstname = firstnameTag.val();
    lastnameTag = $("#lastname");
    lastname = lastnameTag.val(); 
    nicknameTag = $("#nickname");
    nickname = nicknameTag.val(); 
    url = "/update.php?firstname="+firstname+"&"+"lastname="+lastname+"&"+"nickname="+nickname 
    successCreateFunction = function(result) {
        
       console.log(result);
        
    }
    ajaxCreateParams = {
        type: "GET",
        url: url,
        success: successCreateFunction
    }
    callAjax = $.ajax(ajaxCreateParams);
};