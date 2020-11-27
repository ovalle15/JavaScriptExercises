

window.addEventListener("scroll", function(e) {
    console.log(e);
    /**
     * What logic should control when changes happen?
     * What values do I need to know in order to write that logic?
     * What values are available for me to use? And in what format?
     */
    const distance = window.scrollY;
    document.querySelector("section").style.transform = `translateY(${distance * 0.5}px)`;
    document.querySelector(".section1_1").style.transform = `translateY(${distance * 0.3}px)`;

    setTimeout(() => {
        debugger;
        document.querySelector("header");
    }, 800);

    document.querySelector(".section1_2").style.transform = `translateY(${distance * 0.4}px)`;

    setTimeout(() => {
        const headerEl = document.querySelector('header');
        if (typeof ((headerEl || {}).style || {}).transform === "string") headerEl.style.transform = `translateY(${distance * 0.4}px)`;
        debugger;
    }, 300);
});