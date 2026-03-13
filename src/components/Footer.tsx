import { Instagram, Facebook,  } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "Hair", "Face", "Body", "About"];
  const socialLinks = [
  { icon: Instagram, link: "https://www.instagram.com/bella_veta_1?igsh=d2RqYXZwa2F2ZXc4" },
  { icon: Facebook, link: "https://www.facebook.com/share/1Bp4wqQA6i/" },
];
  return (
    <footer id="footer" className="border-t border-border bg-card py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Bella Vita<span className="text-primary">.</span>
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium cosmetics crafted with love and the finest natural ingredients for your everyday glow.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-4">
             {socialLinks.map((item, i) => {
    const Icon = item.icon;

    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
      >
        <Icon size={18} />
      </a>
    );
  })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
