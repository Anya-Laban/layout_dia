let e=0;const t=document.querySelector(".slider__button--back"),s=document.querySelector(".slider__button--forward"),i=document.querySelector(".slider__list"),r=i.children.length-1;t.addEventListener("click",()=>{e<=0?(e=r,i.children[0].classList.remove("slider__photo--active")):(i.children[e].classList.remove("slider__photo--active"),e--),i.children[e].classList.add("slider__photo--active")}),s.addEventListener("click",()=>{e>=r?(e=0,i.children[r].classList.remove("slider__photo--active")):(i.children[e].classList.remove("slider__photo--active"),e++),i.children[e].classList.add("slider__photo--active")}),document.getElementById("form-message").addEventListener("submit",e=>{e.preventDefault(),e.target.reset()});
//# sourceMappingURL=index.724fd58b.js.map
