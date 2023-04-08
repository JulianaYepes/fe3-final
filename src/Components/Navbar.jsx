import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal);
  const isDarkMode = theme === 'dark' || false;
  const changeTheme = () => {
    if (isDarkMode) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to="/">
        Home
      </Link>
      <Link to="/favorites">
        Favorites
      </Link>
      <Link to="/contact">
        Contact us
      </Link>
      <button className={`botonLightDarkTema${isDarkMode ? 'light' : 'dark'}`} onClick={changeTheme}>
      {isDarkMode ? 'LightMode' : 'DarkMode'}{' '}
				</button>
    </nav>
  )
}

export default Navbar