import React from 'react'
import './styles/course.css'
import enrollImg from './assets/enroll-btn.png'
import chatAi from './assets/chatAi.png'
import Header from './utils/Header';
import CourseCard from './utils/CourseCard';

const Course = () => {
  return (
    <>
      <Header />
      <div className='course-start-container'>
        <div className='course-title-container'>
          <div className='course-title'>
            Intro to Electronics
          </div>
          <div className='course-tag-line'>
            Every great journey begins with a single step—dare to take it, and watch the world unfold.
          </div>
          <div className='course-btn-container'>
            <button className='v-lab-btn'>
              V-Labs
            </button>
            <button className='enroll-btn'>

              <div className='enroll-btn-text'>
                Enroll
              </div>
              <div className='enroll-btn-img-container'>
                <img src={enrollImg} className='enroll-btn-img' />
              </div>

            </button>
          </div>

        </div>
        <div className='course-chat-ai-btn-container'>
          <img src={chatAi} className='chat-ai-btn' />
        </div>
      </div>

      <div className='course-section'>
        <div className='course-info-container'>

          <div className='about-course'>
            <div className='course-defination-question'>
              What is Electronics?
            </div>
            <div className='course-defination'>
              Electronics is the study and application of devices that control the flow of electrons, fundamental to creating and understanding technology like computers and smartphones.
            </div>
          </div>

          <div className='future-scope-course'>
            <div className='future-scope-course-title'>
              Future Scope of Electronics:
            </div>
            <div className='future-scope-course-content'>
              <br></br>
              1) Technological Innovation: Electronics is at the core of innovations in fields like robotics, IoT (Internet of Things), AI, and telecommunications, driving the future of technology.
              <br></br>
              <br></br>
              2) Job Opportunities: High demand for electronics engineers in industries such as consumer electronics, automotive, aerospace, healthcare, and renewable energy.
              <br></br>
              <br></br>
              3) Research and Development: Opportunities to work in cutting-edge research areas like quantum computing, nanotechnology, and biomedical devices.
              <br></br>
              <br></br>
              4) Sustainability and Green Technology: Contributing to the development of energy-efficient devices and sustainable technologies, which are critical for addressing global environmental challenges.
              <br></br>
              <br></br>
              5) Entrepreneurship: Knowledge in electronics can lead to creating startups and developing new products, from wearable tech to smart home devices.
            </div>
          </div>

        </div>

        <div className='course-application-container'>
          <div className='course-application-title'>
            Application of Electronics
          </div>
          <div className='course-application-content'>
            1) Consumer Electronics: Discuss everyday devices such as smartphones, tablets, televisions, and smart home devices, highlighting their impact on daily life.
            <br/>
            <br/>
            2) Industrial Applications: Explain how electronics are used in manufacturing processes, automation, robotics, and control systems.
            <br/>
            <br/>
            3) Healthcare and Medical Devices: Explore how electronics play a crucial role in medical equipment like MRI machines, pacemakers, wearable health monitors, and telemedicine.
            <br/>
            <br/>
            4) Automotive Industry: Cover how electronics are integral to modern vehicles, including electric vehicles (EVs), autonomous driving technologies, infotainment systems, and safety features.
            <br/>
            <br/>
            5) Telecommunications: Talk about how electronics underpin communication networks, including mobile phones, internet infrastructure, and satellite communication.
          </div>
        </div>
      </div>
      <CourseCard />
    </>
  )
}

export default Course

// < div className = 'course-overview-container' >
//         <div className='course-overview-title'>
//           Complete Course Overview
//         </div>
//         <div className='course-overview-btn-container'>
//           <button className='course-overview-btn'>
//             Overview
//           </button>
//         </div>
//       </div >