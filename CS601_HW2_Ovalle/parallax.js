

window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("section").style.transform = `translateY(${distance *
      0.5}px)`;
    document.querySelector(
      ".section1_1"
    ).style.transform = `translateY(${distance * 0.3}px)`;
    setTimeout(() => {
      document.querySelector("header")}, 800);
      
    document.querySelector(
      ".section1_2"
      ).style.transform = `translateY(${distance * 0.4}px)`;
      setTimeout(() => {
        document.querySelector('header')}, 300).style.transform = `translateY(${distance * 0.4}px)`;
      });