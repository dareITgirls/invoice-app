export const ErrorExampleComponent = ({ error }) => (
  <div>
    <h2>Wystąpił błąd podczas pobierania danych z Firebase</h2>
    <p>{error.message}</p>
  </div>
);
