listsFunction = function() {
    url = "/list.php";
    successFunction = function(result) {
        var resultDiv = $("#resultDiv");
        var objs = $.parseJSON(result); 
        var txtResults = "";
        txtResults += "<table class='table'>";
        txtResults += "<thead>";
        txtResults += "<tr>";
        txtResults += "<th>ID</th>";
        txtResults += "<th>FRISTNAME</th>";
        txtResults += "<th>LASTNAME</th>";
        txtResults += "<th>NICKNAME</th>";
        txtResults += "</tr>";
        txtResults += "<tbody>";
        var i;
        var objectLength = objs.length;
        for (i = 0; i < objectLength; i++) { 
            
            var lineHtml = '';
            
            var currentItem = objs[i];
            var currentId = currentItem['id'];
            var currentFirstName = currentItem['firstname']
            var currentLastName = currentItem['lastname'];
            var currentNickname = currentItem['nickname'];
            
            lineHtml += "<tr>";
            
            var idString = "<td>"+currentId+"</td>";
            lineHtml += idString;
            
            var firstnameString = "<td>"+currentFirstName+"</td>";
            lineHtml += firstnameString;
            
            var lastnameString = "<td>"+currentLastName+"</td>";
            lineHtml += lastnameString;
            
            var nicknameString = "<td>"+currentNickname+"</td>";
            lineHtml += nicknameString;
            var buttonId = 'btnShow_'+currentId;
            //console.log(buttonId);
            lineHtml += "<td>";
            var inputTag = "<input type='submit' value='submit' class='btn btn-success' ";
            inputTag += "id='"+buttonId+"'";
            inputTag += " />";
            //console.log(inputTag);
            //console.log("====================================================");
            lineHtml += inputTag;
            lineHtml += "</td>";
            lineHtml += "</tr>";
            
            txtResults += lineHtml;
        }
        txtResults += "</tbody>";
        txtResults += "</table>";
        resultDivText = resultDiv.html(txtResults);
        showIdFunction = function(event) {
            var eventParam = event;
            var targetObj = eventParam.target;
            var id = targetObj['id'].slice(8,18);
            var resultData;
            for(i=0;i<objs.length;i++) {
                if(id == String(objs[i]['id'])) {
                    resultData = objs[i];
                }
            }
            firstname = $("#firstname");
            fistnameShow = firstname.val(resultData['firstname']);
            firstnameDisabled = firstname.prop('disabled',true);
            lastname = $("#lastname");
            lastnameShow = lastname.val(resultData['lastname']);
            lastnameDisabled = lastname.prop('disabled',true);
            nickname = $("#nickname");
            nicknameShow = nickname.val(resultData['nickname']);
            nicknameDisabled = nickname.prop('disabled',true);
        }
        var i = 0;
        var btns = [];
        var btnsOnClicks = [];
        for(i;i<objs.length;i++) {
            buttonId = "btnShow_"+objs[i]['id'];
            btns[i] = $("#"+buttonId);
            btnsOnClicks[i] = btns[i].click(showIdFunction);
        }
    }
    ajaxParams = {
        type: "GET",
        url: url,
        success: successFunction
    }
    callAjax = $.ajax(ajaxParams);
};