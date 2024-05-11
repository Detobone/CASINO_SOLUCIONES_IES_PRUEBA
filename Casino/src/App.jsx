import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, NavBar } from './components';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  return (
    <>
      <div className={`app-layout ${isLoggedIn ? 'app-layout--logged' : ''}`}>
        <div className="row-1">
          <Header isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn} />
        </div>

        {isLoggedIn && (
          <div className="column-1">
            <NavBar />
          </div>
        )}
        <main
          className={
            !isLoggedIn ||
            (!isLoggedIn && String(location.pathname) === '/inicio')
              ? 'column-2__full-rows'
              : 'column-2'
          }>
          <Outlet />
        </main>
      </div>

      {/* <footer> terminos y condiciones </footer> */}
    </>
  );
}
