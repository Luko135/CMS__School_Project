import { GlobalStyle } from 'assets/themes/GlobalStyles';
import { theme } from 'assets/themes/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'components/organisms/Home/Home';
import Recepies from 'components/organisms/Recepies/Recepies';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="/:id" element={<Recepies />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
