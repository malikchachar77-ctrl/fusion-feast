const tl = gsap.timeline({defaults:{ease:"power2.out",duration:1}});

tl.from(".image-gallery",{
    x:-100,
    opacity:0

})

.from(".text-section, text-section h1, text-section h2",{
    y:30,
    opacity:0,

})
