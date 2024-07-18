var adaptive = {
    //
    data: [],
    //
    start: window.addEventListener('resize', () => {adaptive.data.forEach((f) => {f();});}),
    //
    add: (block, data, fun) => {
        adaptive.execute(block, data, fun);
        //
        adaptive.data.push(() => {adaptive.execute(block, data, fun)});
    },
    //
    execute: (block, data, fun) => {
        const width = window.innerWidth;
        //
        function pla(n) {
            fun(block, n);
        }
        //
        if(data[0][0] <= window.innerWidth) {
            pla(false)
            //
            return;
        }
        //
        data.forEach((d) => {
            if(width == d[0]) {
                pla(d[2]);
                //
                return;
            }
            //
            const max = width < d[0];
            //
            const min = width > d[1];
            //
            if(max && min) {
                if(width >= d[0]) {
                    pla(d[2]);
                } else {
                    pla((d[2]*width)/d[0]);
                }
            }
        });
    }
}
//
adaptive.add(document.querySelector('.head'), [[552, 0, 0.7]], (block, n) => {
    if(n == false) {
        block.style.removeProperty('transform')
        //
        return;
    }
    block.style.transform = 'scale('+n+')';
});
//