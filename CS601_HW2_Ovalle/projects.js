// use setInterval instead
setTimeout(function() {
    const sectionEl = document.querySelector('section.section1_');

    // using const, let, or var is out of scope somehow?
    // window.addedEl = `
    //     <h1 class="bio-h1__projects duplicate">
    //         I don't have much experience on building applications or webpages so there is not much too show yet!
    //     </h1>
    // `;

    function addDuplicate(e) {
        if (e.target.className.includes('duplicate')) return;

        const target = e.target;

        const duplicateEl = document.createElement('h1');
        const duplicateContent = document.createTextNode("This is a duplicate!");

        duplicateEl.appendChild(duplicateContent);
        duplicateEl.className = "bio-h1__projects duplicate";
        target.parentNode.insertAdjacentElement('afterbegin', duplicateEl);

        // debugger;
        duplicateEl.addEventListener('click', e => {
            if (!e.target.className.includes('duplicate')) return;
            // debugger;
            e.target.remove();
        });
    }

    sectionEl.addEventListener('click', addDuplicate);
}, 1000);
