import React, { Component } from "react";


class App extends Component {
  constructor() {
    super()

    this.state = {
      firstname : '',
      lastname  : '',
      name      : ''

    }
  }

  changeHandler = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      name : `${this.state.firstname}  ${this.state.lastname}`
    })
    
    this.state.firstname = ''
    this.state.lastname = ''
    
  }

  render() {
    
    const {name} = this.state
    return (
      <div className="p-5">
         <div className="container">
           <div className="row">
             <div className="col-md-4">
               <div className="card">
                 <div className="card-header">Belajar React JS</div>
                 <div className="card-body">
                   <form action="" onSubmit={this.submitHandler}>
                     <div className="mb-4">
                       <label htmlFor="firstname" className="form-label">firstname</label>
                       <input type="text"name="firstname" id="" className="form-control" onChange={this.changeHandler} value={this.state.firstname}/>
                     </div>
                     
                     <div className="mb-4">
                       <label htmlFor="lastname" className="form-label">lastname</label>
                       <input type="text"  name="lastname" id="" value={this.state.lastname} onChange={this.changeHandler} className="form-control" />
                     </div>
                     <button type="submit" className="btn btn-primary btn-block">show</button>
                   </form>
                 </div>
                 <div className="card-footer">
                    my name is {name ? name : '. . .'}
                  </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    );
  }
}

export default App;
