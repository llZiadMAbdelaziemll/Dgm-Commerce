import React,{useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Switch from 'react-switch';
import { useContext } from "react";
import { ThemeContext } from './Layout';
import Color from "./Color";
import { useSelector } from "react-redux";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0)

  useEffect(() => {
    const header1 = document.getElementById('header1');
    const header2 = document.getElementById('header2');
    const searchicon = document.getElementById('basic-addon2');
    const cart = document.getElementById('cart-div');
    const logo = document.getElementById('logo');
    
    const handleScroll = () => {
      
      if (window.scrollY > 201.5) {
        header1.classList.add('fixed-1');
        header1.classList.add('h1-fixed-height');
        header1.classList.replace('py-3','py-0-3');
        header2.classList.add('fixed-2');
        header2.classList.add('h2-fixed-height');
        header2.classList.remove('py-3');
        searchicon.classList.remove('p-3');
        cart.classList.replace('gap-10','gap-1');
        logo.style.fontSize="29px";
      } else {
        header1.classList.remove('fixed-1');
        header1.classList.remove('h1-fixed-height');
        header1.classList.replace('py-0-3','py-3');
        header2.classList.remove('fixed-2');
        header2.classList.remove('h2-fixed-height');
        header2.classList.add('py-3');
        searchicon.classList.add('p-3');
        cart.classList.replace('gap-1','gap-10');
        logo.style.fontSize="38px";
      }
      /*const isScrolled = window.scrollY > 201.5;

  header1.classList.toggle('fixed-1', isScrolled);
  header1.classList.toggle('h1-fixed-height', isScrolled);
  header1.classList.toggle('py-0-3', isScrolled);
  header2.classList.toggle('fixed-2', isScrolled);
  header2.classList.toggle('h2-fixed-height', isScrolled);
  header2.classList.toggle('py-3', !isScrolled);
  searchicon.classList.toggle('p-3', !isScrolled);
  cart.classList.toggle('gap-1', isScrolled);
  cart.classList.toggle('gap-10', !isScrolled); */
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping over $100 & Free Returns
              </p>
            </div>
            
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 826453453">
                16888
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3" id="header1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link to='/' id="logo" className="text-white" style={{fontFamily:"Bricolage Grotesque"}}>Dogma</Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-input "
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="search-i fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/compare.svg" alt="" />
                    <p className="mb-0">
                      compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/wishlist.svg" alt="" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" alt="" />
                    <p className="mb-0">
                      Log in <br /> My Acount
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="" />
                    <div className="d-flex flex-column gap-10" id="cart-div">
                      <span className="badge bg-white text-dark">{cart.length}</span>
                      <p className="mb-0">$ {totalPrice.toFixed(2)}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3" id="header2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-10">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div >
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span>Shop categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 m-auto">
            <Switch 
            className="dark-switch "
                checked={theme === 'light'}
               onChange={toggleTheme}
               onColor="#1f2937"
               offColor="#dcdcdc"
               checkedIcon={false}
                 uncheckedIcon={false}
             />
             
             </div>
            </div>
            </div>
         
      </header>
    </>
  );
};

export default Header;
