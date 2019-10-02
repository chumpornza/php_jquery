listsFunction = function() {
    /*
    if(documentTagReady) {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getUTCMilliseconds();
        console.log("come list function =",time);
    }
    */
    url = "/list.php";
    successFunction = function(result) {
        /*
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getUTCMilliseconds();
        console.log("come success list event =",time);
        */
        var resultDiv = $("#resultDiv");
        var objs = $.parseJSON(result); 
        // list of dict
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
            //dict
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
            /*
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getUTCMilliseconds();
            console.log("come showIdFunction =",time);
            */
            var eventParam = event;
            // event object
            var targetObj = eventParam.target;
            //dict input key type , key value , key class , key id
            var btnShowId = targetObj['id'];
            //string Ex 'btnShow_1234567891'
            var id = btnShowId.slice(8,18);
            //string '1234567891';
            var resultData;
            for(i=0;i<objs.length;i++) {
                if(id == String(objs[i]['id'])) {
                    resultData = objs[i];
                }
            }
            currentData = resultData;
            //dict of key string value string 
            currentFirstNameData = currentData['firstname'];
            currentLastNameData = currentData['lastname'];
            currentNickNameData = currentData['nickname']
            //string 
            
            //dict
            firstname = $("#firstname");
            fistnameShow = firstname.val(currentFirstNameData);
            // input html object
            firstnameDisabled = firstname.prop('disabled',true);
            // input html object
            lastname = $("#lastname");
            lastnameShow = lastname.val(currentLastNameData);
            lastnameDisabled = lastname.prop('disabled',true);
            nickname = $("#nickname");
            nicknameShow = nickname.val(currentNickNameData);
            nicknameDisabled = nickname.prop('disabled',true);
        }
        var i = 0;
        var btns = [];
        var btnsOnClicks = [];
        for(i;i<objs.length;i++) {
            buttonShowString = "btnShow_";
            button = objs[i];
            //dict key id , firstname , lastname , nickname
            buttonId = button['id'];
            //integer
            buttonShowId = buttonShowString+buttonId;
            // string
            btns[i] = $("#"+buttonShowId);
            btnsOnClicks[i] = btns[i].click(showIdFunction);
            /*
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getUTCMilliseconds();
            console.log("register btn On Click = ",time,buttonId);
            */
        }
    }
    ajaxParams = {
        type: "GET",
        url: url,
        success: successFunction
    }
    callAjax = $.ajax(ajaxParams);
    /*
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getUTCMilliseconds();
    console.log("register $.ajx function =",time);
    */
    
};