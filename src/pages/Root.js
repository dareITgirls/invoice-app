import {Outlet} from 'react-router-dom'

import { Nav } from "../components/Nav";
import { useAuth } from '../providers/AuthProvider';
import { GoBack } from '../UI/GoBack';
export const Root = () => {

const {user} = useAuth();

    return (
        <>
            <Nav />
            <div className="flex flex-col justify-center items-center">
                <p>{user ? 'Hello ' + user.displayName + '!' : 'To see invoice list please sign in!'}</p>
                  <GoBack />
                  <Outlet />
            </div>
          
            
        </>
    )
}