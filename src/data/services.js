// AAURA MEN'S STUDIO — Centralized Services Data
// Source of truth: Official Service Menu (Verbatim extraction)

export const serviceCategories = [
  { id: 'hair', name: 'HAIR', label: 'Hair Services' },
  { id: 'hair-care', name: 'HAIR CARE', label: 'Hair Care' },
  { id: 'hair-treatments', name: 'HAIR TREATMENTS', label: 'Hair Treatments' },
  { id: 'face-skin', name: 'FACE & SKIN', label: 'Face & Skin' },
  { id: 'massage', name: 'MASSAGE', label: 'Massage & Wellness' },
];

export const services = [
  // 1. HAIR SERVICES
  {
    id: 'haircut',
    name: 'Haircut',
    category: 'HAIR',
    categoryId: 'hair',
    price: 200,
    formattedPrice: '₹200',
    startingFrom: false,
    description: 'Precision scissor and clipper haircut customized to your personal face shape and aesthetic.',
    duration: '30 mins'
  },
  {
    id: 'premium-haircut',
    name: 'Premium Haircut',
    category: 'HAIR',
    categoryId: 'hair',
    price: 250,
    formattedPrice: '₹250',
    startingFrom: false,
    description: 'Master cut with personalized consultation, styling finish, neck shave, and scalp refresh.',
    duration: '45 mins',
    signature: true
  },
  {
    id: 'kids-haircut',
    name: 'Kids Haircut',
    category: 'HAIR',
    categoryId: 'hair',
    price: 150,
    formattedPrice: '₹150',
    startingFrom: false,
    description: 'Patient and attentive styling tailored for young gentlemen in a comfortable environment.',
    duration: '25 mins'
  },
  {
    id: 'clean-shave',
    name: 'Clean Shave',
    category: 'HAIR',
    categoryId: 'hair',
    price: 100,
    formattedPrice: '₹100',
    startingFrom: false,
    description: 'Classic wet shave ritual featuring warm lather, razor precision, and soothing aftershave balm.',
    duration: '20 mins'
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    category: 'HAIR',
    categoryId: 'hair',
    price: 150,
    formattedPrice: '₹150',
    startingFrom: false,
    description: 'Beard sculpting, cheekline sharpening, mustache detailing, and nourishing beard oil finish.',
    duration: '25 mins'
  },

  // 2. HAIR CARE
  {
    id: 'hair-wash',
    name: 'Hair Wash',
    category: 'HAIR CARE',
    categoryId: 'hair-care',
    price: 50,
    formattedPrice: '₹50',
    startingFrom: false,
    description: 'Revitalizing cleanse with conditioning scalp massage to remove residue and promote healthy shine.',
    duration: '15 mins'
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    category: 'HAIR CARE',
    categoryId: 'hair-care',
    price: 700,
    formattedPrice: '₹700',
    startingFrom: false,
    description: 'Intensive deep-conditioning mask treatment, steam infusion, and therapeutic scalp relaxation.',
    duration: '45 mins',
    signature: true
  },
  {
    id: 'bio-kreatin',
    name: 'Bio Kreatin',
    category: 'HAIR CARE',
    categoryId: 'hair-care',
    price: 1000,
    formattedPrice: '₹1,000',
    startingFrom: false,
    description: 'Bio-nutritive keratin boost that reinforces hair fibers and restores natural resilience.',
    duration: '50 mins'
  },
  {
    id: 'hair-colour',
    name: 'Hair Colour',
    category: 'HAIR CARE',
    categoryId: 'hair-care',
    price: 650,
    formattedPrice: 'Starting ₹650',
    startingFrom: true,
    description: 'Natural grey blending and rich multi-tonal hair color tailored to your complexion.',
    duration: '45 mins'
  },
  {
    id: 'beard-colour',
    name: 'Beard Colour',
    category: 'HAIR CARE',
    categoryId: 'hair-care',
    price: 250,
    formattedPrice: '₹250',
    startingFrom: false,
    description: 'Targeted grey coverage for facial hair for an even, sharp, and revitalized beard look.',
    duration: '25 mins'
  },
  {
    id: 'loreal-colour',
    name: "L'Oréal Colour",
    category: 'HAIR CARE',
    categoryId: 'hair-care',
    price: 1000,
    formattedPrice: '₹1,000',
    startingFrom: false,
    description: "Premium L'Oréal professional coloration delivering superior shine, coverage, and lasting richness.",
    duration: '60 mins'
  },

  // 3. HAIR TREATMENTS
  {
    id: 'anti-dandruff-treatment',
    name: 'Anti-Dandruff Treatment',
    category: 'HAIR TREATMENTS',
    categoryId: 'hair-treatments',
    price: 800,
    formattedPrice: '₹800',
    startingFrom: false,
    description: 'Targeted scalp purification and anti-microbial therapy to soothe irritation and eliminate flaking.',
    duration: '45 mins'
  },
  {
    id: 'hair-fall-treatment',
    name: 'Hair Fall Treatment',
    category: 'HAIR TREATMENTS',
    categoryId: 'hair-treatments',
    price: 800,
    formattedPrice: '₹800',
    startingFrom: false,
    description: 'Follicle-stimulating therapy with active botanical serums to strengthen roots and reduce thinning.',
    duration: '45 mins'
  },
  {
    id: 'keratin',
    name: 'Keratin',
    category: 'HAIR TREATMENTS',
    categoryId: 'hair-treatments',
    price: 2000,
    formattedPrice: 'From ₹2,000',
    startingFrom: true,
    description: 'Advanced smoothing keratin formula for frizz elimination, sleek alignment, and lasting silkiness.',
    duration: '90 mins'
  },
  {
    id: 'botox',
    name: 'Botox',
    category: 'HAIR TREATMENTS',
    categoryId: 'hair-treatments',
    price: 3000,
    formattedPrice: 'From ₹3,000',
    startingFrom: true,
    description: 'High-potency deep reparative capillary treatment that restores depleted, dry, or stressed hair strands.',
    duration: '90 mins'
  },

  // 4. FACE & SKIN
  {
    id: 'detan',
    name: 'Detan',
    category: 'FACE & SKIN',
    categoryId: 'face-skin',
    price: 300,
    formattedPrice: '₹300',
    startingFrom: false,
    description: 'Rapid botanical tan reversal that restores even skin tone and reverses sun oxidation.',
    duration: '25 mins'
  },
  {
    id: 'face-clean-up',
    name: 'Face Clean-up',
    category: 'FACE & SKIN',
    categoryId: 'face-skin',
    price: 450,
    formattedPrice: '₹450',
    startingFrom: false,
    description: 'Pore decongestion, gentle exfoliation, and clarifying mask designed for men’s active skin.',
    duration: '35 mins'
  },
  {
    id: 'fruit-facial',
    name: 'Fruit Facial',
    category: 'FACE & SKIN',
    categoryId: 'face-skin',
    price: 1000,
    formattedPrice: '₹1,000',
    startingFrom: false,
    description: 'Natural fruit enzyme therapy rich in antioxidants and vitamins for refreshed, radiant skin.',
    duration: '50 mins'
  },
  {
    id: 'premium-facial',
    name: 'Premium Facial',
    category: 'FACE & SKIN',
    categoryId: 'face-skin',
    price: 1300,
    formattedPrice: '₹1,300',
    startingFrom: false,
    description: 'Multi-stage deep restoration facial with cellular hydration, pressure point massage, and firming mask.',
    duration: '60 mins',
    signature: true
  },
  {
    id: 'lotus-facial',
    name: 'Lotus Facial',
    category: 'FACE & SKIN',
    categoryId: 'face-skin',
    price: 1500,
    formattedPrice: '₹1,500',
    startingFrom: false,
    description: 'Lotus botanical infusion for calming sensitive skin, pore refinement, and luminous clarity.',
    duration: '60 mins'
  },
  {
    id: 'korean-facial',
    name: 'Korean Facial',
    category: 'FACE & SKIN',
    categoryId: 'face-skin',
    price: 2000,
    formattedPrice: '₹2,000',
    startingFrom: false,
    description: 'Glass-skin protocol featuring multi-layered essence infusion, gentle peel, and intense hydration.',
    duration: '75 mins',
    signature: true
  },

  // 5. MASSAGE
  {
    id: 'head-massage',
    name: 'Head Massage',
    category: 'MASSAGE',
    categoryId: 'massage',
    price: 350,
    formattedPrice: '₹350',
    startingFrom: false,
    description: 'Traditional therapeutic head massage with warm herbal oils to relieve stress and tension.',
    duration: '25 mins'
  },
  {
    id: 'foot-massage',
    name: 'Foot Massage',
    category: 'MASSAGE',
    categoryId: 'massage',
    price: 600,
    formattedPrice: '₹600',
    startingFrom: false,
    description: 'Acupressure reflexology targeting pressure points to eliminate fatigue and improve circulation.',
    duration: '35 mins'
  },
  {
    id: 'back-massage',
    name: 'Back Massage',
    category: 'MASSAGE',
    categoryId: 'massage',
    price: 1000,
    formattedPrice: '₹1,000',
    startingFrom: false,
    description: 'Focused deep tissue therapy concentrating on back, shoulder knots, and spinal tension.',
    duration: '45 mins'
  },
  {
    id: 'body-massage',
    name: 'Body Massage',
    category: 'MASSAGE',
    categoryId: 'massage',
    price: 1800,
    formattedPrice: '₹1,800',
    startingFrom: false,
    description: 'Full body holistic relaxation therapy using aromatic oils for full muscular decompression.',
    duration: '60 mins',
    signature: true
  }
];

export const signatureServices = services.filter(service => service.signature);
