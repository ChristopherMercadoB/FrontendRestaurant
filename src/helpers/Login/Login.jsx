import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);
  const log = async (email, password) => {
    setHasError(false);
    try {
      const response = await axios.post(
        "https://localhost:7281/api/Account/authenticate",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.hasError) {
        setHasError(true);
        setError(response.data.error);
      } else {
        localStorage.setItem("use", JSON.stringify(response.data));
        console.log(response.data);
        login();
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = inputValue;
    log(email, password);
  };

  const handleChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });

    console.log(inputValue);
  };

  return (
    <>
      <div className="login-form">
        <fieldset className="field-login">
          <legend>LOGIN</legend>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Correo Electronico"
                onChange={handleChange}
                value={inputValue.email}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-control">
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Contrase;a"
                onChange={handleChange}
                value={inputValue.password}
              />
              <label htmlFor="password">Contrase;a</label>
            </div>
            <div>
              {hasError && (
                <div>
                  <span className="span">{error}</span>
                </div>
              )}

              <button className="btn btn-submit" type="submit">
                Iniciar Sesion
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
};

export default Login;
