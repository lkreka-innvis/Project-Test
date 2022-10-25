const checkb = document.getElementById("box");

// checkb.addEventListener("click", function(){
//     for (i = 0; i < title.length; i++) {
//         title[i].addEventListener("click", function() {
//         //   this.classList.toggle("active");
//           const content1 = this.nextElementSibling;
//           if (content1.style.display == "block") {
//             content1.style.display = "none";
//           } else {
//             content1.style.display = "block";
//           }
//         });
//       }
// });

// function validate (){
//  if (checkb.checked) {
//     for (i = 0; i < title.length; i++) {
//                 title[i].addEventListener("click", function() {
//                   const content1 = this.nextElementSibling;
//                   if (content1.style.display == "block") {
//                     content1.style.display = "none";
//                     icon[i].classList.add("active");
//                   } else {
//                     content1.style.display = "block";
                    
//                  icon[i].classList.add("active");
//                   }
//                 });
//               }
// }
// else  if (!checkb.checked){
//     console.log("hello");
//     for (let i = 0 ; i <content.length; i++){
//         title[i].addEventListener('click',()=>{
//             console.log("testtt");
//             for(let j = 0; j<title.length; j++){
//                 if(i===j){
//                     console.log("this is another test");
        
//                  icon[i].classList.add("active");
//                 }
//             }
//         })
//     }
// }

// }
// validate();

// function Buttons (){
//     for (let i = 0 ; i <content.length; i++) {
//         title[i].addEventListener('click',()=>{
//             for(let j = 0; j<title.length; j++){
//              if(i===j){
//                 content[i].style.display = content[i].style.display == "block" ? "none" : "block";
//                 icon[i].classList.add("active");
//              }
//              else{
//                 // content[j].classList.remove("active");
//                 // content[j].style.display="none";
//                 icon[j].classList.remove("active");
//              }
//             }
//         }  
//     )};
// }
// Buttons();