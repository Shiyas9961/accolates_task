import { Link } from "react-router-dom"
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import { useState } from "react"

const Header = () => {
  
  const [showServices, setShowServices] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [smallService, setSmallService] = useState(false)
  const [reallySmallService, setReallySmallService] = useState(false)

  return (
    <header className="flex justify-between items-center bg-black text-white py-[10px] sm:py-[20px] md:py-[30px] md:px-[80px] sm:px-[30px] px-[10px] relative">
        <div className="header-logo">
          <Link to='/'>
            <img className="object-cover lg:w-[330px] w-[350px]"   src="header_logo.webp" alt="logo" />
          </Link>
        </div>
        <nav className="large-menu">
            <menu className="flex justify-around items-center lg:gap-6 gap-3 big-screen">
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li className="relative" onMouseOver={() => setShowServices(true)} onMouseOut={() => setShowServices(false)}>
                  <Link to='/services' className="flex gap-2 items-center">Services <AiOutlinePlus/></Link>
                  <div className={`service-menu bg-black w-[200px] ${showServices ? 'show-menu' : ''}`}>
                    <menu className="pt-[20px]">
                      <li className="flex gap-2 items-center relative" onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>
                        Digital Marketing <AiOutlinePlus color="white"/>
                        <div className={`sub-menu ${showSubMenu ? 'show-sub-menu' : ''}`}>
                          <menu className="pl-[5px]">
                            <li>Google Ads</li>
                            <li>SEO</li>
                            <li>SMM</li>
                            <li>Content Marketing</li>
                          </menu>
                        </div>
                      </li>
                      <li>Graphics Designing</li>
                      <li>Web Development</li>
                    </menu>
                  </div>
                </li>
                <li>
                  <Link to='/careers'>Careers</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
            </menu>
        </nav>

        <button className="menu-btn" onClick={() => setShowMenu(prev => !prev)}>
          <AiOutlineMenu size={30} className="hover:scale-110 duration-75"/>
        </button>

        <nav className={`small-menu absolute left-0 top-[0] min-h-[100vh] w-[80%] bg-black text-[#6EC1E4] pt-[15px] px-[10px] ${showMenu ? 'show-menu-show' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <Link to='/'>
              <img className="object-cover w-[290px]"   src="header_logo.webp" alt="logo" />
            </Link>
            <button className="mr-[15px] cross-btn p-[6px]" onClick={() => setShowMenu(false)}>
                <ImCross color="white" size={20}/>
            </button>
          </div>
          
          <menu className="flex flex-col">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <div className="flex gap-6 items-center">
                <Link to='/services'>
                  Services
                </Link>
                <button onClick={() => setSmallService(prev => !prev)} className="service-btn">
                  <AiOutlinePlus/>
                </button>
              </div>
              <menu className={` ${smallService ? 'sub-show-service' : 'sub-service'}`}>
                <li >
                  <div className="flex items-center gap-6">
                    <Link to='/marketing'>
                      Digital Marketing
                    </Link> 
                    <button className="service-btn" onClick={() => setReallySmallService(prev => !prev)}>
                      <AiOutlinePlus color="white"/>
                    </button>
                  </div>
                  <menu  className={`${reallySmallService ? 'really-small' : 'really-small-none'}`}>
                    <li>Google Ads</li>
                    <li>SEO</li>
                    <li>SMM</li>
                    <li>Content Marketing</li>
                  </menu> 
                </li>
                <li>Graphics Designing</li>
                <li>Web Development</li>
              </menu>
            </li>
            <li>
              <Link to='/careers'>Careers</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </menu>
        </nav>
    </header>
  )
}

export default Header