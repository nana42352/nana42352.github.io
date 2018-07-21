function sleep(waitMsec) {
    var startMsec = new Date();
    while (new Date() - startMsec < waitMsec);
}

$(document).ready(function() {
  ["neko", "boy", "oji", "girl"].forEach(function(name) {
    $("img." + name).on("inview", function(e) {
      sleep(200)
      this.src= "img/" + name + "_2.png"
    })
  })
})
