// This filter by emkey08
// https://jsfiddle.net/emkey08/zgvtjc51
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

function stringDoting(integer){
  let string = integer.toString().split('')
  
  let i = 3
  while(i < string.length){
    string.splice(-i, 0, '.')
    i += 4
  
  }
  return string.join('')
}

function filteringInput(string){
  let result = string.split('').map(e => parseInt(e)).filter(e => !isNaN(e)).join('')
  return parseInt(result)
}