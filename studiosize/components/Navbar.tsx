import React from 'react';


const Navbar = () => {
  return (
    <div className='w-full h-[8vw] flex items-center justify-between '>
      <div className="nav-item p-16  flex items-center justify-between w-full font-[Satoshi]">
        <div className="logo">
          <h1 className='text-white text-3xl'>Studio Size</h1>
        </div>
        <div className="nav-text text-white flex items-center justify-between w-68 gap-8 font-medium text-[1.4vw]">
          <NavItem index={0}>Home</NavItem>
          <NavItem index={1}>Studio</NavItem>
          <NavItem index={2}>About</NavItem>
          <NavItem index={3}>Contact</NavItem>
          <NavItem index={4}>Labs</NavItem>
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`nav-item-wrapper relative overflow-hidden ${isEven ? 'even-item' : 'odd-item'}`}>
      <h1 className="cursor-pointer transition-colors duration-300">
        {children}
      </h1>
      <div className={`absolute bottom-0 ${isEven ? 'left-0' : 'right-0'} w-0 h-0.5 bg-white transition-all duration-300 ease-out`}></div>
    </div>
  );
}

export default Navbar;