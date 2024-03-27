import { FiMapPin } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <main>
        {/* First sec */}
        <section className="footer-first md:px-[80px] sm:px-[30px] px-[10px] md:py-[80px] py-[30px]">
            <div className="md:py-[100px] flex flex-col justify-center items-center">
                <h1>
                    CONTACT
                </h1>
                <div className="contact-banner-heade-line"></div>  
            </div>
        </section>

        {/* Second sec */}
        <section className="footer-second md:px-[80px] sm:px-[30px] px-[10px] md:py-[50px] py-[30px] text-white bg-black flex flex-col justify-center items-center gap-14">
            <div className="text-center flex flex-col justify-center items-center gap-4">
                <h3 className="text-[#59b4dc] font-semibold">IDENTIFY AND CONNECTED</h3>
                <h1 className="text-4xl font-bold">Reach out to know the cost <br /> to attain yourpotential clients</h1>
                <div className="contact-banner-line"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <h3 className="text-[#59b4dc] text-2xl font-semibold">Corporate Office [Kochi, Kerala]</h3>

                <div className="conatct-det-grid">
                    <div className="con-box">
                        <h1><FiMapPin color="#59b4dc" size={25}/></h1>
                        <h4>Accolades Integrated Pvt Ltd</h4>
                        <p>No.32/3071 – B | First Floor | Anjiparambil Building Ponnurunni | NH Bypass | Vyttila | Cochin – 682 019</p>
                    </div>
                    <div className="con-box">
                        <h1><BiLogoGmail color="#59b4dc" size={25}/></h1>
                        <p>mail@accoladesmedia.co.in</p>
                    </div>
                    <div className="con-box">
                        <h1><BsTelephoneFill color="#59b4dc" size={25} /></h1>
                        <p>+91 90726 19922 | 87143 04849</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4427871437515!2d76.31416997503092!3d9.980234490124202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cf7e6baeda3%3A0x1f053eaaf85f927b!2sACCOLADES%20Integrated%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1711521245308!5m2!1sen!2sin" 
                    width="600" height="450" 
                    style={{border : '0', width : '100%', background : 'dark', borderRadius : '10px'}} allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
            
        {/* Third sec */}    
        <section className="footer-third md:px-[80px] sm:px-[30px] px-[10px] md:py-[50px] py-[30px] bg-black text-[#c7c1c1]">
            <div className="last-box">
                <h3 >Calicut Office</h3>
                <div>
                    <h4>
                        Accolades Integrated Pvt Ltd
                    </h4>
                    <p><FiMapPin color="#59b4dc" size={15} /> Akkai Tower | 59/3785, 2nd Floor | Tali Cross Road | Calicut – 673002</p>
                </div>
                <div >
                    <p><BiLogoGmail color="#59b4dc" size={15}/> calicut@accoladesmedia.co.in</p>
                </div>
                <div>
                    <p><BsTelephoneFill color="#59b4dc" size={15}/> +91 99478 47237 | +91 90726 19925</p>
                </div>
                <div className="w-[100%] pt-[30px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1898748194253!2d75.7854889741668!3d11.247438488931452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65932cf91c009%3A0xf48916f4d304f205!2sACCOLADES%20Integrated%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1711529035816!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style={{ border : 0, width : '100%', borderRadius : '5px', height : '250px' }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="last-box">
                <h3>Trivandrum Office</h3>
                <div>
                    <h4>
                        Accolades Integrated Pvt Ltd
                    </h4>
                </div>
                <div>
                    <p><FiMapPin color="#59b4dc" size={30} /> 3B, Unity Towers | Chempakassery Nagar Ln | opp. M. G. College | Chempakassery Nagar | Kesavadasapuram| Thiruvananthapuram | Kerala 695004</p>
                </div>
                <div>
                    <p><BiLogoGmail color="#59b4dc" size={15}/> tvm@accoladesmedia.co.in</p>
                </div>
                <div>
                    <p><BsTelephoneFill color="#59b4dc" size={15}/> +91 9744218756 , +91 9048689977</p>
                </div>
                <div className="w-[100%]"> 
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.6648797210873!2d76.93705667412375!3d8.531878691510943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b95dc07e39e7%3A0x91d9ff71952f0eac!2sUnity%20Tower!5e0!3m2!1sen!2sin!4v1711529254571!5m2!1sen!2sin" 
                        width="600" height="450" 
                        style={{ border : 0, width : '100%', height : '250px', borderRadius : '5px' }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="last-box">
                <h3>Bengaluru Office</h3>
                <div>
                    <h4>
                        Accolades Integrated Pvt Ltd
                    </h4>
                </div>
                <div>
                    <p><FiMapPin color="#59b4dc" size={15} /> ITPL Main Road | Garudachan Palaya | Mahadevapura Bengaluru – 560 048</p>
                </div>
                <div>
                    <p><BiLogoGmail color="#59b4dc" size={15}/> bangalore@accoladesmedia.co.in</p>
                </div>
                <div>
                    <p><BsTelephoneFill color="#59b4dc" size={15}/> +91 89944 35631</p>
                </div>
            </div>

            <div className="last-box">
                <h3>Mumbai Office</h3>
                <div>
                    <h4>
                        Accolades Integrated Pvt Ltd
                    </h4>
                </div>
                <div>
                    <p><FiMapPin color="#59b4dc" size={15} /> 301 | 3rd floor | Corporate Corner | Sundar Nagar | Malad West | Mumbai - 400064</p>
                </div>
                <div>
                    <p><BiLogoGmail color="#59b4dc" size={15}/> mumbai@accoladesmedia.co.in</p>
                </div>
                <div>
                    <p><BsTelephoneFill color="#59b4dc" size={15}/> +91 90480 33588</p>
                </div>
            </div>
        </section>

        {/* Fourth sec */}
        <section className="footer-fouth md:px-[80px] sm:px-[30px] px-[10px] md:py-[50px] py-[30px] bg-[#131313]">
            <form >
                <div className="flex flex-col gap-[30px] items-start p-[30px]">
                   <input type="text" placeholder="Your Name" />
                   <input type="text" placeholder="Your Email"/>
                   <input type="number"  placeholder="Your Number"/>
                   <button >SUBMIT NOW</button>
                </div>
                <div className="p-[30px]">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </div>
            </form>
        </section>
    </main>
  )
}

export default Contact