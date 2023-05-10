//Future todo - create Wrapper component for DRY rule

import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
        <Nav />
        <h1>Welcome</h1>
        </div>
    )
}

export default Home;