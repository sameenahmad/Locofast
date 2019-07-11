import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import account from "./Icons/account.svg";
import collections from "./Icons/collections.svg";
import messages from "./Icons/messages.svg";
import production from "./Icons/production.svg";
import sampling from "./Icons/sampling.svg";
import settings from "./Icons/settings.png";

import Settings from "./Settings";
import Production from "./Production";
import Sampling from "./Sampling";
import Account from "./Account";
import Inbox from "./Inbox";
import Collections from "./Collections";
import Home from "./Home";

const routes = [
  {
    exact: true,
    path: "/",
    sidebar: () => <div />,
    main: () => <Home />
  },

  {
    path: "/collections",
    exact: true,
    sidebar: () => <div />,
    main: () => <Collections />
  },
  {
    path: "/sampling",
    sidebar: () => <div />,
    main: () => <Sampling />
  },
  {
    path: "/production",
    sidebar: () => <div />,
    main: () => <Production />
  },
  {
    path: "/inbox",
    sidebar: () => <div />,
    main: () => <Inbox />
  },
  {
    path: "/account",
    sidebar: () => <div />,
    main: () => <Account />
  },
  {
    path: "/settings",
    sidebar: () => <div />,
    main: () => <Settings />
  }
];

function Sidebar() {
  return (
    <Router>
      <div className="sidebar-Container">
        <ul className="sidebar-List">
          <li style={{ fontSize: "1rem", fontWeight: "bold", marginTop: "0" }}>
            Loco Fast
          </li>
          <Link style={{ textDecoration: "none", color: "#6e7880" }} to="/">
            {" "}
            <li>
              <img src={collections} />
              <p> COLLECTIONS</p>
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/sampling"
          >
            {" "}
            <li>
              <img src={sampling} />
              <p> SAMPLING</p>
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/production"
          >
            <li>
              <img src={production} />
              <p> PRODUCTION</p>
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            to="/inbox"
          >
            <li>
              <img src={messages}/>
              <p> INBOX</p>
            </li>
          </Link>
        </ul>
        <ul className="sidebar-List">
          <Link
            style={{ textDecoration: "none" }}
            to="/account"
          >
            <li>
              <img src={account} />
              <p> ACCOUNT</p>
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none"}}
            to="/settings"
          >
            <li>
              {" "}
              <img src={settings} style={{ width:'20px', height:'20px'}} />
              <p> SETTINGS</p>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none"}}
            to="/logout"
          >
            <li style={{ fontSize: "0.8rem" }}>Logout</li>
          </Link>
        </ul>
      </div>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.sidebar}
        />
      ))}

      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </Router>
  );
}

export default Sidebar;
