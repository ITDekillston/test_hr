var cases = {
    scroll:_=>{return document.querySelector('.scroll')},
    //
    site: [1, 2, 3],
    //
    start: onloading.add(() => {
        for(var s = 0; s < 3; s++) {
            var create = document.createElement("p");
            //
            cases.create(create, s);
            //
            cases.scroll().appendChild(create);
        }
    }),
    bool: false,
    //
    forward: (bool) => {
        if(cases.bool) {return};
        //
        cases.bool = true;
        //
        var d = {
            create: document.createElement("p"),
            zero: () => {
                var p = cases.scroll().querySelectorAll('p');
                //
                if(bool) {return p[0];} else {return p[p.length-1];}
            }
        }
        //
        d.create.style.width = '0px';
        d.create.style.margin = '0px';
        //
        d.zero().style.width = '0px';
        d.zero().style.margin = '0px';
        //
        if(bool) {
            cases.scroll().appendChild(d.create);
        } else {
            cases.scroll().prepend(d.create)
        }
        //
        cases.create(d.create, bool);
        //
        setTimeout(_=>{
            d.create.style.removeProperty('width');
            //
            d.create.style.removeProperty('margin');
        });
        //
        var b = false;
        //
        d.create.addEventListener("transitionend", () => {
            if(b) {return};
            //
            try {cases.scroll().removeChild(d.zero());} catch (error) {};
            //
            b = true;
            //
            cases.bool = false;
        });
    },
    //
    create: (c, n) => {
        if(typeof n == 'number') {
            cases.create_site(c, n);
        } else {
            var p = cases.scroll().querySelectorAll('p');
            //
            if(n) {
                var num = Number(p[p.length-2].classList[0].replace('n_',''))+1;
                //
                if(num >= cases.site.length) {num = 0;}
                //
                cases.create_site(c, num);
            } else {
                var num = Number(p[1].classList[0].replace('n_',''))-1;
                //
                if(num < 0) {num = cases.site.length-1}
                //
                cases.create_site(c, num);
            }
        }   
    },
    create_site: (c, n) => {
        c.textContent = cases.site[n];
        c.classList = 'n_'+n;
    }
};
//
const swi = document.querySelector('.switch');
//
swi.querySelectorAll('button')[0].onclick = () => {
    cases.forward(false);
}
swi.querySelectorAll('button')[1].onclick = () => {
    cases.forward(true);
}