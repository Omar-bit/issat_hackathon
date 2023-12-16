import palestine from './assets/palestine.png';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Content from './components/Content';
import React from 'react';

function App() {
  const [isUpload, setIsUpload] = React.useState(true);

  return (
    <>
      <Header />
      <Main />
      <Content isUpload={isUpload} setIsUpload={setIsUpload} />
      <Footer />
    </>
  );
}

export default App;
