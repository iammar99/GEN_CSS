import { useEffect, useRef, React} from 'react'
import { Link } from 'react-router-dom'
import '../../SCSS/Components/_header.scss'
import img1 from '../../Assets/hands.png'
import { gsap } from "gsap/dist/gsap";
export default function Header() {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" } 
    );
  }, []);
  return (
    <>
      <div className="header">
      
        <div className="bg" >
          <p ref={textRef}>
            Welcome to GenCSS ! <br />
            <span>Where Code Meets Style<img src={img1} alt="" style={{ width: "90px" }} /></span>
            <br />
           <Link to="/agent">
            <button class="button">
              Try Now
              <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button></Link>
            </p> 
        
        </div>
      </div>
    </>
  )
}
