import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { Nav } from '../components/Nav';

export const Root = () => {
	const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);

	return (
		<>
			<Nav />

			<main className='flex flex-col justify-center items-center mt-10'>
				{isLoggedIn ? <Navigate to='/invoices' /> : <h1>To see invoice list please sign in!</h1>}

				<Outlet />
			</main>
		</>
	);
};
