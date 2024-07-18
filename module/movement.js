var movement = {
    object: [],
    add: (block, top, bot, left, right) => {
        movement.object.push({
            block:block, 
            top:top, 
            bot:bot, 
            left:left, 
            right:right, 
            rect: block.getBoundingClientRect(),
            lt: {
                top: Number(getStyle(block, 'top').replace(/\D/g, "")), 
                left: Number(getStyle(block, 'left').replace(/\D/g, ""))
            }
        });
    },
    mouse: document.onmousemove = (m) => {
        movement.object.forEach((e) => {
            movement.activate(e, m);
        })
    },
    activate: (e, m) => {
        var b = e.rect;
        //
        var x = m.pageX-(b.width/2+b.left);
        //
        if(x >= 0) {
            var n = (e.right[1]*x)/e.right[0];
            //
            if(n <= e.right[1]) {
                e.block.style.left = (e.lt.left+n)+'px';
            } else {
                e.block.style.left = (e.lt.left+e.right[1])+'px';
            }
        } else {
            var n = (e.left[1]*(x*-1))/e.left[0];
            //
            if(n <= e.left[1]) {
                e.block.style.left = (e.lt.left-n)+'px';
            } else {
                e.block.style.left = (e.lt.left-e.left[1])+'px';
            }
        }
        //
        var y = m.pageY-(b.height/2+b.top);
        //
        if(y >= 0) {
            var n = (e.top[1]*y)/e.top[0];
            //
            if(n <= e.top[1]) {
                e.block.style.top = (e.lt.top+n)+'px';
            } else {
                e.block.style.top = (e.lt.top+e.top[1])+'px';
            }
        } else {
            var n = (e.bot[1]*(y*-1))/e.bot[0];
            //
            if(n <= e.bot[1]) {
                e.block.style.top = (e.lt.top-n)+'px';
            } else {
                e.block.style.top = (e.lt.top-e.bot[1])+'px';
            }
        }
    }
};