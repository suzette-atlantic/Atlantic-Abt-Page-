import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, X, Search } from 'lucide-react';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const testimonials = [
    "Lisamarie was great to work with. She kept our company on track and informed with the best safety videos that pertained to our business.",
    "Outstanding training content! Atlantic Training has transformed how we approach workplace safety and compliance.",
    "The WAVE platform is intuitive and powerful. Our team engagement has increased significantly since partnering with Atlantic.",
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {bannerVisible && (
        <div className="bg-gradient-to-r from-[#3AC4DE] to-[#374A9E] text-white text-center py-3 px-4 relative">
          <p className="text-sm md:text-base font-medium">
            Make Daily Safety Talks Quick & Effective. Download Your FREE 5-Minute Huddle Kit Now
          </p>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <nav className="sticky top-0 z-50 bg-black text-white shadow-lg overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-hidden">
          <div className="flex items-center justify-between overflow-x-hidden">
            <div className="flex items-center gap-3">
              <img src="/AT_Logo.png" alt="Atlantic Training" className="h-8 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <a href="#hero" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">COURSES</a>
              <a href="#mission" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">SOFTWARE</a>
              <a href="#" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">LICENSE</a>
              <a href="#history" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">ABOUT</a>
              <a href="#values" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">RESOURCES</a>
              <a href="#regulations" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">PRICING</a>
              <a href="#" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">LOGIN</a>
              <a href="#" className="text-sm font-medium text-[#3AC4DE] hover:text-white transition-colors">CONTACT</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-[#3AC4DE] text-[#374A9E] rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 text-sm font-bold">
                <Search size={16} />
                SEARCH COURSES
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] rounded-lg font-bold text-sm hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-[#3AC4DE]/50">
                GET YOUR PRICING
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative overflow-x-hidden" style={{ backgroundImage: 'url(/background-1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3AC4DE]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10 pointer-events-none overflow-hidden" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#374A9E]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 -z-10 pointer-events-none overflow-hidden" />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10 overflow-x-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 overflow-x-hidden">
            <div className="space-y-6 overflow-x-hidden">
              <div className="overflow-visible pb-1" style={{ maxWidth: '100%' }}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.3] bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent" style={{ maxWidth: '100%', overflow: 'visible', textAlign: 'left' }}>
                  MEET ATLANTIC TRAINING
                </h1>
              </div>
              <p className="text-lg text-white font-bold leading-relaxed">
                Over 20 Years of Excellence in Workplace Safety, Compliance, and Employee Training Solutions.
              </p>
              <p className="text-lg text-white font-bold leading-relaxed">
                Trusted by organizations nationwide to build safer, smarter, and more compliant workplaces.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-2 px-8 py-3 bg-white text-[#374A9E] rounded-lg font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <Search size={18} />
                  SEARCH COURSES
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-[#3AC4DE] to-[#374A9E] text-white rounded-lg font-semibold hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
                  GET YOUR PRICING
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                <div className="relative w-full h-full bg-black">
                  {!videoPlaying && (
                    <img 
                      src="/Video-Thumbnail.png" 
                      alt="Video Thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/Why%20Atlantic%20(Shorten)%20.mp4"
                    preload="metadata"
                    playsInline
                    {...(videoPlaying ? { controls: true, autoPlay: true } : { style: { display: 'none' } })}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {!videoPlaying && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity hover:opacity-90">
                      <button
                        onClick={() => {
                          setVideoPlaying(true);
                          videoRef.current?.play();
                        }}
                        className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform shadow-2xl"
                      >
                        <div className="w-0 h-0 border-l-[20px] border-l-[#374A9E] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                      </button>
                      <p className="text-white font-semibold text-lg drop-shadow-lg">Watch Course Preview</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { number: '10,000+', label: 'CLIENTS SERVED', desc: 'Empowering teams through trusted employee training solutions.' },
              { number: '20+ YEARS', label: 'INDUSTRY EXPERIENCE', desc: 'Delivering trusted EHS, HR, and safety training for companies of all sizes.' },
              { number: '5M+', label: 'COURSES SERVED', desc: 'Helping Businesses Protect, Educate, and Grow Their Teams.' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="stat-card p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-[#3AC4DE]/20 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl font-extrabold bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-extrabold bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent mb-4 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-gray-800 leading-relaxed pt-4 border-t border-[#3AC4DE]/20">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-24" style={{ backgroundColor: '#e8e9eb' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent fade-in">
            WHO ARE WE? OUR MISSION, VISION, AND STORY
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] mx-auto mb-16 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12 slide-in-left">
              {[
                { title: 'OUR MISSION', text: 'To bring modern employee development, safety training, and compliance to organizations around the world.' },
                { title: 'OUR VISION', text: "We're ditching the standard checkbox training for something real. Today is about engagement and genuine growth. We're bringing you amazing content designed to empower you in your role. Let's roll up our sleeves, focus on what truly matters, and walk away ready to make a real impact. It's time to set your course." },
                { title: 'OUR STORY', text: "Atlantic Training has been showing up for businesses for more than 20 years, long before \"online training\" was a buzzword and back when our name was simply Compliance and Safety (straightforward, right?). Since those early days in 2005, we've grown into a friendly go-to resource for EHS and HR training, supporting everyone from small teams to Fortune 500 giants who prefer their compliance training delivered with a bit more humanity and a lot less yawning." },
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="slide-in-right flex items-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-t-4 border-transparent bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] p-1 w-full">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/Office-Meeting-Image-Placeholder.jpeg" 
                    alt="Office/Meeting Image" 
                    className="w-full h-[620px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
              OUR HISTORY
            </h2>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
              From Ripples...To Waves... A Name With Meaning. Going Global
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#374A9E] via-[#3AC4DE] to-[#374A9E] transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-16">
              {[
                { year: '2005', text: "Kicked things off as 'Compliance and Safety' when CEO Anthony LaFazia stepped up to fill the gaps in safety training after traveling the country visiting manufacturing facilities." },
                { year: '2010', text: 'Supercharged our lineup, partnering with a dozen vendors to build the largest training library on the market.' },
                { year: '2015', text: "Rebranded to 'Atlantic Training', a nod to our East Coast roots and the serious depth of our training content." },
                { year: '2019', text: 'Rolled out WAVE, our own powerhouse EHS management software and LMS.' },
                { year: '2021', text: 'Hired a Doctor of Education to boost our products and lend us his amazingly smooth voice over skills ;)' },
                { year: '2022', text: 'Decked out WAVE with SDS management, toolbox talks, offline training, and incident tracking to cover all the bases.' },
                { year: '2025', text: 'Celebrating 20 years in the game! Plus, we dropped over 225 new courses in multiple languages.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`timeline-item flex items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} ${idx % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                    <div className="timeline-content-card inline-block max-w-lg p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border-l-4 border-[#374A9E] hover:-translate-y-2 transition-all duration-300">
                      <p className="text-gray-800 leading-relaxed">
                        <span className="font-extrabold bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
                          {item.year}
                        </span>
                        {' - '}
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="timeline-year-badge hidden lg:flex w-24 h-24 rounded-full bg-white font-extrabold text-xl items-center justify-center shadow-2xl hover:scale-110 transition-transform flex-shrink-0 scale-in">
                    <span className="bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-24" style={{ backgroundColor: '#e8e9eb' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
              VALUES
            </h2>
            <p className="text-2xl font-extrabold bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent mb-6">
              No fluff here. We love to have fun, but we take our business serious.
            </p>
            <p className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Running a successful business is incredibly challenging. For those that don't build their business on core values that truly support their customers, well... best of luck to ya. We live and breathe the values listed below.
            </p>
          </div>

          <div className="h-1 bg-gradient-to-r from-transparent via-[#3AC4DE] to-transparent mb-16 max-w-4xl mx-auto" />

          <div className="max-w-6xl mx-auto">
            {/* Top Row: 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
              {[
                { title: 'Customer Driven', desc: "Customers are always our highest priority. Atlantic Training's business model is geared towards solving customer challenges to ensure their teams are safe, have a healthy working environment, and are compliant with current regulations.", icon: '/icons/1.png' },
                { title: 'Agile', desc: "Businesses are evolving. Companies now require employee training that extends far beyond traditional safety and compliance. We are a modern brand that stays current with ALL requirements for a safe and happy workplace.", icon: '/icons/9.png' },
                { title: 'Transparent', desc: 'At the end of the day, trust, integrity, honesty and dependability are all characteristics that everyone needs in a successful business relationship. These traits must be earned and we believe that our transparency plays a major role.', icon: '/icons/23.png' },
              ].map((value, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#374A9E]/10 to-[#3AC4DE]/10 flex items-center justify-center mb-6">
                    <img 
                      src={value.icon} 
                      alt={value.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-[#333] font-medium leading-relaxed max-w-[300px] mx-auto">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 centered items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              {[
                { title: 'Intelligent', desc: 'Simply put, customers rely on us to have accurate information. Our team stays current with all regulations and this requires us to have a team of highly intelligent people that you can depend on.', icon: '/icons/4.png' },
                { title: 'Fun', desc: "While we take our work seriously, it's a priority of ours to be a company that customers enjoy working with. Having fun is part of our culture and we truly believe that our products are better because they are developed by people that truly enjoy their work.", icon: '/icons/13.png' },
              ].map((value, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#374A9E]/10 to-[#3AC4DE]/10 flex items-center justify-center mb-6">
                    <img 
                      src={value.icon} 
                      alt={value.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-[#333] font-medium leading-relaxed max-w-[300px] mx-auto">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="regulations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent fade-in">
            COMPANY REGULATIONS
          </h2>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 slide-in-left">
                <p className="text-lg text-gray-800 leading-relaxed pb-2">
                  At Atlantic Training, we're not just another e-learning platform, we're your partners in building safer, smarter workplaces. With expert-led training, practical wizardry, and a whole lot of heart, we help organizations prevent accidents, manage risk, and ensure compliance without the usual corporate snooze-fest.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  What sets us apart? We're transparent, we're human (yes, quirky humanity included), and we're genuinely here to help. No tech jargon, no hidden fees, just friendly support when you need it.
                </p>
              </div>
              <div className="slide-in-right">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-t-4 border-transparent bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] p-1">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden">
                    <img 
                      src="/Meeting-Image.jpeg" 
                      alt="Office/Meeting Image" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left lg:order-2">
                <div className="space-y-6">
                  <p className="text-lg text-gray-800 leading-relaxed pb-2">
                    Atlantic Training is about making workplaces brighter and safer. We see employee development, safety, and compliance not as burdens, but as opportunities, for teams to thrive, for mistakes to be laughed off (then fixed), and for everyone to go home healthier and happier.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    We're proud to help our customers and their employees tackle real-world challenges with confidence, compassion, and a little quirky insight.
                  </p>
                </div>
              </div>
              <div className="slide-in-right lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-t-4 border-transparent bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] p-1">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden">
                    <img 
                      src="/Team-Workplace-Image.jpeg" 
                      alt="Team/Workplace Image" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3AC4DE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#374A9E]/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
                5-STAR REVIEWS FOR OUR TOP-NOTCH
              </span>
              <span className="block bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] bg-clip-text text-transparent">
                TRAINING STANDARDS, LOVED BY ALL.
              </span>
            </h2>
            <p className="text-xl lg:text-2xl font-bold text-white max-w-3xl mx-auto leading-relaxed">
              We believe we're the top choice for safety and compliance, but don't just take our word for it, check out our Google reviews!
            </p>
          </div>

          <div className="flex justify-center items-center my-12 scale-in gap-3">
            <img src="/icons/38.png" alt="star" className="w-40 h-40 object-contain" />
            <img src="/icons/39.png" alt="star" className="w-40 h-40 object-contain" />
            <img src="/icons/39.png" alt="star" className="w-40 h-40 object-contain" />
            <img src="/icons/41.png" alt="star" className="w-40 h-40 object-contain" />
            <img src="/icons/42.png" alt="star" className="w-40 h-40 object-contain" />
          </div>

          <div className="max-w-4xl mx-auto mb-12 slide-in-left">
            <div className="bg-gray-900/80 border border-gray-700/50 rounded-2xl p-10 flex items-center gap-8 shadow-2xl">
              <button
                onClick={prevTestimonial}
                className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-[#3AC4DE]" />
              </button>

              <p className="flex-1 text-xl italic text-center leading-relaxed text-white/90 font-medium">
                "{testimonials[currentTestimonial]}"
              </p>

              <button
                onClick={nextTestimonial}
                className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-[#3AC4DE]" />
              </button>
            </div>
          </div>

          <div className="text-center">
            <button className="px-12 py-4 bg-gradient-to-r from-[#374A9E] to-[#3AC4DE] rounded-xl font-bold text-lg tracking-wider hover:-translate-y-1 transition-all shadow-2xl hover:shadow-[#3AC4DE]/50">
              SEE OUR REVIEWS
            </button>
          </div>
        </div>
      </section>

      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#3AC4DE] to-[#374A9E] rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group z-50 border-4 border-white/20">
        <MessageCircle className="text-white" size={28} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Chat with us!
        </span>
      </button>

      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Social Media Icons - Left */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded border-2 border-[#3AC4DE] flex items-center justify-center hover:bg-[#3AC4DE]/20 transition-colors">
                <svg className="w-5 h-5 text-[#3AC4DE]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded border-2 border-[#3AC4DE] flex items-center justify-center hover:bg-[#3AC4DE]/20 transition-colors">
                <svg className="w-5 h-5 text-[#3AC4DE]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded border-2 border-[#3AC4DE] flex items-center justify-center hover:bg-[#3AC4DE]/20 transition-colors">
                <svg className="w-5 h-5 text-[#3AC4DE]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded border-2 border-[#3AC4DE] flex items-center justify-center hover:bg-[#3AC4DE]/20 transition-colors">
                <svg className="w-5 h-5 text-[#3AC4DE]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Navigation Links - Center */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <a href="#" className="text-[#3AC4DE] hover:text-white transition-colors">LMS Login</a>
                <a href="#" className="text-[#3AC4DE] hover:text-white transition-colors">Contact Us</a>
                <a href="#hero" className="text-[#3AC4DE] hover:text-white transition-colors">Courses</a>
                <a href="#mission" className="text-[#3AC4DE] hover:text-white transition-colors">Software</a>
                <a href="#regulations" className="text-[#3AC4DE] hover:text-white transition-colors">Pricing</a>
                <a href="#values" className="text-[#3AC4DE] hover:text-white transition-colors">Resources</a>
                <a href="#history" className="text-[#3AC4DE] hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-[#3AC4DE] hover:text-white transition-colors">Blog</a>
                <a href="#" className="text-[#3AC4DE] hover:text-white transition-colors">Legal</a>
              </div>
              <p className="text-[#3AC4DE]/80 text-sm">Copyright © 2025 Atlantic Training LLC</p>
            </div>

            {/* Logo - Right */}
            <div className="flex items-center justify-end">
              <img src="/AT_Logo.png" alt="Atlantic Training" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
