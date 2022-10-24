const checkbox = document.querySelector("input[name=select]");
const content = document.querySelectorAll(".accoridans-contnent");
const title = document.querySelectorAll(".accoridans-title");
const icon = document.querySelectorAll(".accoridans-icon")
const info = document.querySelector(".accoridans-info")

// checkbox.addEventListener('click',()=>{
//     for (let i = 0 ; i <content.length; i++) {
//         for(let j = 0 ; j<content.length;j++){
//             content[j].style.display = "block";
//         }
//         content[i].style.display = "block";
//     }
// })

// if(checkbox){
//     for (let i = 0 ; i <content.length; i++) {
//         title[i].addEventListener('click',()=>{
//             for(let j = 0; j<content.length; j++){ 
//                 content[j].style.display = "block";
//                 content[i].style.display = "block";
               
//             }}
//     )}
// }




for (let i = 0 ; i <content.length; i++) {

    checkbox.addEventListener('click',()=>{
        if(checkbox){
            for(let j = 0; j<title.length; j++) {
                title[i].addEventListener('click',()=>{
                    content[i].style.display = "block";
                })
                content[j].style.display = "block";
            }
        }

})
    title[i].addEventListener('click',()=>{
        for(let j = 0; j<title.length; j++){
         if(i===j){
            content[i].style.display = content[i].style.display == "block" ? "none" : "block";


            icon[i].classList.add("active");
         }
         else{
            content[j].style.display = "none"
            icon[j].classList.remove("active");

         }
        }
    }
)};


