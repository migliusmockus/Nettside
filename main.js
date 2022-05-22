(function() {
    document.getElementById("cf1").addEventListener('mouseenter', function() {
        document.getElementById("for_bilde_foran").classList.toggle("transparent");
    })
    document.getElementById("cf1").addEventListener('mouseleave', function() {
        document.getElementById("for_bilde_foran").classList.toggle("transparent")
    })
})();

(function() {
    document.getElementById("cf2").addEventListener('mouseenter', function() {
        document.getElementById("idag_bilde_foran").classList.toggle("transparent");
    })
    document.getElementById("cf2").addEventListener('mouseleave', function() {
        document.getElementById("idag_bilde_foran").classList.toggle("transparent")
    })
})();