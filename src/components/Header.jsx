import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useRef } from "react";

function Header() {
   const menuRef = useRef(null);
   const overlayRef = useRef(null);

   function showMenu() {
      menuRef.current.classList.add("active");
      overlayRef.current.classList.add("active");
   }

   function closeMenu() {
      menuRef.current.classList.remove("active");
      overlayRef.current.classList.remove("active");
   }

   return (
      <header>
         <div className="header__left">
            <h1>Dolapo Joseph</h1>
            <h2>Porfolio</h2>
         </div>

         <div className="header__right">
            <div className="menu-icon" onClick={showMenu}>
               <MenuIcon />
            </div>

            <nav ref={menuRef}>
               <div
                  className="overlay"
                  ref={overlayRef}
                  onClick={closeMenu}
               ></div>

               <div className="close-icon" onClick={closeMenu}>
                  <CloseIcon />
               </div>

               <ul>
                  <li>Work</li>
                  <li>Ongoing Projects</li>
                  <li>About</li>
                  <li>Contact</li>
               </ul>
            </nav>
         </div>
      </header>
   );
}

export default Header;
