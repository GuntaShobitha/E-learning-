const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            document.querySelectorAll(".faq-answer").forEach(item => {
                item.style.display = "none";
            });

            answer.style.display = "block";

        }

    });

});


// Smooth Scroll

document.querySelectorAll('a[href="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

    });

});


// Navbar Shadow Effect

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 6px 20px rgba(0,0,0,0.15)";

    }else{

        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.1)";

    }

});


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.2
});


const animatedElements = document.querySelectorAll(
`
.category-card,
.course-card,
.feature-card,
.testimonial-card,
.role-card,
.company,
.stat-box
`
);

animatedElements.forEach(element=>{

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all 0.6s ease";

    observer.observe(element);

});


// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

const enrollButtons =
document.querySelectorAll(".course-card .btn");

enrollButtons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        alert(
            "Course enrolled successfully!"
        );

    });

});

// Welcome Message

window.addEventListener("load",()=>{

    console.log(
        "Welcome to Stackly E-Learning Platform"
    );

}); 

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});