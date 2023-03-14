/* import logoLightMode from '../images/lightmode.png'; */

import "../styles/layout/Info.scss";
function Info(props) {
  const logoMode = () => {
    if (props.theme === "light") {
      return (
        <svg
          className="main_info-logo-img"
          width="248"
          height="347"
          viewBox="0 0 248 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="lightmode">
            <path
              id="Vector 1"
              d="M5.99999 230C11.5475 256.628 22.3333 305.5 30.5 327C93 363 196 343 239.5 308.5C242.5 245 268 72.5 208 29C137.762 -21.9226 60 3.5 26.5 44.5C-4.83101 82.8454 -1.5 194 5.99999 230Z"
              fill="#0E172C"
            />
            <path
              id="Vector 3"
              d="M152 77C161.877 103.488 185.304 156.57 200 157"
              stroke="whitesmoke"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 5"
              d="M41.5 207.5C40.3333 231.833 39.4 280.5 45 280.5"
              stroke="whitesmoke"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 2"
              d="M180 158C177.5 159 83.6666 83 57.5 49.5C10.5 49.5 27.5 108 20 153.5C12.5 199 32 210 39 217.5C46 225 103 234.5 108 230C113 225.5 109 239.5 110.5 252C112 264.5 165 262.5 169 252C173 241.5 176.5 195.5 176.5 195.5C176.5 195.5 185 202.5 194 202.5C203 202.5 204.5 202.5 208 200.5C211.5 198.5 216.5 199 218.5 187.5C220.5 176 218.5 158 206.5 155.5C194.5 153 182.5 157 180 158Z"
              fill="whitesmoke"
            />
            <path
              id="Vector 4"
              d="M207 94C218 135.5 217.1 231.2 201.5 244"
              stroke="whitesmoke"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 9"
              d="M53 193.5C59 204.5 90 208.5 100 195.5"
              stroke="#0E172C"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 6"
              d="M207.5 174.5C202 170.667 189.2 167.1 182 183.5"
              stroke="#0E172C"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              id="Vector 7"
              d="M193 188.76C196 183.26 195 173.26 189 175.26"
              stroke="#0E172C"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              id="Vector 8"
              d="M65 150C64 154 57.5 165.125 65 167C69.8 168.2 74.5 167 74.5 167"
              stroke="#0E172C"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          className="main_info-logo-img"
          width="248"
          height="347"
          viewBox="0 0 248 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="darkmode">
            <path
              id="Vector 1"
              d="M5.99999 230C11.5475 256.628 22.3333 305.5 30.5 327C93 363 196 343 239.5 308.5C242.5 245 268 72.5 208 29C137.762 -21.9226 60 3.5 26.5 44.5C-4.83101 82.8454 -1.5 194 5.99999 230Z"
              fill="whitesmoke"
            />
            <path
              id="Vector 3"
              d="M152 77C161.877 103.488 185.304 156.57 200 157"
              stroke="#0E172C"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 5"
              d="M41.5 207.5C40.3333 231.833 39.4 280.5 45 280.5"
              stroke="#0E172C"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 2"
              d="M180 158C177.5 159 83.6666 83 57.5 49.5C10.5 49.5 27.5 108 20 153.5C12.5 199 32 210 39 217.5C46 225 103 234.5 108 230C113 225.5 109 239.5 110.5 252C112 264.5 165 262.5 169 252C173 241.5 176.5 195.5 176.5 195.5C176.5 195.5 185 202.5 194 202.5C203 202.5 204.5 202.5 208 200.5C211.5 198.5 216.5 199 218.5 187.5C220.5 176 218.5 158 206.5 155.5C194.5 153 182.5 157 180 158Z"
              fill="#0E172C"
            />
            <path
              id="Vector 4"
              d="M207 94C218 135.5 217.1 231.2 201.5 244"
              stroke="#0E172C"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 9"
              d="M53 193.5C59 204.5 90 208.5 100 195.5"
              stroke="whitesmoke"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              id="Vector 6"
              d="M207.5 174.5C202 170.667 189.2 167.1 182 183.5"
              stroke="whitesmoke"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              id="Vector 7"
              d="M193 188.76C196 183.26 195 173.26 189 175.26"
              stroke="whitesmoke"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              id="Vector 8"
              d="M65 150C64 154 57.5 165.125 65 167C69.8 168.2 74.5 167 74.5 167"
              stroke="whitesmoke"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );
    }
  };

  return (
    <>
      <div className="main_info">
        <div className="main_info-logo">
          <div className="main_info-logo-eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          {logoMode()}
        </div>
        <h2 className="main_info-name">cecilia periquet</h2>
        <h1 className="main_info-title">front-end developer</h1>
      </div>
      <div className="dots col-3">
        <div className="snippet" data-title="dot-collision">
          <div className="stage">
            <div className="dot-collision"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
