import React from 'react';
import Card from './Components/Card';

function App() {
  return (
    <div className="py-4">
      <div className='container'>
      <h1>The Posts</h1>
      <hr /> 
      <div className='row'>
        <Card 
            title ="The First Post"
            imageurl = "http://placekitten.com/g/300/200"
            publish = "Published 22 Februari 2022"
        />

        <Card 
            title ="The Second Post"
            imageurl = "http://placekitten.com/300/200"
            publish = "Published 22 Februari 2022"
        />

          <Card 
            title ="The Third Post"
            imageurl = "http://placekitten.com/g/300/200"
            publish = "Published 22 Februari 2022"
        />
      </div>
    </div>
    </div>
  );
}

export default App;