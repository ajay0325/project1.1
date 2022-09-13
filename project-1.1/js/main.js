var btn = document.querySelectorAll(".button");
var txt = document.querySelectorAll(".text");
var colors = ['yellow','blue','orange','red'];
flag = 0;
// console.log(btn);
// console.log(txt);
var btf = function(){
    
    var box = this.parentNode;
    var para = box.querySelector('p');
    para.style.color = colors[flag];
    // flag++;
    for (let i = 0; i <= colors.length-1; i++) {
        if (flag==1) {
            flag=0;
        }
        else if (flag==2) {
            flag=0;
        }
        
    }
    

}

btn.forEach(function(btns,index) {
   // console.log(btns,index);
    btns.addEventListener('click',btf);
});