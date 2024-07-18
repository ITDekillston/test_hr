var loading = {
    block: () => {return document.querySelector('.loading')},
    //
    start: onloading.add(() => {
        var s = 500;
        //
        loading.block().style.transition = (s/1000)+'s';
        //
        loading.block().style.opacity = '0';
    })
}