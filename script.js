let blogDnone = document.querySelectorAll(".blogDnone")
const viewMore = document.querySelector(".view-more")
const hamburger = document.getElementById("hamburger")
const navMobile = document.getElementById("navMobile")



hamburger.addEventListener("click", function () {

    navMobile.classList.toggle("blogDnone")

})

viewMore.addEventListener("click", function () {



    if (viewMore.innerHTML === "View More") {
        viewMore.innerHTML = "View Less"
    }
    else {
        viewMore.innerHTML = "View More"
    }

    blogDnone.forEach(function (e) {
        e.classList.toggle("blogDnone");
        e.classList.toggle("bl");
    });

})

