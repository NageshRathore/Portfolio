document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link');
    const secDiv = document.querySelector('.sect');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const section = document.getElementById(target);
            const sectionTitle = this.getAttribute('data-title');

            if (section) {
                document.querySelectorAll('.mid > div').forEach(function(sec) {
                    sec.style.display = 'none';
                });

                secDiv.textContent = sectionTitle;

                section.style.display = 'flex';
                links.forEach(function(item) {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

   
    const defaultLink = document.querySelector('.link[data-target="about"]'); 
    if (defaultLink) {
        defaultLink.click();
    }
});




function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const spanElements = skillsSection.querySelectorAll('span.animate');
    const webdCards = skillsSection.querySelector('.webd');
    const langCards = skillsSection.querySelector('.lang');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                spanElements[0].classList.add('visible');
                setTimeout(() => {
                    webdCards.classList.add('visible');
                }, 100);
                setTimeout(() => {
                    spanElements[1].classList.add('visible');
                    langCards.classList.add('visible');
                }, 200);
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(skillsSection);
}

document.addEventListener('DOMContentLoaded', animateSkills);


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
   
    const defaultTab = document.querySelector('.tablink[onclick="openTab(event, \'all\')"]');
    if (defaultTab) {
        defaultTab.click();
    }
});





