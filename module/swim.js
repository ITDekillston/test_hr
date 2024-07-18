var swim = {
    fb_bool: false,
    save: [],
    m: '.m',
    head: '.head',
    start: onloading.add(() => {
        if(device) {
            let ob = new IntersectionObserver((e) => {
                swim.observer(e[0].isIntersecting);
            });
            //
            ob.observe(document.querySelector(swim.head));
        }
    }),
    observer: (bool) => {
        if(bool) {
            swim.back();
        } else {
            swim.forward();
        }
    },
    forward: () => {
        var save = [];
        document.querySelector(swim.head).querySelectorAll(swim.m).forEach((m) => {
            if(swim.save.length == 0) {save.push([m, getStyle(m, 'top'), getStyle(m, 'left')]);}
            //
            const rands = rand(3, 8);
            //
            m.style.transition = rands+'s';
            //
            swim.move({second: rands, block: m});
            //
            m.style.top = (pageYOffset+rand(0, window.outerHeight))+'px';
            m.style.left = (rand(0, window.outerWidth))+'px';
            m.style.filter = 'blur(10px)';
            //
            swim.fb_bool = true;
        });
        //
        if(swim.save.length == 0) {swim.save = save;}
    },
    back: () => {
        if(swim.save.length == 0) {return;}
        //
        swim.save.forEach((s) => {
            s[0].style.transition = '1s';
            s[0].style.top = s[1];
            s[0].style.left = s[2];
            s[0].style.filter = 'blur(0px)';
        });
        //
        swim.fb_bool = false;
    },
    move: (d) => {
        setTimeout(() => {
            if(swim.fb_bool) {
                function m() {
                    d.block.style.top = (pageYOffset+rand(0, window.outerHeight))+'px';
                    d.block.style.left = (rand(0, window.outerWidth))+'px';
                    //
                    const rands = rand(10, 15);
                    //
                    d.block.style.transition = rands+'s';
                    //
                    return rands;
                }
                //
                setTimeout(() => {swim.move(d)}, (m()*1000)+1500);
            }
        }, d.second*1000);
    }
};