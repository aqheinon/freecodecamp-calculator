$(document).ready(function() {
  var operands = [];
  var tmp = '';

  $("button").click(function() {
    var value = $(this).text();

    if (!isNaN(value) || value === '.') {
      tmp += value;
      $("#result").val(tmp.substring(0, 10));
    } else if (value === 'CLR') {
      operands = [];
      tmp = '';
      $("#result").val('')
    } else if (value === '=') {
      operands.push(tmp);

      var x = Number(operands[0]);
      for (var i = 1; i < operands.length; i++) {
        var next = Number(operands[i + 1])
        var operator = operands[i];

        switch (operator) {
          case '+': x += next;
          break;  
          case '-': x -= next;
          break;
          case '*': x *= next;
          break;
          case '/': x /= next;
          break;
        }
          
        i++;
      }
      
      if (x < 0) {
        x = Math.abs(x) + '-';
      }
      
      $("#result").val(x);
      operands = [];
      tmp = '';

    } else {
      operands.push(tmp);
      operands.push(value);
      tmp = '';
    }

  });

});