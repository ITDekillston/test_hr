onloading.add(() => {
    var bool = [false, false];
    //
    document.querySelectorAll('.c').forEach(c => {
        observer.add(c, (b) => {
            if(c.style.transform == '' && b == true) {
                c.style.transform = 'scale(1)';
                c.style.transition = '0.7s';
                c.style.transitionTimingFunction = 'ease';
            }
        });
    });
    document.querySelector('.head_general').querySelector('.text').querySelectorAll('p').forEach((p) => {
        observer.add(p, (b) => {
            if(p.style.transform == '' && b == true) {
                p.style.transform = 'scale(1)';
                p.style.color = 'white';
            }
        });
    });
})