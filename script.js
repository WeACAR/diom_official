function showMenu() {
    var x = document.getElementById("myMenu");
    var y = document.querySelector(".close-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.classList.add('show');
      y.style.display = "block";
    } else {
      x.style.display = "none";
      x.classList.remove('show');
      y.style.display = "none";
    }
  }


  let count = 1;

  document.getElementById("radio1").checked = true;
  document.getElementById('manual-btn1').style.backgroundColor = "#525264";
  
  // Add event listeners to the radio buttons
  document.getElementById('radio1').addEventListener('change', function() {
      if(this.checked) {
          count = 1;
          document.getElementById('manual-btn1').style.backgroundColor = '#525264';
          document.getElementById('manual-btn2').style.backgroundColor = '#D9D9D9';
          document.getElementById('manual-btn3').style.backgroundColor = '#D9D9D9';
      }
  });
  
  document.getElementById('radio2').addEventListener('change', function() {
      if(this.checked) {
          count = 2;
          document.getElementById('manual-btn1').style.backgroundColor = '#D9D9D9';
          document.getElementById('manual-btn2').style.backgroundColor = '#525264';
          document.getElementById('manual-btn3').style.backgroundColor = '#D9D9D9';
      }
  });
  
  document.getElementById('radio3').addEventListener('change', function() {
      if(this.checked) {
          count = 3;
          document.getElementById('manual-btn1').style.backgroundColor = '#D9D9D9';
          document.getElementById('manual-btn2').style.backgroundColor = '#D9D9D9';
          document.getElementById('manual-btn3').style.backgroundColor = '#525264';
      }
  });
  
  setInterval(function(){
      nextImage();
      var div1 = document.getElementById('manual-btn1');
      var div2 = document.getElementById('manual-btn2');
      var div3 = document.getElementById('manual-btn3');
  
      if(count == 1) {
          div1.style.backgroundColor = '#525264';
          div2.style.backgroundColor = '#D9D9D9';
          div3.style.backgroundColor = '#D9D9D9';
      } else if(count == 2) {
          div1.style.backgroundColor = '#D9D9D9';
          div2.style.backgroundColor = '#525264';
          div3.style.backgroundColor = '#D9D9D9';
      } else if(count === 3) {
          div1.style.backgroundColor = '#D9D9D9';
          div2.style.backgroundColor = '#D9D9D9';
          div3.style.backgroundColor = '#525264';
      }
  }, 5000)
  
  function nextImage (){
      count++;
      if(count>3){
          count = 1;
      }
      document.getElementById("radio"+count).checked = true;
  }
  

