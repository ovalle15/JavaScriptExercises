

window.addEventListener("scroll", function(e) {
    console.log(e);
    /**
     * What logic should control when changes happen?
     * What values do I need to know in order to write that logic?
     * What values are available for me to use? And in what format?
     */
    const distance = window.scrollY;
    document.querySelector("section").style.transform = `translateY(${distance * 1}px)`;
    document.querySelector(".section1_1").style.transform = `translateY(${distance * 0.002}px)`;

    setTimeout(() => {

        document.querySelector("header");
    }, 100);

    // document.querySelector(".section1_2").style.transform = `translateY(${distance * 0.4}px)`;

    // setTimeout(() => {
    //     const headerEl = document.querySelector('header');
    //     if (typeof ((headerEl || {}).style || {}).transform === "string") headerEl.style.transform = `translateY(${distance * 0.4}px)`;
    //     debugger;
    // }, 300);
});