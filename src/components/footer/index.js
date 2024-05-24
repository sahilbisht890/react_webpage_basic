import style from './assests/style.module.css'
export default function Footer() {
    return <>
        <div className="footer py-2 d-flex flex-column gap-2 justify-content-center align-items-center" 
        style={{backgroundColor:'#3a4753'}}>
            <div className="social">
                <div className={`${style.socialMediaIcons} d-flex gap-4 justify-content-between fs-3 text-light`}>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-skype"></i>
                    <i className="bi bi-facebook"></i>
                </div>
            </div>
            <div className="copyright text-light">
                <p className="font-italic fs-5 m-0">Copy Right are Reserved &copy;</p>
            </div>
        </div>
    </>
}