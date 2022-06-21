let n = true,
on = "./img/on.png",
off = "./img/Off.png",
t = "./img/tun.png",
k = "./img/kun.png",
btn = document.querySelectorAll(".btn"),
btn_img = document.querySelectorAll(".btn img"),
imgs = document.querySelectorAll(".imgs");

btn.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        if (n) {
            btn_img[i].src = on
            imgs[i].src = k
            n = false
        }else{
            btn_img[i].src = off
            imgs[i].src = t
            n = true
        }
        // imgs.forEach((item) => {
        //     item.src = t
        // })
        // imgs[i].src = k
    })
})


let btns = document.querySelectorAll(".btns"),
click1 = true,
click2 = true,
btn_tab1 = document.querySelectorAll(".btn_tab1"),
img_tab = document.querySelectorAll(".img_tab");
// btns[0].classList.add("activ")
// btn_tab1[0].classList.add("activ")
// img_tab[0].classList.add("activ")
btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        if (click1) {
            btns[i].classList.add("activ")
            btn_tab1[i].classList.add("activ")
            click1 = false
        }else {
            btns.forEach((btn) => {
                btn.classList.remove("activ")
                btn_tab1.forEach((btn) => {
                    btn.classList.remove("activ")
                })
            })
            click1 = true
        }
        if (click2) {
            img_tab[i].classList.add("activ")
            click2 = false
        }else {
            img_tab.forEach((item) => {
                item.classList.remove("activ")
            })
            click2 = true
        }













        // if (click1) {
        //     btns[i].classList.add("activ")
        //     img_tab[i].classList.add("activ")
        //     click1 = false
        // }else {
        //     img_tab.forEach((item) => {
        //         item.classList.remove("activ")
        //     })
        //     btns.forEach((btn) => {
        //         btn.classList.remove("activ")
        //     })
        //     click1 = true
        // }
    })
})





































// let n = true,
// t = "./img/tun.png",
// k = "./img/kun.png",
// imgs = document.querySelector(".imgs"),
// btn1 = document.querySelector(".btn1"),
// btn2 = document.querySelector(".btn2");
// btn1.addEventListener("click", () => {
//     btn1.classList.add("activ")
//     btn2.classList.remove("activ")
//     if(n){
//         imgs.src = k
//         // n = false
//     }
    
// })
// btn2.addEventListener("click", () => {
//     btn1.classList.remove("activ")
//     btn2.classList.add("activ")
//     if(n){
//         imgs.src = t
//     }
// })
// bnt2.
// if(n){
//     img_group.src = "./img/tun.png"
//     n = false
// }else{
//     img_group.src = "./img/kun.png"
//     n = true
// }