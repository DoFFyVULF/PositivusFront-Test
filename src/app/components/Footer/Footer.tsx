import style from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className={style.footerWrapper}>
                <div className={style.footerHeader}>
                    <div className={style.footerHeader_wrapper}>
                        <Link href='/' className={style.footer_logo}>
                            <img src="/images/logoWhite.svg" alt="" />
                        </Link>
                        <menu className={style.menu}>
                            <Link href='/About' className={style.active}>
                                About us
                            </Link>
                            <Link href='/Services'>
                                Services
                            </Link>
                            <Link href='/Cases'>
                                Use Cases
                            </Link>
                            <Link href='/Pricing'>
                                Pricing
                            </Link>
                            <Link href='/Blog'>
                                Blog
                            </Link>
                        </menu>
                        <div className={style.socialMedia}>
                            <div className={style.socailLink}>1</div>
                            <div className={style.socailLink}>2</div>
                            <div className={style.socailLink}>3</div>
                        </div>
                    </div>
                </div>
                <div className={style.footerBody}>
                    <div className={style.footerBody_info}>
                        <h5>Contact us:</h5>
                        <span>Email: info@positivus.com</span>
                        <span>Phone: 555-567-8901</span>
                        <span>Address: 1234 Main St
                        Moonstone City, Stardust State 12345</span>
                    </div>
                    <div className={style.footerBody_form_wrapper}>
                        <form action="#" className={style.form}>
                            <input type="text" placeholder='Email' />
                            <input type="button" value="Subscribe to news" className={style.inputButton} />
                        </form>
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <span>© 2023 Positivus. All Rights Reserved.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
}