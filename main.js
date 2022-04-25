
//sidebar
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.option-item')
const contents = $$('.content')

tabs.forEach((tab,index)=>{
    const tabOption = tabs[index]
    const content = contents[index]

    tab.onclick = function(){
        $('.content.active').classList.remove('active')
        $('.option-item.active-option').classList.remove('active-option')


        content.classList.add('active')
        tabOption.classList.add('active-option')
    }
})


// slider show


const prevBtn = document.querySelector("#prevBtn")

const nextBtn = document.querySelector("#nextBtn")

const sliders = document.querySelectorAll(".slider-user")
const btns = document.querySelectorAll(".btn")
const numberOfSliders = sliders.length
var sliderNumber = 0

nextBtn.addEventListener("click", () =>{

    sliders.forEach((slider) =>{
        slider.classList.remove('active-slider')
    })

    btns.forEach((btn) =>{
        btn.classList.remove('active-btn')
    })


    sliderNumber++;
    if(sliderNumber > (numberOfSliders -1)){
        sliderNumber = 0
    }

    sliders[sliderNumber].classList.add('active-slider')
    btns[sliderNumber].classList.add('active-btn')
})

prevBtn.addEventListener("click", () =>{

    sliders.forEach((slider) =>{
        slider.classList.remove('active-slider')
    })

    btns.forEach((btn) =>{
        btn.classList.remove('active-btn')
    })


    sliderNumber--;
    if(sliderNumber < 0){
        sliderNumber = numberOfSliders -1
    }

    sliders[sliderNumber].classList.add('active-slider')
    btns[sliderNumber].classList.add('active-btn')
})

btns.forEach((tab,index)=>{
    const btn = btns[index]
    const slider = sliders[index]

    tab.onclick = function(){
        $('.btn.active-btn').classList.remove('active-btn')
        $('.slider-user.active-slider').classList.remove('active-slider')

        btn.classList.add('active-btn')
        slider.classList.add('active-slider')
    }
})


// slider autoplay

var playSlider

var repeater = () =>{
    playSlider = setInterval(function(){
        sliders.forEach((slider) =>{
            slider.classList.remove('active-slider')
        })
    
        btns.forEach((btn) =>{
            btn.classList.remove('active-btn')
        })
    
    
        sliderNumber++;
        if(sliderNumber > (numberOfSliders -1)){
            sliderNumber = 0
        }
    
        sliders[sliderNumber].classList.add('active-slider')
        btns[sliderNumber].classList.add('active-btn')
    },3000);

}
repeater()


