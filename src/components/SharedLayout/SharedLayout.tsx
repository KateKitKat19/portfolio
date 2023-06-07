import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { Loader } from '../Loader/Loader';
import { Footer } from '../Footer/Footer';

export const SharedLayout = () => {
  return (
    <Container>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};
