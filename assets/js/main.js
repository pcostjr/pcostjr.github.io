let hero = document.getElementById('typed');

let typed_script = document.createElement("script");
typed_script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
typed_script.onload = () => {
    let typed = new Typed('#typed', {
        strings: [' a CS Educator', ' an IT Support Specialist', '<i><b> Your Next Top Candidate </i></b>'],
        typeSpeed: 45,
        smartBackspace: true,
        loop: true
    });
}
document.head.appendChild(typed_script);