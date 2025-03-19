'use client'
import Link from "next/link";
import styles from '../Header/Header.module.css';
import { usePathname } from "next/navigation";

export default function Header() {
    
    const pathname = usePathname();

    return (
        <header>
            <div className={styles.header_wrapper}>
                <Link href='/' className={styles.header_logo}>
                    <img src="/images/logo.svg" alt="" />
                </Link>
                <menu className={styles.menu}>
                    <Link href='/About' className={`${pathname === "/About" ? styles.active : ""}`}>
                        About us
                    </Link>
                    <Link href='/Services' className={`${pathname === "/Services" ? styles.active : ""}`}>
                        Services
                    </Link>
                    <Link href='/Cases' className={`${pathname === "/Cases" ? styles.active : ""}`}>
                        Use Cases
                    </Link>
                    <Link href='/Pricing' className={`${pathname === "/Pricing" ? styles.active : ""}`}>
                        Pricing
                    </Link>
                    <Link href='/Blog' className={`${pathname === "/Blog" ? styles.active : ""}`}>
                        Blog
                    </Link>
                    <button>
                        Request a quote
                    </button>
                </menu>
            </div>
        </header>
    );
}