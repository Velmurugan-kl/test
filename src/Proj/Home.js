import React from 'react'
import './Style.css'


const Home = (props) => {
  return (
    <div className='container'>
        <img src="Images/skct.png" alt="skct-logo" class="skct"></img><br></br>
        <a href="https://www.skct.edu.in/#/" >Click</a>
        <h1>Welcome to{props.data} <span title="Sri Krishna College of Technology">SKCT</span></h1>
        <p >
            Sri Krishna College of Technology aspires to be recognized as one of 
            the pioneers in imparting world class technical education through 
            technology enabled innovative teaching learning processes with a 
            focus on research activities to cater, to the societal needs.
        </p>
        <h2>Fee Structures</h2>
        <div>
            <h2>Facilities</h2>
            <ol>
                <li>
                    <h3>Fees</h3>
                    <a href="https://collegedunia.com/college/15223-sri-krishna-college-of-technology-skct-coimbatore/courses-fees" >
                    <img src="Images/fees.jpeg" alt="Fee Structure" height="70px"></img>
                </a></li>
                <li>
                    <h3>Hostel</h3>
                    <a href="https://data.skct.edu.in/media/Hostel_Application___Hostel_Undertaking.pdf" >
                    <img src="Images/jail.jpeg" alt="Jail" height="70px"></img>
                </a></li>
                <li>
                    <h3>Contact us</h3>
                    <a href="mailto:dummy@gmail.com">
                        <img src="Images\fees.jpeg" alt="Jail" height="70px"></img>
                    </a>
                </li>
                <li>
                    <h3>Sign-up</h3>
                    <button >Next</button>
                </li>
                <li >
                    <h3>Courses</h3>
                    <button onclick="document.location='Test.html'" >Course</button>

                </li>
                
            </ol>
        </div>
    </div>
  )
}
export default Home;

