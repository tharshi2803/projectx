import React from 'react';
import Ads from '../Ads/Ads';
import Footer from '../Footer/Footer';
import Mainareas from '../Mainareas/Mainareas';
import Newsletter from '../Newsletter/Newsletter';
//import Partners from '../Partners/Partners';
import Slider from '../Slider';
import Start from '../Start/Start';
import Testimonials from '../Testimonials/Testimonials';
 
function Home() {
  return (
    <>
    <Start />
    {/*<Slider />*/}
    <Mainareas />
    {/*<Partners />*/}
    <Testimonials />
    {/*<Ads />*/}
    <Newsletter />
    {/* <Footer /> */}
    </>
  );
}
  
export default Home;