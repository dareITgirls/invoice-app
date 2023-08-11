export const ErrorExample = ({ error }) => {
  console.log('ajm rendering')
  return (
    <div>
      <h2 className='text-white'>An error occured</h2>
      {error && <p>Error Details: {error.message}</p>}
    </div>
  )
}
  

