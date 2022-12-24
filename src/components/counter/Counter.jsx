import React from 'react'
import './counter.css'
function Counter() {
    
  return (
    <div class="container noselect">
    <div class="row">
        <div class="col-md-2 col-sm-6">
            <div class="counter">
                <span class="counter-value">200+</span>
                <h3>Saving Campaigns</h3>
            </div>
        </div>
        <div class="col-md-2 col-sm-6">
            <div class="counter green">
                <span class="counter-value">1000+</span>
                <h3>Child Saved</h3>
            </div>
        </div>
        <div class="col-md-2 col-sm-6">
            <div class="counter blue">
                <span class="counter-value">1000+</span>
                <h3>Given Education</h3>
            </div>
        </div>
    </div>
</div>

  )
}

export default Counter