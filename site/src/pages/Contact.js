import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-2xl mx-auto p-6 bg-green-50 shadow-lg rounded-lg mt-10 pt-16">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Me</h1>
                <p className="text-gray-700 text-center mb-6">
                    I'm always open to discussing new opportunities, collaborations, or just connecting. 
                    Feel free to reach out using the form below!
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Other Ways to Reach Me</h2>
                    <p className="text-gray-700">Email: <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">your-email@example.com</a></p>
                    <p className="text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Your LinkedIn Profile</a></p>
                </div>
            </div>
        </>
    );
};

export default Contact;