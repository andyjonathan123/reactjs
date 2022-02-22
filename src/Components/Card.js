import React from 'react';

function Card(props) {
    return (
       
        <div className="col-md-4">
          <div className="card">
          <img src={props.imageurl} alt="Cat" className="card-img-top" />
          <div className="card-body">
            <h4>{props.title}</h4>
            <small className="text-muted">{props.publish}</small>
          </div>
        </div>
        </div>
      
            
       

        
    );
}

export default Card;