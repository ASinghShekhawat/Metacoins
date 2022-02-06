import React from 'react';

function Navbar() {
  return <div className="navbar"> 
  
    <div className="logo">
      <img className = "img" src = "https://media-exp1.licdn.com/dms/image/C4D0BAQEY23PkQ1oB2g/company-logo_200_200/0/1614276521153?e=2159024400&v=beta&t=MsGovQ16sk8LkKpLxgX5eBbuKR8xdnH49uE2BiRWseY"/>
     

     <h2 >MetaCoins</h2>
         </div>
     
    <div className="nav-buttons">

   <button className="nft">Create NFT</button>

   <button className="login">Login</button>


    </div>

  </div>;
}

export default Navbar;
