function Contact() {
    return (
      <section className="py-12 px-4 bg-[#F9FAFB] text-center">
        <h2 className="text-6xl text-black font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Have a question, idea, or project? We’d love to hear from you. Fill out the form below and we’ll get back to you shortly.
        </p>
  
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Contact Form */}
          <form className="space-y-4 bg-white p-6 rounded-lg shadow">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full placeholder:text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full placeholder:text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="textarea textarea-bordered w-full placeholder:text-white"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
  
          {/* Contact Info */}
          <div className="bg-base-100 p-6 rounded-lg shadow text-white-700 space-y-4">
            <h3 className="text-xl font-semibold">Reach Us At</h3>
            <p><strong>Email:</strong> support@webcrafters.com</p>
            <p><strong>Phone:</strong> +92 336 4495685</p>
            <p><strong>Location:</strong> Lahore, Pakistan (Remote)</p>
            <div className="pt-4 space-x-4">
              <a href="https://www.instagram.com/webcr_afters?igsh=MTI3bGZuZXpjc3c2dQ==" className="btn btn-sm btn-outline">Instagram</a>
              <a href="#" className="btn btn-sm btn-outline">LinkedIn</a>
            </div>
          </div>
  
        </div>
        <section className="mt-16 px-4">
            <h3 className="text-4xl font-bold mb-4 text-center text-black">Our Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274645778!2d74.00470982255571!3d31.483103649645578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1750452733031!5m2!1sen!2s" 
            title="Google Map of Web Crafter"
            width="100%" 
            height="400" 
            className="rounded-md border-0 w-full"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
      </section>
    );
  }
  
  export default Contact;
  