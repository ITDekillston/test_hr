var menu = {
    block: {
        pc: _=>{return document.querySelector('.menu')},
        tel: _=> {return document.querySelector('.navi')},
        tel_open: _=>{return document.querySelector('.menu_telephone')},
    },
    //
    real: undefined,
    //
    position: {y: 0, bool: true},
    //
    start: window.addEventListener('scroll', function () {
        //
        if(menu.position.y < window.scrollY && menu.position.bool == true && menu.position.y !== 0) {
            if(menu.real) {
                menu.real.style.top = '-50%';
            }
            menu.block.tel_open().style.left = '-100%';
            menu.block.tel().style.backgroundColor = menu.tel_open_color;
            menu.tel_open_bool = true;
            //
            menu.position.bool = false;
        } else if(menu.position.y > window.scrollY && menu.position.bool == false && menu.position.y !== 0) {
            if(menu.real) {
                menu.real.style.top = '0px';
            }
            //
            menu.position.bool = true;
        }
        //
        menu.position.y = window.scrollY;
    }),
    //
    changeby: {y: 970, bool: undefined},
    //
    widthStart: (_=> {
        window.addEventListener("resize", () => {
            menu.width();
        });
        onloading.add(() => {
            menu.width();
        });
    })(),
    width: () => {
        if(menu.changeby.y > window.innerWidth && (menu.changeby.bool == false || menu.changeby.bool == undefined)) {
            menu.block.pc().style.top = '-50%';
            menu.block.tel().style.top = '0px';
            //
            menu.changeby.bool = true
            //
            menu.real = menu.block.tel();
        } else if(menu.changeby.y < window.innerWidth && (menu.changeby.bool == true || menu.changeby.bool == undefined)) {
            menu.block.pc().style.top = '0px';
            menu.block.tel().style.top = '-50%';
            menu.block.tel().style.backgroundColor = menu.tel_open_color;
            menu.block.tel_open().style.left = '-100%';
            //
            menu.tel_open_bool = true;
            //
            menu.changeby.bool = false
            //
            menu.real = menu.block.pc();
        }
    },
    //
    tel_open_bool: true,
    tel_open_color: undefined,
    //
    tel_open: onloading.add(_=>{
        menu.tel_open_color = getStyle(menu.block.tel(), 'background-color');
        //
        menu.block.tel().onclick = () => {
            if(menu.tel_open_bool) {
                menu.block.tel_open().style.left = '0px';
                //
                menu.block.tel().style.backgroundColor = 'rgba(0, 0, 0, 0)';
                //
                menu.tel_open_bool = false;
            } else {
                menu.block.tel_open().style.left = '-100%';
                //
                menu.block.tel().style.backgroundColor = menu.tel_open_color;
                //
                menu.tel_open_bool = true;
            }
        }
    })
}
//