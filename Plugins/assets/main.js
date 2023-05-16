$( document ).ready(()=>{
    $( "#ent" ).on( "click",()=>{
        $("#siyahi").append("<li>" + $("#obj").val() + "</li>");
    });
  })
  