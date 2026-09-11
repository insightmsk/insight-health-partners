"use client";
import {useEffect,useState} from "react";
import Link from "next/link";

const nav=[["Who we are","/#who-we-are"],["Our services","/#our-services"],["Careers","/#careers"],["Get in touch","/#get-in-touch"]];

function ProbeLogo(){return <span className="probe-logo" aria-hidden="true"><span className="probe-waves"><i/><i/><i/></span><span className="probe-device"><span className="probe-slot"/></span></span>}

function LinkedInPlaceholder(){return <div className="linkedin-placeholder" aria-label="LinkedIn company profile coming soon" title="LinkedIn profile coming soon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.3 13.9c0-4.3-2.3-6.4-5.4-6.4a4.7 4.7 0 0 0-4.2 2.3v-2H9.2V22h3.6v-7c0-1.8.3-3.6 2.6-3.6s2.3 2.1 2.3 3.7V22h3.6l1-8.1Z"/></svg><span>LinkedIn</span><small>Profile coming soon</small></div>}

export function Header(){const[open,setOpen]=useState(false);return <nav className="nav" aria-label="Main navigation"><div className="shell navin"><Link className="brand" href="/#home" aria-label="Insight Health Partners — return to the top"><ProbeLogo/><span>Insight Health<br/>Partners</span></Link><button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button><div className={"links "+(open?"open":"")}>{nav.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</div></div></nav>}

export function Footer(){return <footer className="footer"><div className="shell"><div className="footgrid"><div><div className="brand foot-brand"><ProbeLogo/><span>Insight Health Partners Ltd</span></div><p>MSK diagnostic ultrasound and ultrasound-guided injection services for NHS partners.</p><address>128 City Road<br/>London EC1V 2NX</address></div><div><strong>Explore</strong>{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div><div><strong>Professional standards</strong><p>Delivered by individually HCPC-registered professionals and CSP members.<br/>CQC registration in preparation.</p><Link href="/privacy">Privacy policy</Link><LinkedInPlaceholder/></div></div><div className="legal">© {new Date().getFullYear()} Insight Health Partners Ltd. All rights reserved. This website does not provide medical advice.</div></div></footer>}

export function Reveal(){useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add("on")),{threshold:.1});document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));return()=>observer.disconnect()},[]);return null}

export function PageHero({eyebrow,title,children}){return <section className="pagehero"><div className="shell"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{children}</p></div></section>}

export function CTA(){return <section className="section"><div className="shell mission"><span>Work with us</span><h2>Let’s strengthen services together.</h2><Link className="btn light" href="/#get-in-touch">Start a conversation →</Link></div></section>}
