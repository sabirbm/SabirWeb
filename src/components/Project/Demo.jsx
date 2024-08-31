import React from "react";
import ReactPlayer from "react-player";

function FrontEnd() {
  return (
    <div className="project__content">
      <h3 className="project__title">The Rapidu Ifrastructure Framwork</h3>
      <div className="project__box">
        <div className="project__rows">
          <span className="project__discription">
            <ul>
              <li>
                Type designers love a good pangram. Pangrams, of course, are
                sentences that contain each letter of the sentences that contain
                each letter of the
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
          <h3 className="project__youtube-title">
            For More Information <i class="bx bx-down-arrow-alt"></i>
          </h3>
          <div className="project__youtube-tech">
            <div className="project__youtube-link">
              <ReactPlayer url="https://youtu.be/IUg7fBy7rtM?si=GVMG1UJKdV8jb0lB"></ReactPlayer>
            </div>
            <div className="project__tech_list">
              <h3 className="project__title">Tech Stack Used</h3>
              <div className="project__rows">
                <h3 className="project__row_list">
                  <i class="bx bxl-java"></i> Java
                </h3>
                <h3 className="project__row_list">
                  <i class="bx bxl-python"></i> Python
                </h3>
                <h3 className="project__row_list">
                  <i class="bx bxl-postgresql"></i> SQL
                </h3>
                <h3 className="project__row_list">
                  <i class="bx bxl-aws"></i> AWS Services
                </h3>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
