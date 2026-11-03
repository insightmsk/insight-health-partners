"use client";
import {useState} from "react";
import Link from "next/link";

const FORM_ENDPOINT="https://formsubmit.co/ajax/contact@ihpartners.co.uk";
const MAX_FILE_SIZE=10*1024*1024;

function StatusMessage({status}){
  if(!status.message)return null;
  return <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>;
}

async function submitForm(event,setStatus){
  event.preventDefault();
  const form=event.currentTarget;
  const file=form.querySelector('input[type="file"]')?.files?.[0];
  if(file&&file.size>MAX_FILE_SIZE){
    setStatus({type:"error",message:"Your attachment is larger than 10 MB. Please choose a smaller file."});
    return;
  }
  setStatus({type:"pending",message:"Sending securely…"});
  try{
    const response=await fetch(FORM_ENDPOINT,{method:"POST",headers:{Accept:"application/json"},body:new FormData(form)});
    const data=await response.json().catch(()=>({}));
    if(!response.ok||data.success===false)throw new Error("Submission failed");
    form.reset();
    setStatus({type:"success",message:"Thank you. Your information has been sent to Insight Health Partners Ltd."});
  }catch{
    setStatus({type:"error",message:"We could not send your information. Please try again shortly."});
  }
}

export function CareerForm(){
  const[status,setStatus]=useState({type:"",message:""});
  return <form className="form panel" method="POST" encType="multipart/form-data" onSubmit={event=>submitForm(event,setStatus)}>
    <h3>Register your interest</h3>
    <input type="hidden" name="_subject" value="New careers enquiry — Insight Health Partners Ltd"/>
    <input type="hidden" name="_template" value="table"/>
    <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true"/>
    <label>Full name<input name="name" required autoComplete="name"/></label>
    <label>Email address<input name="email" required type="email" autoComplete="email"/></label>
    <label>Professional role<input name="role" required/></label>
    <label>HCPC registration number <span>(optional)</span><input name="hcpc"/></label>
    <label>Areas of interest<select name="interest" defaultValue="" required><option value="" disabled>Select an area</option><option>Diagnostic ultrasound</option><option>Community MSK</option><option>Radiology</option><option>Ultrasound-guided procedures</option><option>Service leadership</option><option>Other</option></select></label>
    <label>Attach CV <span>(PDF or Word, maximum 10 MB)</span><input name="attachment" type="file" accept=".pdf,.doc,.docx"/></label>
    <label>Short message<textarea name="message"/></label>
    <label className="consent"><input name="privacy_consent" value="Confirmed" type="checkbox" required/> <span>I have read the <Link href="/privacy">privacy policy</Link> and consent to Insight Health Partners Ltd using my details to respond to this expression of interest.</span></label>
    <button className="btn" type="submit" disabled={status.type==="pending"}>{status.type==="pending"?"Sending…":"Submit interest"}</button>
    <StatusMessage status={status}/>
    <small>Do not include patient information or special-category personal data in your CV or message.</small>
  </form>;
}

export function ContactForm(){
  const[status,setStatus]=useState({type:"",message:""});
  return <form className="form panel" method="POST" onSubmit={event=>submitForm(event,setStatus)}>
    <h3>Send us a message</h3>
    <input type="hidden" name="_subject" value="New website enquiry — Insight Health Partners Ltd"/>
    <input type="hidden" name="_template" value="table"/>
    <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true"/>
    <label>Full name<input name="name" required autoComplete="name"/></label>
    <label>Work email<input name="email" required type="email" autoComplete="email"/></label>
    <label>Telephone <span>(optional)</span><input name="telephone" type="tel" autoComplete="tel"/></label>
    <label>Organisation<input name="organisation" required autoComplete="organization"/></label>
    <label>Area of interest<select name="interest"><option>Insourcing</option><option>Outsourcing</option><option>Private ultrasound service development</option><option>Service transformation</option></select></label>
    <label>Message<textarea name="message" required/></label>
    <label className="consent"><input name="privacy_consent" value="Confirmed" type="checkbox" required/> <span>I have read the <Link href="/privacy">privacy policy</Link> and agree to my information being used to respond to my enquiry.</span></label>
    <button className="btn" type="submit" disabled={status.type==="pending"}>{status.type==="pending"?"Sending…":"Send message"}</button>
    <StatusMessage status={status}/>
    <small>Please do not send confidential patient information through this form.</small>
  </form>;
}
