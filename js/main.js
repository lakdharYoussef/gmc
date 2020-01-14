var target = document.getElementById("TXTArea")
document.getElementById("gras").addEventListener("click",function(){
    if(target.style.fontWeight=="bolder"){
    target.style.fontWeight="normal";
    }
    else{
        target.style.fontWeight="bolder"
 } 
  })
 document.getElementById("ital").addEventListener("click",function(){
    if(target.style.fontStyle=="italic"){
    target.style.fontStyle="normal";
    }
    else{
        target.style.fontStyle="italic"
 } 
 })
 document.getElementById("line").addEventListener("click",function(){
    if(target.style.textDecoration=="underline"){
    target.style.textDecoration="none";
    }
    else{
        target.style.textDecoration="underline"
 } 
 })

 document.getElementById("FS").addEventListener("change",function(){
     target.style.fontFamily=document.getElementById("FS").value
 })
 document.getElementById("font").addEventListener("change",function(){
    target.style.fontSize=document.getElementById("font").value
})
$(".course1").hover(function(){
    $(".btnCourses1").toggleClass('btnCourses1Hover')
})

$(".course2").hover(function(){
    $(".btnCourses2").toggleClass('btnCourses1Hover')
})

$(".course3").hover(function(){
    $(".btnCourses3").toggleClass('btnCourses1Hover')
})

$(".course4").hover(function(){
    $(".btnCourses4").toggleClass('btnCourses1Hover')
})

$(".course5").hover(function(){
    $(".btnCourses5").toggleClass('btnCourses1Hover')
})

$(".course6").hover(function(){
    $(".btnCourses6").toggleClass('btnCourses1Hover')
})

$(".course7").hover(function(){
    $(".btnCourses7").toggleClass('btnCourses1Hover')
})

$(".course8").hover(function(){
    $(".btnCourses8").toggleClass('btnCourses1Hover')
})

$(".course9").hover(function(){
    $(".btnCourses9").toggleClass('btnCourses1Hover')
})


$(".open").on("click", function(){
    $(".popup, .popup-content").addClass("active");
    });

 $(".close, .popup").on("click", function(){
 $(".popup, .popup-content").removeClass("active");
});

 $(".course1").click(function(){
$("#message").modal({
 fadeDuration: 100
});
 })
        
 $(".course2").click(function(){
$("#message").modal({
 fadeDuration: 100
});
 })

 $(".course3").click(function(){
  $("#message").modal({
  fadeDuration: 100
 });
})
  $(".course4").click(function(){
$("#message").modal({
  fadeDuration: 100
 });
 })
    $(".course5").click(function(){
     $("#message").modal({
     fadeDuration: 100
     });
     })
   $(".course6").click(function(){
       $("#message").modal({
        fadeDuration: 100
      });
      })
    $(".course7").click(function(){
  $("#message").modal({
  fadeDuration: 100
  }) 
  })
 $(".course8").click(function(){
   $("#message").modal({
 fadeDuration: 100
  });
  })
  $(".course9").click(function(){
     $("#message").modal({
          fadeDuration: 100
       });
      })
