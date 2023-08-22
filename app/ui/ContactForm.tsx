'use client'

import { useState } from "react"
import { Btn , BtnVariant} from './Btn'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

	return (
		<form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full sm:items-end">
      <input className="bg-transparent text-black border-b text-white pb-[11px] pl-4 mb-6 w-full placeholder:text-white placeholder:opacity-50" type="text" value={formData.name} onChange={handleChange} id="first" name="name" placeholder="Name" required />
      <input className="bg-transparent text-black border-b text-white pb-[11px] pl-4 mb-6 w-full placeholder:text-white placeholder:opacity-50" type="email" value={formData.email} onChange={handleChange} id="email" name="email" placeholder="Email Address" required />
      <input className="bg-transparent text-black border-b text-white pb-[11px] pl-4 mb-6 w-full placeholder:text-white placeholder:opacity-50" type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <textarea className="bg-transparent text-black border-b text-white pb-[11px] pl-4 mb-6 w-full placeholder:text-white placeholder:opacity-50" rows={4} id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
      <Btn label="Submit" variant={BtnVariant.Light}/>
    </form>
	)
}