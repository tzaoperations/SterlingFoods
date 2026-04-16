import heroBg from '../../assets/images/home/HeroBG.png';
import heroYacht from '../../assets/images/home/HeroYacht.png';

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#030b14]">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Ocean Background" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#030b14]/10 bg-gradient-to-b from-transparent via-transparent to-[#030b14]/80"></div>
      </div>

      {/* --- DESKTOP LAYOUT (Perfect Scaling Canvas) --- */}
      <div 
        className="hidden md:block relative z-10 w-full aspect-video max-h-screen max-w-[177.78vh] mx-auto pointer-events-none"
        style={{ containerType: 'inline-size' }}
      >
        
        {/* ═ LAYER 1: BACKGROUND TEXT (z-10) ═ */}
        
        {/* TRUSTED (Back Layer) */}
        <h1 className="absolute font-seasons text-[#E6F1F8] drop-shadow-lg leading-none m-0 p-0 z-10 whitespace-nowrap"
            style={{ top: '22.68%', left: '42.13%', fontSize: '7.29cqw' }}>
          TRUSTED
        </h1>

        {/* SINCE */}
        <h2 className="absolute font-seasons text-[#E6F1F8] drop-shadow-lg leading-none m-0 p-0 z-10 whitespace-nowrap"
            style={{ top: '53.33%', left: '22.29%', fontSize: '7.29cqw' }}>
          SINCE
        </h2>

        {/* 1970 */}
        <h1 className="absolute font-seasons text-[#E6F1F8] drop-shadow-xl leading-none m-0 p-0 z-10 whitespace-nowrap"
            style={{ top: '65.37%', left: '40.93%', fontSize: '7.29cqw' }}>
          1970
        </h1>


        {/* ═ LAYER 2: THE YACHT (z-20) ═ */}
        {/* Figma Math: width 912px / 1920px = 47.5%. Center Y: 497px / 1080px = 46.07% */}
        <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-[47.5%] pointer-events-none flex justify-center items-center z-20"
             style={{ top: '46.07%' }}>
          <img 
            src={heroYacht} 
            alt="Sterling Foods Yacht" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />
        </div>


        {/* ═ LAYER 3: FOREGROUND MASKED TEXT (z-30) ═ */}
        {/* This container perfectly aligns with the right sail ropes and clips the text so only "TED" overlaps the yacht */}
        <div className="absolute overflow-hidden z-30 pointer-events-none"
             style={{ left: '50.83%', top: '22.68%', width: '24.32%', height: '14.72%' }}>
          <h1 className="absolute font-seasons text-[#E6F1F8] drop-shadow-lg leading-none m-0 p-0 whitespace-nowrap"
              // Shifting the inner text left by exactly 167px (-8.7cqw) to align perfectly over the back layer
              style={{ top: '0', left: '-8.7cqw', fontSize: '7.29cqw' }}>
            TRUSTED
          </h1>
        </div>

      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden relative z-10 flex w-full h-full flex-col items-center justify-center px-6 pointer-events-none -mt-10">
        <h1 className="w-full text-right font-seasons text-5xl text-[#E6F1F8] drop-shadow-lg pr-4 mb-4">TRUSTED</h1>
        <h2 className="w-full text-left font-seasons text-6xl text-[#E6F1F8] drop-shadow-lg pl-4 -mt-6">SINCE</h2>
        <h1 className="w-full text-center font-seasons text-6xl text-[#E6F1F8] drop-shadow-xl mt-6">1970</h1>
        
        {/* Scaled down slightly for better mobile fit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] pointer-events-none z-20">
          <img src={heroYacht} alt="Sterling Foods Yacht" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>
      </div>

      {/* Bottom Subtitle */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full text-center px-6 z-30 pointer-events-none">
        <p className="font-poppins text-[#E6F1F8]/90 text-xs md:text-sm lg:text-base font-light tracking-wide max-w-md mx-auto">
          A frozen seafood processor built on reliability across sourcing and global markets
        </p>
      </div>

    </section>
  );
};

export default HeroSection;