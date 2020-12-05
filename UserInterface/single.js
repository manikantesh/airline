document.addEventListener('DOMContentLoaded',function (){
   document.querySelectorAll('button').forEach(button=>
   {
       button.onclick=function (){
           showPage(this.dataset.page);
       }
   })
});

function showPage(page){
    // Hide all of the divs:
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    // Show the div provided in the argument
    document.querySelector(`#${page}`).style.display = 'block';
}
