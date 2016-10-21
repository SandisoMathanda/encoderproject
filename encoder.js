var keyPress = {
  32: " ",
  13: "<br>",
  //8:""
};
var echoEncode = {
  64:"z",
  65:"a",
  66:"b",
  67:"c",
  68:"d",
  69:"e",
  70:"f",
  71:"g",
  72:"h",
  73:"i",
  74:"j",
  75:"k",
  76:"l",
  77:"m",
  78:"n",
  79:"o",
  80:"p",
  81:"q",
  82:"r",
  83:"s",
  84:"t",
  85:"u",
  86:"v",
  87:"w",
  88:"x",
  89:"y",
  90:"z",
  91:"a"
};

//heiroglyphics
var hEncode = {
65:"<img src='images/h/a.gif'>",
66:"<img src='images/h/b.gif'>",
67:"<img src='images/h/c.gif'>",
68:"<img src='images/h/d.gif'>",
69:"<img src='images/h/e.gif'>",
70:"<img src='images/h/f.gif'>",
71:"<img src='images/h/g.gif'>",
72:"<img src='images/h/h.gif'>",
73:"<img src='images/h/i.gif'>",
74:"<img src='images/h/j.gif'>",
75:"<img src='images/h/k.gif'>",
76:"<img src='images/h/l.gif'>",
77:"<img src='images/h/m.gif'>",
78:"<img src='images/h/n.gif'>",
79:"<img src='images/h/o.gif'>",
80:"<img src='images/h/p.gif'>",
81:"<img src='images/h/q.gif'>",
82:"<img src='images/h/r.gif'>",
83:"<img src='images/h/s.gif'>",
84:"<img src='images/h/t.gif'>",
85:"<img src='images/h/u.gif'>",
86:"<img src='images/h/v.gif'>",
87:"<img src='images/h/w.gif'>",
88:"<img src='images/h/x.gif'>",
89:"<img src='images/h/y.gif'>",
90:"<img src='images/h/z.gif'>"

}

//runes
var rEncode = {
65:"<img src='images/r/a.gif'>",
66:"<img src='images/r/b.gif'>",
67:"<img src='images/r/c.gif'>",
68:"<img src='images/r/d.gif'>",
69:"<img src='images/r/e.gif'>",
70:"<img src='images/r/f.gif'>",
71:"<img src='images/r/g.gif'>",
72:"<img src='images/r/h.gif'>",
73:"<img src='images/r/i.gif'>",
74:"<img src='images/r/j.gif'>",
75:"<img src='images/r/k.gif'>",
76:"<img src='images/r/l.gif'>",
77:"<img src='images/r/m.gif'>",
78:"<img src='images/r/n.gif'>",
79:"<img src='images/r/o.gif'>",
80:"<img src='images/r/p.gif'>",
81:"<img src='images/r/q.gif'>",
82:"<img src='images/r/r.gif'>",
83:"<img src='images/r/s.gif'>",
84:"<img src='images/r/t.gif'>",
85:"<img src='images/r/u.gif'>",
86:"<img src='images/r/v.gif'>",
87:"<img src='images/r/w.gif'>",
88:"<img src='images/r/x.gif'>",
89:"<img src='images/r/y.gif'>",
90:"<img src='images/r/z.gif'>"
}

//choose language
$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});

//encoder

  $("#inputArea").keydown(function(e){
  $("#textArea").append(keyPress[e.keyCode]);
});

  $("#inputArea").keydown(function(e) {

if ($("input:checked").val() == "ceasarCypher") {
    $("#textArea").append(echoEncode[e.keyCode - 1]);
  }

 else if( $("input:checked").val() == "heiroglyphics") {
      $("#textArea").append(hEncode[e.keyCode]);
  }

 else if ( $("input:checked").val() == "runes") {
      $("#textArea").append(rEncode[e.keyCode]);
 }

 else {
     $("#textArea").append(echoEncode[e.keyCode]);
 }
});

//decode

$("#translationInputText").keydown(function(enter) {
  if (enter.keyCode == 13 ) {
    decode()
  }
});

function decode() {
  var messageToDecode = $("#translationInputText").val();
  var messageArray = messageToDecode.split("")
for (var i = 0; i < messageArray.length; i++) {
  $("#translationArea").append(echoEncode[messageArray[i].charCodeAt(0) -31])
}
//var translateNumber = messageArray[i].charCodeAt(0) - 32
};
