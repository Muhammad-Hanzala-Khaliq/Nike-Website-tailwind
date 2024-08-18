import Nav from './components/Nav';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality
} from './sections';

import { useStateContext } from "./contexts/ContextProvider";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DetailPage from './components/DetailPage';

const App = () => {
  const { currentMode } = useStateContext();

  return (
    <Router>
      <div className={currentMode === 'dark' ? 'dark' : ''}>
      
          
          <Routes>
            {/* Add the default route here */}
            <Route path="/" element={
              <>
                <main className="relative">
                <Nav />
                <section className={`xl:padding-l wide:padding-r padding-b ${currentMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
                  <Hero />
                </section>

                <section className={`padding ${currentMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
                  <PopularProducts />
                </section>

                <section className={`padding ${currentMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
                  <SuperQuality />
                </section>

                <section className={`padding-x py-10 ${currentMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
                  <Services />
                </section>

                <section className={`padding ${currentMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
                  <SpecialOffer />
                </section>

                <section className={`padding ${currentMode === 'dark' ? 'bg-black' : 'bg-pale-blue'}`}>
                  <CustomerReviews />
                </section>

                <section className={`padding-x sm:py-32 py-16 w-full ${currentMode === 'dark' ? 'bg-black' : 'bg-white'}`}>
                  <Subscribe />
                </section>

                <section className="bg-black padding-x padding-t pb-8">
                  <Footer />
                </section>
                </main>
              </>
            } />

            <Route path="/DetailPage" element={<DetailPage />} />
          </Routes>
       
      </div>
    </Router>
  );
};

export default App;
