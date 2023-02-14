import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = ({ modal, setModal }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onLogin = () => {
    axios
      .post("http://localhost:9000/api/user/login", user)
      .then(({ data: { status, result } }) => {
        if (status) {
          localStorage.setItem("user", result.firstname);
          navigate("/product");
          setModal(false);
        } else {
          alert("Нэвтрэхэд алдаа гарлаа");
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="">
      <div
        class="modal"
        style={{ display: modal ? "block" : "none" }}
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Login</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(!modal)}
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="m-1">
                  <label className="form-label" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    name="email"
                    type={"text"}
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="m-1">
                  <label className="form-label" htmlFor="sas">
                    Password
                  </label>
                  <input
                    name="password"
                    className="form-control"
                    type={"text"}
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setModal(!modal)}
              >
                Close
              </button>

              <button class="btn btn-primary" onClick={onLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
