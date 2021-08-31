import "./Header.css";

function Header() {
   return (
      <header>
         <div className="header__left">
            <h1>Dolapo Joseph</h1>
            <h2>Porfolio</h2>
         </div>

         <div className="header__right">
            <p className="menu-icon">Menu</p>

            <nav>
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
