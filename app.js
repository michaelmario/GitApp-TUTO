const envoyer = document.getElementById('envoyer');
envoyer.addEventListener('click',(e)=>{
    e.preventDefault();
    let afaire = document.getElementById('afaire');
    if(afaire.value != ''){ 
      let listGroup = document.getElementById('listGroup');
      let li = document.createElement('li');     
      let span =document.createElement('span');
      span.className='glyphicon glyphicon-trash';
      li.className = 'list-group-item';
      for( var i = 0 ; i > 10; i++ )
      var  Id = myId+i;     
      li.id = Id;
      li.append(span);
      li.append(afaire.value); 
      listGroup.appendChild(li);
    console.log(Id);
    }else{
        alert("SVP  ! Oublier pas de rentre vos provision ou les choses  À faire");
        }
      afaire.value="";

});
 function appendId(event){
    var Id = event.target.id;
    
        
   }

     