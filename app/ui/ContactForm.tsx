'use client'

import { useState } from "react"

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
		<form onSubmit={handleSubmit} className="flex flex-col">
      <input className="bg-transparent text-black border-b" type="text" value={formData.name} onChange={handleChange} id="first" name="name" placeholder="Name" required />
      <input className="bg-transparent text-black border-b" type="email" value={formData.email} onChange={handleChange} id="email" name="email" placeholder="Email" required />
      <input className="bg-transparent text-black border-b" type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <textarea className="bg-transparent text-black border-b" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
	)
}