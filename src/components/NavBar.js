import { nanoid } from "nanoid";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { Login } from "../pages";
import { useState } from "react";
// import useCurrentUser from "../custom-hooks/useCurrentUser";

const menuIcons = [
  {
    _id: nanoid(),
    img: require("../assets/icon-img/bag.png"),
    link: "product",
  },
  {
    _id: nanoid(),
    img: require("../assets/icon-img/user.png"),
    link: "about-us",
  },
];

export const NavBar = ({ current, setCurrent }) => {
  const [modal, setModal] = useState(false);
  // const { user } = useCurrentUser();

  return (
    // <header className="flex align-items space-between">

    <nav className="flex align-items space-between">
      <Link
        to="/"
        className="Logo flex align-items"
        onClick={() => {
          setCurrent("");
        }}
      >
        <img src={require("../assets/icon-img/logo.png")} alt="" />
        <img src={require("../assets/page/landing/Lalasia.png")} alt="" />
      </Link>
      <div className="flex align-items space-between ">
        {menuItems.map((e, index) =>
          current === e._id ? (
            <Link className="item item-active" to={e.link} key={index}>
              {e.name}
            </Link>
          ) : (
            <Link
              className="item"
              to={e.link}
              onClick={() => {
                setCurrent(e._id);
              }}
              key={index}
            >
              {e.name}
            </Link>
          )
        )}
      </div>
      <div className="flex align-items space-between">
        {menuIcons.map((e, index) => (
          <>
            {index == 1 ? (
              <Link
                className="iconMenu"
                onClick={() => setModal(!modal)}
                key={index}
              >
                <img src={e.img} alt="img" />
              </Link>
            ) : (
              <div>
                {/* <p>
                  <a
                    class="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Link with href
                  </a>
                </p> */}

                <a
                  className="iconMenu"
                  // to={e.link}
                  key={index}
                  class="btn btn-light"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <img src={e.img} alt="img" /> <span></span>
                </a>
                <div
                  class="collapse position-absolute"
                  id="collapseExample"
                  style={{ width: "300px" }}
                >
                  <div class="card card-body">
                    <div className="table-responsive">
                      <table className="table sm">
                        <thead>
                          <th> Нэр</th>
                          <th>Тоо </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Гутал</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <Login setModal={setModal} modal={modal} />
    </nav>
  );
};
