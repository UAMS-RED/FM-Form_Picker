  $(document).ready(function(){
    //array with anchor info. loop through these and change to language picked via radio button.
    forms = [{
      "engName":"Prenatal",
      "spanName":"Prenatal Span",
      "id":"pre",
      "spanHref":"https://fm.cafesarkansas.com/PrenatalSpan/",
      "engHref":"https://fm.cafesarkansas.com/Prenatal/"
    },{
      "engName":"InfantTod",
      "spanName":"InfantTod Span",
      "id":"it",
      "spanHref":"https://fm.cafesarkansas.com/InfantTodSpan/",
      "engHref":"https://fm.cafesarkansas.com/InfantTod/"
    },{
      "engName":"InfantTodSib",
      "spanName":"InfantTodSib Span",  
      "id":"its",
      "spanHref":"https://fm.cafesarkansas.com/InfantTodSibSpan/",
      "engHref":"https://fm.cafesarkansas.com/InfantTodSib/"
    },{
      "engName":"EarlyChild",
      "spanName":"EarlyChild Span",
      "id":"ec",
      "spanHref":"https://fm.cafesarkansas.com/EarlyChildSpan/",
      "engHref":"https://fm.cafesarkansas.com/EarlyChild/"
    },{
      "engName":"EarlyChildSib",
      "spanName":"EarlyChildSib Span",
      "id":"ecs",
      "spanHref":"https://fm.cafesarkansas.com/EarlyChildSibSpan/",
      "engHref":"https://fm.cafesarkansas.com/EarlyChildSib/"
    }];


  });
  $("[name='lang']").click(function(){
    if ($("[name='lang']:checked").val()==2){
      //change href and text of the anchors
      for(i=0;i<forms.length;i++){
        $("#"+forms[i].id).attr("href",forms[i].spanHref).text(forms[i].spanName);
        //console.log(forms[i].spanHref);
      }
      }else{
        for (var i = 0; i < forms.length; i++) {
          $("#"+forms[i].id).attr("href",forms[i].engHref).text(forms[i].engName);
        }
        
      }
  });