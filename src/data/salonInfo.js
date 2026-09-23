import { services } from './services';
import { groomPackages } from './packages';

export const salonInfo = {
  name: "AAURA MEN'S STUDIO",
  shortName: "AAURA",
  subtitle: "MEN'S STUDIO",
  tagline: "LOOK GOOD â€” FEEL GOOD",
  phone: "+91 84318 67289",
  phoneRaw: "+918431867289",
  address: {
    line1: "No. 10, Ground Floor, GNS Complex",
    line2: "7th Main Road, Jigani, Tent Bus Stop",
    line3: "Jigani TMC, Jigani",
    city: "Bengaluru",
    pincode: "560105",
    full: "No. 10, Ground Floor, GNS Complex, 7th Main Road, Jigani, Tent Bus Stop, Jigani TMC, Jigani, Bengaluru â€“ 560105"
  },
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Packages", path: "/packages" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ],
  primaryCta: {
    label: "BOOK APPOINTMENT",
    path: "/book"
  },
  hours: [
    { days: "Monday – Sunday", time: "09:00 AM – 09:00 PM" },
    { days: "Tuesday", time: "Closed" }
  ],
  // Pull directly from authentic services data
  signatureServicesPreview: services.filter(s => s.signature).slice(0, 4),
  groomPackagesPreview: groomPackages
};

export default salonInfo;
