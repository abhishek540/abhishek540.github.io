// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//for NAVBAR -------------------------------------------------------
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    // if(links.classList.contains('show-links')){
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add('show-links');
    // }
    links.classList.toggle("show-links");  
});

//for BACKGROUND----------------------------------------------------
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById("btn-change");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function(){
//     let hexColor = "#";
//     for (let i=0;i<6;i++){
//         //getRandomNumber():
//         hexColor +=hex[getRandomNumber()];
//     }
//    // color.textContent = hexColor;
//    // color.style.color = hexColor;
//     document.body.style.background = hexColor;
// });

// function getRandomNumber(){
//      return Math.floor(Math.random()*hex.length);
//  }
 const colors = ["#f3a683","#f7d794","#778beb","#e77f67","#cf6a87","#f19066","#f5cd79","#546de5","#e15f41","#c44569","#786fa6","#f8a5c2","#63cdda","#ea8685","#596275","#574b90","#f78fb3","#3dc1d3","#e66767","#303952"];
 const btn = document.getElementById("btn-change");
 const color = document.querySelector(".color");
 
 btn.addEventListener("click", function(){
     //get random number between 0-3
     const randomNumber = getRandomNumber();
    // console.log(randomNumber);
     document.body.style.backgroundColor = colors[randomNumber];
     //color.textContent = colors[randomNumber];
 });
 
 function getRandomNumber(){
     return Math.floor(Math.random() * colors.length);
 }

// local reviews data
const reviews = [
    {
      id: 1,
      name: "PIXONOIDS",
      job: "Co-Coordinator",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABjFBMVEX///8RFBmYKLL86zkAutEAAAD//f////r//fnz///9//347akAudL96yr//+v/6T3362IhsML67TUSs8mKFKXkyuWcJbSWKq6dXqz/+v/86zze3t7+//f5//8TExoAvtP/8//R0dHfzeEDutn+//Ls////7v8Avcz///KhILwAAAmeJbCIGZ/x//n/9v7/9/mhIMCWJ7iqq63+6P/s2PCAEZKRLakAt7nu//IAwc4As76cJ6vKoM8As9f65UcRtMZoaGj//+Hp6Oz46Xh4e4D360uWl5n47RyEAKvStNm4gr69dsaWQqWUN6WhVrG7gsnFls91AI+NK57J/f2i6Od3xNXmx+nC6uuE1N+z2O3rvvFizNIAp9DD6PNgzc/avOak3ey7acri9P3Rm9nar+OOSaD9980Aqcm69+2S1ub89qPc//b09pP654ab5t23irv7972qd7ANm7WFz8jz51xSUVY7Oz2+vcRFRUWHPp0vMDXr723y5ZAgISf85nOLi476/72CwdL/51+ZK5wkuitDAAAXVUlEQVR4nO2di18a17bHtzz2DNsBZCCMQ/aIKcNLAUM1gg8g1lKSNo/eaBJvNaltoklNco491z7StLc95/zjd+0BE5V5MwjnfvLr59MkGghf1/rttfaePbMR+qiP+qj/96IghDhNZ7/OcQTJMiaIsO//J4vnAfECnSbCcSrlMZblygg+lodSKYH/z+YWPzmvpdxshX2Ho//pMVy6/eVXd+7cKDElzqp04+7de/e/vr00O+qP6EREUSqhkBzCMqb8K5l96b8SSV/SZ6BkspooPbhzf/2TzyCeGLO3gPQdMYWJCHxIoFMKoa3th9tIZV97dKNoxKdJ8klStZpI3PnyCjiTMFB51Bxmwoii0OOdWDyeX/1vZjPEfVMyJfRVq8VlaW0tmUwUv3u2xCFaL4+awkxKaHu39SITSAcymdq29iXybcIwS7tRlOD7UrKaBJWk+49mR4ugK07BeAEpSvnxbiwjAB5TOrO3jesVTPFtiOKyeSA/OHM58eDLTxBdACuPUSwxKZcL6MnTVkwQhMCphEZtH9cxofjbkrkXzyVtsVpK3F3PoXp9jOokLVC8n4/vAVXgg4RAY3Vba2eIlRfPaG1+fl6aTyS+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",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      button:
        "https://www.youtube.com/user/pixonoids",
    },
    {
      id: 2,
      name: "H.P.ATHLETICS ASSOC.",
      job: "Web Page",
      img:
        "https://hpathletics.in/static/HPsite/logo.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        button:
        "https://hpathletics.in/",
    },
    {
      id: 3,
      name: "Automatic Hand Sanitizer",
      job: "Iot based device",
      img:
        "https://github.com/abhishek540/Automatic-Hand-Sanitizer-Dispenser-with-Alarm-Temp/raw/master/images/newspaper.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        button:
        "https://github.com/abhishek540/Automatic-Hand-Sanitizer-Dispenser-with-Alarm-Temp/tree/master",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        button:
        "KNOW MORE",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const button = document.getElementById("volunteer");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    btn.href = item.button;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    btn.href = item.button;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
  