// DOM ---Document Object MODULE
// USE------
// Document////

//PART2/////

// const heading = document.getElementById("heading");
// console.dir(typeof(heading));


// const mainHeading = document.querySelector("#heading");
// console.log(mainHeading);
// const header = document.querySelector(".head-one")
// console.log(header)



// const mainHeading = document.querySelector("#para-one");
// console.log(mainHeading);
// const header = document.querySelector(".one-para")
// console.log(header)


// const mainHead = document.querySelector("#para-two");
// console.log(mainHead);
// const head = document.querySelector(".two-para")
// console.log(head)

// const linker = document.querySelectorAll("ul .link ");

// console.log(linker)
//     // name change property using text content 

// const replace_one = document.querySelector("a");
// replace_one.textContent = "home page lets start bprogramming"
// const linker_two = document.querySelectorAll("a")
// console.log(linker_two)

// const main_Heading = document.querySelector("#heading");
// // const text = main_Heading.textContent;
// // console.log(text);

// const name_change = document.querySelector("#heading");

// name_change.textContent = "hello friend good evening"

// const heading_two = document.querySelector(".head-two");
// const text = heading_two.textContent = "hello friends good night";

// 10 or 100 time you have repeat loops //////////////practice me 

// for (let i = 0; i < 10; i++) {
//     console.log(text)
// }

// const main_Heading = document.querySelector("#heading");

// // const text = main_Heading.textContent;

// main_Heading.textContent == "good evening all my friends"
// if (main_Heading.textContent = "good evening all my friends ") {
//     main_Heading.textContent = "jitendra ek engineer hai";
// } else {
//     main_Heading.textContent = "no engineer"
// }





// const mainHeading = document.querySelector("div.main-heading h1");


// mainHeading.style.backgroundColor = "green";
// mainHeading.style.color = "red";
// mainHeading.style.border = "1rem solid black"
// mainHeading.style.borderRadius = "50px";
// mainHeading.style.marginLeft = "5px";

// const container_one = document.querySelector("div.container")

// container_one.style.height = "70vh";
// container_one.style.width = "42vw";
// container_one.style.backgroundColor = "none";
// container_one.style.textAlign = "center"
// container_one.style.marginLeft = "25vw"
// container_one.style.borderRadius = "100%";

// container_one.style.border = "10px solid rgb(0,0,0.6) "
// container_one.style.borderLeft = "20px solid rgb(50,20,80) "
// container_one.style.borderShadow = "20px solid red"

// const bodytype = document.querySelector("body")

// // bodytype.style.backgroundColor = "yellow"





// if (mainHeading.textContent == "good evening all my brothers and sister") {
//     mainHeading.style.border = "1rem solid black";
// } else if (mainHeading.textContent == "good evening all my brothers and brother") {
//     mainHeading.style.border = "1rem solid blue";
// } else if (mainHeading.textContent == "good evening all my brothers and father") {
//     mainHeading.style.border = "1rem solid yellow";
// } else {
//     mainHeading.style.border = "5rem solid red";
// }

// get and set attributes///////

// only one attribute select this type step//////////////

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"))
// link.setAttribute("href", "https://www.google.com")
// console.log(typeof(link))

//  nodelist  /////////////
// const list = document.querySelectorAll(".link");
// console.log(list);

// html collection ////////////////////
// const linked = document.getElementsByClassName("link")
// console.log(linked)

// const linkAll = document.getElementsByTagName("a");
// console.log(typeof(linkAll))
// console.log(Array.isArray(linkAll)) //false


// const links = document.getElementsByClassName("link") //classname me only classname tak hi style apply hongi
// console.log(links) ///////return html collection 

// for (let i = 0; i < links.length; i++) {
//     const link = links[i];
//     link.style.color = "yellow";
//     link.style.backgroundColor = "red";
// }
// for (let i of links) {
//     // const i = linked;
//     i.style.color = "yellow";
//     i.style.backgroundColor = "red";
// }

// foreach does Not support//////////


//     const linked = document.getElementsByTagName("a");// tagname me jobhi same tag honga us par hi apply hongi
//     console.log(linked);
// // for (let i = 0; i < linked.length; i++) {
// //     const link = linked[i];
// //     link.style.color = "yellow";
// //     link.style.backgroundColor = "red";
// // }
// for (let i of linked) {
//     // const i = linked;
//     i.style.color = "yellow";
//     i.style.backgroundColor = "red";
// }

// document object module/////////////////

// this file are {dom_two.html }

// 11--04--2022///////////////////

