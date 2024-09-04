import React from 'react';
import '../styles/courseCard.css';
import doubleArrow from '../assets/doubleArrow.png';
import desTag from '../assets/desTag.png';
import CourseImage from '../assets/electronicsImg.png';
import mentorImg from '../assets/mentor.png';

const CourseCard = ({ style }) => {
  return (
    <div className={`course-card-container course-card-container-${style}`}>
      <div className={`course-image-container course-image-container-${style}`}>
        <img src={CourseImage} className={`course-image course-image-${style}`} />
      </div>
      <div className={`course-title-card-container course-title-card-container-${style}`}>
        <div className={`double-arrow-image-container double-arrow-image-container-${style}`}>
          <img src={doubleArrow} className={`double-arrow-image double-arrow-image-${style}`} />
        </div>
        <div className={`course-title-card-text course-title-card-text-${style}`}>
          Intro to Electronics
        </div>
      </div>
      <div className={`course-content-card-container course-content-card-container-${style}`}>
        <div className={`course-description-card-container course-description-card-container-${style}`}>
          <div className={`description-tag-image-container description-tag-image-container-${style}`}>
            <img src={desTag} className={`description-tag-image description-tag-image-${style}`} />
          </div>
          <div className={`course-description-card-text course-description-card-text-${style}`}>
            The study and application of circuits, devices, and systems using electrical components.
          </div>
        </div>
        <div className={`course-mentor-details-container course-mentor-details-container-${style}`}>
          <div className={`mentor-img-container mentor-img-container-${style}`}>
            <img src={mentorImg} className={`mentor-img mentor-img-${style}`} />
          </div>
          <div className={`mentor-text-container mentor-text-container-${style}`}>
            <div className={`mentor-heading mentor-heading-${style}`}>
              Mentor
            </div>
            <div className={`mentor-name mentor-name-${style}`}>
              Alice Bob
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default CourseCard;
