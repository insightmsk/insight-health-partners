"use client";
import {useEffect,useState} from "react";
import Link from "next/link";

const nav=[["Who we are","/#who-we-are"],["Our services","/#our-services"],["Careers","/#careers"],["Get in touch","/#get-in-touch"]];

function ProbeLogo(){return <span className="probe-logo" aria-hidden="true"><span className="probe-waves"><i/><i/><i/></span><span className="probe-device"><span className="probe-face"><i/><i/><i/></span><span className="probe-slot"/></span><span className="probe-base"/></span>}

export function Header(){const[open,setOpen]=useState(false);return <nav className="nav" aria-label="Main navigation"><div className="shell navin"><Link className="brand" href="/" aria-label="Insight Health Partners home"><ProbeLogo/><span>Insight Health<br/>Partners</span></Link><button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button><div className={"links "+(open?"open":"")}>{nav.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</div></div></nav>}

export function Footer(){return <footer className="footer"><div className="shell"><div className="footgrid"><div><div className="brand foot-brand"><ProbeLogo/><span>Insight Health Partners Ltd</span></div><p>Experienced healthcare professionals helping NHS partners deliver accessible, efficient diagnostic and community services.</p></div><div><strong>Explore</strong>{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div><div><strong>Professional standards</strong><p>HCPC registered professionals<br/>CSP members<br/>CQC registration in preparation</p><Link href="/privacy">Privacy policy</Link></div></div><div className="legal">© {new Date().getFullYear()} Insight Health Partners Ltd. All rights reserved. This website does not provide medical advice.</div></div></footer>}

export function Reveal(){useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add("on")),{threshold:.1});document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));return()=>observer.disconnect()},[]);return null}

export function PageHero({eyebrow,title,children}){return <section className="pagehero"><div className="shell"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{children}</p></div></section>}

export function CTA(){return <section className="section"><div className="shell mission"><span>Work with us</span><h2>Let’s strengthen services together.</h2><Link className="btn light" href="/#get-in-touch">Start a conversation →</Link></div></section>}
