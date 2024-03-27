import React, { Fragment } from 'react'
import { PiQuotes } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Home = () => {
  return (
    <Fragment>

      {/* First sec */}
      <section className='banner-sec py-[50px] md:py-[180px] md:px-[80px] sm:px-[30px] px-[10px]'>
          <div className='md:w-[50%] sub-banner'>
            <h1 className='text-4xl font-bold text-[#c7c1c1]'>MARKETING INSIGHTS <br />WORTHY OF YOUR <span className='text-[#59b4dc]'>TIME AND ATTENTION</span></h1>
            <div className='banner-head-line'></div>
            <p className='text-[#c7c1c1]'>we have the dexterity to help our client’s business create cost-effective,lucrative <br /> advertising campaigns</p>
            <button>Know More</button>
          </div>
      </section>

      {/* Second sec */}
      <section className='bg-black second-sec text-[#c7c1c1] md:px-[80px] sm:px-[30px] px-[10px] md:py-[40px] py-[20px]'>
        <div className='first-box flex flex-col justify-center items-start gap-4 py-[20px]'>
          <h4 className='text-[#59b4dc]'>OUR SERVICES</h4>
          <h1>
            What We <span className='text-[#59b4dc]'>Do</span>
            <div className='banner-head-lines'></div>
          </h1>
          <p>A strong, consistent brand, built up over time, is the best guarantee we can assure you. Self, definition, transparency, authenticity and accountability are our keys to success. Convey your brand values and make your company more relatable, and translate into more leads, conversions, and sales.</p>
          <button>Know More</button>
        </div>
        <div className='box'>
          <img src="Digital-Marketing.webp" alt="" />
          <h1>Digital <br /> Marketing</h1>
          <p>Get ROI through digital marketing services, drive successful online marketing campaigns with our digital marketing services.</p>
        </div>
        <div className='box'>
          <img src="Web-Development.png" alt="" />
          <h1>Web <br /> Development</h1>
          <p>Get Customized Website Design specific to your business. We design cross-browser compatibility websites with the latest features.</p>
        </div>
        <div className='box'>
          <img src="Creative-Design.png" alt="" />
          <h1>Creative <br /> Design</h1>
          <p>Whether you are looking for website design services or the management of digital advertising campaigns, we are here to help.</p>
        </div>
        <div className='box'>
          <img src="Brand-Identity.png" alt="" />
          <h1>Brand Identity</h1>
          <p>A strong, consistent brand, built up over time, is the best guarantee we can assure you. Self, definition, transparency, authenticity and accountability are our keys to success. </p>
        </div>
      </section>

      {/* Third sec */}
      <section className='about-sec md:px-[80px] sm:px-[30px] px-[10px] md:py-[120px] py-[30px] flex md:justify-end'>
        <div className='md:w-[50%]'></div>
        <div className='md:w-[50%] flex flex-col justify-center gap-5'>
          <h4 className='text-[#59b4dc]'>ABOUT OUR PLANET</h4>
          <h1 className='text-4xl font-bold text-[#c7c1c1]'>
            We are Creatively <br /><span className='text-[#59b4dc]'>Different</span>
            <div className='mt-5 flex justify-center mr-[200px]'>
              <div className='banner-head-line'></div>
            </div>
          </h1>
          <p className='text-[#c7c1c1]'>Accolades, the creative hub in Kerala, keenly takes care of too many of internet marketing solutions for your premium brand. Be it the unique designs, Content, Google Ads, SEO Service, Social Media Marketing or other Web services, Accolades the top digital marketing company in Kerala and Mumbai is in the forefront. We firmly believe in maximizing your scales, captivate appropriate traffic to your official website, and turn visitors into your potential customers. Regardless of the business’s size, Internet marketing gives access to the mass market at result-oriented pricing, and it inculcates a personal style of successful marketing.</p>
        </div>
      </section>

      {/* Fourth sec */}
      <section className='forth-sec md:px-[80px] sm:px-[30px] px-[10px] md:py-[80px] py-[30px] flex justify-around items-center'>

        <div className='sub-box'>
          <img src="150.png" alt="" />
          <h1 className='text-[#59b4dc] flex gap-2 items-center text-3xl font-bold'>150+</h1>
          <p>Projects Done</p>
        </div>

        <div className='sub-box'>
          <img src="500.png" alt="" />
          <h1 className='text-[#59b4dc] flex gap-2 items-center text-3xl font-bold'>500+</h1>
          <p>Happy Customers</p>
        </div>

        <div className='sub-box'>
          <img src="50.png" alt="" />
          <h1 className='text-[#59b4dc] flex gap-2 items-center text-3xl font-bold'>50+</h1>
          <p>Team Members</p>
        </div>

      </section>

      {/* Fifth sec */}
      <section className='fifth-sec md:px-[80px] sm:px-[30px] px-[10px] md:py-[80px] py-[30px] bg-black text-[#c7c1c1]'>

        <div className='first-box flex flex-col justify-center items-start gap-4 py-[20px]'>
          <h4 className='text-[#59b4dc]'>LATEST PROJECTS</h4>
          <h1>
            Our <span className='text-[#59b4dc]'>Latest</span>
            <div className='banner-head-lines'></div>
          </h1>
          <p>We have given services for about 250 plus happy clients including Benoy <br />Marbles, National Builders, Manappuram, Karikkineth, Ocean, etc. Timebound <br /> work completion, teamwork and unity makes us stand out</p>
        </div>

        <div>
          <img src="01.webp" alt="" />
        </div>

        <div>
          <img src="02.webp" alt="" />
        </div>

        <div>
          <img src="03.webp" alt="" />
        </div>

        <div>
          <img src="04.webp" alt="" />
        </div>
      </section>

      {/* Sixth sec */}
      <section className='sixth-sec md:px-[80px] sm:px-[30px] px-[10px] md:py-[60px] py-[30px] bg-[#011816]'>
          <h4 className='text-[#59b4dc] py-[20px] font-semibold'>OUR CLIENTS</h4>
          <div className="sixth-sec-sub p-[10px]">
            <div className='box'>
              <img src="001.webp" alt="" />
            </div>
            <div className='box'>
              <img src="002.webp" alt="" />
            </div>
            <div className='box'>
              <img src="003.webp" alt="" />
            </div>
            <div className='box'>
              <img src="004.webp" alt="" />
            </div>
            <div className='box'>
              <img src="005.webp" alt="" />
            </div>
            <div className='box'>
              <img src="006.webp" alt="" />
            </div>
          </div>
      </section>

      {/* Seventh sec */}
      <section className='seventh-sec md:px-[80px] sm:px-[30px] px-[10px] md:py-[60px] py-[30px] bg-black text-[#c7c1c1]'>
          <div className='p-[20px]'>
            <img src="Why-Choose-Us.webp" alt="" />
          </div>
          <div className='first-box flex flex-col justify-center items-start gap-5 py-[20px]'>
            <h4 className='text-[#59b4dc] font-semibold'>LATEST PROJECTS</h4>
            <h1>
              Key to the <span className='text-[#59b4dc]'>World</span>
              <div className='banner-head-lines mt-4'></div>
            </h1>
            <p>Accolades always strive to seek perfection in every manner. Be the technical side or <br />creative side, uniqueness is our key trait.</p>
          </div>
      </section>

      {/* Eighth sec */}
      <section className='eighth-sec md:px-[80px] sm:px-[30px] px-[10px] md:py-[60px] py-[30px] bg-[#0A0A0A] text-[#c7c1c1]'>
          <div className='first-box flex flex-col justify-center items-start gap-5 py-[20px]'>
            <h4 className='text-[#59b4dc] font-semibold'>TESTIMONIALS</h4>
            <h1>
              What Client <span className='text-[#59b4dc]'>Says.</span>
              <div className='banner-head-lines mt-2'></div>
            </h1>
            <p>Our clients are the planets and we, the solarsystem. The most remarkable applause <br /> that we ever had is from our clients itself</p>
            <button>Know More</button>
          </div>
          <div className='client-message-main'>
            <div className='bg-[#151414] p-[20px] min-h-[580px]'>
              <div className='client-message flex flex-col items-center gap-4 text-[#c7c1c1] bg-black relative'>
                <h1><PiQuotes color='#59b4dc' size={50}/></h1>
                <p>We are one of the client of Accolades Media. Quilon Institute of Management Studies, QIMS, Kollam is one of the top Aviation Degree colleges in Kerala. We are extremely satisfied in the professional way of works in website Management, Online Marketing and designing. M.D of the company Mr Jagesh always shows a professional approach in all the dealings and projects.. We suggest this excellent company for website Management, online marketing and SEO on the base of our experience for the last 2 years.. All the very Best for the Team Accolades...</p>
                <div className='text-yellow-500 flex justify-center items-center gap-1'>
                  <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                </div>
                <div className="person-photo">
                  <img height='80' width='80' src="person.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Nineth sec */}
      <section className='nineth-sec md:px-[80px] sm:px-[30px] px-[10px] md:py-[60px] py-[30px] bg-[#2A2929] text-[#c7c1c1]'>
        <div className='main-input-sec'>
          <div className='sub-input-sec p-[50px]'>
            <form className='flex flex-col gap-[50px] items-start'>
              <input type="text" placeholder='Your Name'/>
              <input type="text" placeholder='Your Email'/>
              <input type="number" placeholder='Your Phone' />
              <button >SUBMIT</button>
            </form>
          </div>
        </div>
        <div className='first-box flex flex-col justify-center items-start gap-5 py-[20px]'>
            <h4 className='text-[#59b4dc] font-semibold'>CONTACT</h4>
            <h1>
              PING OR <span className='text-[#59b4dc]'>RING US</span>
              <div className='banner-head-lines mt-2'></div>
            </h1>
            <p>Our clients are the planets and we, the solarsystem. The most remarkable applause <br /> that we ever had is from our clients itself</p>

            <div className='contact-det'>
              <h1 ><FiMapPin color='#59b4dc' size={20} /> Office Address</h1>
              <p>No.32/3071 - B | First Floor Anjiparambil Building, Ponnurunni <br /> NH Bypass, Vyttila, Kochi, Kerala 682019.</p>
            </div>
            <div className='contact-det'>
              <h1><BsTelephoneFill color='#59b4dc' size={20}/> Call Us</h1>
              <p>+91 7072619922</p>
            </div>
            <div className='contact-det'>
              <h1><BiLogoGmail color='#59b4dc' size={20}/> Mail Us</h1>
              <p>mail@accoladesmedia.co.in</p>
            </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home