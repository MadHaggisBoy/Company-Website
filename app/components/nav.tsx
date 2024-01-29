// app/components/nav.tsx
import React from 'react';
import Image from 'react-bootstrap/Image';


export default function Nav() {
  return (
    <nav className="navbar border-bottom border-body p-3" data-bs-theme="dark" style = {{backgroundColor: 'black', color: 'white'}}>
      <div className="container-fluid">
        <a className="navbar-brand" style = {{color: '#white'}} href="#">
          <Image src="/designIdea copy.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
          <p className ="px-3" style = {{display: 'inline'}}>BrainStorm</p>
        </a>
        
        Email: cg2017@hw.ac.uk  |  Phone: 07753185398
      </div>
    </nav>
  );
}
