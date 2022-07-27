const buttonTicket = document.querySelectorAll('.location-text button')
const listIcon = document.querySelector('.nav-list-icon');
const newNav = document.querySelector('.nav-child');
const header = document.querySelector('#header')
const listItem = document.querySelectorAll('.nav-child li')
buttonTicket.forEach(function(item){
    item.addEventListener('click', (e)=>{
        const div = document.createElement('div');
        div.innerHTML= `<div class="modal-container">
        <div class="modal">
            <div class="modal-header">
                <div class="heading">
                    <i class="fa-solid fa-suitcase icon-heading"></i>
                    <h2>Tickets</h2>
                </div>
                <i class="fa-solid fa-xmark icon-close"></i>
            </div>
            <div class="modal-content">
                <div class="modal-text">
                    <div class="heading-input">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Tickets, $15 per person</p>
                    </div>           
                    <input type="text" placeholder="How many?" class="input-price">     
                    <div class="heading-input">
                        <i class="fa-solid fa-user"></i>
                        <p>Send To</p>  
                    </div>                          
                    <input type="text" placeholder="Enter email" class="input-email">
                    <button class="modal-btn">
                        PAY              
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <div class="modal-close">
                        <button>Close
                            <i class="fa-solid fa-x"></i>
                        </button>
                        <p>Need
                        <a>help</a>
                        </p>
                    </div>
                </div>
            </div>
           </div>
       </div>`
        document.body.appendChild(div);
    })

})
listIcon.addEventListener('click',(e)=>{
    if(newNav.classList.contains('is-show')){
        newNav.classList.remove('is-show')
    }
    else{
        newNav.classList.add('is-show')
    }
})