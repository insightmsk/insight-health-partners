import Link from "next/link";
import {Header,Footer,PageHero} from "../components";

export const metadata={title:"Contact"};

export default function Contact(){return <><Header/><main><PageHero eyebrow="Contact" title="Let’s start a conversation.">Tell us about your MSK diagnostic ultrasound or ultrasound-guided injection requirements.</PageHero><section className="section"><div className="shell two"><div className="heading"><h2>Get in touch</h2><p>Use the message form on our homepage to share your organisation’s priorities and service requirements.</p><Link className="btn" href="/#get-in-touch">Open contact form</Link></div><div className="card"><h3>Registered office</h3><address style={{fontStyle:"normal",lineHeight:1.8}}>Insight Health Partners Ltd<br/>128 City Road<br/>London EC1V 2NX</address><p>Please do not send confidential patient information.</p></div></div></section></main><Footer/></>}
