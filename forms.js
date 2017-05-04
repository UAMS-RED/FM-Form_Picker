  $(document).ready(function(){
    //array with anchor info. loop through these and change to language picked via radio button.
    forms = [{
      "name":"Prenatal",
      "id":"pre",
      "spanHref":"https://fm.cafesarkansas.com/PrenatalSpan/",
      "engHref":"https://fm.cafesarkansas.com/Prenatal/"
    },{
      "name":"InfantTod",
      "id":"it",
      "spanHref":"https://fm.cafesarkansas.com/InfantTodSpan/",
      "engHref":"https://fm.cafesarkansas.com/InfantTod/"
    },{
      "name":"InfantTodSib",
      "id":"its",
      "spanHref":"https://fm.cafesarkansas.com/InfantTodSibSpan/",
      "engHref":"https://fm.cafesarkansas.com/InfantTodSib/"
    },{
      "name":"EarlyChild",
      "id":"ec",
      "spanHref":"https://fm.cafesarkansas.com/EarlyChildSpan/",
      "engHref":"https://fm.cafesarkansas.com/EarlyChild/"
    },{
      "name":"EarlyChildSib",
      "id":"ecs",
      "spanHref":"https://fm.cafesarkansas.com/EarlyChildSibSpan/",
      "engHref":"https://fm.cafesarkansas.com/EarlyChildSib/"
    }];


  });
  $("[name='lang']").click(function(){
    if ($("[name='lang']:checked").val()==2){
      //change href of the anchors
      for(i=0;i<forms.length;i++){
        $("#"+forms[i].id).attr("href",forms[i].spanHref);
        console.log(forms[i].spanHref);
      }
      }else{
        $("#"+forms[i].id).attr("href",forms[i].engHref);
      }
  });