import React from 'react';

function Card(){
      return(
            <div class="d-flex justify-content-center">

            <div id="card-one" style="width: 0 0rem;">
            
                  <div class="card" style="width: 21rem;">
      
                        <img src="./image/arcade1.jpg" class="card-img-top" alt="..."/> 
                        <div class="card-body">
                          <h2 class="card-title">Card Title</h2>
                          <p class="card-text">Lorem ipsum dolor sit amet consectetur. </p>
                        </div>
      
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Donkey Kong.</li>
                          <li class="list-group-item">Christal Castle.</li>
                          <li class="list-group-item">Galaga.</li>
                          <li class="list-group-item">Donkey Kong.</li>
      
                        </ul>
                  <div class="card-body">
                          <a href="#" class="card-link"></a>
                          <a href="#" class="card-link"></a>
                          <a href="#" class="card-link"></a>
                        </div>
                   </div>
      
            </div>
      
      </div>
                
      );
}

export default Card