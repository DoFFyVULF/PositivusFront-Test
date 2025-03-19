'use client'
import { Container } from "reactstrap";
import Header from "./components/Header/Header";
import Image from "next/image";
import style from './css/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import EmblaCarousel from './assets/Components/Carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'
import './css/embla.css'
import Footer from "./components/Footer/Footer";

const servicesData = [
    {
        id: 1,
        title: "Search engine optimization",
        image: "/images/services/SEO.png",
        buttonText: "Learn more",
        Lst: '/images/lGreen.svg'
    },
    {
        id: 2,
        title: "Pay-per-click advertising",
        image: "/images/services/PPC.png",
        buttonText: "Learn more",
        bgc: 'Gr',
        cl: 'Wh',
        Lst: '/images/lGreen.svg'
    },
    {
        id: 3,
        title: "Social media marketing",
        image: "/images/services/SSM.png",
        buttonText: "Learn more",
        bgc: 'Bl',
        cl: 'Wh',
        Lst: '/images/l.svg'
    },
    {
        id: 4,
        title: "Email marketing",
        image: "/images/services/EM.png",
        buttonText: "Learn more",
        Lst: '/images/lGreen.svg'
    },
    {
        id: 5,
        title: "Content Creation",
        image: "/images/services/CC.png",
        buttonText: "Learn more",
        bgc: 'Gr',
        cl: 'Wh',
        Lst: '/images/lGreen.svg'

    },
    {
        id: 6,
        title: "Analytics and Tracking",
        image: "/images/services/AAT.png",
        buttonText: "Learn more",
        bgc: 'Bl',
        Lst: '/images/l.svg'
    },
];

