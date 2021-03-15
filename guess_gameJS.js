   //guess game

      //var guess=  parseInt(prompt("Enter no. from 1 to 5: "));

      //alert("OK fine");
      function guessFunction(){

        var img=document.getElementById("imgId");
        
        var folder_random = Math.floor(Math.random()*3)+1;

        var ind_random = Math.floor(Math.random()*27)+1;
        var eng_random = Math.floor(Math.random()*4)+1;
        var aus_random = Math.floor(Math.random()*5)+1;
        

        if(folder_random==1)
        img.src="images/india/"+ind_random+".png";
        if(folder_random==2)
        img.src="images/england/"+eng_random+".png";
        if(folder_random==3)
        img.src="images/australia/"+aus_random+".png";

         
         
         
         
         var btn=document.getElementById("btn");
        btn.disabled=true;
          document.getElementById("span").innerHTML="you get once chance to see your player";

    }

    

    function screenLoad(){

        var preloader = document.getElementById("loading");
    // window.addEventListener('load', function(){
    // 	preloader.style.display = 'none';
    // 	})
        preloader.style.display = 'none';

    }
