
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: ["Women", "Men", "Accessories", "Sale", "New Arrivals"]
    },
    {
      title: "Customer Care",
      links: ["Contact Us", "Size Guide", "Shipping Info", "Returns", "FAQ"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Sustainability", "Press", "Investors"]
    },
    {
      title: "Connect",
      links: ["Instagram", "Facebook", "Twitter", "Pinterest", "TikTok"]
    }
  ];

  return (
    <footer className="bg-fashion-sand/30 text-fashion-charcoal">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4">Trendify</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Elevating your style with carefully curated fashion pieces that blend timeless elegance with contemporary trends.
            </p>
            <div className="flex space-x-4">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-fashion-charcoal text-white rounded-full flex items-center justify-center hover:bg-fashion-rose transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="text-sm font-medium">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="font-semibold mb-4 font-playfair">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-fashion-rose transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Reminder */}
        <div className="border-t border-fashion-sand mt-12 pt-8">
          <div className="text-center">
            <h4 className="font-playfair text-lg font-semibold mb-2">
              Don't miss out on exclusive offers
            </h4>
            <p className="text-gray-600 mb-4">
              Join our community for style inspiration and special discounts
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-fashion-sand mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Trendify. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-fashion-rose text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
