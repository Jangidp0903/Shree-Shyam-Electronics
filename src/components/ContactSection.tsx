import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

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
    value: "hello@example.com",
    link: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9876543210",
    link: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Main Street, City, State 12345",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.example.com",
    link: "https://www.example.com",
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

        {/* Contact Information Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          role="list"
        >
          {contactData.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-orange-100"
                role="listitem"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent
                    size={48}
                    className="text-orange-500"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center">
                  {contact.title}
                </h2>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-gray-600 text-center block break-words text-sm sm:text-base leading-relaxed"
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
                  <address className="text-gray-600 text-center not-italic break-words text-sm sm:text-base leading-relaxed">
                    {contact.value}
                  </address>
                ) : (
                  <p className="text-gray-600 text-center break-words text-sm sm:text-base leading-relaxed">
                    {contact.value}
                  </p>
                )}
              </article>
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
                href="mailto:hello@example.com"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Send us an Email for Appliance Repair
              </a>
              <a
                href="tel:+919876543210"
                className="bg-orange-100 text-orange-600 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base w-full sm:w-auto text-center border-2 border-orange-200 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Us Now for Fast Appliance Repair Service
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
