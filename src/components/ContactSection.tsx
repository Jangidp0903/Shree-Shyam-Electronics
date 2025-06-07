import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// Contact information interface
interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  link?: string;
}

const contactData: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: "rajujangid65 [at] gmail [dot] com",
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
    value: "Sector 52, Wazirabad, Gurugram (HR), India",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-4">
            Need Fast Appliance Repair Service Near You?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Reach out to us for expert
            refrigerator repair, washing machine repair, microwave repair, and
            other home appliance services.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactData.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-orange-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-full mr-3">
                    <IconComponent size={20} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-orange-600">
                    {contact.title}
                  </h3>
                </div>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-gray-700 block hover:text-orange-400 transition-colors text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                ) : contact.title.toLowerCase() === "address" ? (
                  <address className="text-gray-700 not-italic text-base">
                    {contact.value}
                  </address>
                ) : (
                  <p className="text-gray-700 text-base">{contact.value}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4">
            Ready to Start a Conversation About Your Appliance Repair Needs?
          </h3>
          <p className="text-gray-700 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            Whether it&apos;s your fridge, washing machine, or microwave — our
            expert technicians are just a call or message away. Contact us today
            for reliable and same-day service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:rajujangid65@gmail.com"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium text-sm sm:text-base w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Email Repair
            </a>
            <a
              href="tel:+919873126033"
              className="bg-white text-orange-600 border border-orange-500 px-6 py-3 rounded-md font-medium text-sm sm:text-base w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Repair
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
