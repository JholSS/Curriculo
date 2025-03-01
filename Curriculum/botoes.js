const btm= document.getElementById("btm")

btm.addEventListener('click', function() {
    document.getElementById("destino").scrollIntoView({ behavior: "smooth" });
});

const scrollToTop = () => {
    window.scrollTo({
   top: 0,
   behavior: 'smooth' })
}



