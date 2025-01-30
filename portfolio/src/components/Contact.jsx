import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(""); // Success/Error message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch("https://my-portfolio-ruby-eta-71.vercel.app/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json()
        setStatus(result.message)

        if (response.ok){
            setFormData({name:"", email:"", message:""})
        }
    }


    return(
        <section id="contact" className="py-16 px-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6">Send Me a Message</h2>
            <div className="max-w-4xl mx-auto  p-6 rounded-lg ">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300" 
                        />

                        <input 
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300"
                            />
                            
                            <textarea 
                                name="message" 
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border focus:ring focus:ring-blue-300 "
                                >
                            </textarea>
                            
                            <button
                                type="submit"
                                className="w-full border bg-white text-black  border-black px-4 py-2 rounded-lg transition duration-900 hover:bg-black hover:text-white" 

                                >
                                    Send Message
                            </button>
                </form>
                {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
            </div>
        </section>
    )
}
