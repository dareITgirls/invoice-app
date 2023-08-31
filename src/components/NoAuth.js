import { useSelector } from 'react-redux';

export const NoAuth = () => {
    const error = useSelector(state => state.authSlice.error);
    if (error) {
        throw new Error(error.message)
    }

  return (
    <h1 className='text-lg dark:text-light-100 md:text-xl font-medium'>To see invoice list please sign in!</h1>
  )
}