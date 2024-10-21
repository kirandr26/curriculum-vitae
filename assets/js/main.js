$(document).ready(function(){
    $('.bar').each(function() {
        const skill = $(this).find('.barInner').data('skill'); 
        $(this).find('.barInner').css('width', skill); 
        console.log(skill); 
    });

    const roles = ["Web Developer", "WordPress Developer", "Associate Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    
    function typeRole() {
        if (charIndex < roles[roleIndex].length) {
            $('.typing-text').append(roles[roleIndex].charAt(charIndex));
            charIndex++;
            setTimeout(typeRole, 100);
        } else {
            setTimeout(() => {
                clearText();
            }, 1000);
        }
    }

    function clearText() {
        if (charIndex > 0) {
            $('.typing-text').text(roles[roleIndex].substring(0, charIndex - 1));
            charIndex--;
            setTimeout(clearText, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        }
    }

    typeRole();
})