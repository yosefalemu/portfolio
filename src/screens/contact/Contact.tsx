import emailjs from 'emailjs-com';
import {useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {socialNetworks} from './utils';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const templateParams = {
      from_name: email,
      to_name: 'yosefalemu007@gmail.com',
      subject,
      message,
    };
    emailjs
      .send('service_7h6r95i', 'template_lesv0yc', templateParams, 'hkW-Yl-7vSlhJCtpd')
      .then((response) => {
        console.log('Email sent successfully', response.status, response.text);
        alert('Email sent successfully');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Failed to send email', error);
        alert('Failed to send email');
      });
  };

  const contacts = [
    {
      field: 'email',
      component: (
        <input
          type="email"
          className="bg-transparent pl-2 focus-visible:outline-none active:border-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      ),
    },
    {
      field: 'subject',
      component: (
        <input
          className="bg-transparent pl-2 focus-visible:outline-none active:border-none"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      ),
    },
    {
      field: 'message',
      component: (
        <div className="w-full">
          <TextareaAutosize
            minRows={3}
            className="w-92 resize-none overflow-auto bg-transparent pl-2 text-primaryColor focus-visible:outline-none active:border-none"
            maxRows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-row items-center pt-4 align-middle">
        <span className="html-tag">{'<b>'} </span>
        <p className="px-2 pb-2 text-lg font-bold text-primaryColor sm:text-2xl">
          Get in Touch
          <span className="text-lg text-themePrimaryColor sm:text-2xl"> - Contact Me</span>
        </p>
        <span className="html-tag">{'</b>'}</span>
      </div>
      <div className="flex flex-col pt-8 lg:flex-row lg:pt-32">
        <div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-primaryColor">FIND ME ON</h3>
            <p className="text-primaryColor">
              Please don`t hesitate to reach out to me{' '}
              <span className="text-lg text-themePrimaryColor">and connect.</span>
            </p>
          </div>
          <div className="grid w-full grid-cols-5 items-center gap-1 p-2 sm:gap-6">
            {socialNetworks().map((item) => item)}
          </div>
        </div>
        <div className="line-contact relative w-[50%] whitespace-pre-wrap pl-10 pt-16 sm:ml-24 sm:pl-4 lg:w-3/5 lg:pt-0">
          <p className="text-xl text-themePrimaryColor">
            .contactMe<span className=" text-xl text-primaryColor">{' {'}</span>
          </p>
          <form onSubmit={handleSubmit}>
            {contacts.map(({field, component}) => (
              <p className="line-contact flex pl-10 text-lg text-primaryColor" key={field}>
                {field}:{component}
              </p>
            ))}
            <button type="submit" className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              Send Email
            </button>
          </form>
          <p className="line-contact text-xl text-primaryColor">{'}'}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
