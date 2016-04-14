$(document).ready(function(){

//AJAX Calls 
$("#searchForm").on('submit', function(event) {
	event.preventDefault();
    var name_ = $('#name').val();
    var location_ = $('#producer').val();
    var vintage_ = $('#vintage').val();
    var grape_ = $('#vintage').val();
    var item = {'name': name_,
                'location': location_,
                'vintage' : vintage_,
                'grape' : grape_};
    if(!item.name && !item.location && !item.vintage && !item.grape){
      alert('Oh come on, give me something!!! I am not gonna fetch an entire database to you...');
    }            
//    console.log(name_);
    if(item.name || item.location || item.vintage || item.grape){
      console.log(item);
      $.ajax('/wines', { //may be toggled btw /items & /wines endpoints, the latter implements text search in mongo
        type: 'POST',
        data: JSON.stringify(item),
        dataType: 'json',
        contentType: 'application/json',
      })
      .done(function(items){
        console.log(JSON.stringify(items));
        console.log(items.length);
      if(items.length===0){alert('we have no clue what you are drinking...');}
      })
      .error(function(){console.log('doesnt ^&*%$# work!')});
    };
  });  
})

