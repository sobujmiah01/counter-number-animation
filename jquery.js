





$('.count').each(function(){
    $(this).prop('counter',0).animate({
        counter: $(this).text()
    }, {
        duration:4000,
        
       
        step: function(now){
            $(this).text(Math.round(now))
        }
    })
})