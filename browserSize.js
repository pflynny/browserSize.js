
    var div = document.createElement("div");
    div.setAttribute('id', 'window-resize');
    var wreSize = document.getElementById('window-resize');


    // set style
    div.style.color = '#464646';
    div.style.fontFamily = 'helvetica, sans-serif';
    div.style.fontSize = '14px';
    div.style.fontWeight = 'normal';
    div.style.position = 'fixed';
    div.style.bottom = '15px';
    div.style.right = '15px';

    document.body.appendChild(div);

    div.style.display = "none";


    function update() {
        div.innerHTML = window.innerWidth + ' x ' + window.innerHeight;
    }

    window.addEventListener('resize', function(e){
        div.style.display = "block";
        update();
        setTimeout(function(e){
            div.style.display = "none";
            // console.log(e);
        }, 4500);
    });
