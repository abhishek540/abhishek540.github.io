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
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn-change");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let i=0;i<6;i++){
        //getRandomNumber():
        hexColor +=hex[getRandomNumber()];
    }
   // color.textContent = hexColor;
   // color.style.color = hexColor;
    document.body.style.background = hexColor;
});

function getRandomNumber(){
     return Math.floor(Math.random()*hex.length);
 }
//  const colors = ["#f3a683","#f7d794","#778beb","#e77f67","#cf6a87","#f19066","#f5cd79","#546de5","#e15f41","#c44569","#786fa6","#f8a5c2","#63cdda","#ea8685","#596275","#574b90","#f78fb3","#3dc1d3","#e66767","#303952"];
//  const btn = document.getElementById("btn-change");
//  const color = document.querySelector(".color");
 
//  btn.addEventListener("click", function(){
//      //get random number between 0-3
//      const randomNumber = getRandomNumber();
//     // console.log(randomNumber);
//      document.body.style.backgroundColor = colors[randomNumber];
//      //color.textContent = colors[randomNumber];
//  });
 
//  function getRandomNumber(){
//      return Math.floor(Math.random() * colors.length);
//  }

// local reviews data
const reviews = [
    {
      id: 1,
      name: "PIXONOIDS",
      job: "Co-Coordinator",
      img:
        "./images/pixo_logo.png",
      text:
        "Volunteered in the creative and media club, Pixonoids as co-coordinator. Successfully coordinated the communication between the Tech-Fest team and the graphics team. Apart from this, I have mentored over 50 freshers to become familiar with illustrator and Photoshop.  Designed many graphics, posters, and flex for various events and sponsors. ",
      button:
        "https://www.youtube.com/user/pixonoids",
    },
    {
      id: 2,
      name: "H.P.ATHLETICS ASSOC.",
      job: "Web Page",
      img:
        "./images/hp_logo.jpg",
      text:
        "Enlisted to design the Front-End of the Himachal Pradesh Athletics Association (HPAA). Post-Covid, this website acts as the only channel of communication between athletes and event managers. It is a regional-level organization that monitors the ground-level growth of budding athletes.",
      button:
        "https://hpathletics.in/",
    },
    {
      id: 3,
      name: "Automatic Hand Sanitizer",
      job: "Iot based device",
      img:
        "./images/new_pic.jpg",
      text:
        "An IoT-based Automatic Hand Sanitiser Dispenser is developed that is also able to detect human temperature. A project which was initiated for class assignment is now serving around 200 people in 2 state-based government organization named HIMUDA. We have also successfully installed it in our 3 college departments.",
      button:
        "https://github.com/abhishek540/Automatic-Hand-Sanitizer-Dispenser-with-Alarm-Temp/tree/master",
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
    button.href = item.button;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    button.href = item.button;
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
  