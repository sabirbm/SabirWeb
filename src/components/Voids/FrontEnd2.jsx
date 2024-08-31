import React from "react";

function FrontEnd() {
  return (
    <div className="video__content">
      <h3 className="video__title">The Rapidu Ifrastructure Framwork</h3>
      <div className="video__box">
        <div className="video__group">
          <span className="video__level">
              <ul>
                <li>Type designers love a good pangram. Pangrams, of course, are sentences that contain each letter of the</li>
                <li>sentences that contain each letter of the alphabet at least once, of
                </li>
                <li>which the quick brown fox jumps over the</li>
                <li>Type designers love a good pangram. Pangrams, of course, are</li>
                <li>sentences that contain each letter of the alphabet at least once, of
                </li>
                <li>which the quick brown fox jumps over the</li>
              </ul>
          </span>
          <h3 className="video__group_stack">
            <i class="bx bxs-coin-stack"></i> Tech Stack 
            <div className="video__group_list">
            Java, Python, SQL, AWS Services, Kibana, GitHub
            </div>  
          </h3>
          <h3 className="video__name">
            For more information <i class='bx bx-down-arrow-alt' ></i>
          </h3>
          <div className="video__button_y">
            <a
              href="https://youtu.be/IUg7fBy7rtM?si=GVMG1UJKdV8jb0lB"
              target="_blank"
              rel="noopener noreferrer"
              className="video__button video__button-flex"
            >click here
              <i class='small bx bxl-youtube'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontEnd;