// const rootnode = document.getRootNode();
// const htmlElementNode = rootnode.childNodes[0];
// htmlElement = htmlElementNode.childNodes[0];

// title = htmlElementNode.childNodes[1];
// script = htmlElement.childNodes[3];
// console.log(title);
// console.log(script);
// bodyElement = rootnode;
// console.log(bodyElement);
// console.log(htmlElementNode)


// const rootnode = document.getRootNode()
// const htmlElementNode = rootnode.firstChild;
// const htmlelement = htmlElementNode.lastChild;
// console.log(htmlElementNode)
// console.log(htmlelement)


// head Elements/////////////

// const rootnode = document.getRootNode();
// const htmlElementNode = rootnode.childNodes[0];

// const headElementNode = htmlElementNode.childNodes[0]
// const headElement = headElementNode.childNodes[1];
// // headElementN = headElementNode.baseURI;
// // headElementN = headElementNode.style;
// console.log(headElement);
// console.log(headElementNode)

// Text Node /////////////////

// const rootnode = document.getRootNode();
// const htmlElementNode = rootnode.childNodes[0];

// const textnode = htmlElementNode.hasChildNodes;
// console.log(textnode);
// const rootelement = document.getRootNode();
// const htmlElement = rootelement.childNodes[0]
//     // console.log(htmlElement);

// const child = htmlElement.childNodes;
// // console.log(child);

// const headElementNode = htmlElement.childNodes[0]
//     // console.log(headElementNode)

// const bodyElement = headElementNode.childNodes[2];
// // console.log(bodyElement);
// // console.log(bodyElement.childNodes[1]);
// const textElementNode = htmlElement.childNodes[1]
// console.log(textElementNode)

// console.log(headElementNode.parentElement);
// console.log(headElementNode.parentNode);
// console.log(headElementNode.nextSibling.nextSibling)
// console.log(headElementNode.nextElementSibling) //it ignore all spaces and new line it gives next element

// console.log(headElementNode.childNodes)
// console.log(headElementNode.children) //its ignore all space and new line it gives next element


// 15/04/2022////////////////////////////

// this file name is {section_dom.html}
// is variable ka use krke ham content add kr skte hai //

// const section = document.querySelector(".main-class")


// section.innerHTML = section.innerHTML + "<li>hello world!!</li>"




// switch case apply

// switch (section) {
//     case 1:
//         console.log(section.style.backgroundColor = "yellow");
//         break;
//     case 2:
//         console.log(section.style.backgroundColor = "red");
//         break;
//     case 3:
//         console.log(section.style.backgroundColor = "orange");
//         break;
//     case 4:
//         console.log(section.style.color = "blue");
//         break;
//     case 5:
//         console.log(section.style.backgroundColor = "black");
//         break;
//     default:
//         // alert("no color apply")
//         console.log("no color apply")

// }

// style apply  in javascript without css/////
// var dark = true; //appply true 
// const divSection = document.querySelector(".main-class");

// if (dark == true) {

//     const new_added_class = divSection.classList.add('bg-dark') // condition is true background color is black 
// } else {

//     const new_added_class = divSection.classList.add('border-red') // condition is false background border- color is red 
// }
// console.log(new_added_class)


// onclicked method ///////////

// const btn = document.querySelector(".btn-div")
// console.dir(btn)

// first type use this method 

// btn.onclick = function() {
//     console.log("hello friends!!");
// }

// const div = document.querySelector(".main-class p")
// div.onclick = function() {
//     console.log("clicked")
// }

// second method /////////

// function clickMe() {
//     console.log("clicked !!!")
// }
// btn.addEventListener("click", clickMe)

// third method

// btn.addEventListener("click", clickMe = () => {
//     // console.log("click ho gya!!!")
//     // confirm("clicked")
//     // alert("click hua")
// })






// 19/04/2022 tutorial on Event ////////////////////

// const btns = document.querySelectorAll(".btns button");

// first step ///////////

// for (let button of btns) {
//     button.addEventListener("click", function() {
//         console.log(this)
//     })
// }

// // second step ////////////

// for (let button of btns) {
//     button.addEventListener("click", function() {
//         console.log(this.textContent)
//     })
// }

// third step ////////////

// for (let button = 0; button < btns.length; button++) {
//     btns[button].addEventListener("click", () => {
//         console.log(this)
//     })
// }
// for (let button = 0; button < btns.length; button++) {
//     btns[button].addEventListener("click", function(){
//         console.log(this)
//     })
// }

// btns.forEach(function(button) {
//     button.addEventListener("click", function() {
//         console.log(this.textContent)
//     })
// })
// btns.forEach(function(button) {
//     button.addEventListener("click", () => {
//         console.log(this)

