
import React from "react";
import missionImage from "../assets/our-mission.png";
import visionImage from "../assets/our-vision.png";
import goalImage from "../assets/our-goal.png";
import "../stylepage/MissionVisionGoal.css";


function MissionVisionGoal() {
  return (
    
    <div className="mission-vision-goal-container p-2">
      <div className="mission-vision-goal-inner">
        <div className="mission-vision-goal-item">
          <img
            className="mission-vision-goal-image"
            src={missionImage}
            alt="mission"
          />
          <h1 className="mission-vision-goal-title">Our Mission</h1>
          <p className="mission-vision-goal-description">
            "We are committed to realizing our vision by facilitating
            resource-based learning that drives exponential growth. Our mission
            is to enable economic independence through education within our
            community, ensuring that everyone has access to the knowledge,
            resources, and opportunities needed to build a brighter and more
            prosperous future."
          </p>
        </div>

        <div className="mission-vision-goal-item">
          <img
            className="mission-vision-goal-image"
            src={visionImage}
            alt="vision"
          />
          <h1 className="mission-vision-goal-title" style={{marginTop:'-5px'}}>Our Vision</h1>
          <p className="mission-vision-goal-description">
            "At IATSAT, we aspire to influence global priorities for the
            future by embracing experiential learning as our core belief. Our
            vision is to create a world where knowledge is a catalyst for
            positive change, empowering individuals and communities alike."
          </p>
        </div>

        <div className="mission-vision-goal-item m-2 " style={{marginTop:'-5px'}}>
          <img
            className="mission-vision-goal-image"
            src={goalImage}
            alt="goal"
          />
          <h1 className="mission-vision-goal-title" style={{marginTop:'-4px'}}>Our Goal</h1>
          <p className="mission-vision-goal-description">
            "IATSAT is passionately driven to revolutionize education, aiming
            for a profound influence on 21st-century learning. We empower every
            educational institution with the right set of tools. Our unwavering
            commitment is to cultivate equal opportunities, empowering every
            student to flourish and excel."
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVisionGoal;

