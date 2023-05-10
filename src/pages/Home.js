//Future todo - create Wrapper component for DRY rule

import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
        <Nav />
        </div>
    )
}

export default Home;