//     })
// })




// event Object ////////////////////

// callback  function 
// jo event perform hua hai uski information bhi deta hai object ke form me

// function hello(abc) {
//     console.log(abc)
// }
// hello({ name1: "jitendra", name2: "pardhi" })

// PointerEvent show //////

// const btn = document.querySelector("#btn1")
// btn.addEventListener("click", function(button) {
//     console.log(button)
// })



// const btn = document.querySelectorAll(".btns button")
// btn.forEach(function(button) {
//     button.addEventListener("click", (event) => {

//         console.log(event.target)
//     })
// })
// btn.forEach(function(button) {
//         button.addEventListener("click", (event) => {

//             console.log(event.currentTarget)
//         })
//     })


// 10s delay ///////////////
// const btn = document.querySelectorAll(".btns ")
// btn.forEach((btns) => {
//     btns.addEventListener("click", (e) => {
//         let num = 0;
//         for (let i = 0; i <= 1000000000; i++) {
//             num += i;
//         }
//         console.log(e.currentTarget);
//     })

//     let numTwo = 0;
//     for (let j = 0; j <= 1000000000; j++) {
//         numTwo += j;
//     }
// })
// console.log("jitendra pardhi");


// API  --- APPLICATION PROGRAMMING INTERFACE///////


// get -- data lene ke liye ya server se data lene ke liye use hota hai 
// POST --- server me data bhejne ke liye use hota hai
// delete-- delete data from server 
// patch --- perticular data edit krne ke liye 
// PUT -- edit krke bhejne ke liye


// get method in API //////

// console.log("API work started here !!!");

// fetch('https://reqres.in/api/users?page=2')
//     // .then((response) => {
//     //     return response.json();
//     // })
//     // // .then((myJson) => {
//     // //     console.log(myJson)
//     // // })
//     // .then((userData) => {
//     //     userData.data.forEach((e) => {
//     //         console.log(e)
//     //         console.log(e.email)
//     //         console.log(e.first_name)
//     //         console.log(e.last_name)
//     //         console.log(e.id)
//     //     });
//     // })

// fetch("https://reqres.in/api/users?page=2")
//     .then((response) => {
//         // console.log(response)
//         // console.log(response.json())
//         // console.log(response.formData)
//         return response.json();
//     })
//     // .then((userData) => {
//     //     console.log(userData.data)

// // })
// .then((user_data) => {
//     for (let user of user_data.data) {
//         console.log(user)
//         console.log(user.first_name)
//         console.log(user.last_name)
//     }
// })


// const users = document.querySelector(".para")
// const para = users.textContent;
// console.log(para);

// 23/04/2022 ////////////////////// API LECTURE

// POST METHOD IN API ////////////////////

// post is a send data on server in the json form ///////////

// function fetch_function() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
//         // .then((data) => {
//         //     console.log(data)
//         // })
//         .then((user_data) => {
//             for (let user of user_data) {
//                 // console.log(user)
//                 // console.log(user.id)
//                 // console.log(user.userId)
//                 // console.log(user.body)
//             }
//         })

// }


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: "my name is jitendra pardhi",
//         body: "my village is ambhora gondia",
//         userId: 20,
//         name: 122,

//     }),
//     headers: {
//         'Contact-type': "application/json"
//     }
// }).then((response) => response.json()).then((json) => {
//     console.log(json)
// })

// fetch_function()




// fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
//     method: 'POST',
//     headers: {
//         'Contact-type': "application/json"
//     }
// }).then((response) => response.json()).then((json) => {
//     console.log(json)
// })


// post method using form tag 


// var form = document.getElementById("form");
// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     var name = document.getElementById("name").value
//     var body = document.getElementById("body").value
//     var userid = document.getElementById("userid").value

//     // console.log(name, body, userid) ///name body user id only console

//     //  now we can post data in API 

//     fetch('https://jsonplaceholder.typicode.com/posts/', {
//             method: 'post',
//             body: JSON.stringify({
//                 title: name,
//                 body: body,
//                 userId: userid,


//             }),
//             headers: {
//                 'Content-type': "application/json"
//             }
//         })
//         // .then((response) => response.json()).then((json) => {
//         //     console.log(json)
//         // add data inner html /////
//         .then((response) => response.json()).then((data) => {
//             console.log(data)
//             var data_add = document.getElementById('data')
//             data_add.innerHTML = innerHTML + `<p>title is ${data.title}  and ${data.body} and ${data.userId}</p>`
//         })
// });


// photo data post in API  ////

const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
        });
}

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            } else {
                dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}