function myTabs(){
    let sideIcon = document.getElementsByClassName("side-icon");

    for(var i = 0; i < sideIcon.length; i++){
        sideIcon[i].addEventListener("click",function(){
            this.classList.toggle("lol");
            var x = this.nextElementSibling;
            if(x.style.maxHeight){
                x.style.maxHeight = null;
            }else{
                x.style.maxHeight = x.scrollHeight + 'px'
            }

        })
    }
}
myTabs();
function myNavAction(){
    let navIcon = document.querySelector(".navbar-icon"),
        bigNavbar = document.querySelector(".big-navbar"),
        closer = document.querySelector(".close"),
        navOverley = document.querySelector(".nav-u-o");

        navIcon.addEventListener("click",function(){
            if(bigNavbar.style.left == "0%"){
                bigNavbar.style.left = '-100%';
                navOverley.style.display = "none"
            }else{
                bigNavbar.style.left = '0%';
                navOverley.style.display = "block"
            }
        })
        closer.addEventListener("click",function(){
            bigNavbar.style.left = "-100%";
            navOverley.style.display = "none"
        })

}
myNavAction();

$(document).ready(function(){
    $('.big-background').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        arrows: false

    });
  });


$(document).ready(function(){
    $('.grand-features').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
    });

    $('.grand-flextion').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
    });      
    
   

    $('.top-flex').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        
        ]
      });

})


function mySlickLinks(e){
    e.preventDefault();
    let alink = document.querySelectorAll(".alink");
    for(var i = 0 ; i < alink.length; i++){
        alink[i].classList.remove("activess")
    }
    e.currentTarget.classList.add("activess")
}
document.getElementById("link-one").click();

function myImages(c){
    let noImage = document.querySelectorAll(".no-image");
    for(var i = 0; i < noImage.length; i++){
        noImage[i].style.display = "none"
    }
    document.getElementById(c).style.display = "block"
}

function myImages2(d){
    let noImage2 = document.querySelectorAll(".no-image2");
    for(var i = 0; i < noImage2.length; i++){
        noImage2[i].style.display = "none"
    }
    document.getElementById(d).style.display = "block"
}

function toTop(){
  let bigTop = document.querySelector(".big-top");
  let q = document.body.screenTop;
  window.addEventListener("scroll", function(){
    if(q >= 100 || document.documentElement.scrollTop >= 100){
      bigTop.style.display = "block"
    }else{
      bigTop.style.display = "none"
    }
  })

  bigTop.addEventListener("click" , function(){
    scrollTo(0,0);
  })
}
toTop();
