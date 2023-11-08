var cardImages = [
    './Images/as.jpg',   
    './Images/chinko.jpg',  
    './Images/doss.jpg',  
    './Images/quatro.jpg',  
    './Images/triss.jpg'   
  ];
  
  
  var card = document.getElementById('card');
  var back = card.querySelector('.back');
  var render = true;
  
  function setRandomCardImage() {
    var randomIndex = Math.floor(Math.random() * cardImages.length); 
    var randomImage = cardImages[randomIndex];
    back.style.backgroundImage = 'url(' + randomImage + ')'; 
  }
  
  
  card.addEventListener('click', function() {
    
    card.classList.toggle('flip');
    if (render){
      setRandomCardImage(); 
      render = !render
    }
    else {
      render = !render
    }
    
  });