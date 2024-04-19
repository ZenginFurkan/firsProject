import React from 'react';
import Navibar from '../navbar/Navibar';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='row bg-gray-color'>
      <div className='col-12' >
      <Navibar />
      </div>
      <div className='col-2'>
      <Sidebar /> 
      </div>
      <div className='col-10 p-1 '>
      {children}
      </div>
    </div>
    
  );
};

export default Layout;

