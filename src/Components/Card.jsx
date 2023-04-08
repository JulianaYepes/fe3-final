import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

export const getFavStorage = () => {
	const localData = localStorage.getItem('favs');
	return localData ? JSON.parse(localData) : [];
};

const removeFavStorage = (id) => {
	const StorageFav = getFavStorage();
	const index = StorageFav.findIndex((fav) => fav.id === id);
	if (index !== -1) {
		StorageFav.splice(index, 1);
		localStorage.setItem('favs', JSON.stringify(StorageFav));
		alert('The dentist has been eliminated from your Favorites Selection');
	} else {
		alert('It could not be deleted, please try again');
	}
};

const setFavStorage = (dentist) => {
	const StorageFav = getFavStorage();
	const ListaFav = StorageFav.filter((fav) => {
		return fav.id === dentist.id;
	});
	if (ListaFav.length === 0) {
		StorageFav.push(dentist);
		localStorage.setItem('favs', JSON.stringify(StorageFav));
		alert('The dentist has been added to your Favorites Selection');
	} else {
		alert('This dentist already exists on your Favorite Selection');
	}
};

const Card = ({ name, username, id }) => {
	const { theme } = useContext(ContextGlobal);
	const isDarkMode = theme === 'dark' || false;

	const isFavorited = (id) => {
		const LocalData = getFavStorage();
		const ListaFavoritos = LocalData.filter((fav) => {
			return fav.id === id;
		});
		return ListaFavoritos.length === 1;
	};

	const addFav = () => {
		setFavStorage({ name, username, id });
	};

	const removeFav = () => {
		removeFavStorage(id);
	};

	const favorite = isFavorited(id);
	
	return (
		<div className="card">
			<img src="/images/doctor.jpg" alt="doctor" width="145px"/>
			<Link to={`detail/${id}`}>
				<h5>{name}</h5>
			</Link>
			<p>{username}</p>
			<button onClick={favorite ? removeFav : addFav} className={`${isDarkMode ? 'dark' : 'light'}`}>
				{favorite ? 'Delete from favorites' : 'Add to favorites'}
			</button>
		</div>
	);
};

export default Card;
