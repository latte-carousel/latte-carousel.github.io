hljs.initHighlightingOnLoad();

window.addEventListener("DOMContentLoaded", function() {
    var btnGetStarted = document.getElementById("btn-get-started");
    var btnNpm = document.getElementById("btn-npm");
    var btnGithub = document.getElementById("btn-github");

    btnGetStarted.addEventListener("mouseup", function() {
        gtag("event", "get-started");
    });

    btnNpm.addEventListener("mouseup", function() {
        gtag("event", "npm");
    });

    btnGithub.addEventListener("mouseup", function() {
        gtag("event", "github");
    });
});
