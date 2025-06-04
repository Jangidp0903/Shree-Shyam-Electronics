import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// Contact information interface
interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  link?: string;
}

// Contact data with Lucide icons
const contactData: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: "rajujangid65@gmail.com",
    link: "mailto:rajujangid65@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9873126033",
    link: "tel:+919873126033",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Gurugram Haryana",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-orange-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Need Fast Appliance Repair Service Near You?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We&apos;d love to hear from you! Reach out to us for expert
            refrigerator repair, washing machine repair, microwave repair, and
            other home appliance repair services.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactData.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mr-4">
                    <IconComponent size={20} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {contact.title}
                  </h3>
                </div>

                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 block text-lg leading-relaxed"
                    target={
                      contact.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {contact.value}
                  </a>
                ) : contact.title.toLowerCase() === "address" ? (
                  <address className="text-gray-600 not-italic text-lg leading-relaxed">
                    {contact.value}
                  </address>
                ) : (
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {contact.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <section
          className="mt-12 text-center"
          aria-labelledby="start-conversation"
        >
          <div className="bg-white rounded-xl p-8 border-2 border-orange-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Ready to Start a Conversation About Your Appliance Repair Needs?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base px-4">
              Whether it&apos;s your fridge, washing machine, or microwave — our
              expert technicians are just a call or message away. Contact us
              today for reliable, affordable, and same-day appliance repair
              service at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:rajujangid65@gmail.com"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Email Repair
              </a>
              <a
                href="tel:+919873126033"
                className="bg-orange-100 text-orange-600 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base w-full sm:w-auto text-center border-2 border-orange-200 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Repair
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
