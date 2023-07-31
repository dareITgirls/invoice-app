const ErrorExampleComponentTest = ({ error }) => (
  <div>
    <h2 className='text-white'>An error occured</h2>
    {error && <p>Error Details: {error.message}</p>}
  </div>
);

export default ErrorExampleComponentTest;
