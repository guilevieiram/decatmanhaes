function importElement(elementId, elementSourceHTML){
    $('#' + elementId).load(elementSourceHTML);
}
importElement('footer', 'components/footer.html');
importElement('header', 'components/nav-bar.html');

function contact() {
    let scrollDiv = document.getElementById("contact").offsetTop;
    let navBarHeight = document.getElementById("header").offsetHeight
    window.scrollTo({ top: scrollDiv - 2 * navBarHeight - 20, behavior: 'smooth'});
}

function exportPDF() {
    load('#professional', time = 0)
    load('#qualifications', time = 0)
    load('#academical', time = 0)
    load('#contact', time = 0)
    load('#objectives', time = 0)
  
    let element = document.getElementById('print');
    var opt = {
        filename: 'cv-WalterDecatManhaes.pdf',
        enableLinks: true,
        pagebreak:    {
            mode: ['avoid-all', 'legacy'],
            // after: ['.info-container', '#contact', '#academical', '#qualifications'],
        }
    };
    html2pdf().set(opt).from(element).save();
}

function load(element, time = 1.5) {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            y: 100
        },
        {
            duration: time,
            opacity: 1,
            y: 0,
            ease: 'power1'
        }
    )
};


function loadOnReach (element) {
    let target = document.querySelector(element);
    var elementNotCalled = true;
    gsap.set(element,{
        opacity: 0,
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight > target.offsetTop && elementNotCalled){
          elementNotCalled = false;
          load(element)
        }
      });
}


loadOnReach('#professional')
loadOnReach('#qualifications')
loadOnReach('#academical')
loadOnReach('#contact')
loadOnReach('#objectives')


gsap.from("header", {
    duration: 1.5, 
    opacity: 0,
    y: -50,
    ease: 'power4'
});

gsap.from(".profile img",{
    duration: 1.5,
    x:-200,
    opacity: 0,
    ease: 'power1'
});

gsap.from(".profile-info h1",{
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: 'power1'
});

gsap.from(".profile-info p",{
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power1'
});

gsap.from(".profile-info button",{
    duration: 1,
    opacity: 0,
    ease: 'power1'
});

gsap.from(".info",{
    duration: 2,
    y: 50,
    opacity: 0.5,
    ease: 'power1'
});

