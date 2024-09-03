import React from 'react'
import '../styles/courseCard.css'
import doubleArrow from '../assets/doubleArrow.png'
import desTag from '../assets/desTag.png'
import CourseImage from '../assets/electronicsImg.png'
const CourseCard = () => {
  return (
    <div className='course-card-container'>
      <div className='course-image-container'>
        <img src={CourseImage} className='course-image' />
      </div>
      <div className='course-title-card-container'>
        <div className='double-arrow-image-container'>
          <img src={doubleArrow} className='double-arrow-image' />
        </div>
        <div className='course-title-card-text'>
          Intro to Electronics
        </div>
      </div>
      <div className='course-description-card-container'>
        <div className='description-tag-image-container'>
          <img src={desTag} className='description-tag-image' />
        </div>
        <div className='course-description-card-text'>
          The study and application of circuits, devices, and systems using electrical components.
        </div>
      </div>
    </div>
  )
}

export default CourseCard;
