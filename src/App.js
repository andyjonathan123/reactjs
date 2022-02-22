import React, {useState , useEffect} from 'react';
import axios from "axios";

function App() {

  const [Users, SetUsers] = useState([])

  const getUsers = async() =>{
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users')
      SetUsers(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
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
                {/* ini adalah perulangan dengan menggunakan reactjs */}
                {
                  Users.map((user, index) =>{
                    return(
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.phone}</td>
                      </tr>
                    )
                  })
                }
                {/* sampai tahap ini */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;