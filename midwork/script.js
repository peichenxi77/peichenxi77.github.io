function createbubble(){
  const section = document.querySelector("section");
  const createElement = document.createElement("span");
  var size = Math.random()*60;

  createElement.style.width = 20 + size +'px';
  createElement.style.height =20 + size +'px';
  createElement.style.right = Math.random()*innerWidth + 'px';
  section.appendChild(createElement);

  setTimeout(()=>{
    createElement.remove()
  },4000)
}
setInterval(createbubble,70)
