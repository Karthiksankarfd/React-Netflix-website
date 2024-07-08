import React from 'react'

const Profilepage = () => {
  return (
    <>
     <div className='Profilepage_container'>
      <div className='Profilepage_container_secondary' >
        <h4>My profile</h4>
            <div className='user_profile'>

              <div className='email'>
                <span>User name/email</span>
                <p >karthik@622gmail.com</p>
              </div>
              <div className='email'>
              {/* <span>User name/email</span> */}
                <p >Edit</p></div>
            </div>

            <div className='user_profile'>
            <div className='email'>
                <span>Country</span>
                <p >India</p>
              </div>
              <div className='email'>
              {/* <span>User name/email</span> */}
                <p >State: Bangalore</p></div>
            </div>

            <div className='user_profile'>
            <div className='email'>
                <span>Subscription ending</span>
                <p >31-10-2023</p>
              </div>
              <div className='email'>
              {/* <span>User name/email</span> */}
                <p >Renew new plan</p>
                
                </div>
           
            </div>

            <div className='user_profile'>
            <div className='email'>
                <span>Mobile</span>
                <p >+91 1234567899</p>
              </div>
              <div className='email'>
              {/* <span>User name/email</span> */}
                <p >change</p></div>
            </div>
      </div>
     
     </div>
    </>
   
  )
}

export default Profilepage
