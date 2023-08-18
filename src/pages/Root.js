import {Outlet} from 'react-router-dom'

import { Nav } from "../components/Nav";
import { useAuth } from '../hooks/useAuth';
import { GoBack } from '../UI/GoBack';
export const Root = () => {

const {user} = useAuth();

    return (
        <>
            <Nav />

            <main className="flex flex-col justify-center items-center mt-10">
                <h1>{user ? 'Hello ' + user.displayName + '!' : 'To see invoice list please sign in!'}</h1>

                 {user ? <GoBack title="Go to invoices"/> : ""} 

                  <Outlet />
            </main>
        </>
    )
}