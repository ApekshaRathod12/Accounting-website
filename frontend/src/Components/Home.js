import React from 'react';
import './Home.css';
import logo from './1.png';
import bg2 from './bg2.jpg'
import side2 from './side2.jpg';
import side1 from './side1.jpg';
import bg from './bg.jpeg';
import location from './location.jpg';
import contact from './contact.jpg';
import email from './email.jpg';
import vision from './vision.jpg';
import mission from './mission.jpg';
import promises from './promises.jpg';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-1'>
      <div className='home-content'>
        <h1>The best results for your business</h1>
        <h2>Achieving growth with our services</h2>
        <h3>Make your business more profitable and provide the highest quality services.</h3>
        <h2>To manage your business accounts accurately and timely.</h2>
      </div>  
      <img src={bg2} className='bg-img'></img>
      </div>
      <div className='home-2'>
        <div className='card1'>
          <div className='card1-left'>
            <div className='card1-content'>
              <h2>The success of any business depends on the timely accounting method with the accuracy of financial activity.</h2>
              <ul>
                <li>Can you fill up the business account sheet on time?</li>
                <li>Can't the accounts be settled on time due to the sheer busyness of the business?</li>
                <li>Do you want to get it ready in time ?</li>
                <li>Contact us to find a solution to our responsibility or the problem related to it.</li>
              </ul>
            </div>
          </div>
          <div className='card1-right'>
            <img src={side2} className='side2'></img>
          </div>
        </div>
        <div className='card2'>
          <div className='card2-left'>
            <img src={side1} className='side2'></img>
          </div>
          <div className='card2-right'>
            <div className='card2-content'>
              <h2>Accounts Manual and Computer Raised</h2>
              <ul>
                <li>To prepare the accounts on a daily basis / as per the time limit , with the audit of the accounts / to be audited.</li>
                <li>Any of your businesses/ businesses / such accounts with/ without audit.</li>
                <li>With the obligation to file the required returns in a timely manner such as business as well as individual.</li>
              
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className='home-3'>
      <div className='home-3-content'>
      <h2>Timely, accurate and accurate accounts will be prepared at reasonable prices to ensure the confidentiality of the information of each business.</h2>
      <ul className='home-3-ul'>
        <li className='home-3-li'><img src={location} className='home-3-img'></img><p>Ahmedabad , Gujarat</p></li>
        <li className='home-3-li'><img src={contact} className='home-3-img'></img><p>+91 1234567890</p></li>
        <li className='home-3-li'><a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'><img src={email} className='home-3-img'></img></a><p><a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>xyz12@gmail.com</a></p></li>
      </ul>
      </div>
        <img src={bg} className='bg'></img>
      </div>
      <div className='home-4'>
        <h2>Don't be confused , we advise you</h2>
        <div className='home-4-container'>
        <div className='card1-4'>
          <div className='card1-up'>
          <img src={vision} className='home-4-img'></img>
          </div>
          <div className='card1-down'>
            <div className='card1-content'>
              <h2>Vision</h2>
              <h3 className='h4-down'>To become a one-stop solution in the Account industry with the purpose of meeting customer expectations & build a solid sustainable business that sows back into the community.</h3>
            </div>  
          </div>
        </div>
        <div className='card1-4'>
          <div className='card1-up'>
          <img src={mission} className='home-4-img'></img>
          </div>
          <div className='card1-down'>
            <div className='card1-content'>
              <h2>Mission</h2>
              <h3 className='h4-down'>To leverage our expertise in Account to develop, activate and provide impactful solutions that exceed expectations for associates, customers and partners. </h3>
            </div>  
          </div>
        </div>
        <div className='card1-4'>
          <div className='card1-up'>
          <img src={promises} className='home-4-img'></img>
          </div>
          <div className='card1-down'>
            <div className='card1-content'>
              <h2>Promises</h2>
              <h3 className='h4-down'>Each and every customer will get best price, on time excellent service. That’s our promise!</h3>
            </div>  
          </div>
        </div>
        </div>
      </div>
      <div className='home-5'>
        <div className='h5-left'>
        <img src={logo} className='h5-img'></img>
        </div>
          
        <div className='h5-right'>
          <h1 className='h5-content'>Umeshkumar Rathod</h1>
          <h3 className='h5-content'> Ahmedabad , Gujarat</h3>
          <h3 className='h5-content'>+91 9924299328</h3>
          <h3 className='h5-content'><a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>urathod18@yahoo.in</a></h3>
        </div>
          
        
      </div>
      
    </div>
  )
}

export default Home