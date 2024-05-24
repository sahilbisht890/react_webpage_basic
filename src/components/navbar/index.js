import { Link } from "react-router-dom";
import style from './assests/style/style.module.css'

export default function Navbar() {
    const st={color:'black',textDecoration:'none'}
    return <>
        <div className={`navbar w-100 border border-bottom-2  ${style.lightGrey}`}>
            <div className="px-3 d-flex justify-content-between align-items-center w-100">
                <div className="logo">
                    <h1 className="text-primary">HeroBiz</h1>
                </div>
                <div>
                    <ul className={`d-flex gap-5 align-items-center list-unstyled ${style.listItem}` }>
                        <li className="fw-bold"><Link style={st} to='/'>Home</Link></li>
                        <li className="fw-bold"><Link style={st} to='/about'>About</Link></li>
                        <li className="fw-bold"><Link style={st} to='/services'>Service</Link></li>
                        <li className="fw-bold"><Link style={st} to='/blog'>Blog</Link></li>
                        <button className={`btn  bg-info text-light ${style.startedBtn}`}>Get Started</button>
                    </ul>
                </div>
            </div>
        </div>

    </>
}