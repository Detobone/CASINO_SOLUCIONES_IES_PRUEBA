import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div>
        <img className="profilePicture" src="" alt="" />
      </div>
      <SearchBar />
      <button className="btn btn__search" onClick={() => navigate('/login')}>
        Iniciar Sesión/Cerrar Sesión
      </button>
    </header>
  );
};
