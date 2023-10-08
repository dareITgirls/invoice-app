import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { Nav } from '../components/Nav';
import { NoAuth } from '../components/NoAuth';
import { MainContentWrapper } from '../UI/MainContentWrapper';
import { logErrorToService } from '../utils/consts';
import { ErrorPage } from './Error';

export const Root = () => {
  const user = useSelector((state) => state.authSlice.user);

  return (
    <>
      <Nav />
      <MainContentWrapper styles="flex justify-center">
        {user ? (
          <Navigate to="/invoices" />
        ) : (
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onError={logErrorToService}
          >
            <NoAuth />
          </ErrorBoundary>
        )}

        <Outlet />
      </MainContentWrapper>
    </>
  );
};
