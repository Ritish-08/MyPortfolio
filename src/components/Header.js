import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href='#'>
           <button><h1 className='first'>Ritish Choudhary</h1></button>
          </a>
          <button className="btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;