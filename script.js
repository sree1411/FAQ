const toggle = document.querySelectorAll(".toggle");
toggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// // const toggle = document.querySelectorAll('.faq-toggle')
// // toggle.forEach(toggle =>{
// //     toggle.addEventListener ('click', ()=>{
// //         toggle.parentNode.classList.toggle("active")
// //     })
// // })

// // const toggles = document.querySelectorAll('.faq-toggle')

// // toggles.forEach(toggle => {
// //     toggle.addEventListener('click', () => {
// //         toggle.parentNode.classList.toggle('active')
// //     })
// // })

// const toggle  = document.querySelectorAll('.faq-toggle')

// toggle.forEach( toggle =>{
//     toggle.addEventListener('click', ()=>{
//         toggle.parentNode.classList.toggle('active')
//     })
// })
