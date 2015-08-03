function addme(){
    var x = parseFloat($('#x').val());
    var y = parseFloat($('#y').val());
    $('#output').text(x+y);
}

function alertme(){
    alert("Addddddddddd");
}

function trustme(){
    $('#x').val(3);
    $('#y').val(5);
}

function loadme(){
    // see doc for ytdl-core and stream (node js)
    url = 'https://www.youtube.com/watch?v=a1Y73sPHKxw';
    output = 'video.mp4';
    ytdl(url, { filter: function(format) { return format.container === 'mp4'; } })
        .pipe(fs.createWriteStream(output))
        .on('finish', function(){
            alert('Written to ' + output);
        });

}
