import React, {  useState } from "react";

function App() {
  const [firstname , setFirstname] = useState('')
  const [lastname , setLastname] = useState('')
  const [name , setName] = useState('')

  const submitHandler= (e) =>{
    e.preventDefault()
    setName(`${firstname} ${lastname}`)

    setFirstname('')
    setLastname('')

  }
  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn react Function</div>
              <div className="card-body">
                <form action="" onSubmit={submitHandler}>
                  <div className="mb-5">
                    <label htmlFor="firstname" className="form-label">lastname</label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} name="firstname" id="firstname" className="form-control" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="lastname" className="form-label">lastname</label>
                    <input type="text" name="lastname" onChange={(e) => setLastname(e.target.value)}
                    value={lastname} id="lastname" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-block btn-primary">Show</button>
                </form>
              </div>
              <div className="card-footer">My name Is {name ? name : '. . .' }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
