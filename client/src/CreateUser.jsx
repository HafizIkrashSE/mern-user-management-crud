import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
  e.preventDefault();

  axios.post(`${import.meta.env.VITE_API_URL}/createUser`, {
    name,
    email,
    age
  })
  .then(result => {
    console.log(result);
    navigate("/");
  })
  .catch(err => console.log(err));
};

  return (
    <div className="bg-primary min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="card shadow">
              <div className="card-body">

                <h2 className="text-center mb-4">Add User</h2>

                <form onSubmit={Submit}>
                  {/* Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Age */}
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Enter your age"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Add User
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
