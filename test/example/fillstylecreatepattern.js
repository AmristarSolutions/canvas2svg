window.C2S_EXAMPLES['fillstylecreatepattern'] = function(ctx) {
    var img = document.getElementById("pattern");
    var pat = ctx.createPattern(img, "repeat");
    ctx.rect(0,0,150,100);
    ctx.fillStyle = pat;
    ctx.fill();
};