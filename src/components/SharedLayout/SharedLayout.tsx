import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
