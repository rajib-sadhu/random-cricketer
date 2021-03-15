   //guess game

      //var guess=  parseInt(prompt("Enter no. from 1 to 5: "));

      //alert("OK fine");
      function guessFunction(){

        var img=document.getElementById("imgId");
        
        var random_number = Math.floor(Math.random()*27)+1;

        img.src="images/india/"+random_number+".png";
         var btn=document.getElementById("btn");
        btn.disabled=true;

    }

    

    function screenLoad(){

        var preloader = document.getElementById("loading");
    // window.addEventListener('load', function(){
    // 	preloader.style.display = 'none';
    // 	})
        preloader.style.display = 'none';

    }
