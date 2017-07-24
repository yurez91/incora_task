$(function(){
  
  var cards = [{
    name: "mastercard",
    color: "#0061A8",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MasterCard_logo.png/640px-MasterCard_logo.png"
  }, {
    name: "visa",
    color: "#191278",
    src: "https://noah121weiss.files.wordpress.com/2014/02/inverted-old-visa1.png"
  }, {
    name: "americanExpress",
    color: "#108168",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/1200px-American_Express_logo.svg.png"
  }];
  
  var month = 0;
  var html = document.getElementsByTagName('html')[0];
  var number = "";
  
  var selected_card = -1;
  
  $(document).click(function(e){
    if(!$(e.target).is(".cvc")){
      $(".seccode").css("color", "#e1e1e1");
    }
    if(!$(e.target).is(".date_expire")){
      $(".date_value").css("color", "#e1e1e1");
    }
    if(!$(e.target).is(".credit_number")){
      $(".card_number").css("color", "#e1e1e1");
    }
    if(!$(e.target).is(".inputname")){
      $(".fullname").css("color", "#e1e1e1");
    }
  });
  
  
  //Card number input
  $(".credit_number").keyup(function(event){
    number = $(this).val();
    
    if(parseInt(number.substring(0, 2)) > 50 && parseInt(number.substring(0, 2)) < 56){
      selected_card = 0;
    }else if(parseInt(number.substring(0, 1)) == 4){
      selected_card = 1;  
    }else if(parseInt(number.substring(0, 2)) == 34 || parseInt(number.substring(0, 2)) == 37){
      selected_card = 2; 
    }else{
      selected_card = -1; 
    }
    
    if(selected_card != -1){
      $('.container .col1 .card .front').css('background', cards[selected_card].color);
      $('.container .col1 .card .front').css('background-image', 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%)')
      $('.container .col1 .card .back').css('background', cards[selected_card].color);
      $('.container .col1 .card .back').css('background-image', 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%)')

      $(".bankid").attr("src", cards[selected_card].src).show();
    }else{
      $('.container .col1 .card .front').css('background', "#cecece");
      $('.container .col1 .card .back').css('background', "#cecece");
      $(".bankid").attr("src", "").hide();
    }
    
    if($(".card_number").text().length === 0){
      $(".card_number").html("&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;");
    }

  }).focus(function(){
    $(".card_number").css("color", "white");
  }).on("keydown input", function(event){
    
    $(".card_number").text($(this).val());

    if(selected_card == 2) {
      if(event.key >= 0 && event.key <= 9){
        if($(this).val().length === 4 || $(this).val().length === 11 ){
        $(this).val($(this).val() +  " ");
      }
    }
  } else if(event.key >= 0 && event.key <= 9){
      if($(this).val().length === 4 || $(this).val().length === 9 || $(this).val().length === 14){
        $(this).val($(this).val() +  " ");
      }
    }

  })
  
  //Name Input
  $(".inputname").keyup(function(){  
    $(".fullname").text($(this).val().toUpperCase());  
    if($(".inputname").val().length === 0){
        $(".fullname").text("FULL NAME");
    }
  }).focus(function(){
    $(".fullname").css("color", "white");
  });
  
  //Security code Input
  $(".cvc").focus(function(){
    $(".card").css("transform", "rotatey(180deg)");
    $(".seccode").css("color", "white");
  }).keyup(function(){
    $(".seccode").text($(this).val());
    if($(this).val().length === 0){
      $(".seccode").html("&#x25CF;&#x25CF;&#x25CF;");
    }
  }).focusout(function() {
      $(".card").css("transform", "rotatey(0deg)");
      $(".seccode").css("color", "#e1e1e1");
  });
    
  
  //Date expire input
  $(".date_expire").keypress(function(event){
    if(event.charCode >= 48 && event.charCode <= 57){
      if($(this).val().length === 1){
          if($(this).val()==0){
             $(this).val($(this).val() + event.key + " / ");
          } else if ($(this).val()==1) {
            if(event.key < 3)
             $(this).val($(this).val() + event.key + " / ");
          }
      } 
      else if($(this).val().length === 0){
        if(event.key == 1 || event.key == 0){
          month = event.key;
          return event.charCode;
        }else{
          $(this).val(0 + event.key + " / ");
        }
      }else if($(this).val().length > 2 && $(this).val().length < 7){
        return event.charCode;
      }
    }
    return false;
  }).keyup(function(event){
    $(".date_value").html($(this).val());
    if($(this).val().length === 0){
      $(".date_value").html("\&#x25CF;\&#x25CF;/\&#x25CF;\&#x25CF;");
    }
  }).keydown(function(){
    $(".date_value").html($(this).val());
  }).focus(function(){
    $(".date_value").css("color", "white");
  });
});