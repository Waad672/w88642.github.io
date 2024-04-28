
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "" || x==null) {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["fpass"].value;
  if (y == "" || y==null) {
    alert("Name must be filled out");
    return false;
  }
}

function changeStyle() {
    var currentStyle = document.getElementById('stylesheet').getAttribute('href');
    if (currentStyle === 'style.css') {
        document.getElementById('stylesheet').setAttribute('href', 'style1.css');
    } else {
        document.getElementById('stylesheet').setAttribute('href', 'style.css');
    }
}

function change() {
  var current = document.getElementById('style').getAttribute('href');
  if (current === 'style2.css') {
      document.getElementById('style').setAttribute('href', 'style3.css');
  } else {
      document.getElementById('style').setAttribute('href', 'style2.css');
  }
}

