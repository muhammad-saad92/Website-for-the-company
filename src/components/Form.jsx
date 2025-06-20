function Form(){
    return(
        <form className="max-w-xl mx-auto bg-base-100 text-black p-6 rounded-lg shadow-md space-y-4 ">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full placeholder:text-white text-white"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full placeholder:text-white text-white"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows="3"
            className="textarea textarea-bordered w-full placeholder:text-white text-white"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    )
}

export default Form