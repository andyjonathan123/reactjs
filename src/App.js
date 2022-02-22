import React, {useState , useEffect} from 'react';
import axios from "axios";

function App() {

  const [identifier, SetIdentifier] = useState(1)
  const [Users, SetUsers] = useState([])
  const [loading, SetLoading] = useState(false)
  

  const getUsers = async() =>{
    SetLoading(true)
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
      SetUsers(response.data)
      SetLoading(false)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [identifier])
  
  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <input type="text" name="" id="" onChange= {(e) => SetIdentifier(e.target.value)} className="form-control" />
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Phone</th>
                </tr>
              </thead>

              <tbody>
                
                {   
                    loading ? <div> Loading . . .</div> :
                      <tr >
                        <td>{Users.name}</td>
                        <td>{Users.username}</td>
                        <td>{Users.email}</td>
                        <td>{Users.website}</td>
                        <td>{Users.phone}</td>
                      </tr>
                    
                  }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;