import mystle from './assests/styles/style.module.css'
import mystle2 from '../navbar/assests/style/style.module.css'

export default function Home() {
    return <>
        <div className="homeContent d-flex justify-content-center flex-column w-100 h-100 py-4">
            <div className="HomeImage">
                <img src='img/hero-carousel-3.svg' className={mystle.heroAnimated} alt='rocket' width='40%' height='40%' />
            </div>
            <div className='TextContent gap-2 d-flex flex-column'>
                <div className='heading display-5 fw-normal text-secondary'>Welcome To <span className='text-primary fw-medium'>HeroBiz</span> </div>
                <div><p className='fs-5 text-secondary'>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut</p></div>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <div><button className={`btn bg-info text-light ${mystle2.startedBtn}`}>Get Started</button></div>
                    <div className={`d-flex justify-content-center align-items-center gap-2 btn ${mystle2.startedBtn}`}><i className="bi bi-play-circle text-info fs-2"></i> <p className='m-0 fw-medium'>Watch Video</p> </div>
                </div>
            </div>
        </div>
    </>
}