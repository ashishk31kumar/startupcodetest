jQuery(document).ready(function($){

 
  // var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  //       $('#startDate').datepicker({
  //           uiLibrary: 'bootstrap4',
  //           iconsLibrary: 'fontawesome',
  //           minDate: today,
  //           maxDate: function () {
  //               return $('#endDate').val();
  //           }
  //       });
  //       $('#endDate').datepicker({
  //           uiLibrary: 'bootstrap4',
  //           iconsLibrary: 'fontawesome',
  //           minDate: function () {
  //               return $('#startDate').val();
  //           }
  //       });

/*==========================*/  
/* custom select box */ 
/*==========================*/
$('.myselect').prettyDropdown();      


/*==========================*/  
/* task accordion */ 
/*==========================*/
$('.tasks-accordion-head').click(function(){

    if(!$(this).hasClass('active')){
        $(this).addClass('active');
        $(this).closest(".tasks-accordion-box").find(".tasks-accordion-body").show();
    }
    else{
        $(this).removeClass('active');
        $(this).closest(".tasks-accordion-box").find(".tasks-accordion-body").hide();
    }
    
});


/*==========================*/  
/* show/hide notes */ 
/*==========================*/
$(".hide-notes").click(function(){
    $(this).closest('.notes-box').find(".notes-popover").hide();
});

$(".show-notes").click(function(){
   $(this).closest('.notes-box').find(".notes-popover").show();
});



 });