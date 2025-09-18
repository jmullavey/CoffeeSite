import { ParallaxBanner } from 'react-scroll-parallax';
import mobileImage from '../assets/images/mobile.png';

const Hero = () => {
  return (
    <div className="relative h-[50vh] min-h-[300px]">
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