const workProcessData = [
    { id: 1, title: "Consultation", description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
    { id: 2, title: "Research and Strategy Development", description: "We create a tailored strategy for your business." },
    { id: 3, title: "Implementation", description: "We execute the plan and monitor progress." },
    { id: 4, title: "Monitoring and Optimization", description: "We execute the plan and monitor progress." },
    { id: 5, title: "Reporting and Communication", description: "We execute the plan and monitor progress." },
    { id: 6, title: "Continual Improvement", description: "We execute the plan and monitor progress." },
];

const team = [
    {
        id: 1,
        name: 'John Smith',
        post: 'CEO and Founder',
        img: '/images/Team/profile_1.png',
        desc: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
    },
    {
        id: 2,
        name: 'Jane Doe',
        post: 'Director of Operations',
        img: '/images/Team/profile_2.png',
        desc: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
    },
    {
        id: 3,
        name: 'Michael Brown',
        post: 'Senior SEO Specialist',
        img: '/images/Team/profile_3.png',
        desc: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
    },
    {
        id: 4,
        name: 'Emily Johnson',
        post: 'PPC Manager',
        img: '/images/Team/profile_4.png',
        desc: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
    },
    {
        id: 5,
        name: 'Brian Williams',
        post: 'Social Media Specialist',
        img: '/images/Team/profile_5.png',
        desc: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
    },
    {
        id: 6,
        name: 'Sarah Kim',
        post: 'Content Creator',
        img: '/images/Team/profile_6.png',
        desc: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
    },
];

type SlideType = {
    id: number;
    content: React.ReactNode;
};

const OPTIONS: EmblaOptionsType = { loop: true };

const SLIDES: SlideType[] = [
    {
        id: 1,
        content: (
            <div className={style.slide}>
                <p>
                    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.
                    The team is professional, responsive, and truly cares about the success of our business.
                    We highly recommend Positivus to any company looking to grow their online presence."
                </p>
                <div className={style.slide_name}>
                    <h3>John Smith</h3>
                    <span>Marketing Director at XYZ Corp</span>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        content: (
            <div className={style.slide}>
                <p>
                    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.
                    The team is professional, responsive, and truly cares about the success of our business.
                    We highly recommend Positivus to any company looking to grow their online presence."
                </p>
                <h3>John Smith</h3>
                <span>Marketing Director at XYZ Corp</span>
            </div>
        ),
    },
    {
        id: 3,
        content: (
            <div className={style.slide}>
                <p>
                    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.
                    The team is professional, responsive, and truly cares about the success of our business.
                    We highly recommend Positivus to any company looking to grow their online presence."
                </p>
                <h3>John Smith</h3>
                <span>Marketing Director at XYZ Corp</span>
            </div>
        ),
    },
    // Добавьте больше слайдов по необходимости
];



export default function Home() {
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

    const toggleExpand = (id: number) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id], // Инвертируем состояние для конкретного элемента
        }));
    };


    return (
        <Container className={style.Container}>
            <Header />
            <section className={style.homeSec} >
                <div className={style.homeInfo}>
                    <h1>Navigating the digital landscape for success</h1>
                    <Image className={style.homeImgMob} src="/images/HomeImg.png" alt="" width={600} height={500} />
                    <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <button>Book a consultation</button>
                </div>
                <div className={style.homeImg}>
                    <Image src="/images/HomeImg.png" alt="" width={600} height={500} />
                </div>
            </section>
            <section className={style.sponsors}>
                <div className={style.sponsorsWrapper}>
                    <Image src='/images/sponsors/Amazon.svg' alt="" width={125} height={50} />
                    <Image src='/images/sponsors/dashk.svg' alt="" width={125} height={50} />
                    <Image src='/images/sponsors/HubSpot.svg' alt="" width={125} height={50} />
                    <Image src='/images/sponsors/Netflix.svg' alt="" width={125} height={50} />
                    <Image src='/images/sponsors/Notion.svg' alt="" width={125} height={50} />
                    <Image src='/images/sponsors/Zoom.svg' alt="" width={125} height={50} />
                </div>
            </section>
            <section className={style.services}>
                <div className={style.sevicesDesc}>
                    <h2>Services</h2>
                    <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                </div>
                <div className={style.serviceCardWrapper}>
                    {servicesData.map((service) => (
                        <div key={service.id} className={`${style.serviceCard} ${service.bgc ? style[service.bgc] : ""}  ${service.cl ? style[service.cl] : ""}  `}>
                            <div className={style.serviceCardTittle}>
                                <h3>{service.title}</h3>
                                <a href="#" className={`${style.serviceCardLink} ${service.Lst === '/images/lGreen.svg' ? style.iconLGreen : style.iconL}`}>
                                    {service.buttonText}
                                </a>
                            </div>
                            <div className={style.serviceCardImg}>
                                <Image src={service.image} alt={service.title} width={210} height={170} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.contactUsF}>
                    <div className={style.contactInfo}>
                        <h3>Let’s make things happen</h3>
                        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <button>Get your free proposal</button>
                    </div>
                    <div className={style.contactImg}>
                        <Image src='/images/Z.png' alt="" width={360} height={400} />
                    </div>
                </div>
            </section>
            <section className={style.caseStudies}>
                <div className={style.caseStudiesDesc}>
                    <h2>Case Studies</h2>
                    <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                </div>
                <div className={style.caseStudiesInfo}>
                    <div className={style.caseStudiesInfo_Item}>
                        <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div className={style.caseStudiesInfo_Item}>
                        <p>
                            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    <div className={style.caseStudiesInfo_Item}>
                        <p>
                            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </section>
            <section className={style.WorkProcess}>
                <div className={style.WorkProcessDesc}>
                    <h2>Our Working Process </h2>
                    <p>Step-by-Step Guide to Achieving <br /> Your Business Goals</p>
                </div>
                <div className={style.WorkProcessCards}>
                    {workProcessData.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => toggleExpand(item.id)} // Переключаем состояние конкретного элемента
                            className={`${style.WorkCard} ${expandedItems[item.id] ? style.WorkCard_Active : ""}`}
                        >
                            <div className={style.WorkCard_Upper}>
                                <div className={style.WorkCardTitle}>
                                    <span>0{item.id}</span>
                                    <h3>{item.title}</h3>
                                </div>

                            </div>
                            {expandedItems[item.id] && ( // Показываем описание, если элемент раскрыт
                                <div className={style.WorkCard_Content}>
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}


                </div>

            </section>
            <section className={style.Team}>
                <div className={style.TeamDesc}>
                    <h2>Team</h2>
                    <p>Meet the skilled and experienced team behind our <br /> successful digital marketing strategies</p>
                </div>
                <div className={style.TeamCardWrapper}>
                    {team.map((item) => (
                        <div key={item.id} className={style.TeamCard}>
                            <div className={style.TeamCardTitle}>
                                <img src={item.img} alt="" />
                                <div className={style.TeamCardTitle_Info}>
                                    <h4>{item.name}</h4>
                                    <span>{item.post}</span>
                                </div>
                                <div className={style.SocialLogo}>
                                    <a href="#">
                                        <img src="/images/Team/Social icon.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className={style.TeamCardAbout}>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.AllTeam}>
                    <button className={style.AllTeamBtn}>See all team</button>
                </div>
            </section>
            <section className={style.Testimonials}>
                <div className={style.TestimonialsDesc}>
                    <h2>Testimonials</h2>
                    <p>Hear from Our Satisfied Clients: Read Our <br /> Testimonials to Learn More about Our Digital Marketing Services</p>
                </div>
                <div className={style.TestimonialsCarouselWrapper}>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
            </section>
            <section className={style.ContactUsFromSec}>
                <div className={style.ContactUsFromSecDesc}>
                    <h2>Contact Us</h2>
                    <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                </div>
                <div className={style.ContactUsFrom_Wrapper}>
                    <div className={style.ContactFrom}>
                        <form action="#">
                            <div className={style.form_check}>
                                <div className={style.formRadio}>
                                    <input className={style.radioBtn} type="radio" name="type" id="typeM1" />
                                    <label className={style.FromSelectText} htmlFor="typeM1"> Say Hi</label>
                                    <input className={style.radioBtn} type="radio" name="type" id="typeM2" />
                                    <label className={style.FromSelectText} htmlFor="typeM2"> Get a Quote </label>
                                </div>

                                <div className={style.fromInfo}>
                                    <div className={style.inputGroup}>
                                        <label htmlFor="name">Name</label>
                                        <input className={style.InfoInput} type="text" placeholder="Name" id="name" />
                                    </div>
                                    <div className={style.inputGroup}>
                                        <label htmlFor="Email">Email*</label>
                                        <input className={style.InfoInput} type="text" placeholder="Email" id="Email" />
                                    </div>
                                    <div className={style.inputGroup}>
                                        <label htmlFor="Message">Message*</label>
                                        <input className={style.InfoInput} type="text" placeholder="Message" id="Message" />
                                    </div>

                                    <button className={style.sendMessageBtn}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={style.ContactFormImg}>
                        <Image src='/images/ContacUs.png' alt="" width={700} height={650} />
                    </div>
                    
                </div>
            </section>
            <Footer/>
        </Container>
    );
}


