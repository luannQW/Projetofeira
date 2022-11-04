
// Select button
var button = document.getElementById('read_button');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Read less';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Read more';
});

const  btnMobile  =  document . getElementById ( 'btn-mobile' ) ;

function  toggleMenu ( evento )  {
  if  ( event . type  ===  'touchstart' )  event . preventDefault ( ) ;
  const  nav  =  documento . getElementById ( 'nav' ) ;
  nav . classList . alternar ( 'ativo' ) ;
  const  ativo  =  nav . classList . contém ( 'ativo' ) ;
  evento . atualTarget . setAttribute ( 'aria-expandido' ,  ativo ) ;
  se  ( ativo )  {
    evento . atualTarget . setAttribute ( 'aria-label' ,  'Fechar Menu' ) ;
  }  senão  {
    evento . atualTarget . setAttribute ( 'aria-label' ,  'Abrir Menu' ) ;
  }
}

btnMobile . addEventListener ( 'click' ,  toggleMenu ) ;
btnMobile . addEventListener ( 'touchstart' ,  toggleMenu ) ;






