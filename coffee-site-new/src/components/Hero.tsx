import { Link } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Coffee, Calendar } from 'lucide-react';
import mobileImage from '../assets/images/mobile.png';

const Hero = () => {
  return (
    <div className="relative h-[55vh] min-h-[350px]">
      <ParallaxBanner
        layers={[
          {
            children: (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${mobileImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: 'translateZ(0)'
                }}
              />
            ),
            speed: -15,
            expanded: true,
            shouldAlwaysCompleteAnimation: true,
          },
          {
            children: (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            ),
            speed: 0,
          },
          {
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="relative z-10 max-w-3xl pt-20 pb-32">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                      Fresh Coffee, <br />
                      Roasted to Perfection
                    </h1>
                    <p className="text-xl text-amber-100 mb-8">
                      Discover our selection of premium coffee beans and handcrafted beverages.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <Link 
                        to="/menu" 
                        className="group inline-flex w-auto items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300"
                        style={{ textDecoration: 'none' }}
                      >
                        <span className="flex items-center">
                          <Coffee 
                            className="h-5 w-5 mr-2 transition-all duration-300 group-hover:animate-bounce" 
                            aria-hidden="true"
                          />
                            <span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">View Menu</span>
                        </span>
                      </Link>
                      <Link 
                        to="/events" 
                        className="group inline-flex w-auto items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300"
                        style={{ textDecoration: 'none' }}
                      >
                        <span className="flex items-center">
                          <Calendar 
                            className="h-5 w-5 mr-2 transition-all duration-300 group-hover:animate-bounce" 
                            aria-hidden="true"
                          />
                            <span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">Events</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ),
            speed: 10,
          },
        ]}
        className="h-full"
      />
    </div>
  );
};

export default Hero;
