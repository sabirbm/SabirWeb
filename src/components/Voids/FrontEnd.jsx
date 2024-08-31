import React from "react";
import ReactPlayer from "react-player";

function FrontEnd() {
  return (
    <div className="video__content">
      <h3 className="video__title">The Rapidu Ifrastructure Framwork</h3>
      <div className="video__box">
        <div className="video__group">
          <span className="video__level">
            <ul>
              <li>
                Type designers love a good pangram. Pangrams, of course, are
                sentences that contain each letter of the
              </li>
              <li>
                sentences that contain each letter of the alphabet at least
                once, of
              </li>
              <li>which the quick brown fox jumps over the</li>
              <li>
                Type designers love a good pangram. Pangrams, of course, are
              </li>
              <li>
                sentences that contain each letter of the alphabet at least
                once, of
              </li>
              <li>which the quick brown fox jumps over the</li>
            </ul>
          </span>
          <div className="video__disc">
            <h3 className="video__name">
              <i class="bx bxl-youtube"></i> For More Information
            </h3>
            <div className="video__data">
              <div className="video__size">
                <ReactPlayer url="https://youtu.be/IUg7fBy7rtM?si=GVMG1UJKdV8jb0lB"></ReactPlayer>
              </div>

              <div className="video__tech_list">
                <h3 className="video__title">
                  <ul>Tech Stack Used</ul>
                </h3>
                <div className="video__group">
                  <h3 className="video__group_list">
                    <i class="bx bxl-java"></i> Java
                  </h3>
                  <h3 className="video__group_list">
                    <i class="bx bxl-python"></i> Python
                  </h3>
                  <h3 className="video__group_list">
                    <i class="bx bxl-postgresql"></i> SQL
                  </h3>
                  <h3 className="video__group_list">
                    <i class="bx bxl-aws"></i> AWS Services
                  </h3>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
