const btn = document.querySelector('#bish_bosh_btn');
const div1=document.querySelector('#div1');
const ta1= document.querySelector('#showResult');
const bbin=document.querySelector('#bish_bosh_input');

btn.addEventListener('click', function(){
div1.style.borderStyle='double';
let x = bbin.value;
console.log(x);
bbin.value='';
let res=function2(x);

ta1.innerText=res;

})

function function2(bbvalue)
{
    let output,result='';
    for (let num = 1; num <= bbvalue; num++) 
    {
      if(num%3==0&&num%4!=0)
          output='Bish';
  
      else if(num%4==0&&num%3!=0)
          output='Bosh'
  
      else if(num%3==0&&num%4==0)
          output='Bish-Bosh';
  
      else
          output=num;
          
          
      result+=output;
      if(num!=bbvalue)
      result+=', '
      }
    console.log(result);

    return result;
}