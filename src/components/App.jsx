import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { GlobalStyle } from './GlobalStyle';
import { MovieDetails } from 'pages/MovieDetails';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
