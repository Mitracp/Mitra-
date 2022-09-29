
 $(".load_section").show();
$(".home_section").hide();
$(".about_section").hide();
$(".gallery_section").hide();
$(".banner-2").hide()
$(window).on("load",()=>
{
    $("#nature").hide();
    $("#people").hide();
    $("#misc").hide();
    $("#Butterfly").hide();
    

    $(".banner-2").fadeIn(2000)
    $(".load_section").hide();
        $(".home_section").show();
        $(".about_section").show();
        $(".gallery_section").show();
       
        $(".load").removeClass("anima");
    
   
   
    $(document).on("scroll",function()
    {
        $(".banner-item1").toggleClass("banner-item1_anima");
        $(".collage_1").addClass("collage_animation_1")
        $(".collage_2").addClass("collage_animation_2")
        $(".collage_3").addClass("collage_animation_1")
    })
    $("#btn1").on("click",function()
    {
        $(".banner").hide();
        // $(".animation_section").show();
        // $(".animation_section").fadeOut(2000)
       
    })
    $(".animation_section").hide();
    // $(".gallery_section").hide();
    $(".hover").hide();


  
    $("#btn3")
    .on("click",function()
    {
        $(".collage_1").addClass("collage_animation_1_stop")
        $(".collage_2").addClass("collage_animation_1_stop")
        $(".collage_3").addClass("collage_animation_1_stop")
    })

    $(".wrapper_1")
    .mouseenter(
        function()
        {
            $(".collage_1").addClass("collage_animation_1_stop")
            $(".collage_2").addClass("collage_animation_1_stop")
            $(".collage_3").addClass("collage_animation_1_stop")   
        }
    )
    .mouseleave
    (
        function()
        {
            $(".collage_1").removeClass("collage_animation_1_stop")
            $(".collage_2").removeClass("collage_animation_1_stop")
            $(".collage_3").removeClass("collage_animation_1_stop")   
        }
    )
    $("img").on("click",function(event)
    {
        console.log($(event.target))
        $("#showcase").attr("src",$(event.target).attr("src"))
    })

  
    $("a").on("click",function(event)
    {
      x=$(event.target).attr("href")
      console.log(x)
      $("#stilllife").hide()
      $("#nature").hide()
      $("#people").hide()
      $("#misc").hide()
      $("#Butterfly").hide()
      $(x).show()

    })
    


})










