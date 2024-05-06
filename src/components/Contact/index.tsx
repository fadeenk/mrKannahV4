import React, { useState } from "react";
import Heading from '@theme/Heading';

const url =
"https://8rwjvhixyb.execute-api.us-west-2.amazonaws.com/development/sendMail";
const myEmail = "fadeekannah@gmail.com";

export default function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
      },
      body: JSON.stringify(
        {
          to: [myEmail],
          from: myEmail,
          body: `New message from ${name}, \n${message}\n`,
          replyTo: email,
          subject: 'New contact form submission on my website',
        }
      ),
    });
    if (response.ok) {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className='container'>
        <Heading as="h2" className='hero__title'>Thank you for reaching out!</Heading>
        <p className="hero__subtitle">I'll get back to you as soon as possible.</p>
      </section>
    )
  }

  if (email && name && message && disabled && !isSubmitting) { setDisabled(false); }
  return (
    <section className='container'>
      <Heading as="h2" className='hero__title'>Ready to get started or to take your project to the next level?</Heading>
      <p className="hero__subtitle">Fill out the form below or reach out to me directly.</p>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <label>Name
          <input className="passwordProtectedDoc" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input className="passwordProtectedDoc" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Message
          <textarea style={{height: '8rem'}} className="passwordProtectedDoc" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button style={{margin: '20px'}} className="button button--lg button--primary" type="submit" disabled={disabled || isSubmitting}>Send</button>
      </form>
    </section>
  )
}