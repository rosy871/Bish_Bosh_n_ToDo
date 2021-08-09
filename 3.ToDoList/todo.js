const todoBtn = document.querySelector('#todo_btn');
const tb1= document.querySelector('#resulttodo');
const errmsg=document.querySelector('#errmsg');
const todoIn=document.querySelector('#todo_input');




todoBtn.addEventListener('click', function(){
   
     let res;
     let x = todoIn.value;
    if(x==='')
    {
        errmsg.innerHTML+=`
       <span style="color:blue">list cannot be empty</span>
       
       `;
     }
    else
    {
    
    errmsg.innerHTML='';
   
    tb1.innerHTML+= `
     <tr>        
        <td id='lists'>${x}</td>
        <td>        
         
        
         <input id='bought' type="image" src="img/bought.jpg" alt="delete" width="35" height="25" onclick='todoBought(this);'>
        <input id='delete' type="image" src="img/delete.jpg" alt="delete" width="20" height="20" onclick='todoDelete(this);'>
        
        </td>
     </tr>
     `;

       
    
    }

    
    // console.log(x);
    todoIn.value='';
    
    
    })


    function todoDelete(delrow)
     {
       console.log(delrow.parentNode.parentNode);
       delrow.parentNode.parentNode.innerHTML='';
     }
       
    
        

    // function todoEdit(editrow) {
    //  let parent=editrow.parentNode.parentNode;
    //   let change=document.querySelector('#lists');

    //   let x=change.innerHTML;
    //    console.log(parent);
    //    console.log(change);
    //    console.log(x);
    
   
  
    // }

    function todoBought(boughtrow) {
      let parent=boughtrow.parentNode.parentNode;
       
      console.log(parent);
      parent.style.color="red";
      parent.style.textDecoration="line-through";
      
      console.log(parent);
      
         
     }
 

   