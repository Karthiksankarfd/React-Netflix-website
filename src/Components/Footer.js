import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer_main_container position_relative'>
    
        <div className='footer'>
            <div className='footertittle' >
                <h1>For more enquiries</h1>
            </div>
                <div className='flexwarp'>
                    <div className='flexwarp_child '> 
                            <ul>
                                <li>
                                    <Link to="">Audio Description</Link>
                                </li>

                                <li>
                                    <Link to="">Investor relations</Link>
                                </li>

                                <li>
                                    <Link to="">Legal notice</Link>
                                </li>
                                
                                
                            </ul>
                    </div>
                    <div className='flexwarp_child '>
                                <ul>
                                        <li>
                                            <Link to="">Help center</Link>
                                        </li>

                                        <li>
                                            <Link to="">Jobs</Link>
                                        </li>

                                        <li>
                                            <Link to="">Cookies and preferences</Link>
                                        </li>
                                        
                                    
                                    </ul> 
                        </div>

                        <div className='flexwarp_child '>
                                    <ul>
                                            <li>
                                                <Link to="">Gift Cards</Link>
                                            </li>

                                            <li>
                                                <Link to="">Terms of Use</Link>
                                            </li>

                                            <li>
                                                <Link to="">Corporate Information</Link>
                                            </li>
                                            
                                            
                                        </ul> 
                        </div>

                        <div className='flexwarp_child '>
                                <ul>
                                        <li>
                                            <Link to="">Media center</Link>
                                        </li>

                                        <li>
                                            <Link to="">Privacy</Link>
                                        </li>

                                        <li>
                                            <Link to="">Contact Us</Link>
                                        </li>
                                        
                                        
                                    </ul> 
                        </div>
                </div>
               
               
          
        </div>
       

        <div className='footer_overlay' ></div>
    </div>

   
    </>
  )
}

export default Footer
