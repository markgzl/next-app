'use client';

import { useState } from 'react';
import { Input,Button,Textarea } from '@/components';


interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Inquiry Type</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="general">General Inquiry</option>
                <option value="sales">Sales</option>
                <option value="support">Technical Support</option>
                <option value="service">Service Request</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">2227 Shrewsbury Avenue<br />St. Louis, MO 63119</p>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+1 (314) 647-6104</p>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">sales@marlo-inc.com</p>
              </div>
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM CST</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Location</h2>
            <div className="w-full h-64 bg-gray-200 rounded-lg">
              {/* Map component will be added here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map Component
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}