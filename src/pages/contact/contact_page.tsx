import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import SectionWrapper from "@/components/section_wrapper";
import React from "react";

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
  };

  return (
    <>
      <Navigation />
      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="container mx-auto max-w-3xl">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Contact Me
            </h2>
          </SectionWrapper>
          <SectionWrapper>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
          </SectionWrapper>

          <SectionWrapper>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-4xl hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </SectionWrapper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
