import  {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

function UpdateUser() {
  const {id} = useParams()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/getUser/${id}`)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const Update = (e) => {
    e.preventDefault();

    axios.put(`${import.meta.env.VITE_API_URL}/updateUser/${id}`, {
      name,
      email,
      age
    })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="bg-primary">
      <div className="container">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-md-6">

            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Update User</h2>

              <form onSubmit={Update}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Update User
                </button>
              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
