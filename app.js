const envoyer = document.getElementById('envoyer');
const afaire = document.getElementById('afaire');
const listGroup = document.getElementById('listGroup');
 var key ='name';
 var value;

envoyer.addEventListener('click',(e)=>{
  e.preventDefault();  
    if(afaire.value != ''){
       key = this.key;
       value = afaire.value;
      window.localStorage.setItem(key,value);
      let li = document.createElement('li');     
      let span = document.createElement('span');
      span.className='glyphicon glyphicon-trash'; 
      li.append(span);      
      li.className = 'list-group-item';      
      li.id = key;
      li.append(value);
      listGroup.appendChild(li);
      li.addEventListener('click',(e)=>{
    localStorage.clear(key);   
    li.parentNode.removeChild(li);
    }); 
    }else{
        alert("SVP  ! Oublier pas de rentre vos provision ou les choses  À faire");
        }
      afaire.value="";
}); 
 
/*for(let i = 0 ; i > localStorage.length;i++){
     const key = window.localStorage.key(i); 
     const  item = window.localStorage.getItem(key); 
   console.log(item);
  } */ 
  function appendItem(){
    const item = window.localStorage.getItem("name"); 
    if(item){
 let li = document.createElement('li');
  let span = document.createElement('span');
  span.className='glyphicon glyphicon-trash'; 
  li.append(span); 
  li.className = 'list-group-item';  
  li.id =this.key;
  li.append(item);
  listGroup.appendChild(li);
  li.addEventListener('click',(e)=>{
    localStorage.clear(key);   
    li.parentNode.removeChild(li);
    });
    }else{
      listGroup.style.display="none";
    }
 
  }
  appendItem();
 
       
 
  
     