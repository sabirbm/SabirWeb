import React from "react";

function RapidR() {
  return (
    <div className="project__content">
      <h3 className="project__title">The Rapidu Ifrastructure Framwork</h3>
      <div className="project__box">
        <div className="project__rows">
          {/* only 4 bullet points */}
          <span className="project__discription">
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
            </ul>
          </span>
          <h3 className="project__group_stack">
            <div className="project__row_list">
              <i class="bx bxs-coin-stack"></i>{" "}
              <b className="project__button-title"> Tech Stack:</b> Java,
              Python, SQL, AWS Services, Kibana, GitHub
            </div>
          </h3>
          <h3 className="project__button-title">
            For more information <i class="bx bx-down-arrow-alt"></i>
            <div className="project__button_y">
              <a
                href="https://youtu.be/IUg7fBy7rtM?si=GVMG1UJKdV8jb0lB"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button project__button-flex"
              >click here
                <i class="small bx bxl-youtube"></i>
              </a>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}
export default RapidR;
