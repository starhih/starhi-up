/**
 * Star Hi Herbs - Central Data Repository
 *
 * This file serves as the central source of truth for all website content.
 * All components should fetch data from here rather than defining their own data.
 *
 * Data structures are designed to be easily migrated to a database in the future.
 */

// ==============================
// INTERFACES
// ==============================

/**
 * Base interface for all entities that would have database IDs
 */
export interface BaseEntity {
  id: string | number;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Product Category
 */
export interface ProductCategory extends BaseEntity {
  slug: string;
  name: string;
  description: string;
  image: string;
  count?: number;
  products?: Product[];
}

/**
 * Product
 */
export interface Product extends BaseEntity {
  slug: string;
  name: string;
  categoryId: string;
  categorySlug?: string;
  categoryName?: string;
  standardization: string;
  latinName?: string;
  plantPart?: string;
  image: string;
  gallery?: string[];
  certifications: string[];
  description?: string;
  shortDescription?: string;
  benefits?: string[];
  specifications?: {
    appearance?: string;
    solubility?: string;
    particleSize?: string;
    heavyMetals?: string;
    shelfLife?: string;
    storage?: string;
    activeCompounds?: string;
    standardization?: string;
    form?: string;
    testing?: string;
    [key: string]: string | undefined;
  };
  applications?: string[];
  documents?: ProductDocument[];
  research?: string;
  featured?: boolean;
  // New sections
  supplierInfo?: {
    points: string[];
  };
  productionDetails?: {
    description: string;
    image: string;
  };
  packaging?: {
    description: string;
    image: string;
  };
  factory?: {
    description: string;
    image: string;
  };
  certificationsSection?: {
    description: string;
    image: string;
  };
  events?: {
    description: string;
    image: string;
  };
  faqs?: ProductFAQ[];
}

/**
 * Product Document
 */
export interface ProductDocument extends BaseEntity {
  name: string;
  size: string;
  url?: string;
  fileType?: string;
}

/**
 * Product FAQ
 */
export interface ProductFAQ extends BaseEntity {
  question: string;
  answer: string;
  category?: string;
}

/**
 * News/Update Item
 */
export interface NewsItem extends BaseEntity {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
  url?: string;
}

/**
 * Certification
 */
export interface Certification extends BaseEntity {
  name: string;
  description: string;
  image: string;
}

/**
 * Location
 */
export interface Location extends BaseEntity {
  name: string;
  country?: string;
  type: string;
  position: {
    left: string;
    top: string;
  };
  details: string;
  address?: string;
  phone?: string;
  email?: string;
}

/**
 * Continent
 */
export interface Continent extends BaseEntity {
  name: string;
  locations: number[] | string[];
}

/**
 * Testimonial
 */
export interface Testimonial extends BaseEntity {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

/**
 * Blog Post
 */
export interface BlogPost extends BaseEntity {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
  url?: string;
}

/**
 * Sustainability Initiative
 */
export interface SustainabilityInitiative extends BaseEntity {
  title: string;
  description: string;
  icon: string;
  stat: string;
  label: string;
}

/**
 * Award
 */
export interface Award extends BaseEntity {
  title: string;
  year: string;
  description: string;
  image: string;
}

/**
 * Event
 */
export interface Event extends BaseEntity {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  city: string;
  country: string;
  description: string;
  image: string; // Logo path
  boothNumber?: string;
  website?: string;
  upcoming: boolean;
}

/**
 * Job Opening
 */
export interface JobOpening extends BaseEntity {
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Contract, etc.
  experience: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  isActive: boolean;
}

// ==============================
// DATA
// ==============================

/**
 * Product Categories Data
 */
export const productCategories: ProductCategory[] = [
  {
    id: 'standardized-extracts',
    slug: 'standardized-extracts',
    name: 'Standardized Herbal Extracts',
    description: 'Premium extracts with standardized active compounds for consistent potency and efficacy.',
    image: '/images/standardized-extract.jpg',
    count: 45,
  },
  {
    id: 'organic-extracts',
    slug: 'organic-extracts',
    name: 'Organic Extracts',
    description: 'Certified organic herbs processed without chemicals, maintaining natural goodness.',
    image: '/images/organic-extract-1.jpg',
    count: 32,
  },
  {
    id: 'branded-ingredients',
    slug: 'branded-ingredients',
    name: 'Branded Ingredients',
    description: 'Proprietary formulations with clinical backing',
    image: '/images/branded-ingredients-1.jpg',
    count: 18,
  },
  {
    id: 'probiotics',
    slug: 'probiotics',
    name: 'Probiotics',
    description: 'Shelf-stable probiotic strains for gut health',
    image: '/images/probiotics-1.jpg',
    count: 12,
  },
  {
    id: 'vitamins-minerals',
    slug: 'vitamins-minerals',
    name: 'Vitamins & Minerals',
    description: 'Essential nutrients for optimal health',
    image: '/images/vitamins-minerals-1.jpg',
    count: 24,
  },
  {
    id: 'bulk-formulations',
    slug: 'bulk-formulations',
    name: 'Bulk Formulations',
    description: 'Custom formulations for specific needs',
    image: '/images/bulk-formulations-2.jpeg',
    count: 10,
  },
];

/**
 * Products Data
 */
export const products: Product[] = [
  {
    id: "organic-andrographis",
    name: "Organic Andrographis Extract",
    slug: "organic-andrographis-extract",
    categoryId: "organic-extracts",
    categorySlug: "organic-extracts",
    categoryName: "Organic Extracts",
    standardization: "10%, 15%, 30% Andrographolides",
    latinName: "Andrographis paniculata",
    plantPart: "Leaf",
    description: "Organic Andrographis Extract is derived from certified organic Andrographis paniculata leaves through a clean extraction process. Standardized to contain 10%, 15%, or 30% andrographolides, this extract offers powerful immune support and anti-inflammatory properties. Available in both powder and granule forms, our organic extract maintains the full spectrum of beneficial compounds found in the plant while meeting strict organic certification requirements. Ideal for immune formulations, respiratory support products, and general wellness supplements.",
    shortDescription: "Organic Andrographis extract with standardized andrographolide content",
    image: "/images/products/organic-andrographis-extract.jpg",
    gallery: [
      "/images/products/organic-andrographis-extract.jpg",
      "/images/products/organic-andrographis-extract-1.jpg",
      "/images/products/organic-andrographis-extract-2.jpg",
    ],
    applications: ["Immune support formulations", "Respiratory health products", "Liver support supplements", "Seasonal wellness formulations", "Inflammatory response management"],
    benefits: [
      "Supports healthy immune system function",
      "Promotes respiratory health and comfort",
      "Helps maintain healthy liver function",
      "Provides antioxidant protection",
      "Supports balanced inflammatory response"
    ],
    specifications: {
      activeCompounds: "Andrographolides",
      standardization: "Available in 10%, 15%, and 30% andrographolide concentrations",
      form: "Powder, Granules",
      solubility: "Partially water soluble, soluble in ethanol",
      appearance: "Fine greenish-brown powder with characteristic odor",
      testing: "HPLC analysis for andrographolide content verification",
      heavyMetals: "Meets USP <232> specifications",
      shelfLife: "24 months when stored properly",
      storage: "Store in a cool, dry place away from direct sunlight",
      particleSize: "95% through 80 mesh",
      moisture: "≤5%",
      bulkDensity: "0.45-0.65 g/ml"
    },
    research: "Andrographis extract has been extensively studied for its immune-modulating and anti-inflammatory properties. Research indicates significant benefits for respiratory health, with multiple clinical studies showing efficacy for supporting immune function during seasonal challenges.",
    certifications: ["USDA Organic", "EU Organic", "FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.5 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.9 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '980 KB' },
    ],
    supplierInfo: {
      points: [
        "Confirm organic certification validity and scope",
        "Request organic handling and processing documentation",
        "Verify traceability systems for organic raw materials",
        "Ensure standardization methods comply with organic regulations",
        "Check for cross-contamination prevention protocols",
        "Review organic certification of all processing aids used"
      ]
    },
    productionDetails: {
      description: "Our Organic Andrographis Extract is produced using a specialized water-based extraction process that complies with organic regulations. The certified organic leaves are carefully harvested at peak potency and undergo gentle extraction to preserve the natural bioactive compounds. Our dedicated organic processing facility prevents cross-contamination with conventional materials, and we use only permitted processing aids that meet organic standards. The extract is standardized using compliant methods and carefully dried at controlled temperatures.",
      image: "/images/process-ch.webp"
    },
    packaging: {
      description: "Our Organic Andrographis Extract is packaged in food-grade materials that maintain product integrity and comply with organic handling requirements. Standard packaging includes 20kg fiber drums with food-grade polyethylene liners certified for organic products. Smaller quantities are available in 1kg and 5kg aluminum foil bags with appropriate organic labeling. All packaging materials are selected to prevent contamination and preserve the extract's potency during shipping and storage.",
      image: "/images/packaging-ch.webp"
    },
    factory: {
      description: "Our dedicated organic manufacturing facility operates under strict organic handling protocols and is certified by major international organic certification bodies. The facility features separate processing areas for organic materials, specialized cleaning procedures, and comprehensive documentation systems to ensure organic integrity. Regular inspections by certification agencies verify our compliance with organic standards throughout the production process.",
      image: "/images/factory-ch.webp"
    },
    certificationsSection: {
      description: "Our Organic Andrographis Extract holds multiple organic certifications including USDA Organic and EU Organic, ensuring compliance with the world's most stringent organic standards. These certifications verify our organic growing methods, clean processing techniques, and proper handling procedures. We maintain complete traceability documentation and undergo regular audits to verify ongoing compliance with all applicable organic regulations.",
      image: "/images/certifications-ch.webp"
    },
    events: {
      description: "Our team regularly presents our organic herbal extract line at major industry events including Biofach in Nuremberg, Natural Products Expo West and East, and Vitafoods Europe. These events provide opportunities to showcase our commitment to organic integrity and discuss the benefits of our certified organic extraction processes with customers and partners. We offer educational sessions on organic compliance and the advantages of truly organic herbal extracts.",
      image: "/images/events.jpg"
    },
    faqs: [
      {
        id: 1,
        question: "What are andrographolides and how do they support immune health?",
        answer: "Andrographolides are bioactive compounds that help modulate immune response and support the body's natural defense mechanisms."
      },
      {
        id: 2,
        question: "How does organic certification affect the extraction process?",
        answer: "Organic certification requires using only approved extraction methods and processing aids, typically water-based extraction without synthetic solvents."
      },
      {
        id: 3,
        question: "What is the difference between the various standardization percentages?",
        answer: "Higher percentages (30%) provide more concentrated andrographolides for targeted applications, while lower percentages (10-15%) offer a broader phytochemical profile."
      },
      {
        id: 4,
        question: "How is organic andrographis different from conventional extracts?",
        answer: "Organic andrographis is grown without synthetic pesticides or fertilizers and processed according to organic standards, preserving the natural phytocomplex."
      },
      {
        id: 5,
        question: "What testing methods are used to verify organic compliance?",
        answer: "We use HPLC for andrographolide content verification and additional testing for pesticide residues, heavy metals, and microbial contaminants to ensure organic compliance."
      }
    ]
  },
  {
    id: "organic-andrographis-1",
    name: "Organic Andrographis Extract",
    slug: "organic-andrographis-extract",
    categoryId: "organic-extracts",
    categorySlug: "organic-extracts",
    categoryName: "Organic Extracts",
    standardization: "10%, 15%, 30% Andrographolides",
    latinName: "Andrographis paniculata",
    plantPart: "Leaf",
    description: "Organic Andrographis Extract is derived from certified organic Andrographis paniculata leaves through a clean extraction process. Standardized to contain 10%, 15%, or 30% andrographolides, this extract offers powerful immune support and anti-inflammatory properties. Available in both powder and granule forms, our organic extract maintains the full spectrum of beneficial compounds found in the plant while meeting strict organic certification requirements. Ideal for immune formulations, respiratory support products, and general wellness supplements.",
    shortDescription: "Organic Andrographis extract with standardized andrographolide content",
    image: "/products/organic-andrographis-extract.jpg",
    gallery: [
      '/images/products/turmeric-extract-1.jpg',
      '/images/products/turmeric-extract-2.jpg',
      '/images/products/turmeric-extract-3.jpg',
    ],
    applications: ["Immune support formulations", "Respiratory health products", "Liver support supplements", "Seasonal wellness formulations", "Inflammatory response management"],
    benefits: [
      "Supports healthy immune system function",
      "Promotes respiratory health and comfort",
      "Helps maintain healthy liver function",
      "Provides antioxidant protection",
      "Supports balanced inflammatory response"
    ],
    specifications: {
      activeCompounds: "Andrographolides",
      standardization: "Available in 10%, 15%, and 30% andrographolide concentrations",
      form: "Powder, Granules",
      solubility: "Partially water soluble, soluble in ethanol",
      appearance: "Fine greenish-brown powder",
      testing: "HPLC analysis for andrographolide content verification",
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: "Andrographis extract has been extensively studied for its immune-modulating and anti-inflammatory properties. Research indicates significant benefits for respiratory health, with multiple clinical studies showing efficacy for supporting immune function during seasonal challenges.",
    certifications: ["USDA Organic", "EU Organic", "FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    featured: true,
   documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        "Confirm organic certification validity and scope",
        "Request organic handling and processing documentation",
        "Verify traceability systems for organic raw materials",
        "Ensure standardization methods comply with organic regulations",
        "Check for cross-contamination prevention protocols",
        "Review organic certification of all processing aids used"
      ]
    },
    productionDetails: {
      description: "Our Organic Andrographis Extract is produced using a specialized water-based extraction process that complies with organic regulations. The certified organic leaves are carefully harvested at peak potency and undergo gentle extraction to preserve the natural bioactive compounds. Our dedicated organic processing facility prevents cross-contamination with conventional materials, and we use only permitted processing aids that meet organic standards. The extract is standardized using compliant methods and carefully dried at controlled temperatures.",
      image: "/process-organic.webp"
    },
    packaging: {
      description: "Our Organic Andrographis Extract is packaged in food-grade materials that maintain product integrity and comply with organic handling requirements. Standard packaging includes 20kg fiber drums with food-grade polyethylene liners certified for organic products. Smaller quantities are available in 1kg and 5kg aluminum foil bags with appropriate organic labeling. All packaging materials are selected to prevent contamination and preserve the extract's potency during shipping and storage.",
      image: "/packaging-organic.webp"
    },
    factory: {
      description: "Our dedicated organic manufacturing facility operates under strict organic handling protocols and is certified by major international organic certification bodies. The facility features separate processing areas for organic materials, specialized cleaning procedures, and comprehensive documentation systems to ensure organic integrity. Regular inspections by certification agencies verify our compliance with organic standards throughout the production process.",
      image: "/factory-organic.webp"
    },
    certificationsSection: {
      description: "Our Organic Andrographis Extract holds multiple organic certifications including USDA Organic and EU Organic, ensuring compliance with the world's most stringent organic standards. These certifications verify our organic growing methods, clean processing techniques, and proper handling procedures. We maintain complete traceability documentation and undergo regular audits to verify ongoing compliance with all applicable organic regulations.",
      image: "/certifications-organic.webp"
    },
    events: {
      description: "Our team regularly presents our organic herbal extract line at major industry events including Biofach in Nuremberg, Natural Products Expo West and East, and Vitafoods Europe. These events provide opportunities to showcase our commitment to organic integrity and discuss the benefits of our certified organic extraction processes with customers and partners. We offer educational sessions on organic compliance and the advantages of truly organic herbal extracts.",
      image: "/events-organic.jpg"
    },
  faqs: [
      {
        id: 1,
        question: 'What makes your turmeric extract different from others?',
        answer: 'Our extract is standardized to 95% curcuminoids using HPLC verification and offers enhanced bioavailability through proprietary processing techniques.'
      },
      {
        id: 2,
        question: 'Is your turmeric extract water-soluble?',
        answer: 'We offer both standard and water-soluble versions. The water-soluble variant uses natural encapsulation technology for complete dispersibility in water.'
      },
      {
        id: 3,
        question: 'What is the recommended dosage?',
        answer: 'Typical dosages range from 500mg to 1000mg daily of the 95% extract, though specific applications may vary.'
      },
      {
        id: 4,
        question: 'Is your turmeric extract organic?',
        answer: 'Yes, we offer certified organic turmeric extract upon request.'
      },
      {
        id: 5,
        question: 'How is bioavailability enhanced in your extract?',
        answer: 'We use proprietary processing techniques that preserve the natural matrix of compounds that support absorption, and our water-soluble version employs natural encapsulation technology.'
      }
    ]
  },
  {
    id: 'turmeric',
    slug: 'turmeric-extract',
    name: 'Turmeric Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '95% Curcuminoids',
    latinName: 'Curcuma longa',
    plantPart: 'Rhizome',
    description: 'Our flagship turmeric extract contains 95% curcuminoids with enhanced bioavailability. Sourced from organic farms in India, this extract is perfect for supplements targeting inflammation and joint health. Each batch undergoes rigorous HPLC testing to ensure consistent potency and purity. The extract is available in both standard and water-soluble forms to meet diverse formulation needs.',
    shortDescription: 'Premium Turmeric extract standardized for curcuminoid content with enhanced bioavailability',
    image: '/images/products/turmeric-extract-1.jpg',
    gallery: [
      '/images/products/turmeric-extract-1.jpg',
      '/images/products/turmeric-extract-2.jpg',
      '/images/products/turmeric-extract-3.jpg',
    ],
    applications: [
      'Joint health supplements',
      'Anti-inflammatory formulations',
      'Cognitive support products',
      'Antioxidant blends',
      'Sports recovery supplements'
    ],
    benefits: [
      'Anti-inflammatory: Helps modulate inflammatory pathways and supports joint comfort',
      'Antioxidant: Provides powerful free radical scavenging activity',
      'Cognitive Support: Promotes brain health and cognitive function',
      'Cardiovascular: Supports heart health and circulation',
      'Digestive: Traditionally used to support digestive function'
    ],
    specifications: {
      activeCompounds: 'Curcuminoids (curcumin, demethoxycurcumin, bisdemethoxycurcumin)',
      standardization: 'Available in 95% curcuminoids concentration',
      form: 'Powder, Granules, Water-soluble',
      solubility: 'Standard: Partially water-soluble, soluble in ethanol; Water-soluble: Fully dispersible in water',
      appearance: 'Fine yellow-orange powder with characteristic odor',
      testing: 'HPLC analysis for curcuminoid content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Turmeric extract has been extensively studied for its anti-inflammatory and antioxidant properties. Research demonstrates curcumin\'s ability to modulate multiple inflammatory pathways, including COX-2, LOX, and NF-κB. Clinical studies support its benefits for joint health, cognitive function, and overall wellness. Enhanced formulations show improved bioavailability, addressing curcumin\'s naturally low absorption rate.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
        'Ensure they provide standardized extracts with consistent curcuminoid levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Turmeric Extract production follows a meticulous process that begins with carefully selected rhizomes sourced from organic farms in India. The rhizomes undergo thorough cleaning and preparation before extraction using our proprietary methods with USP-grade ethanol. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. For water-soluble variants, we utilize a specialized encapsulation technology that enhances both solubility and bioavailability without synthetic additives.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'Star Hi Herbs provides Turmeric Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, Non-GMO, and Organic certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What makes your turmeric extract different from others?',
        answer: 'Our extract is standardized to 95% curcuminoids using HPLC verification and offers enhanced bioavailability through proprietary processing techniques.'
      },
      {
        id: 2,
        question: 'Is your turmeric extract water-soluble?',
        answer: 'We offer both standard and water-soluble versions. The water-soluble variant uses natural encapsulation technology for complete dispersibility in water.'
      },
      {
        id: 3,
        question: 'What is the recommended dosage?',
        answer: 'Typical dosages range from 500mg to 1000mg daily of the 95% extract, though specific applications may vary.'
      },
      {
        id: 4,
        question: 'Is your turmeric extract organic?',
        answer: 'Yes, we offer certified organic turmeric extract upon request.'
      },
      {
        id: 5,
        question: 'How is bioavailability enhanced in your extract?',
        answer: 'We use proprietary processing techniques that preserve the natural matrix of compounds that support absorption, and our water-soluble version employs natural encapsulation technology.'
      }
    ]
  },
  {
    id: 'berberis',
    slug: 'berberis-aristata-extract',
    name: 'Berberis Aristata Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '1%, 5%, 6%, 10%, 60%, 70%, 98% Berberine',
    latinName: 'Berberis aristata',
    plantPart: 'Roots and bark',
    description: 'Berberis Aristata Extract is derived from the roots and bark of Indian Barberry, a revered herb in Ayurvedic medicine. Our extract is standardized using HPLC to ensure precise berberine content—an alkaloid compound recognized for its powerful biological activities. Available in multiple potencies ranging from 1% to an impressive 98% berberine, our extract provides options for various application requirements. Each batch is processed using USP-grade ethanol and undergoes rigorous quality testing to ensure potency and purity.',
    shortDescription: 'Premium Berberis aristata extract standardized for berberine content',
    image: '/images/products/berberis-extract.jpg',
    gallery: [
      '/images/products/berberis-extract.jpg',
      '/images/products/berberis-extract.jpg',
      '/images/products/berberis-extract.jpg',
    ],
    applications: [
      'Blood glucose management supplements',
      'Cardiovascular health formulations',
      'Digestive health products',
      'Immune support supplements',
      'Antimicrobial formulations'
    ],
    benefits: [
      'Metabolic Support: Helps maintain healthy blood glucose levels and lipid metabolism',
      'Cardiovascular Protection: Supports heart health and vascular function',
      'Digestive Health: Traditionally used for gastrointestinal issues and gut microbiome balance',
      'Anti-inflammatory: Helps reduce inflammatory markers and oxidative stress',
      'Antimicrobial: Natural support against various microorganisms'
    ],
    specifications: {
      activeCompounds: 'Berberine',
      standardization: 'Available in 1%, 5%, 6%, 10%, 60%, 70%, and 98% berberine concentrations',
      form: 'Powder, Granules',
      solubility: 'Partially water-soluble, soluble in ethanol',
      appearance: 'Fine yellowish powder with characteristic odor',
      testing: 'HPLC analysis for berberine content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Berberis aristata extract has been extensively studied for its metabolic and cardiovascular benefits. Research highlights berberine\'s ability to support healthy blood glucose levels through multiple mechanisms including AMPK activation. Clinical studies also demonstrate its potential for supporting healthy cholesterol levels, intestinal health, and immune function.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
        'Ensure they provide standardized extracts with consistent berberine levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Berberis Aristata Extract production begins with carefully selected plant material harvested from established cultivation sources in India. The roots and bark undergo thorough cleaning and preparation before extraction using our proprietary methods with USP-grade ethanol. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. For high-concentration extracts (60-98%), additional purification steps are implemented to achieve pharmaceutical-grade berberine content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'Star Hi Herbs provides Berberis Aristata Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What is berberine and what health benefits does it offer?',
        answer: 'Berberine is an alkaloid compound with benefits for metabolic health, particularly blood glucose management and cardiovascular support.'
      },
      {
        id: 2,
        question: 'What standardization method is used?',
        answer: 'HPLC analysis ensures precise berberine content verification.'
      },
      {
        id: 3,
        question: 'What is the highest concentration available?',
        answer: 'Our highest grade offers 98% berberine concentration for maximum potency.'
      },
      {
        id: 4,
        question: 'How should this extract be stored?',
        answer: 'In tightly closed containers away from heat, moisture, and direct light.'
      },
      {
        id: 5,
        question: 'Are there any known interactions with medications?',
        answer: 'As with many bioactive compounds, consumers should consult healthcare providers when using alongside medications.'
      }
    ]
  },
 {
    id: 'black-pepper',
    slug: 'black-pepper-extract',
    name: 'Black Pepper Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '5%, 95% Piperine',
    latinName: 'Piper nigrum',
    plantPart: 'Dried fruits',
    description: 'Black Pepper Extract is derived from the dried fruits of Piper nigrum, standardized to contain precise levels of piperine—the bioactive compound responsible for black pepper\'s distinctive taste and bioenhancement properties. Available in both 5% and 95% piperine concentrations, our extract offers flexibility for different application needs. The 95% concentration is particularly valued as a bioavailability enhancer in nutritional formulations. Each batch is extracted using USP-grade ethanol and verified via HPLC analysis to ensure consistent potency.',
    shortDescription: 'Premium Black Pepper extract standardized for piperine content',
    image: '/images/products/black-pepper-extract.jpg',
    gallery: [
      '/images/products/black-pepper-extract.jpg',
      '/images/products/black-pepper-extract-1.jpg',
      '/images/products/black-pepper-extract-2.jpg',
    ],
    applications: [
      'Bioavailability enhancement in nutritional formulas',
      'Thermogenic supplements',
      'Digestive support products',
      'Anti-inflammatory formulations',
      'Functional food additives'
    ],
    benefits: [
      'Bioavailability Enhancement: Increases absorption of nutrients and botanical compounds',
      'Thermogenic Action: Supports metabolic function and thermogenesis',
      'Digestive Support: Promotes digestive enzyme secretion and gastric function',
      'Anti-inflammatory: Helps moderate inflammatory responses',
      'Antioxidant Protection: Provides cellular protection against oxidative stress'
    ],
    specifications: {
      activeCompounds: 'Piperine',
      standardization: 'Available in 5% and 95% piperine concentrations',
      form: 'Powder, Granules',
      solubility: 'Partially water-soluble, soluble in ethanol',
      appearance: 'Fine dark brown to black powder with characteristic odor',
      testing: 'HPLC analysis for piperine content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Black pepper extract has been extensively studied for its bioenhancement properties, with research demonstrating its ability to increase the absorption of various nutrients and botanical compounds by 30-2000%. Studies show that piperine inhibits certain metabolic enzymes and enhances permeability of the intestinal lining, allowing compounds to enter the bloodstream more efficiently. Research also supports its thermogenic, digestive, and anti-inflammatory benefits.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO', 'Organic Available'],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
        'Ensure they provide standardized extracts with consistent piperine levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Black Pepper Extract production begins with carefully selected dried fruits sourced from premium cultivation regions in India. The fruits undergo thorough cleaning and preparation before extraction using our proprietary methods with USP-grade ethanol. For 95% piperine products, additional purification steps are implemented to achieve pharmaceutical-grade concentration. Each batch undergoes rigorous quality control testing including HPLC analysis to ensure potency, purity, and consistency of the piperine content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'Star Hi Herbs provides Black Pepper Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, Non-GMO, and Organic certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'How does piperine enhance bioavailability?',
        answer: 'Piperine inhibits certain metabolic enzymes and increases absorption in the intestinal lining, allowing more compounds to enter the bloodstream.'
      },
      {
        id: 2,
        question: 'What is the difference between 5% and 95% extracts?',
        answer: 'The 95% extract is highly concentrated for maximum bioenhancement effects, while the 5% extract provides moderate enhancement with more of black pepper\'s natural profile.'
      },
      {
        id: 3,
        question: 'What dosage is typically recommended for bioenhancement?',
        answer: 'Typically 5-10mg of 95% extract per serving, though specific ratios depend on the compounds being enhanced.'
      },
      {
        id: 4,
        question: 'Is this extract safe for long-term use?',
        answer: 'Generally recognized as safe at recommended doses for supplementation.'
      },
      {
        id: 5,
        question: 'Does this extract have a strong pepper taste?',
        answer: 'The 95% extract has minimal flavor impact at typical usage levels.'
      }
    ]
  },
 {
    id: 'boswellia',
    slug: 'boswellia-serrata-extract',
    name: 'Boswellia Serrata Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: 'Boswellic Acids-25%, AKBBA-30%, 40%, 45%, 50%, 65%',
    latinName: 'Boswellia serrata',
    plantPart: 'Gum resin',
    description: 'Boswellia Serrata Extract is derived from the gum resin of the Boswellia tree, standardized to contain precise levels of boswellic acids—the primary compounds responsible for its anti-inflammatory properties. Our extract is available in various standardizations, including special grades with enhanced levels of AKBBA (Acetyl-11-keto-β-boswellic acid), the most potent of the boswellic acids. Both HPLC and titration methods are used to ensure accurate standardization. Each batch is processed using USP-grade ethanol and undergoes comprehensive quality testing.',
    shortDescription: 'Premium Boswellia extract standardized for boswellic acids content',
    image: '/images/products/boswellia-extract.jpg',
    gallery: [
      '/images/products/boswellia-extract.jpg',
      '/images/products/boswellia-extract-1.jpg',
      '/images/products/boswellia-extract-2.jpg',
    ],
    applications: [
      'Joint health formulations',
      'Inflammatory response management',
      'Respiratory support products',
      'Gastrointestinal health supplements',
      'Sports recovery formulas'
    ],
    benefits: [
      'Anti-inflammatory: Inhibits 5-lipoxygenase enzyme, modulating inflammatory pathways',
      'Joint Support: Helps maintain joint mobility and comfort',
      'Respiratory Health: Traditionally used to support healthy breathing and lung function',
      'Gut Health: Supports healthy inflammatory balance in the digestive tract',
      'Tissue Protection: Helps maintain the integrity of connective tissues'
    ],
    specifications: {
      activeCompounds: 'Boswellic Acids, AKBBA (Acetyl-11-keto-β-boswellic acid)',
      standardization: 'HPLC: Boswellic Acids-25%, AKBBA-30%, 40%, 45%, 50%, 65%; Titration: 50%, 65%, 70%, 75%',
      form: 'Powder, Granules',
      solubility: 'Partially water-soluble, soluble in ethanol',
      appearance: 'Fine light yellow to brown powder with characteristic odor',
      testing: 'HPLC and Titration methods for boswellic acids content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Boswellia serrata extract has been extensively studied for its anti-inflammatory properties, with research demonstrating its ability to inhibit 5-lipoxygenase, a key enzyme in the inflammatory cascade. Clinical studies support its benefits for joint health, respiratory function, and intestinal wellness. Research shows that AKBBA, the most potent boswellic acid, delivers enhanced anti-inflammatory activity compared to other boswellic acids.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
        'Ensure they provide standardized extracts with consistent boswellic acids levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Boswellia Serrata Extract production begins with premium gum resin sourced from carefully selected trees in India. The resin undergoes thorough cleaning and preparation before extraction using our proprietary methods with USP-grade ethanol. For AKBBA-enriched extracts, specialized separation techniques are employed to concentrate this potent compound. Each batch undergoes comprehensive quality control testing including HPLC and titration analysis to ensure potency, purity, and consistency of the boswellic acids profile.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'Star Hi Herbs provides Boswellia Serrata Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, Non-GMO, and Organic certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What is AKBBA and why is it important?',
        answer: 'AKBBA (Acetyl-11-keto-β-boswellic acid) is the most potent of the boswellic acids, offering enhanced anti-inflammatory activity.'
      },
      {
        id: 2,
        question: 'What standardization methods are used?',
        answer: 'Both HPLC and titration methods for comprehensive characterization of boswellic acid content.'
      },
      {
        id: 3,
        question: 'What is the difference between the various standardization percentages?',
        answer: 'Higher percentages and AKBBA-enriched extracts offer more concentrated active compounds for targeted applications.'
      },
      {
        id: 4,
        question: 'How quickly do the effects of Boswellia extract manifest?',
        answer: 'Research suggests benefits may begin within 5-7 days, with optimal results after 4-8 weeks of consistent use.'
      },
      {
        id: 5,
        question: 'Is this extract suitable for vegetarian/vegan formulations?',
        answer: 'Yes, the extract is 100% plant-based and suitable for vegetarian/vegan products.'
      }
    ]
  },
 {
     id: 'capsicum',
     slug: 'capsicum-annum-extract',
     name: 'Capsicum Annum Extract',
     categoryId: 'standardized-extracts',
     categorySlug: 'standardized-extracts',
     categoryName: 'Standardized Herbal Extracts',
     standardization: '2% (beadlets), 2%, 95% Capsaicin',
     latinName: 'Capsicum annuum',
     plantPart: 'Fruit',
     description: 'Capsicum Annum Extract is derived from red hot peppers, standardized to precise levels of capsaicin—the compound responsible for its characteristic heat and bioactive properties. Our extract is available in multiple formats including a specialized 2% beadlet form for controlled release applications, as well as standard 2% and highly concentrated 95% forms. Each batch is verified via HPLC analysis to ensure consistent potency and extracted using USP-grade ethanol to maintain purity and quality.',
     shortDescription: 'Premium Capsicum extract standardized for capsaicin content',
     image: "/images/products/capsicum-extract.jpg",
     gallery: [
       '/images/products/capsicum-extract.jpg',
       '/images/products/capsicum-extract-1.jpg',
       '/images/products/capsicum-extract-2.jpg',
     ],
     applications: [
       'Thermogenic weight management formulas',
       'Pain relief topical applications',
       'Metabolism support supplements',
       'Sports performance products',
       'Cardiovascular health formulations'
     ],
     benefits: [
       'Activates thermogenic processes to support metabolism and energy expenditure',
       'Interacts with pain receptors for temporary relief in topical applications',
       'Helps enhance energy utilization and metabolic function',
       'Supports healthy blood flow and circulation',
       'Traditionally used to support digestive processes'
     ],
     specifications: {
       activeCompounds: 'Capsaicin',
       standardization: 'Available in 2% beadlets, 2% and 95% capsaicin concentrations',
       form: 'Powder, Granules',
       solubility: 'Varies by form, beadlets offer controlled dissolution',
       appearance: 'Fine reddish-orange powder',
       testing: 'HPLC analysis for capsaicin content verification',
       heavyMetals: 'Meets USP <232> specifications',
       shelfLife: '24 months when stored properly',
       storage: 'Store in a cool, dry place away from direct sunlight'
     },
     research: 'Capsicum extract has been studied extensively for its thermogenic properties and potential benefits for weight management. Research suggests capsaicin may increase energy expenditure, enhance fat oxidation, and provide temporary relief for muscle and joint discomfort when applied topically.',
     certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
     featured: true,
     documents: [
       { id: 1, name: 'Technical Data Sheet', size: '2.2 MB' },
       { id: 2, name: 'Safety Data Sheet', size: '1.7 MB' },
       { id: 3, name: 'Certificate of Analysis', size: '890 KB' },
     ],
     supplierInfo: {
       points: [
         'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
         'Ensure they provide standardized extracts with consistent capsaicin levels',
         'Check if they perform thorough testing for contaminants and active compounds',
         'Evaluate their manufacturing capabilities and capacity',
         'Request samples to verify quality before placing large orders',
         'Assess their technical support and documentation capabilities'
       ]
     },
     productionDetails: {
       description: 'Our Capsicum Annum Extract production follows a rigorous process that begins with carefully selected red peppers from trusted farms in India. The peppers undergo thorough cleaning and preparation before extraction using our proprietary methods that preserve the natural bioactive compounds. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes multiple filtration steps before being carefully dried and standardized to precise capsaicin concentrations via HPLC analysis.',
       image: '/images/process-ch.webp'
     },
     packaging: {
       description: 'Star Hi Herbs provides Capsicum Annum Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
       image: '/images/packaging-ch.webp'
     },
     factory: {
       description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
       image: "/images/factory-ch.webp"
     },
     certificationsSection: {
       description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
       image: "/images/certifications-ch.webp"
     },
     events: {
       description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
       image: "/images/events.jpg"
     },
     faqs: [
       {
         id: 1,
         question: 'What is the difference between the various forms of this extract?',
         answer: 'The 2% beadlet form provides controlled release and reduced irritation potential, while the 95% form offers maximum potency for specialized applications.'
       },
       {
         id: 2,
         question: 'What makes capsaicin beneficial for weight management?',
         answer: 'Capsaicin supports thermogenesis—the body\'s process of heat production that can enhance calorie burning.'
       },
       {
         id: 3,
         question: 'Is the extract safe for direct consumption?',
         answer: 'Our extracts are formulated for supplement use, with the beadlet form specifically designed to reduce irritation.'
       },
       {
         id: 4,
         question: 'What standardization method is used?',
         answer: 'HPLC analysis ensures precise capsaicin content verification.'
       },
       {
         id: 5,
         question: 'Are there specific handling precautions for the 95% extract?',
         answer: 'The high-potency extract should be handled with appropriate protection to prevent skin or eye irritation.'
       }
     ]
   },
 {
     id: 'cissus',
     slug: 'cissus-extract',
     name: 'Cissus Extract',
     categoryId: 'standardized-extracts',
     categorySlug: 'standardized-extracts',
     categoryName: 'Standardized Herbal Extracts',
     standardization: '2.5%, 5% 3-Ketosterones',
     latinName: 'Cissus quadrangularis',
     plantPart: 'Stem',
     description: 'Cissus Extract is derived from Cissus quadrangularis, a perennial plant traditionally used in Ayurvedic medicine for bone and joint health. Our extract is standardized by gravimetric analysis to contain precise levels of ketosterones—the compounds believed responsible for its beneficial effects on bone metabolism and joint function. Available in 2.5% and 5% standardizations, our extract undergoes careful processing using USP-grade ethanol to preserve the plant\'s natural activity while ensuring purity and consistency.',
     shortDescription: 'Premium Cissus extract standardized for ketosterone content',
     image: "/images/products/cissus-extract.jpg",
     gallery: [
       '/images/products/cissus-extract.jpg',
       '/images/products/cissus-extract.jpg',
       '/images/products/cissus-extract.jpg',
     ],
     applications: [
       'Bone health formulations',
       'Joint support supplements',
       'Sports recovery products',
       'Weight management supplements',
       'Fitness and bodybuilding formulas'
     ],
     benefits: [
       'Enhances bone mineral density and supports healthy bone metabolism',
       'Helps maintain joint comfort and mobility',
       'Assists with healthy weight management and metabolic function',
       'Supports tissue recovery after physical stress and exercise',
       'Traditionally used to support balanced anabolic processes'
     ],
     specifications: {
       activeCompounds: '3-Ketosterones',
       standardization: 'Available in 2.5% and 5% ketosterone concentrations',
       form: 'Powder, Granules',
       solubility: 'Water dispersible, soluble in ethanol',
       appearance: 'Fine greenish-brown powder',
       testing: 'Gravimetric analysis for ketosterone content verification',
       heavyMetals: 'Meets USP <232> specifications',
       shelfLife: '24 months when stored properly',
       storage: 'Store in a cool, dry place away from direct sunlight'
     },
     research: 'Cissus extract has been studied for its effects on bone metabolism, with research suggesting potential benefits for bone mineral density and joint function. Studies indicate it may support collagen synthesis and modulate cortisol levels, which could contribute to its traditional uses in bone health, joint comfort, and metabolic support.',
     certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO', 'Organic'],
     featured: true,
     documents: [
       { id: 1, name: 'Technical Data Sheet', size: '2.1 MB' },
       { id: 2, name: 'Safety Data Sheet', size: '1.6 MB' },
       { id: 3, name: 'Certificate of Analysis', size: '925 KB' },
     ],
     supplierInfo: {
       points: [
         'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
         'Ensure they provide standardized extracts with consistent ketosterone levels',
         'Check if they perform thorough testing for contaminants and active compounds',
         'Evaluate their manufacturing capabilities and capacity',
         'Request samples to verify quality before placing large orders',
         'Assess their technical support and documentation capabilities'
       ]
     },
     productionDetails: {
       description: 'Our Cissus Extract production follows a rigorous process that begins with carefully selected Cissus quadrangularis stems harvested from organic farms in India. The plant material undergoes thorough cleaning and preparation before extraction using our proprietary methods that preserve the natural bioactive compounds. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes multiple filtration steps before being carefully dried and standardized to precise ketosterone concentrations via gravimetric analysis.',
       image: '/images/process-ch.webp'
     },
     packaging: {
       description: 'Star Hi Herbs provides Cissus Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
       image: '/images/packaging-ch.webp'
     },
     factory: {
       description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
       image: "/images/factory-ch.webp"
     },
     certificationsSection: {
       description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, Non-GMO, and Organic certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
       image: "/images/certifications-ch.webp"
     },
     events: {
       description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
       image: "/images/events.jpg"
     },
     faqs: [
       {
         id: 1,
         question: 'What are ketosterones and how do they benefit bone health?',
         answer: 'Ketosterones are steroidal compounds that may stimulate osteoblast activity (bone-building cells) and support collagen synthesis.'
       },
       {
         id: 2,
         question: 'What standardization method is used?',
         answer: 'Gravimetric analysis ensures precise ketosterone content.'
       },
       {
         id: 3,
         question: 'Is this extract suitable for vegetarian/vegan formulations?',
         answer: 'Yes, the extract is 100% plant-based and suitable for vegetarian/vegan products.'
       },
       {
         id: 4,
         question: 'How does Cissus support weight management?',
         answer: 'Research suggests it may help modulate cortisol levels and support metabolic function.'
       },
       {
         id: 5,
         question: 'Are there synergistic ingredients that enhance Cissus extract\'s benefits?',
         answer: 'Often paired with calcium, vitamin D, and other bone/joint support nutrients for comprehensive formulations.'
       }
     ]
   },
 {
     id: 'coffee',
     slug: 'coffee-bean-extract',
     name: 'Coffee Bean Extract',
     categoryId: 'standardized-extracts',
     categorySlug: 'standardized-extracts',
     categoryName: 'Standardized Herbal Extracts',
     standardization: '25%, 35%, 45%, 50%, 60%, 75% Chlorogenic Acids',
     latinName: 'Coffea arabica',
     plantPart: 'Bean',
     description: 'Coffee Bean Extract is derived from unroasted Coffea arabica beans, carefully processed to preserve high levels of chlorogenic acids—the primary bioactive compounds responsible for its metabolic and antioxidant benefits. Available in multiple standardizations ranging from 25% to 75% chlorogenic acids, our extract provides options for various application requirements. Each batch is verified via HPLC analysis and processed using USP-grade ethanol to ensure potency and purity, while maintaining a low caffeine profile compared to regular coffee.',
     shortDescription: 'Premium Coffee Bean extract standardized for chlorogenic acid content',
     image: "/images/products/coffee-bean-extract.jpg",
     gallery: [
       '/images/products/coffee-bean-extract.jpg',
       '/images/products/coffee-bean-extract-1.jpg',
       '/images/products/coffee-bean-extract-2.jpg',
     ],
     applications: [
       'Weight management formulations',
       'Blood glucose management supplements',
       'Antioxidant products',
       'Energy and focus supplements',
       'Cardiovascular health formulations'
     ],
     benefits: [
       'Helps modulate glucose metabolism and fat utilization',
       'Rich in polyphenols that combat oxidative stress',
       'Provides gentle energy support without excessive caffeine',
       'Supports healthy blood pressure and vascular function',
       'Promotes focus and mental clarity'
     ],
     specifications: {
       activeCompounds: 'Chlorogenic Acids',
       standardization: 'Available in 25%, 35%, 45%, 50%, 60%, and 75% chlorogenic acid concentrations',
       form: 'Powder, Granules',
       solubility: 'Water dispersible, soluble in ethanol',
       appearance: 'Fine light brown to greenish-brown powder',
       testing: 'HPLC analysis for chlorogenic acid content verification',
       heavyMetals: 'Meets USP <232> specifications',
       shelfLife: '24 months when stored properly',
       storage: 'Store in a cool, dry place away from direct sunlight'
     },
     research: 'Coffee Bean Extract has been extensively studied for its effects on metabolism and glucose management. Research suggests that chlorogenic acids may help modulate glucose absorption and utilization, while providing significant antioxidant activity. Studies indicate potential benefits for weight management, cardiovascular health, and metabolic function.',
     certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
     featured: true,
     documents: [
       { id: 1, name: 'Technical Data Sheet', size: '2.3 MB' },
       { id: 2, name: 'Safety Data Sheet', size: '1.9 MB' },
       { id: 3, name: 'Certificate of Analysis', size: '975 KB' },
     ],
     supplierInfo: {
       points: [
         'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
         'Ensure they provide standardized extracts with consistent chlorogenic acid levels',
         'Check if they perform thorough testing for contaminants and active compounds',
         'Evaluate their manufacturing capabilities and capacity',
         'Request samples to verify quality before placing large orders',
         'Assess their technical support and documentation capabilities'
       ]
     },
     productionDetails: {
       description: 'Our Coffee Bean Extract production follows a rigorous process that begins with carefully selected unroasted Coffea arabica beans sourced from premium coffee plantations in India. The beans undergo thorough cleaning and preparation before extraction using our proprietary methods that maximize chlorogenic acid yield while minimizing caffeine content. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes multiple filtration steps before being carefully dried and standardized to precise chlorogenic acid concentrations via HPLC analysis.',
       image: '/images/process-ch.webp'
     },
     packaging: {
       description: 'Star Hi Herbs provides Coffee Bean Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
       image: '/images/packaging-ch.webp'
     },
     factory: {
       description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
       image: "/images/factory-ch.webp"
     },
     certificationsSection: {
       description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
       image: "/images/certifications-ch.webp"
     },
     events: {
       description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
       image: "/images/events.jpg"
     },
     faqs: [
       {
         id: 1,
         question: 'What are chlorogenic acids and what benefits do they offer?',
         answer: 'Chlorogenic acids are polyphenol compounds shown to support glucose metabolism, antioxidant protection, and cardiovascular health.'
       },
       {
         id: 2,
         question: 'Does this extract contain caffeine?',
         answer: 'It contains significantly less caffeine than coffee, as the extraction process focuses on chlorogenic acids.'
       },
       {
         id: 3,
         question: 'What standardization method is used?',
         answer: 'HPLC analysis ensures precise chlorogenic acid content verification.'
       },
       {
         id: 4,
         question: 'Why use green coffee bean extract instead of regular coffee?',
         answer: 'Unroasted beans contain much higher levels of chlorogenic acids, which are reduced during the roasting process.'
       },
       {
         id: 5,
         question: 'What is the difference between the various standardization percentages?',
         answer: 'Higher percentages offer more concentrated chlorogenic acids for targeted applications where maximum potency is desired.'
       }
     ]
   },
 {
     id: 'coleus',
     slug: 'coleus-forskohlii-extract',
     name: 'Coleus Forskohlii Extract',
     categoryId: 'standardized-extracts',
     categorySlug: 'standardized-extracts',
     categoryName: 'Standardized Herbal Extracts',
     standardization: '1%, 3.5%, 4%, 5%, 8%, 10%, 12%, 20%, 30%, 40%, 95%, 98% Forskolin',
     latinName: 'Plectranthus barbatus',
     plantPart: 'Root',
     description: 'Coleus Forskohlii Extract is derived from the roots of Plectranthus barbatus (formerly Coleus forskohlii), standardized to precise levels of forskolin—a diterpene compound known for its cellular signaling properties. Available in an exceptional range of standardizations from 1% to ultra-pure 98%, our extract provides solutions for every application requirement. Each batch undergoes HPLC analysis to verify forskolin content and is processed using USP-grade ethanol to ensure maximum purity and biological activity.',
     shortDescription: 'Premium Coleus Forskohlii extract standardized for forskolin content',
     image: "/images/products/coleus-forskohlii-extract.jpg",
     gallery: [
       '/images/products/coleus-forskohlii-extract.jpg',
       '/images/products/coleus-forskohlii-extract-1.jpg',
       '/images/products/coleus-forskohlii-extract-2.jpg',
     ],
     applications: [
       'Weight management formulations',
       'Testosterone support supplements',
       'Cardiovascular health products',
       'Respiratory support formulas',
       'Sports performance supplements'
     ],
     benefits: [
       'Activates adenylate cyclase enzyme, influencing numerous physiological processes',
       'Helps enhance metabolic rate and fat utilization',
       'May help maintain healthy testosterone levels',
       'Supports healthy blood pressure and vascular relaxation',
       'Traditionally used to promote bronchodilation and respiratory function'
     ],
     specifications: {
       activeCompounds: 'Forskolin',
       standardization: 'Available in 1%, 3.5%, 4%, 5%, 8%, 10%, 12%, 20%, 30%, 40%, 95%, and 98% forskolin concentrations',
       form: 'Powder, Granules',
       solubility: 'Partially soluble in water, soluble in ethanol',
       appearance: 'Fine light brown to tan powder',
       testing: 'HPLC analysis for forskolin content verification',
       heavyMetals: 'Meets USP <232> specifications',
       shelfLife: '24 months when stored properly',
       storage: 'Store in tightly closed containers away from heat, moisture, and direct light'
     },
     research: 'Coleus Forskohlii Extract has been studied extensively for its effects on cellular signaling via cAMP activation. Research suggests potential benefits for metabolic function, body composition, testosterone levels, cardiovascular health, and respiratory function. The compound forskolin is also used in research settings as a tool to understand cellular signaling pathways.',
     certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
     featured: true,
     documents: [
       { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
       { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
       { id: 3, name: 'Certificate of Analysis', size: '980 KB' },
     ],
     supplierInfo: {
       points: [
         'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
         'Ensure they provide standardized extracts with consistent forskolin levels',
         'Check if they perform thorough testing for contaminants and active compounds',
         'Evaluate their manufacturing capabilities and capacity',
         'Request samples to verify quality before placing large orders',
         'Assess their technical support and documentation capabilities'
       ]
     },
     productionDetails: {
       description: 'Our Coleus Forskohlii Extract production follows a rigorous process that begins with carefully selected roots of Plectranthus barbatus sourced from premium cultivation sites in India. The roots undergo thorough cleaning and preparation before extraction using our proprietary methods that maximize forskolin yield. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes multiple filtration steps before being carefully dried and standardized to precise forskolin concentrations via HPLC analysis. For high-purity grades (95% and 98%), additional purification steps are implemented to achieve exceptional potency.',
       image: '/images/process-ch.webp'
     },
     packaging: {
       description: 'Star Hi Herbs provides Coleus Forskohlii Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
       image: '/images/packaging-ch.webp'
     },
     factory: {
       description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
       image: "/images/factory-ch.webp"
     },
     certificationsSection: {
       description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
       image: "/images/certifications-ch.webp"
     },
     events: {
       description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
       image: "/images/events.jpg"
     },
     faqs: [
       {
         id: 1,
         question: 'What is forskolin and how does it work?',
         answer: 'Forskolin is a diterpene compound that activates the enzyme adenylate cyclase, which increases cyclic AMP (cAMP) levels in cells, influencing numerous physiological processes.'
       },
       {
         id: 2,
         question: 'What is the difference between the various standardization percentages?',
         answer: 'Lower percentages (1-10%) are typically used for general supplementation, while higher percentages (40-98%) provide maximum potency for specialized applications.'
       },
       {
         id: 3,
         question: 'What standardization method is used?',
         answer: 'HPLC analysis ensures precise forskolin content verification.'
       },
       {
         id: 4,
         question: 'Is this extract suitable for vegetarian/vegan formulations?',
         answer: 'Yes, the extract is 100% plant-based and suitable for vegetarian/vegan products.'
       },
       {
         id: 5,
         question: 'How should this extract be stored?',
         answer: 'In tightly closed containers away from heat, moisture, and direct light.'
       }
     ]
   },
 {
     id: 'commiphora',
     slug: 'commiphora-mukul-extract',
     name: 'Commiphora Mukul Extract',
     categoryId: 'standardized-extracts',
     categorySlug: 'standardized-extracts',
     categoryName: 'Standardized Herbal Extracts',
     standardization: '2%, 3%, 5%, 5.5% Guggulsterones',
     latinName: 'Commiphora mukul',
     plantPart: 'Resin',
     description: 'Commiphora Mukul Extract is derived from the resin of the guggul tree, standardized to contain precise levels of guggulsterones—plant steroids with bioactive properties particularly beneficial for lipid metabolism. Our extract is verified using both HPLC and UV spectroscopy to ensure accurate standardization, available in concentrations ranging from 2% to 5.5% guggulsterones. Each batch is carefully processed using USP-grade ethanol to preserve the integrity of the active compounds while ensuring purity and consistency.',
     shortDescription: 'Premium Commiphora Mukul extract standardized for guggulsterone content',
     image: "/images/products/commiphora-mukul-extract.jpg",
     gallery: [
       '/images/products/commiphora-mukul-extract.jpg',
       '/images/products/commiphora-mukul-extract-1.jpg',
       '/images/products/commiphora-mukul-extract-2.jpg',
     ],
     applications: [
       'Cholesterol management formulations',
       'Weight management supplements',
       'Joint health products',
       'Thyroid support formulas',
       'Anti-inflammatory supplements'
     ],
     benefits: [
       'Supports healthy cholesterol and triglyceride levels',
       'Helps maintain healthy thyroid activity and metabolism',
       'Modulates inflammatory pathways in various tissues',
       'Traditionally used to support joint comfort and mobility',
       'Assists with healthy weight management and metabolic function'
     ],
     specifications: {
       activeCompounds: 'Guggulsterones (E and Z)',
       standardization: 'HPLC: 2%, 5.5% and UV: 2%, 3%, 5% guggulsterone concentrations',
       form: 'Powder, Granules',
       solubility: 'Partially soluble in water, soluble in ethanol',
       appearance: 'Fine yellowish-brown powder with characteristic odor',
       testing: 'HPLC and UV spectroscopy for guggulsterone content verification',
       heavyMetals: 'Meets USP <232> specifications',
       shelfLife: '24 months when stored properly',
       storage: 'Store in a cool, dry place away from direct sunlight'
     },
     research: 'Commiphora Mukul Extract has been studied for its effects on lipid metabolism, with research suggesting potential benefits for cholesterol management and thyroid function. Studies indicate guggulsterones may modulate bile acid synthesis and thyroid hormone activity, which could contribute to its traditional uses in metabolic health, weight management, and joint function.',
     certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
     featured: true,
     documents: [
       { id: 1, name: 'Technical Data Sheet', size: '2.2 MB' },
       { id: 2, name: 'Safety Data Sheet', size: '1.7 MB' },
       { id: 3, name: 'Certificate of Analysis', size: '915 KB' },
     ],
     supplierInfo: {
       points: [
         'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
         'Ensure they provide standardized extracts with consistent guggulsterone levels',
         'Check if they perform thorough testing for contaminants and active compounds',
         'Evaluate their manufacturing capabilities and capacity',
         'Request samples to verify quality before placing large orders',
         'Assess their technical support and documentation capabilities'
       ]
     },
     productionDetails: {
       description: 'Our Commiphora Mukul Extract production follows a rigorous process that begins with carefully selected resin from the guggul tree harvested from sustainable sources in India. The resin undergoes thorough cleaning and preparation before extraction using our proprietary methods that maximize guggulsterone yield. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes multiple filtration steps before being carefully dried and standardized to precise guggulsterone concentrations via dual verification using both HPLC and UV spectroscopy.',
       image: '/images/process-ch.webp'
     },
     packaging: {
       description: 'Star Hi Herbs provides Commiphora Mukul Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
       image: '/images/packaging-ch.webp'
     },
     factory: {
       description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
       image: "/images/factory-ch.webp"
     },
     certificationsSection: {
       description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
       image: "/images/certifications-ch.webp"
     },
     events: {
       description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
       image: "/images/events.jpg"
     },
     faqs: [
       {
         id: 1,
         question: 'What are guggulsterones and how do they support cholesterol management?',
         answer: 'Guggulsterones are plant steroids that may influence bile acid regulation and cholesterol synthesis pathways.'
       },
       {
         id: 2,
         question: 'What standardization methods are used?',
         answer: 'Both HPLC and UV spectroscopy ensure precise guggulsterone content verification.'
       },
       {
         id: 3,
         question: 'Are there different types of guggulsterones in the extract?',
         answer: 'Yes, primarily E-guggulsterone and Z-guggulsterone, both with biological activity.'
       },
       {
         id: 4,
         question: 'How does this extract support thyroid function?',
         answer: 'Research suggests guggulsterones may help stimulate thyroid function and support healthy metabolism.'
       },
       {
         id: 5,
         question: 'Is this extract suitable for vegetarian/vegan formulations?',
         answer: 'Yes, the extract is 100% plant-based and suitable for vegetarian/vegan products.'
       }
     ]
   },
  {
    id: 'ashwagandha',
    slug: 'ashwagandha-extract',
    name: 'Ashwagandha Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '1.5%, 2.5%, 5%, 8%, 10% Withanolides',
    latinName: 'Withania somnifera',
    plantPart: 'Root',
    description: 'Ashwagandha Extract is derived from the roots of Withania somnifera, an adaptogenic herb revered in Ayurvedic medicine for centuries. Our premium extract is standardized using both HPLC and gravimetric methods to ensure consistent levels of withanolides, the primary bioactive compounds. Available in various potencies ranging from 1.5% to 10% withanolides, our extract offers versatile options for different formulation needs. All extracts are processed using USP-grade ethanol, ensuring purity and quality.',
    shortDescription: 'Premium Ashwagandha extract standardized for withanolide content',
    image: '/images/products/ashwagandha-extract.jpg',
    gallery: [
      '/images/products/ashwagandha-extract.jpg',
      '/images/products/ashwagandha-extract-1.jpg',
      '/images/products/ashwagandha-extract-2.jpg',
    ],
    applications: [
      'Stress management formulations',
      'Adaptogenic supplements',
      'Sleep support products',
      'Cognitive function enhancers',
      'Sports nutrition and recovery supplements'
    ],
    benefits: [
      'Adaptogenic: Helps body manage stress and restore balance',
      'Cognitive Support: Promotes mental clarity and cognitive function',
      'Sleep Enhancement: Traditional use for promoting restful sleep',
      'Energy Balance: Supports sustained energy without stimulant effects',
      'Immune Support: Helps maintain healthy immune function'
    ],
    specifications: {
      activeCompounds: 'Withanolides',
      standardization: 'HPLC: 0.35% (withaferin A), 1.5%, 2.5%, 3%, 5%; Gravimetry: 1.5%, 2.5%, 5%, 8%, 10%',
      form: 'Powder, Granules',
      solubility: 'Partially water-soluble, soluble in ethanol',
      appearance: 'Fine light brown powder with characteristic odor',
      testing: 'HPLC and Gravimetric methods for withanolide content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Ashwagandha extract has been extensively studied for its adaptogenic properties and stress-reducing effects. Clinical research supports its benefits for reducing cortisol levels, improving sleep quality, enhancing cognitive function, and supporting recovery after physical exertion. Multiple studies have demonstrated its potential in supporting overall wellbeing and resilience to everyday stressors.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO', 'Organic Available'],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
        'Ensure they provide standardized extracts with consistent withanolide levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Ashwagandha Extract production follows a meticulous process that begins with carefully selected root material sourced from trusted growers in India. The roots undergo thorough cleaning and preparation before extraction using our proprietary methods with USP-grade ethanol. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes multiple filtration steps before being carefully dried and standardized to precise withanolide concentrations using both HPLC and gravimetric methods.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'Star Hi Herbs provides Ashwagandha Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, Non-GMO, and Organic certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What are withanolides and why are they important?',
        answer: 'Withanolides are steroidal lactones that provide Ashwagandha\'s adaptogenic benefits, helping the body manage stress.'
      },
      {
        id: 2,
        question: 'What standardization methods are used?',
        answer: 'Both HPLC and gravimetric methods for precise withanolide content verification.'
      },
      {
        id: 3,
        question: 'Is organic Ashwagandha extract available?',
        answer: 'Yes, we offer organically certified Ashwagandha extract.'
      },
      {
        id: 4,
        question: 'How does Ashwagandha support sleep?',
        answer: 'It helps reduce cortisol levels and promotes relaxation, supporting better sleep quality.'
      },
      {
        id: 5,
        question: 'What concentrations are available?',
        answer: 'Various standardizations from 1.5% up to 10% withanolides.'
      }
    ]
  },
  {
    id: 'andrographis',
    slug: 'andrographis-extract',
    name: 'Andrographis Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '10%, 20%, 30%, 50%, 90% Andrographolides',
    latinName: 'Andrographis paniculata',
    plantPart: 'Aerial parts',
    description: 'Andrographis Extract, sourced from Andrographis paniculata, is a potent botanical extract valued for its high concentration of andrographolides—bitter compounds with strong anti-inflammatory and immune-support properties. Our extract is available in a wide range of standardizations: 10%, 20%, 30%, 50%, and 90% andrographolides, ensuring flexibility for different applications and dosage requirements. It is offered in powder and granule forms, extracted using ethanol of USP grade, and quality-assured through HPLC testing.',
    shortDescription: 'Premium Andrographis extract standardized for andrographolide content',
    image: '/images/products/andrographis-extract.jpg',
    gallery: [
      '/images/products/andrographis-extract.jpg',
      '/images/products/andrographis-extract-1.jpg',
      '/images/products/andrographis-extract-2.jpg',
    ],
    applications: [
      'Immune system boosters',
      'Cold and flu relief supplements',
      'Inflammatory response formulations',
      'Liver health support products',
      'Herbal capsules and tablets'
    ],
    benefits: [
      'Immunomodulatory: Enhances immune response and supports natural defense',
      'Anti-inflammatory: Helps reduce inflammation and may support joint health',
      'Hepatoprotective: Traditionally used for liver detox and function',
      'Antimicrobial: Natural support against microbial infections',
      'Supports respiratory wellness and overall immunity'
    ],
    specifications: {
      activeCompounds: 'Andrographolides',
      standardization: 'Available in 10%, 20%, 30%, 50%, and 90% andrographolide concentrations',
      form: 'Powder, Granules',
      solubility: 'Partially water-soluble, soluble in ethanol',
      appearance: 'Fine greenish-brown powder with characteristic odor',
      testing: 'HPLC analysis for andrographolide content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Andrographis extract has been extensively studied for its immunomodulatory and anti-inflammatory properties. Clinical research has demonstrated its efficacy in supporting respiratory health and reducing the duration and severity of common cold symptoms. Studies also suggest potential benefits for liver function and digestive health.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO', 'Organic Available'],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
        'Ensure they provide standardized extracts with consistent andrographolide levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Andrographis Extract production begins with carefully selected plant material harvested at optimal times to ensure maximum andrographolide content. The aerial parts undergo a controlled drying process before extraction using our ethanol-water extraction technology. The extract is then concentrated and standardized to precise andrographolide percentages through advanced separation techniques. Each batch undergoes rigorous quality control testing to ensure potency, purity, and consistency.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'Star Hi Herbs provides Andrographis Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, Non-GMO, and Organic certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What is the key active in Andrographis Extract?',
        answer: 'Andrographolides, standardized up to 90% using HPLC testing.'
      },
      {
        id: 2,
        question: 'What forms are available?',
        answer: 'Powder and granules.'
      },
      {
        id: 3,
        question: 'Is this extract organically certified?',
        answer: 'Yes, organic variant is available.'
      },
      {
        id: 4,
        question: 'What solvent is used for extraction?',
        answer: 'Will update soon'
      },
      {
        id: 5,
        question: 'How is it tested for active compounds?',
        answer: 'Standardization and verification by HPLC (High-Performance Liquid Chromatography).'
      }
    ]
  },
  {
    id: 'amla',
    slug: 'amla-extract',
    name: 'Amla Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '20%, 40% Tannins',
    latinName: 'Emblica officinalis',
    plantPart: 'Fruit',
    description: 'Amla Extract, derived from the fruit of Emblica officinalis, is a powerful herbal ingredient known for its rich tannin content and potent antioxidant properties. Standardized by titration to contain either 20% or 40% tannins, our extract is available in powder and granule forms to support versatile formulation needs. The extraction process uses ethanol grade USP solvents, ensuring purity and safety. This ingredient is commonly used in nutraceuticals, functional foods, cosmeceuticals, and personal care products for its rejuvenating and immune-boosting properties.',
    shortDescription: 'Premium Amla extract standardized for tannin content',
    image: '/images/products/amla.jpg',
    gallery: [
      '/images/products/amla-1.jpg',
      '/images/products/amla-4.jpg',
      '/images/products/amla-3.jpg',
    ],
    applications: [
      'Antioxidant formulations',
      'Immune support supplements',
      'Skin and hair care products',
      'Functional beverages',
      'Digestive health formulations'
    ],
    benefits: [
      'Rich in tannins offering natural antioxidant protection',
      'Supports immune system function',
      'Promotes skin rejuvenation and collagen synthesis',
      'Enhances hair vitality and scalp health',
      'Supports digestive wellness'
    ],
    specifications: {
      activeCompounds: 'Tannins',
      standardization: 'Available in 20% and 40% tannin concentrations',
      form: 'Powder, Granules',
      solubility: 'Water dispersible, soluble in ethanol',
      appearance: 'Fine light brown powder',
      testing: 'Titration methods for tannin content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Amla extract has been studied for its potent antioxidant properties, with research showing it contains one of the highest concentrations of vitamin C and polyphenols among natural sources. Studies indicate potential benefits for immune function, skin health, and digestive wellness.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: true,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)',
        'Ensure they provide standardized extracts with consistent active compound levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Amla Extract production follows a rigorous process that begins with carefully selected raw materials. The fruits are thoroughly cleaned and prepared for extraction using our proprietary methods that preserve the natural bioactive compounds. Our state-of-the-art extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes multiple filtration steps before being carefully dried and standardized to precise tannin concentrations.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'Star Hi Herbs provides Amla Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage. Custom packaging solutions are available upon request.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What is the difference between 20% and 40% tannin standardization?',
        answer: 'The percentage refers to the concentration of tannins in the extract. The 40% standardization provides a higher concentration of active compounds, which may be preferred for applications requiring more potent antioxidant activity. The 20% standardization is often used in formulations where a milder effect is desired or when cost considerations are important.'
      },
      {
        id: 2,
        question: 'Is your Amla extract water-soluble?',
        answer: 'Our Amla extract is water-dispersible, meaning it can be incorporated into water-based formulations. For complete solubility in water, we recommend our specialized water-soluble version which is treated with natural solubilizers to enhance dissolution in aqueous systems.'
      },
      {
        id: 3,
        question: 'What is the recommended dosage for Amla extract?',
        answer: 'The recommended dosage varies depending on the application. For dietary supplements, typical dosages range from 250mg to 1000mg per day of the 20% extract. For cosmetic applications, concentrations typically range from 0.1% to 1% in the final formulation. We recommend consulting with a formulation specialist for your specific application.'
      },
      {
        id: 4,
        question: 'Does your Amla extract contain vitamin C?',
        answer: 'While fresh Amla fruit is known for its high vitamin C content, our extraction process focuses on concentrating the tannins and polyphenols. The extract does contain some naturally occurring vitamin C, but it is not standardized for vitamin C content. The antioxidant activity comes primarily from the tannins and other polyphenolic compounds.'
      },
      {
        id: 5,
        question: 'What is the shelf life of your Amla extract?',
        answer: 'When stored properly in a cool, dry place away from direct sunlight, our Amla extract has a shelf life of 24 months from the date of manufacture. We recommend checking the Certificate of Analysis for the specific batch for exact expiration information.'
      }
    ]
  },
  {
    id: 'cucumis-sativus',
    slug: 'cucumis-sativus-extract',
    name: 'Cucumis Sativus Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '1%, 1.5% Iminosugars',
    latinName: 'Cucumis sativus',
    plantPart: 'Fruit',
    description: 'Cucumis Sativus Extract is derived from cucumber fruit, standardized to contain precise levels of iminosugars—compounds with unique structural properties that influence carbohydrate metabolism. Available in 1% and 1.5% standardizations, our extract undergoes careful HPLC analysis to ensure consistent potency. Processed using USP-grade ethanol, this extract preserves the natural bioactive properties of cucumber while providing a concentrated form suitable for various health applications.',
    shortDescription: 'Premium cucumber extract standardized for iminosugar content',
    image: '/images/products/cucumis-extract.jpg',
    gallery: [
      '/images/products/cucumis-extract.jpg',
      '/images/products/cucumis-extract-1.jpg',
      '/images/products/cucumis-extract-2.jpg'
    ],
    applications: [
      'Blood glucose management formulations',
      'Carbohydrate metabolism supplements',
      'Kidney health support products',
      'Skin health formulations',
      'Hydration support supplements'
    ],
    benefits: [
      'Supports healthy carbohydrate metabolism',
      'Promotes kidney and urinary health',
      'Enhances skin hydration and rejuvenation',
      'Provides antioxidant protection',
      'Supports cellular hydration and fluid balance'
    ],
    specifications: {
      activeCompounds: 'Iminosugars',
      standardization: 'Available in 1% and 1.5% iminosugar concentrations',
      form: 'Powder, Granules',
      solubility: 'Water dispersible',
      appearance: 'Fine powder',
      testing: 'HPLC methods for iminosugar content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Cucumis Sativus extract has been studied for its potential benefits in carbohydrate metabolism and kidney health. The iminosugars present in the extract have unique structural properties that may influence glucose absorption and metabolism.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: false,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications',
        'Ensure they provide standardized extracts with consistent active compound levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Cucumis Sativus Extract production follows a rigorous process that begins with carefully selected cucumbers. The fruits are thoroughly cleaned and prepared for extraction using proprietary methods that preserve the natural bioactive compounds. Our extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes HPLC analysis for standardization of iminosugar content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'We provide Cucumis Sativus Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What are iminosugars and how do they support health?',
        answer: 'Iminosugars are compounds that structurally resemble sugars but contain a nitrogen atom in place of oxygen, potentially influencing carbohydrate metabolism.'
      },
      {
        id: 2,
        question: 'What standardization method is used?',
        answer: 'HPLC analysis ensures precise iminosugar content verification.'
      },
      {
        id: 3,
        question: 'How does this extract support skin health?',
        answer: 'It contains compounds that support cellular hydration, antioxidant protection, and natural rejuvenation processes.'
      },
      {
        id: 4,
        question: 'Is this extract suitable for vegetarian/vegan formulations?',
        answer: 'Yes, the extract is 100% plant-based and suitable for vegetarian/vegan products.'
      },
      {
        id: 5,
        question: 'What other compounds besides iminosugars are present in the extract?',
        answer: 'The extract contains various phytonutrients including flavonoids, cucurbitacins, and natural minerals that work synergistically.'
      }
    ]
  },
  {
    id: 'turmeric-1',
    slug: 'turmeric-extract-1',
    name: 'Turmeric Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '35%, 50%, 75%, 85%, 90%, 95% Curcuminoids',
    latinName: 'Curcuma longa',
    plantPart: 'Rhizome',
    description: 'Turmeric Extract is derived from the rhizomes of Curcuma longa, standardized to contain precise levels of curcuminoids—the powerful polyphenol compounds responsible for turmeric\'s vibrant color and remarkable health benefits. Available in multiple potencies ranging from 35% to 95% curcuminoids, our extract provides options for various application requirements. Each batch undergoes HPLC analysis to verify curcuminoid content and is processed using USP-grade ethanol to ensure maximum purity and biological activity.',
    shortDescription: 'Premium turmeric extract standardized for curcuminoid content',
    image: "/images/products/turmeric-extract-1.jpg",
    gallery: [
      '/images/products/turmeric-extract-1.jpg',
      '/images/products/turmeric-extract-2.jpg',
      '/images/products/turmeric-extract-3.jpg'
    ],
    applications: [
      'Anti-inflammatory formulations',
      'Antioxidant supplements',
      'Joint health products',
      'Cognitive support formulas',
      'Cardiovascular health supplements'
    ],
    benefits: [
      'Modulates multiple inflammatory pathways and mediators',
      'Powerful free radical scavenging and cellular protection',
      'Helps maintain joint comfort and healthy mobility',
      'Supports brain function and neural protection',
      'Promotes healthy circulation and vascular function'
    ],
    specifications: {
      activeCompounds: 'Curcuminoids',
      standardization: 'Available in 35%, 50%, 75%, 85%, 90%, 95% curcuminoid concentrations',
      form: 'Powder, Granules',
      solubility: 'Limited water solubility; specialized delivery systems available for enhanced bioavailability',
      appearance: 'Vibrant yellow-orange powder',
      testing: 'HPLC methods for curcuminoid content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Turmeric extract has been extensively studied for its anti-inflammatory, antioxidant, and joint-supporting properties. The curcuminoids present in the extract have demonstrated effects on multiple inflammatory pathways and provide powerful free radical scavenging activity.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: false,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications',
        'Ensure they provide standardized extracts with consistent active compound levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Cucumis Sativus Extract production follows a rigorous process that begins with carefully selected cucumbers. The fruits are thoroughly cleaned and prepared for extraction using proprietary methods that preserve the natural bioactive compounds. Our extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes HPLC analysis for standardization of iminosugar content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'We provide Cucumis Sativus Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What are curcuminoids and how do they work?',
        answer: 'Curcuminoids are polyphenol compounds (primarily curcumin, demethoxycurcumin, and bisdemethoxycurcumin) that modulate inflammatory pathways and provide antioxidant protection.'
      },
      {
        id: 2,
        question: 'What is the difference between the various standardization percentages?',
        answer: 'Higher percentages offer more concentrated curcuminoids for targeted applications where maximum potency is desired.'
      },
      {
        id: 3,
        question: 'What standardization method is used?',
        answer: 'HPLC analysis ensures precise curcuminoid content verification.'
      },
      {
        id: 4,
        question: 'Is this extract water-soluble?',
        answer: 'In its natural state, curcuminoids have limited water solubility; specialized delivery systems are available for enhanced bioavailability.'
      },
      {
        id: 5,
        question: 'Is organic turmeric extract available?',
        answer: 'Yes, we offer organically certified turmeric extract options.'
      }
    ]
  },
  {
    id: 'turmeric-granules',
    slug: 'turmeric-extract-granules',
    name: 'Turmeric Extract Granules',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '7.5%, 85%, 90% Curcuminoids',
    latinName: 'Curcuma longa',
    plantPart: 'Rhizome',
    description: 'Turmeric Extract Granules offer the same powerful health benefits as our powder form but in a convenient granular format optimized for manufacturing efficiency. Standardized via HPLC to ensure precise curcuminoid content, these granules are available in select potencies (7.5%, 85%, and 90% curcuminoids) designed for various applications. The granulation process maintains the integrity of the active compounds while enhancing stability, reducing dust formation, and improving flow properties during manufacturing processes.',
    shortDescription: 'Premium turmeric extract granules standardized for curcuminoid content',
    image: "/images/products/turmeric-extract-1.jpg",
    gallery: [
      '/images/products/turmeric-extract-1.jpg',
      '/images/products/turmeric-extract-2.jpg',
      '/images/products/turmeric-extract-3.jpg'
    ],
    applications: [
      'Tablet and capsule manufacturing',
      'Direct compression formulations',
      'Anti-inflammatory health blends',
      'Functional food ingredients',
      'Joint health supplements'
    ],
    benefits: [
      'Improved flow properties and reduced dust for manufacturing efficiency',
      'Maintains powerful inflammatory modulation as powder form',
      'Uniform particle size ensures homogeneous mixing in formulations',
      'Granular form provides improved stability and reduced hygroscopicity',
      'Compatible with various compression and encapsulation equipment'
    ],
    specifications: {
      activeCompounds: 'Curcuminoids',
      standardization: 'Available in 7.5%, 85%, and 90% curcuminoid concentrations',
      form: 'Granules',
      solubility: 'Limited water solubility; specialized delivery systems available for enhanced bioavailability',
      appearance: 'Vibrant yellow-orange granules',
      testing: 'HPLC methods for curcuminoid content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Turmeric extract has been extensively studied for its anti-inflammatory properties. The granular format maintains all the therapeutic benefits while offering significant manufacturing advantages for tablet and capsule production.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: false,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications',
        'Ensure they provide standardized extracts with consistent active compound levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Cucumis Sativus Extract production follows a rigorous process that begins with carefully selected cucumbers. The fruits are thoroughly cleaned and prepared for extraction using proprietary methods that preserve the natural bioactive compounds. Our extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes HPLC analysis for standardization of iminosugar content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'We provide Cucumis Sativus Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What are the advantages of granules over powder form?',
        answer: 'Granules offer better flowability, reduced dust, improved stability, and more efficient manufacturing processes.'
      },
      {
        id: 2,
        question: 'Are the curcuminoids preserved during the granulation process?',
        answer: 'Yes, our specialized granulation process maintains the integrity and potency of the curcuminoids.'
      },
      {
        id: 3,
        question: 'What standardization method is used for the granules?',
        answer: 'HPLC analysis ensures precise curcuminoid content verification.'
      },
      {
        id: 4,
        question: 'Are these granules suitable for direct compression?',
        answer: 'Yes, they are specifically designed for direct compression applications.'
      },
      {
        id: 5,
        question: 'Why is there a 7.5% option alongside the high-potency options?',
        answer: 'The 7.5% option provides a balanced potency suitable for functional food applications and formulations where milder turmeric character is desired.'
      }
    ]
  },
  {
    id: 'dgl',
    slug: 'dgl-extract',
    name: 'DGL Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '5%, 20%, 25% Glycyrrhizic Acid',
    latinName: 'Glycyrrhiza glabra',
    plantPart: 'Root',
    description: 'DGL (Deglycyrrhizinated Licorice) Extract is a specialized form of licorice extract where most of the glycyrrhizic acid has been removed while preserving the beneficial flavonoids and other compounds. Available in standardizations of 5%, 20%, and 25% residual glycyrrhizic acid, our extract provides options for various applications. Each batch undergoes HPLC analysis to verify glycyrrhizic acid content and is processed using USP-grade ethanol to ensure consistent quality and potency.',
    shortDescription: 'Specialized licorice extract with reduced glycyrrhizic acid content',
    image: "/images/products/dgl-extract.jpg",
    gallery: [
      '/images/products/dgl-extract.jpg',
      '/images/products/dgl-extract.jpg',
      '/images/products/dgl-extract.jpg'
    ],
    applications: [
      'Digestive health formulations',
      'Gastric comfort supplements',
      'Oral health products',
      'Respiratory support formulas',
      'Immune support supplements'
    ],
    benefits: [
      'Helps maintain the integrity of the gastric mucosal barrier',
      'Traditionally used for mouth and throat comfort',
      'Supports healthy respiratory function and throat tissue',
      'Contains flavonoids that provide cellular protection',
      'Offers natural demulcent effects for tissue comfort'
    ],
    specifications: {
      activeCompounds: 'Glycyrrhizic Acid (reduced content)',
      standardization: 'Available in 5%, 20%, and 25% glycyrrhizic acid concentrations',
      form: 'Powder, Granules',
      solubility: 'Water dispersible',
      appearance: 'Fine powder',
      testing: 'HPLC methods for glycyrrhizic acid content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'DGL extract has been studied for its benefits in digestive health, particularly for its ability to support the integrity of the gastric mucosal barrier. By reducing the glycyrrhizic acid content, DGL provides the beneficial properties of licorice while minimizing potential side effects associated with glycyrrhizic acid.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: false,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications',
        'Ensure they provide standardized extracts with consistent active compound levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Cucumis Sativus Extract production follows a rigorous process that begins with carefully selected cucumbers. The fruits are thoroughly cleaned and prepared for extraction using proprietary methods that preserve the natural bioactive compounds. Our extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes HPLC analysis for standardization of iminosugar content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'We provide Cucumis Sativus Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What is DGL and how does it differ from regular licorice extract?',
        answer: 'DGL is licorice extract with most of the glycyrrhizic acid removed, reducing potential side effects while maintaining beneficial properties.'
      },
      {
        id: 2,
        question: 'Why monitor glycyrrhizic acid content?',
        answer: 'Glycyrrhizic acid can influence blood pressure and electrolyte balance at high doses; DGL processing reduces these concerns.'
      },
      {
        id: 3,
        question: 'What standardization method is used?',
        answer: 'HPLC analysis ensures precise glycyrrhizic acid content verification.'
      },
      {
        id: 4,
        question: 'What are the main benefits of DGL for digestive health?',
        answer: 'DGL supports the mucous membrane lining of the stomach and intestines, promoting comfort and healthy function.'
      },
      {
        id: 5,
        question: 'Is this extract suitable for long-term use?',
        answer: 'The reduced glycyrrhizic acid content makes DGL suitable for longer-term use compared to regular licorice, though healthcare provider guidance is recommended.'
      }
    ]
  },
  {
    id: 'fenugreek',
    slug: 'fenugreek-extract',
    name: 'Fenugreek Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: '20%, 40%, 50%, 60% Saponins',
    latinName: 'Trigonella foenum-graecum',
    plantPart: 'Seeds',
    description: 'Fenugreek Extract is derived from the seeds of Trigonella foenum-graecum, standardized to contain precise levels of saponins—compounds believed responsible for many of fenugreek\'s beneficial effects. Available in multiple potencies ranging from 20% to 60% saponins, our extract undergoes gravimetric analysis to ensure consistent standardization. Each batch is processed using USP-grade ethanol to preserve the active compounds while ensuring purity and quality.',
    shortDescription: 'Premium fenugreek extract standardized for saponin content',
    image: "/images/products/fenugreek-extract.jpg",
    gallery: [
      '/images/products/fenugreek-extract.jpg',
      '/images/products/fenugreek-extract-1.jpg',
      '/images/products/fenugreek-extract-2.jpg'
    ],
    applications: [
      'Glucose management formulations',
      'Lactation support supplements',
      'Testosterone support products',
      'Digestive health formulas',
      'Culinary applications'
    ],
    benefits: [
      'Supports healthy blood glucose levels and insulin sensitivity',
      'Traditionally used to promote healthy milk production in nursing mothers',
      'May help maintain healthy testosterone levels in men',
      'Supports comfortable digestion and gastrointestinal function',
      'Traditionally used to support healthy appetite and satiety'
    ],
    specifications: {
      activeCompounds: 'Saponins',
      standardization: 'Available in 20%, 40%, 50%, and 60% saponin concentrations',
      form: 'Powder, Granules',
      solubility: 'Water dispersible',
      appearance: 'Fine powder',
      testing: 'Gravimetric methods for saponin content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Fenugreek extract has been studied for its potential benefits in glucose metabolism, lactation support, and hormonal balance. The saponins present in the extract are believed to be responsible for many of these beneficial effects.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: false,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications',
        'Ensure they provide standardized extracts with consistent active compound levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Cucumis Sativus Extract production follows a rigorous process that begins with carefully selected cucumbers. The fruits are thoroughly cleaned and prepared for extraction using proprietary methods that preserve the natural bioactive compounds. Our extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes HPLC analysis for standardization of iminosugar content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'We provide Cucumis Sativus Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What are saponins and how do they support health?',
        answer: 'Saponins are plant compounds that may help regulate glucose metabolism, influence hormone production, and support digestive function.'
      },
      {
        id: 2,
        question: 'What standardization method is used?',
        answer: 'Gravimetric analysis ensures precise saponin content verification.'
      },
      {
        id: 3,
        question: 'What is the difference between the various standardization percentages?',
        answer: 'Higher percentages offer more concentrated saponins for targeted applications where maximum potency is desired.'
      },
      {
        id: 4,
        question: 'Does fenugreek extract have a strong odor?',
        answer: 'It has a characteristic maple-like aroma that can be incorporated into flavor systems or masked as needed.'
      },
      {
        id: 5,
        question: 'Is organic fenugreek extract available?',
        answer: 'Yes, we offer organically certified fenugreek extract options.'
      }
    ]
  },
  {
    id: 'garcinia-cambogia',
    slug: 'garcinia-cambogia-extract',
    name: 'Garcinia Cambogia Extract',
    categoryId: 'standardized-extracts',
    categorySlug: 'standardized-extracts',
    categoryName: 'Standardized Herbal Extracts',
    standardization: 'Ca Salt - 50%, 60%; Water Soluble - 50%, 60%, 65%, 70% HCA',
    latinName: 'Garcinia gummi-gutta',
    plantPart: 'Fruit Rind',
    description: 'Garcinia cambogia Extract is derived from the fruit rind of Garcinia gummi-gutta, standardized to contain precise levels of hydroxycitric acid (HCA)—the primary active compound responsible for its metabolic benefits. Available in multiple formats including calcium salt forms (50% and 60%) and water-soluble forms (50% to 70%), our extract provides options for various application requirements. Each batch undergoes HPLC analysis to verify HCA content and is processed using USP-grade ethanol to ensure potency and purity.',
    shortDescription: 'Premium garcinia extract standardized for hydroxycitric acid (HCA) content',
    image: "/images/products/garcinia-cambogia-extract.jpg",
    gallery: [
      '/images/products/garcinia-cambogia-extract.jpg',
      '/images/products/garcinia-cambogia-extract.jpg',
      '/images/products/garcinia-cambogia-extract.jpg'
    ],
    applications: [
      'Weight management formulations',
      'Appetite control supplements',
      'Metabolism support products',
      'Carbohydrate metabolism formulas',
      'Sports nutrition supplements'
    ],
    benefits: [
      'Helps support feelings of fullness and reduced food intake',
      'May influence the conversion of carbohydrates to fat',
      'Assists with healthy weight management and energy utilization',
      'May influence serotonin levels to support mood and appetite control',
      'Supports energy utilization during physical activity'
    ],
    specifications: {
      activeCompounds: 'Hydroxycitric Acid (HCA)',
      standardization: 'Available in calcium salt forms (50%, 60%) and water-soluble forms (50%, 60%, 65%, 70%)',
      form: 'Powder, Granules',
      solubility: 'Water-soluble forms available for liquid applications',
      appearance: 'Fine powder',
      testing: 'HPLC methods for HCA content verification',
      heavyMetals: 'Meets USP <232> specifications',
      shelfLife: '24 months when stored properly',
      storage: 'Store in a cool, dry place away from direct sunlight'
    },
    research: 'Garcinia cambogia extract has been studied for its potential benefits in weight management and metabolism. The hydroxycitric acid (HCA) present in the extract may inhibit citrate lyase, an enzyme involved in converting carbohydrates to fat, and may influence serotonin levels affecting appetite.',
    certifications: ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    featured: false,
    documents: [
      { id: 1, name: 'Technical Data Sheet', size: '2.4 MB' },
      { id: 2, name: 'Safety Data Sheet', size: '1.8 MB' },
      { id: 3, name: 'Certificate of Analysis', size: '956 KB' },
    ],
    supplierInfo: {
      points: [
        'Verify that the supplier has proper certifications',
        'Ensure they provide standardized extracts with consistent active compound levels',
        'Check if they perform thorough testing for contaminants and active compounds',
        'Evaluate their manufacturing capabilities and capacity',
        'Request samples to verify quality before placing large orders',
        'Assess their technical support and documentation capabilities'
      ]
    },
    productionDetails: {
      description: 'Our Cucumis Sativus Extract production follows a rigorous process that begins with carefully selected cucumbers. The fruits are thoroughly cleaned and prepared for extraction using proprietary methods that preserve the natural bioactive compounds. Our extraction facility employs advanced technology to ensure consistent potency and purity in every batch. The extract undergoes HPLC analysis for standardization of iminosugar content.',
      image: '/images/process-ch.webp'
    },
    packaging: {
      description: 'We provide Cucumis Sativus Extract in various packaging options to meet different customer needs. Our standard packaging includes 25kg fiber drums with double polyethylene liners to protect the extract from moisture and contamination. For smaller quantities, we offer 1kg and 5kg aluminum foil bags. All packaging materials are food-grade and designed to maintain product stability during shipping and storage.',
      image: '/images/packaging-ch.webp'
    },
    factory: {
      description: 'Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with the latest extraction and processing technology. The plant operates under strict GMP conditions with controlled environments for each production stage. Our facility includes dedicated areas for raw material handling, extraction, filtration, drying, standardization, quality control testing, and packaging. The entire operation is designed to ensure efficiency, quality, and compliance with international standards.',
      image: '/images/factory-ch.webp'
    },
    certificationsSection: {
      description: 'Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies and customers to verify ongoing compliance. These certifications reflect our commitment to quality, safety, and continuous improvement.',
      image: '/images/certifications-ch.webp'
    },
    events: {
      description: 'Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We regularly exhibit at Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events allow us to showcase our latest innovations, connect with customers, and stay updated on industry trends. Our team of experts is always available at these exhibitions to discuss specific requirements and provide technical information about our products.',
      image: '/images/events.jpg'
    },
    faqs: [
      {
        id: 1,
        question: 'What is hydroxycitric acid (HCA) and how does it work?',
        answer: 'HCA is a natural compound that may inhibit citrate lyase, an enzyme involved in converting carbohydrates to fat, and may influence serotonin levels affecting appetite.'
      },
      {
        id: 2,
        question: 'What is the difference between calcium salt and water-soluble forms?',
        answer: 'Calcium salt forms provide stability, while water-soluble forms offer enhanced dissolution for liquid applications.'
      },
      {
        id: 3,
        question: 'What standardization method is used?',
        answer: 'HPLC analysis ensures precise HCA content verification.'
      },
      {
        id: 4,
        question: 'What is the recommended dosage range?',
        answer: 'Typically 500-1500mg of 60% extract per day, divided into 2-3 doses before meals.'
      },
      {
        id: 5,
        question: 'Should this extract be taken with food or on an empty stomach?',
        answer: 'For optimal results, it\'s typically recommended 30-60 minutes before meals.'
      }
    ]
  },
  {
    "id": "fenugreek-1",
    "slug": "fenugreek-extract-1",
    "name": "Fenugreek Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "20%, 40%, 50%, 60% Saponins",
    "latinName": "Trigonella foenum-graecum",
    "plantPart": "Seed",
    "description": "Fenugreek Extract is derived from the seeds of Trigonella foenum-graecum, standardized to contain precise levels of saponins—compounds believed responsible for many of fenugreek's beneficial effects. Available in multiple potencies ranging from 20% to 60% saponins, our extract undergoes gravimetric analysis to ensure consistent standardization. Each batch is processed using USP-grade ethanol to preserve the active compounds while ensuring purity and quality.",
    "shortDescription": "Premium Fenugreek extract standardized for saponin content",
    "image": "/images/products/fenugreek-extract.jpg",
    "gallery": [
      "/images/products/fenugreek-extract.jpg",
      "/images/products/fenugreek-extract-1.jpg",
      "/images/products/fenugreek-extract-2.jpg"
    ],
    "applications": [
      "Glucose management formulations",
      "Lactation support supplements",
      "Testosterone support products",
      "Digestive health formulas",
      "Culinary applications"
    ],
    "benefits": [
      "Supports healthy blood glucose levels and insulin sensitivity",
      "Promotes healthy milk production in nursing mothers",
      "Helps maintain healthy testosterone levels in men",
      "Supports comfortable digestion and gastrointestinal function",
      "Traditionally used to support healthy appetite and satiety"
    ],
    "specifications": {
      "activeCompounds": "Saponins",
      "standardization": "Available in 20%, 40%, 50%, and 60% saponin concentrations",
      "form": "Powder, Granules",
      "solubility": "Water dispersible, soluble in ethanol",
      "appearance": "Fine yellowish-brown powder",
      "testing": "Gravimetric analysis for saponin content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Fenugreek extract has been extensively studied for its potential role in supporting glucose metabolism, promoting lactation, and influencing hormonal balance. Clinical studies suggest that fenugreek saponins may contribute to improved insulin sensitivity, healthy testosterone levels, and digestive support.",
    "certifications": ['FSSC 22000', 'ISO 9001:2015', 'Kosher', 'Halal', 'Non-GMO'],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.5 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.9 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.0 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier provides standardized extracts with consistent saponin levels",
        "Ensure proper certifications like FSSC 22000, ISO 9001:2015, Kosher, Halal",
        "Check for gravimetric analysis reports for active compound verification",
        "Assess their capability to supply both conventional and organic options",
        "Request samples to validate quality, potency, and sensory characteristics",
        "Evaluate the supplier’s support for technical documentation and custom specifications"
      ]
    },
    "productionDetails": {
      "description": "Our Fenugreek Extract production begins with sourcing premium quality seeds from trusted farms in India. The seeds are carefully cleaned and processed using our advanced extraction technology with USP-grade ethanol to maintain bioactive integrity. Standardization is achieved via gravimetric methods to ensure consistent saponin levels in every batch. Rigorous quality control processes ensure purity, potency, and compliance with international standards.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Star Hi Herbs provides Fenugreek Extract in 25kg fiber drums with double polyethylene liners to protect against moisture and contamination. Smaller quantities are available in 1kg and 5kg aluminum foil bags. All packaging is food-grade and ensures product stability during transit and storage. Custom packaging options can be arranged upon request.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our state-of-the-art manufacturing facility in Hassan, Karnataka, spans over 50,000 square feet and operates under GMP guidelines. Equipped with advanced extraction, filtration, drying, and standardization technologies, the plant ensures the production of premium quality extracts with strict adherence to international standards.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains world-class certifications to ensure product quality, safety, and compliance. Our facility holds FSSC 22000, ISO 9001:2015 certifications, and our products are Kosher, Halal, and Non-GMO certified. Organic certification is also available for select products. We undergo regular audits to maintain the highest standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs actively participates in global exhibitions such as Vitafoods Europe, Supply Side West, CPhI Worldwide, and Natural Products Expo. These events provide a platform to showcase our latest botanical innovations, connect with industry leaders, and stay updated with market trends.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are saponins and how do they support health?",
        "answer": "Saponins are plant compounds that may help regulate glucose metabolism, influence hormone production, and support digestive function."
      },
      {
        "id": 2,
        "question": "What standardization method is used?",
        "answer": "Gravimetric analysis ensures precise saponin content verification in each batch."
      },
      {
        "id": 3,
        "question": "What is the difference between the various standardization percentages?",
        "answer": "Higher percentages offer more concentrated saponins, ideal for formulations requiring maximum potency, while lower percentages may be used for broader applications or cost efficiency."
      },
      {
        "id": 4,
        "question": "Does fenugreek extract have a strong odor?",
        "answer": "Fenugreek extract has a characteristic maple-like aroma, which can be desirable in culinary applications or masked in supplements as needed."
      },
      {
        "id": 5,
        "question": "Is organic fenugreek extract available?",
        "answer": "Yes, we offer organically certified fenugreek extract options to meet clean label and organic product requirements."
      }
    ]
  },
  {
    "id": "garcinia-cambogia-1",
    "slug": "garcinia-cambogia-extract-1",
    "name": "Garcinia Cambogia Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "Ca Salt 50%, 60%; Water Soluble 50%, 60%, 65%, 70%",
    "latinName": "Garcinia gummi-gutta",
    "plantPart": "Fruit Rind",
    "description": "Garcinia Cambogia Extract is derived from the fruit rind of Garcinia gummi-gutta, standardized to contain precise levels of hydroxycitric acid (HCA)—the primary active compound responsible for its metabolic benefits. Available in multiple formats including calcium salt forms (50% and 60%) and water-soluble forms (50% to 70%), our extract provides options for various application requirements. Each batch undergoes HPLC analysis to verify HCA content and is processed using USP-grade ethanol to ensure potency and purity.",
    "shortDescription": "Premium Garcinia cambogia extract standardized for Hydroxycitric Acid (HCA) content.",
    "image": "/images/products/garcinia-cambogia-extract.jpg",
    "gallery": [
      "/images/products/garcinia-cambogia-extract.jpg",
      "/images/products/garcinia-cambogia-extract.jpg",
      "/images/products/garcinia-cambogia-extract.jpg"
    ],
    "applications": [
      "Weight management formulations",
      "Appetite control supplements",
      "Metabolism support products",
      "Carbohydrate metabolism formulas",
      "Sports nutrition supplements"
    ],
    "benefits": [
      "Helps support feelings of fullness and reduced food intake",
      "May influence the conversion of carbohydrates to fat",
      "Assists with healthy weight management and energy utilization",
      "May influence serotonin levels to support mood and appetite control",
      "Supports energy utilization during physical activity"
    ],
    "specifications": {
      "activeCompounds": "Hydroxycitric Acid (HCA)",
      "standardization": "Ca Salt 50%, 60%; Water Soluble 50%, 60%, 65%, 70%",
      "form": "Powder, Granules",
      "solubility": "Water dispersible (water-soluble versions), soluble in ethanol",
      "appearance": "Fine off-white to light yellow powder",
      "testing": "HPLC analysis for HCA content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Garcinia cambogia extract has been studied for its potential role in supporting healthy weight management, appetite regulation, and carbohydrate metabolism. Clinical research suggests that hydroxycitric acid (HCA) may inhibit the enzyme citrate lyase and influence serotonin levels, contributing to reduced food intake and fat storage.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.7 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.1 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Confirm the availability of both calcium salt and water-soluble standardized options",
        "Request HPLC analysis reports to ensure HCA content accuracy",
        "Ensure facility certifications like FSSC 22000, ISO 9001:2015, Kosher, Halal",
        "Evaluate solubility options depending on application (solid or liquid formulation)",
        "Request samples for organoleptic evaluation and formulation testing",
        "Assess the supplier’s support for documentation and custom specifications"
      ]
    },
    "productionDetails": {
      "description": "Our Garcinia Cambogia Extract production process starts with selecting high-quality fruit rinds from India. The rinds are processed using USP-grade ethanol to extract maximum levels of Hydroxycitric Acid (HCA). Through precise HPLC standardization, our extracts achieve consistent potency across both calcium salt and water-soluble forms, ensuring product effectiveness and quality.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Star Hi Herbs supplies Garcinia Cambogia Extract in 25kg fiber drums with double polyethylene liners to ensure product stability and safety. Small pack options (1kg and 5kg) are also available in aluminum foil bags. Custom packaging can be provided to meet specific client needs.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our modern extraction facility in Hassan, Karnataka, adheres to GMP practices and is equipped with specialized technology for standardized botanical extract production. We ensure precise control over solvent usage, temperature, and drying processes to retain bioactivity and purity.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs' manufacturing plant is certified under FSSC 22000 and ISO 9001:2015. All extracts are Kosher and Halal certified and produced under strict quality control. Our processes align with Non-GMO practices to meet global compliance requirements.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs regularly exhibits at major nutraceutical and ingredient shows such as Vitafoods Europe, SupplySide West, and CPhI, offering opportunities to engage with formulators and brand owners worldwide.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What is hydroxycitric acid (HCA) and how does it work?",
        "answer": "HCA is a natural compound that may inhibit citrate lyase, an enzyme involved in converting carbohydrates to fat, and may influence serotonin levels affecting appetite."
      },
      {
        "id": 2,
        "question": "What is the difference between calcium salt and water-soluble forms?",
        "answer": "Calcium salt forms provide stability, while water-soluble forms offer enhanced dissolution properties suitable for liquid and beverage applications."
      },
      {
        "id": 3,
        "question": "What standardization method is used?",
        "answer": "HPLC analysis is used to ensure precise and consistent HCA content in each batch."
      },
      {
        "id": 4,
        "question": "What is the recommended dosage range?",
        "answer": "Typically, 500-1500 mg of 60% standardized extract per day, divided into 2-3 doses before meals, is suggested. Always consult a healthcare provider."
      },
      {
        "id": 5,
        "question": "Should this extract be taken with food or on an empty stomach?",
        "answer": "For best results, Garcinia Cambogia Extract is recommended 30–60 minutes before meals."
      }
    ]
  },
  {
    "id": "garcinia-indica",
    "slug": "garcinia-indica-extract",
    "name": "Garcinia Indica Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "Ca Salt 50%",
    "latinName": "Garcinia indica",
    "plantPart": "Fruit Rind",
    "description": "Garcinia Indica Extract is derived from the fruit rind of Garcinia Indica (Kokum), an Indian fruit closely related to Garcinia cambogia but with a distinct phytochemical profile. Standardized to contain 50% hydroxycitric acid (HCA) in calcium salt form, our extract utilizes the traditional Indian superfruit known for its culinary and health applications. Each batch undergoes HPLC analysis to verify HCA content and is processed using USP-grade ethanol to ensure consistent quality and potency.",
    "shortDescription": "Garcinia Indica (Kokum) Extract standardized for 50% Hydroxycitric Acid (HCA) content, offering antioxidant and metabolic support.",
    "image": "/images/products/garcinia-indica-extract.jpg",
    "gallery": [
      "/images/products/garcinia-indica-extract.jpg",
      "/images/products/garcinia-indica-extract.jpg",
      "/images/products/garcinia-indica-extract.jpg"
    ],
    "applications": [
      "Weight management formulations",
      "Metabolic support supplements",
      "Antioxidant products",
      "Culinary applications",
      "Anti-inflammatory formulations"
    ],
    "benefits": [
      "Helps maintain healthy weight management and fat metabolism",
      "Provides antioxidant protection through garcinol and anthocyanins",
      "Supports healthy inflammatory response in various tissues",
      "Traditionally used to promote digestive comfort",
      "Offers natural souring properties for functional food applications"
    ],
    "specifications": {
      "activeCompounds": "Hydroxycitric Acid (HCA)",
      "standardization": "Ca Salt 50%",
      "form": "Powder, Granules",
      "solubility": "Water dispersible",
      "appearance": "Fine off-white to pale yellow powder",
      "testing": "HPLC analysis for HCA content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Garcinia Indica Extract has been studied for its HCA-mediated benefits in weight management and metabolic health. In addition to HCA, the presence of unique antioxidants like garcinol and anthocyanins offers added support for oxidative balance, digestive comfort, and anti-inflammatory action, making it a valuable functional ingredient for various health-focused formulations.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.5 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.7 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.0 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Confirm the standardized 50% HCA calcium salt content with HPLC analysis report",
        "Request technical documents like TDS, SDS, and COA",
        "Verify certifications including FSSC 22000, ISO 9001:2015, Kosher, Halal",
        "Assess potential for culinary and supplement applications",
        "Request a sample for sensory evaluation (taste, solubility, aroma)",
        "Discuss formulation compatibility for antioxidant and metabolic health products"
      ]
    },
    "productionDetails": {
      "description": "Our Garcinia Indica Extract is sourced from fresh Kokum fruit rinds, sustainably harvested in India. The production process involves gentle ethanol extraction and precise HPLC standardization to ensure consistent Hydroxycitric Acid (HCA) content. We prioritize bioactive preservation, food-grade safety, and solvent traceability for all batches.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Star Hi Herbs supplies Garcinia Indica Extract in 25kg fiber drums with double polyethylene liners. We also offer 1kg and 5kg small pack options in aluminum foil bags for pilot batches and premium formulations. Custom packing options are available based on customer requirements.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility, located in Hassan, Karnataka, adheres to global GMP guidelines for botanical extract manufacturing. State-of-the-art extraction, drying, and quality assurance systems ensure product purity and consistent potency.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains industry-leading certifications such as FSSC 22000 and ISO 9001:2015 for quality and safety. All products are manufactured following Non-GMO standards and are Kosher and Halal certified.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "We participate in international industry events such as Vitafoods, SupplySide West, and CPhI, where we showcase innovative herbal extracts and connect with global health and wellness brands.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "How does Garcinia Indica differ from Garcinia cambogia?",
        "answer": "While both extracts contain Hydroxycitric Acid (HCA), Garcinia Indica (Kokum) also provides garcinol and anthocyanins, adding strong antioxidant benefits beyond just metabolic support."
      },
      {
        "id": 2,
        "question": "What standardization method is used?",
        "answer": "HPLC analysis is used to accurately standardize the Hydroxycitric Acid (HCA) content to 50%."
      },
      {
        "id": 3,
        "question": "Why is this extract only available as a calcium salt?",
        "answer": "The calcium salt form offers optimal HCA stability and enhanced bioavailability in dietary supplements and functional foods."
      },
      {
        "id": 4,
        "question": "Can this extract be used in food applications?",
        "answer": "Yes, Garcinia Indica Extract is food-grade and its natural souring properties make it ideal for functional beverages and culinary innovations."
      },
      {
        "id": 5,
        "question": "Does this extract have the same potential benefits as Garcinia cambogia?",
        "answer": "It shares HCA-related metabolic benefits while adding the bonus of potent antioxidant protection from garcinol and anthocyanins."
      }
    ]
  },
  {
    "id": "ginger-extract",
    "slug": "ginger-extract",
    "name": "Ginger Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "5%, 10%, 20% Gingerols",
    "latinName": "Zingiber officinale",
    "plantPart": "Rhizome",
    "description": "Ginger Extract is derived from the rhizomes of Zingiber officinale, standardized to contain precise levels of gingerols—the primary pungent compounds responsible for ginger's characteristic flavor and health benefits. Available in 5%, 10%, and 20% standardizations, our extract undergoes HPLC analysis to ensure consistent potency. Each batch is processed using USP-grade ethanol to preserve the bioactive compounds while ensuring purity and quality.",
    "shortDescription": "Ginger extract standardized for 5%, 10%, and 20% gingerols, promoting digestive health, anti-nausea support, and joint comfort.",
    "image": "/images/products/ginger-extract.jpg",
    "gallery": [
      "/images/products/ginger-extract-1.jpg",
      "/images/products/ginger-extract-2.jpg",
      "/images/products/ginger-extract-3.jpg"
    ],
    "applications": [
      "Digestive health formulations",
      "Anti-nausea supplements",
      "Joint comfort products",
      "Warming circulatory formulas",
      "Respiratory support supplements"
    ],
    "benefits": [
      "Promotes healthy digestion, gastric emptying, and gastrointestinal comfort",
      "Helps reduce nausea and supports stomach comfort",
      "Supports joint health through inflammatory pathway modulation",
      "Enhances circulation with natural warming properties",
      "Supports throat and respiratory health traditionally"
    ],
    "specifications": {
      "activeCompounds": "Gingerols",
      "standardization": "5%, 10%, 20% Gingerols",
      "form": "Powder, Granules",
      "solubility": "Water dispersible",
      "appearance": "Light yellow to brownish powder",
      "testing": "HPLC analysis for gingerol content",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Ginger Extract has been extensively studied for its gastrointestinal, anti-inflammatory, and anti-nausea properties. The gingerols in ginger have demonstrated support for digestive enzyme activity, modulation of inflammatory pathways, and antioxidant effects. Clinical research suggests ginger may be beneficial in addressing motion sickness, joint discomfort, and respiratory health.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.2 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.0 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Confirm the standardized gingerol content (5%, 10%, or 20%) with HPLC report",
        "Request technical documents like TDS, SDS, and COA",
        "Inquire about availability of organic-certified extract",
        "Assess flavor intensity for food and supplement applications",
        "Request a sample for sensory evaluation (taste, aroma, solubility)",
        "Discuss application-specific standardization needs"
      ]
    },
    "productionDetails": {
      "description": "Our Ginger Extract is produced from high-quality rhizomes cultivated in India, utilizing ethanol extraction and HPLC-standardized processes to preserve gingerol bioactives. Strict solvent traceability and food-grade compliance are maintained throughout production to ensure premium quality and efficacy.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Star Hi Herbs supplies Ginger Extract in 25kg fiber drums with double polyethylene liners. We also offer smaller pack sizes (1kg and 5kg aluminum foil bags) for pilot and specialty projects. Custom packaging is available based on customer specifications.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Hassan, Karnataka, follows global GMP standards for botanical extracts, featuring controlled extraction, drying, and quality testing systems to ensure consistent product integrity.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs ensures every batch of Ginger Extract meets global quality standards with certifications including FSSC 22000, ISO 9001:2015, Organic, Kosher, Halal, and Non-GMO compliance.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "We showcase our range of herbal extracts, including Ginger Extract, at leading industry events such as Vitafoods Europe, SupplySide West, and CPhI Worldwide.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are gingerols and how do they support health?",
        "answer": "Gingerols are pungent phenolic compounds found in ginger that modulate inflammatory pathways, support digestive enzyme activity, and offer antioxidant protection."
      },
      {
        "id": 2,
        "question": "What standardization method is used?",
        "answer": "HPLC analysis is used to ensure precise verification of gingerol content at 5%, 10%, or 20% depending on product specification."
      },
      {
        "id": 3,
        "question": "What is the difference between the various standardization percentages?",
        "answer": "Higher percentages of gingerols offer greater concentration for targeted applications such as joint health, anti-nausea formulations, and potent digestive products."
      },
      {
        "id": 4,
        "question": "Does this extract have a strong ginger flavor?",
        "answer": "Yes, the extract retains the characteristic pungent flavor of ginger, with the intensity increasing with higher gingerol standardization."
      },
      {
        "id": 5,
        "question": "Is organic ginger extract available?",
        "answer": "Yes, organic-certified Ginger Extract options are available on request."
      }
    ]
  },
  {
    "id": "green-tea-extract",
    "slug": "green-tea-extract",
    "name": "Green Tea Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "50%, 60%, 90%, 95%, 98% Polyphenols",
    "latinName": "Camellia sinensis",
    "plantPart": "Leaves",
    "description": "Green Tea Extract is derived from the leaves of Camellia sinensis, carefully processed to preserve high levels of polyphenols—particularly catechins such as EGCG (epigallocatechin gallate). Available in multiple potencies ranging from 50% to an exceptional 98% polyphenols, our extract provides options for various application requirements. Each batch undergoes UV spectroscopy to verify polyphenol content and is processed using USP-grade ethanol to ensure maximum biological activity.",
    "shortDescription": "Green Tea extract standardized to 50%-98% polyphenols, supporting antioxidant protection, metabolism, cardiovascular, cognitive, and skin health.",
    "image": "/images/products/green-tea-extract.jpg",
    "gallery": [
      "/images/products/green-tea-extract-1.jpg",
      "/images/products/green-tea-extract-2.jpg",
      "/images/products/green-tea-extract-3.jpg"
    ],
    "applications": [
      "Antioxidant formulations",
      "Weight management supplements",
      "Cognitive support products",
      "Cardiovascular health formulas",
      "Skin health and beauty supplements"
    ],
    "benefits": [
      "Powerful antioxidant protection against free radicals",
      "Enhances metabolism and fat oxidation for weight management",
      "Supports healthy circulation and vascular health",
      "Promotes cognitive performance and neural protection",
      "Enhances skin vitality and protects against environmental stressors"
    ],
    "specifications": {
      "activeCompounds": "Polyphenols (including EGCG)",
      "standardization": "50%, 60%, 90%, 95%, 98% Polyphenols",
      "form": "Powder, Granules",
      "solubility": "Water soluble",
      "appearance": "Light to dark green powder",
      "testing": "UV Spectroscopy for polyphenol content",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Green Tea Extract is rich in polyphenols, particularly catechins like EGCG, known for their antioxidant, anti-inflammatory, metabolic, and neuroprotective effects. Clinical studies have demonstrated benefits in weight management, cardiovascular health, skin aging, and cognitive function, making green tea extract a highly versatile ingredient in modern nutraceutical formulations.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.1 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.4 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.0 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Confirm the desired polyphenol standardization (50%-98%)",
        "Request technical documents like TDS, SDS, and COA",
        "Verify natural caffeine content if important for formulation",
        "Inquire about decaffeinated options if needed",
        "Request a sample to evaluate flavor, solubility, and application compatibility",
        "Discuss custom standardizations or blending requirements if required"
      ]
    },
    "productionDetails": {
      "description": "Our Green Tea Extract is produced from sustainably sourced Camellia sinensis leaves grown in India, using USP-grade ethanol and UV-verified standardization methods to retain the full spectrum of polyphenolic compounds while ensuring purity and high bioactivity.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Star Hi Herbs supplies Green Tea Extract in 25kg fiber drums with double polyethylene liners. Customized packaging options (1kg, 5kg aluminum foil bags) are also available for pilot projects and specialty needs.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our GMP-certified manufacturing facility in Hassan, Karnataka, India ensures the highest quality production for Green Tea Extract, with strict control of raw material sourcing, processing, and standardized testing for guaranteed potency and safety.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Our Green Tea Extract is manufactured under FSSC 22000 and ISO 9001:2015 quality systems and meets Kosher, Halal, and Non-GMO standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "We proudly present our Green Tea Extract range at major international events like Vitafoods Europe, SupplySide West, and CPhI Worldwide, connecting with global partners and brands.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are polyphenols and why are they important?",
        "answer": "Polyphenols are plant-derived compounds with powerful antioxidant properties. In green tea, catechins like EGCG offer significant health benefits for metabolism, heart health, brain function, and skin vitality."
      },
      {
        "id": 2,
        "question": "What standardization method is used?",
        "answer": "UV spectroscopy is used to precisely measure and verify polyphenol content in our Green Tea Extract."
      },
      {
        "id": 3,
        "question": "What is the difference between the various standardization percentages?",
        "answer": "Higher percentages deliver more concentrated polyphenols, allowing greater potency and efficacy for specialized applications such as weight management, antioxidant therapy, and anti-aging."
      },
      {
        "id": 4,
        "question": "Does this extract contain caffeine?",
        "answer": "Yes, Green Tea Extract naturally contains 5-8% caffeine depending on the standardization."
      },
      {
        "id": 5,
        "question": "Are decaffeinated options available?",
        "answer": "Yes, we can offer decaffeinated Green Tea Extract versions on request for applications requiring minimal caffeine content."
      }
    ]
  },
  {
    "id": "gymnema-sylvestre-extract",
    "slug": "gymnema-sylvestre-extract",
    "name": "Gymnema Sylvestre Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "5%, 25% Gymnemic Acids (HPLC); 25%, 35%, 40%, 75% Gymnemic Acids (Gravimetry)",
    "latinName": "Gymnema sylvestre",
    "plantPart": "Leaves",
    "description": "Gymnema Sylvestre Extract is derived from the leaves of Gymnema sylvestre, standardized to contain precise levels of gymnemic acids—the primary active compounds responsible for its remarkable effects on sugar perception and glucose metabolism. Available in various potencies ranging from 5% to 75% gymnemic acids, our extract is verified using both HPLC and gravimetric analysis to ensure consistent standardization. Each batch is processed using USP-grade ethanol to preserve the integrity of the active compounds.",
    "shortDescription": "Gymnema Sylvestre extract standardized to 5%-75% gymnemic acids, supporting healthy glucose metabolism, sugar craving control, and metabolic health.",
    "image": "/images/products/gymnema-sylvestre-extract.jpg",
    "gallery": [
      "/images/products/gymnema-sylvestre-extract-1.jpg",
      "/images/products/gymnema-sylvestre-extract-2.jpg",
      "/images/products/gymnema-sylvestre-extract-3.jpg"
    ],
    "applications": [
      "Blood glucose management formulations",
      "Sugar craving reduction supplements",
      "Weight management products",
      "Diabetic support formulas",
      "Metabolic health supplements"
    ],
    "benefits": [
      "Supports healthy blood glucose levels and utilization",
      "Helps block sweet taste perception, reducing sugar cravings",
      "Promotes healthy insulin secretion and sensitivity",
      "Supports metabolic balance and healthy weight management",
      "Traditionally supports pancreatic beta-cell health"
    ],
    "specifications": {
      "activeCompounds": "Gymnemic Acids",
      "standardization": "5%, 25% (HPLC); 25%, 35%, 40%, 75% (Gravimetry)",
      "form": "Powder, Granules",
      "solubility": "Water soluble",
      "appearance": "Light to dark green powder",
      "testing": "HPLC and Gravimetric Analysis",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Gymnema Sylvestre has been widely studied for its unique ability to modulate sugar perception and glucose metabolism. Clinical research suggests that gymnemic acids can help lower blood sugar levels, reduce sugar cravings, and support insulin function, making it an essential herb for metabolic health and diabetic support formulations.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.3 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.6 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.1 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Confirm the preferred standardization method and gymnemic acid percentage",
        "Request TDS, SDS, and COA for technical validation",
        "Sample test for taste-masking effect if required",
        "Verify organic certification if needed",
        "Discuss custom standardizations or blends for specific applications",
        "Ensure caffeine-free profile if important for application"
      ]
    },
    "productionDetails": {
      "description": "Our Gymnema Sylvestre Extract is produced from sustainably harvested Gymnema sylvestre leaves in India. Extraction uses USP-grade ethanol and advanced standardization techniques (HPLC and gravimetry) to ensure the highest bioactivity and consistent gymnemic acid potency batch after batch.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Star Hi Herbs supplies Gymnema Sylvestre Extract in 25kg fiber drums lined with double polyethylene bags. Custom packaging (1kg, 5kg foil pouches) is available for smaller quantities and R&D needs.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Manufactured in our GMP, FSSC 22000, and ISO 9001:2015 certified facility in Hassan, Karnataka, India, ensuring consistent purity, potency, and compliance with global standards.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Our Gymnema Sylvestre Extract is manufactured under internationally recognized certifications, including FSSC 22000, ISO 9001:2015, and available with Organic, Kosher, and Halal certification.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Our Gymnema Sylvestre Extract is showcased at leading international events such as SupplySide West, Vitafoods Europe, and Natural Products Expo, demonstrating our commitment to high-quality botanical solutions.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are gymnemic acids and how do they work?",
        "answer": "Gymnemic acids are unique saponins that temporarily block sweet taste receptors and support healthy glucose metabolism at the cellular level."
      },
      {
        "id": 2,
        "question": "What standardization methods are used?",
        "answer": "We utilize both HPLC and gravimetric analysis to accurately verify gymnemic acid content and ensure extract consistency."
      },
      {
        "id": 3,
        "question": "What is the difference between the various standardization percentages?",
        "answer": "Higher standardizations offer greater gymnemic acid concentration, making them suitable for more potent or specialized formulations targeting blood sugar management."
      },
      {
        "id": 4,
        "question": "How quickly does the sweet-blocking effect occur?",
        "answer": "Typically, the sweet taste suppression effect begins within minutes of consumption and can last for approximately 30 to 60 minutes."
      },
      {
        "id": 5,
        "question": "Is organic Gymnema extract available?",
        "answer": "Yes, organically certified Gymnema Sylvestre Extract options are available for brands seeking organic compliance."
      }
    ]
  },
  {
    "id": "kidney-bean-extract",
    "slug": "kidney-bean-extract",
    "name": "Kidney Bean Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "3000IU/g, 4000IU/g, 8000IU/g, 10000IU/g, 10500IU/g, 14000IU/g (UV Method)",
    "latinName": "Phaseolus vulgaris",
    "plantPart": "Beans",
    "description": "Kidney Bean Extract is derived from high-quality Phaseolus vulgaris beans and standardized for alpha-amylase inhibition activity. This specialized extract contains compounds that inhibit starch-digesting enzymes, potentially reducing carbohydrate absorption in the digestive tract. Our extract is carefully processed to preserve maximum enzymatic inhibitory activity and is available in multiple potencies ranging from 3000IU/g to 14000IU/g. Each batch undergoes rigorous UV spectroscopy testing to ensure accurate standardization and consistent potency.",
    "shortDescription": "Kidney Bean extract standardized to 3000-14000IU/g alpha-amylase inhibition, supporting starch blocking, weight management, and blood sugar control.",
    "image": "/images/products/kidney-bean-extract.jpg",
    "gallery": [
      "/images/products/kidney-bean-extract-1.jpg",
      "/images/products/kidney-bean-extract-2.jpg",
      "/images/products/kidney-bean-extract-3.jpg"
    ],
    "applications": [
      "Weight management formulations",
      "Blood sugar management supplements",
      "Carbohydrate metabolism support products",
      "Dietary supplements",
      "Functional food ingredients"
    ],
    "benefits": [
      "Inhibits alpha-amylase enzyme to reduce starch digestion",
      "Helps modulate post-meal blood glucose response",
      "Supports healthy weight management and metabolic function",
      "Assists in maintaining balanced carbohydrate processing",
      "Moderates glycemic impact of starchy meals"
    ],
    "specifications": {
      "activeCompounds": "Alpha-Amylase Inhibitory Compounds",
      "standardization": "3000IU/g to 14000IU/g (UV Method)",
      "form": "Powder, Granules",
      "solubility": "Water soluble",
      "appearance": "Off-white to beige powder",
      "testing": "UV Spectroscopy",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Kidney Bean Extract has been studied for its ability to inhibit alpha-amylase, the enzyme responsible for breaking down carbohydrates into simple sugars. Clinical research shows that alpha-amylase inhibitors can significantly reduce postprandial blood glucose spikes and calorie absorption from starchy foods, making it an effective natural aid in weight management and metabolic health programs.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.2 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.7 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.1 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Confirm required IU/g activity level for specific formulation needs",
        "Request TDS, SDS, and COA for technical and regulatory compliance",
        "Sample testing for starch blocking activity if needed",
        "Discuss synergistic blends with other weight management ingredients",
        "Verify vegetarian/vegan suitability if needed"
      ]
    },
    "productionDetails": {
      "description": "Our Kidney Bean Extract is produced from carefully selected Phaseolus vulgaris beans using advanced extraction and UV standardization techniques. USP-grade ethanol ensures high purity and bioactivity while maintaining a clean label profile suitable for health and wellness applications.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Star Hi Herbs supplies Kidney Bean Extract in 25kg fiber drums with double polyethylene inner liners. Smaller packaging options like 1kg and 5kg foil packs are available for pilot projects and R&D purposes.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Manufactured at our GMP, FSSC 22000, and ISO 9001:2015 certified facility located in Hassan, Karnataka, India, ensuring consistent purity, safety, and quality for global nutraceutical markets.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Our Kidney Bean Extract is produced under globally recognized certifications including FSSC 22000, ISO 9001:2015, with Kosher and Halal compliance, ensuring it meets strict international standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "We proudly present our Kidney Bean Extract at global trade shows such as SupplySide West, Vitafoods Europe, and Natural Products Expo, connecting with leaders in the nutraceutical, functional food, and dietary supplement industries.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "How does kidney bean extract work for weight management?",
        "answer": "It inhibits alpha-amylase enzymes that break down complex carbohydrates, potentially reducing calorie absorption from starchy foods."
      },
      {
        "id": 2,
        "question": "What is the difference between the various IU potencies available?",
        "answer": "Higher IU values indicate stronger enzyme inhibition activity, with 14000IU/g offering the highest potency for maximum carbohydrate control."
      },
      {
        "id": 3,
        "question": "When is the best time to take kidney bean extract supplements?",
        "answer": "For optimal results, Kidney Bean Extract should be consumed shortly before meals containing complex carbohydrates."
      },
      {
        "id": 4,
        "question": "Are there any dietary considerations when using this extract?",
        "answer": "The extract specifically targets starch digestion and does not significantly affect simple sugars, proteins, or fats."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegetarian/vegan formulations?",
        "answer": "Yes, Kidney Bean Extract is 100% plant-derived and fully suitable for vegetarian and vegan products."
      }
    ]
  },
  {
    "id": "licorice",
    "slug": "licorice-extract",
    "name": "Licorice Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "40% Glabridin",
    "latinName": "Glycyrrhiza glabra",
    "plantPart": "Root",
    "description": "Licorice Extract is derived from premium Glycyrrhiza glabra roots and standardized to contain 40% glabridin, a key isoflavone with significant bioactive properties. Our specialized extraction process preserves the integrity of this valuable compound while removing unwanted components. Each batch undergoes precise titration analysis to ensure consistent potency and purity. This highly concentrated extract delivers maximum efficacy for skin brightening applications and antioxidant support in various formulations, with minimal glycyrrhizin content compared to conventional licorice extracts.",
    "shortDescription": "Premium Licorice extract standardized for glabridin content",
    "image": "/images/products/licorice-extract.jpg",
    "gallery": [
      "/images/products/licorice-extract-1.jpg",
      "/images/products/licorice-extract-2.jpg",
      "/images/products/licorice-extract-3.jpg"
    ],
    "applications": [
      "Skin brightening cosmetics",
      "Antioxidant formulations",
      "Anti-inflammatory supplements",
      "Digestive health products",
      "Flavoring agents for masking bitter tastes"
    ],
    "benefits": [
      "Skin brightening: Inhibits tyrosinase enzyme activity for even skin tone.",
      "Antioxidant protection: Neutralizes free radicals and reduces oxidative stress.",
      "Anti-inflammatory: Moderates inflammatory pathways in various tissues.",
      "Digestive support: Soothes digestive tract discomfort traditionally.",
      "Flavor enhancement: Provides natural sweetness while masking bitter tastes in formulations."
    ],
    "specifications": {
      "activeCompounds": "Glabridin",
      "standardization": "40% Glabridin",
      "form": "Powder, Granules",
      "solubility": "Water dispersible, soluble in ethanol",
      "appearance": "Light brown powder",
      "testing": "Titration methods for glabridin content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Licorice extract has been researched for its potent skin brightening and antioxidant properties, showing that glabridin helps in reducing hyperpigmentation and even skin tone while also supporting digestive and immune health.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.4 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "956 KB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)",
        "Ensure they provide standardized extracts with consistent active compound levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Licorice Extract production follows a rigorous process that begins with selecting premium Glycyrrhiza glabra roots. The roots are carefully cleaned and prepared for extraction using a method that maximizes glabridin content while minimizing glycyrrhizin. The extract undergoes multiple purification steps to ensure maximum potency and purity, followed by titration analysis for standardization.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Licorice Extract is packaged in 25kg fiber drums with double polyethylene liners to protect against moisture and contamination. Smaller quantities are available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade, ensuring the stability of the product during shipping and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with state-of-the-art extraction and processing technology. The plant operates under GMP conditions, with strict control over temperature, humidity, and cleanliness to ensure the highest product quality.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies to verify ongoing compliance.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We exhibit regularly at Vitafoods Europe, Supply Side West, and Natural Products Expo to showcase our latest innovations and connect with customers.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What makes glabridin different from other licorice compounds?",
        "answer": "Glabridin is a potent isoflavone with skin brightening and antioxidant properties, distinct from glycyrrhizin which causes most licorice side effects."
      },
      {
        "id": 2,
        "question": "Does this extract contain glycyrrhizin?",
        "answer": "Our extraction process minimizes glycyrrhizin content while maximizing glabridin concentration."
      },
      {
        "id": 3,
        "question": "What skin benefits does glabridin provide?",
        "answer": "Glabridin inhibits tyrosinase enzyme activity, helping to reduce hyperpigmentation and even skin tone."
      },
      {
        "id": 4,
        "question": "How is this extract different from whole licorice extract?",
        "answer": "This extract is specifically standardized for glabridin content rather than glycyrrhizin, offering different functional benefits."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for sensitive skin formulations?",
        "answer": "Yes, the reduced glycyrrhizin content makes it generally well-tolerated in cosmetic applications."
      }
    ]
  },
  {
    "id": "momordica",
    "slug": "momordica-extract",
    "name": "Momordica Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "5%, 8% Bitters",
    "latinName": "Momordica charantia",
    "plantPart": "Fruit",
    "description": "Momordica Extract is derived from premium Momordica charantia (bitter melon) fruit and standardized for bitter principles using precise gravimetric analysis. Available in 5% and 8% concentrations, this extract preserves the complex bioactive compounds responsible for bitter melon's metabolic benefits. Our careful extraction process maintains the integrity of charantin, vicine, polypeptide-p, and other naturally occurring compounds while ensuring consistency between batches. Each production lot undergoes rigorous quality testing to verify the bitter principle content that contributes to its functional properties.",
    "shortDescription": "Premium Momordica extract standardized for bitter principles",
    "image": "/images/products/momordica-extract.jpg",
    "gallery": [
      "/images/products/momordica-extract-1.jpg",
      "/images/products/momordica-extract-2.jpg",
      "/images/products/momordica-extract-3.jpg"
    ],
    "applications": [
      "Blood glucose management supplements",
      "Weight management formulations",
      "Digestive health products",
      "Traditional wellness supplements",
      "Metabolic support formulations"
    ],
    "benefits": [
      "Glucose Metabolism: Supports healthy blood sugar levels through multiple mechanisms.",
      "Metabolic Enhancement: Helps optimize cellular energy utilization and metabolic function.",
      "Digestive Support: Bitter principles stimulate digestive secretions and function.",
      "Antioxidant Protection: Contains compounds that help neutralize free radicals.",
      "Appetite Regulation: Traditional use for supporting healthy appetite patterns."
    ],
    "specifications": {
      "activeCompounds": "Charantin, Vicine, Polypeptide-p, Momordicosides",
      "standardization": "Available in 5% and 8% bitter principle concentrations",
      "form": "Powder, Granules",
      "solubility": "Water dispersible, soluble in ethanol",
      "appearance": "Light brown powder",
      "testing": "Gravimetric analysis for bitter principle content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Research on Momordica extract highlights its role in blood sugar regulation, with studies showing its ability to enhance insulin sensitivity and glucose uptake while reducing glucose production. The bitter principles also offer metabolic support and digestive benefits.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.4 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "956 KB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)",
        "Ensure they provide standardized extracts with consistent active compound levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Momordica Extract production follows a strict process where premium Momordica charantia fruits are selected, cleaned, and processed to ensure that all bitter principles are preserved. Using gravimetric analysis, we ensure that the extract meets the precise bitter principle concentrations, delivering consistent quality with every batch.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Momordica Extract is packaged in 25kg fiber drums with double polyethylene liners to protect against moisture and contamination. Smaller quantities are available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade, ensuring the stability of the product during shipping and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Hassan, Karnataka spans over 50,000 square feet and is equipped with state-of-the-art extraction and processing technology. The plant operates under GMP conditions, with strict control over temperature, humidity, and cleanliness to ensure the highest product quality.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains comprehensive certifications to ensure our products meet the highest quality and safety standards. Our facility and processes are certified by FSSC 22000 for food safety management, ISO 9001:2015 for quality management systems, and we maintain Kosher, Halal, and Non-GMO certifications for our products. We undergo regular audits by certification bodies to verify ongoing compliance.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Since 2016, Star Hi Herbs has been an active participant in major nutraceutical and natural product exhibitions worldwide. We exhibit regularly at Vitafoods Europe, Supply Side West, and Natural Products Expo to showcase our latest innovations and connect with customers.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the bitter principles in Momordica extract?",
        "answer": "They include charantin, vicine, polypeptide-p, and momordicosides that contribute to its metabolic effects."
      },
      {
        "id": 2,
        "question": "How does bitter melon support blood sugar levels?",
        "answer": "It works through multiple mechanisms including enhanced insulin sensitivity, glucose uptake stimulation, and reduced glucose production."
      },
      {
        "id": 3,
        "question": "Why are there different standardization percentages available?",
        "answer": "Different concentrations serve various formulation needs, with higher percentages providing more intensive support."
      },
      {
        "id": 4,
        "question": "Does the extraction process preserve all active compounds?",
        "answer": "Our careful extraction method maintains the synergistic complex of bitter principles and bioactive compounds."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegetarian/vegan formulations?",
        "answer": "Yes, the extract is 100% plant-derived and appropriate for vegetarian and vegan products."
      }
    ]
  },
  {
    "id": "mucuna",
    "slug": "mucuna-extract",
    "name": "Mucuna Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "10%, 15%, 20%, 30% L-Dopa",
    "latinName": "Mucuna pruriens",
    "plantPart": "Seed",
    "description": "Mucuna Extract is derived from premium quality Mucuna pruriens seeds and standardized for L-Dopa (levodopa) content. Available in multiple standardization levels ranging from 10% to 30%, this extract provides a natural source of this important neurotransmitter precursor. Our specialized extraction process carefully preserves the delicate balance of naturally occurring compounds while ensuring consistent L-Dopa concentration. Each batch undergoes rigorous titration analysis to verify potency and purity. Both conventional and certified organic options are available to meet diverse formulation requirements.",
    "shortDescription": "Premium Mucuna extract standardized for L-Dopa content",
    "image": "/images/products/mucuna-extract.jpg",
    "gallery": [
      "/images/products/mucuna-extract-1.jpg",
      "/images/products/mucuna-extract-2.jpg",
      "/images/products/mucuna-extract-3.jpg"
    ],
    "applications": [
      "Cognitive health supplements",
      "Mood support formulations",
      "Reproductive health products",
      "Movement support supplements",
      "Adaptogenic formulations"
    ],
    "benefits": [
      "Dopamine Support: Provides L-Dopa, a direct precursor to dopamine neurotransmitter.",
      "Cognitive Function: Supports mental clarity, focus and cognitive performance.",
      "Mood Balance: Helps maintain healthy mood and emotional wellbeing.",
      "Reproductive Health: Traditionally used for male reproductive support.",
      "Adaptogenic Effects: Helps the body adapt to stress and maintain balance."
    ],
    "specifications": {
      "activeCompounds": "L-Dopa (levodopa)",
      "standardization": "Available in 10%, 15%, 20%, and 30% L-Dopa concentrations",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Light brown powder",
      "testing": "Titration analysis for L-Dopa content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Research indicates that Mucuna pruriens, through its L-Dopa content, has potential benefits for cognitive health, mood regulation, and male reproductive health. It is used for its neuroprotective properties and adaptogenic effects, supporting the body’s ability to manage stress.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.3 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.7 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.1 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, Organic, etc.)",
        "Ensure they provide standardized extracts with consistent L-Dopa levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Mucuna Extract is produced from high-quality Mucuna pruriens seeds, which are cleaned, processed, and standardized for L-Dopa content through precise titration. The extraction process preserves the natural compounds that may enhance the bioavailability of L-Dopa, ensuring optimal potency and consistency in each batch.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Mucuna Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Hassan, Karnataka is equipped with modern extraction technology to ensure the highest quality of Mucuna Extract. The facility adheres to strict GMP standards, and we conduct rigorous quality control at every stage of production to ensure consistency and purity of the extract.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds multiple certifications to guarantee the safety and quality of our Mucuna Extract. Our facility is FSSC 22000 and ISO 9001:2015 certified, and we also offer organic-certified extracts. We maintain Kosher, Halal, and Non-GMO certifications for our products, and undergo regular audits to ensure ongoing compliance with these standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs showcases our products at major global trade shows, including Vitafoods Europe and Supply Side West. These events allow us to introduce our latest innovations in herbal extracts, such as Mucuna, and connect with key players in the nutraceutical and wellness industries.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What is L-Dopa and how does it support brain health?",
        "answer": "L-Dopa is a direct precursor to dopamine, a neurotransmitter essential for cognition, mood, and motor function."
      },
      {
        "id": 2,
        "question": "What's the difference between the various percentage standardizations?",
        "answer": "Higher percentages contain more concentrated L-Dopa content, allowing for smaller dosage forms or more intensive support."
      },
      {
        "id": 3,
        "question": "Why is Mucuna extract used in Ayurvedic medicine?",
        "answer": "It has been traditionally used to support the nervous system, reproductive health, and overall vitality."
      },
      {
        "id": 4,
        "question": "How does L-Dopa from Mucuna differ from synthetic versions?",
        "answer": "Natural Mucuna extract contains L-Dopa within a complex of supporting compounds that may enhance bioavailability."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegetarian/vegan formulations?",
        "answer": "Yes, the extract is 100% plant-derived and appropriate for vegetarian and vegan products."
      }
    ]
  },
  {
    "id": "ocimum-sanctum",
    "slug": "ocimum-sanctum-extract",
    "name": "Ocimum Sanctum Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "2.5%, 3% Ursolic and oleanolic acids",
    "latinName": "Ocimum tenuiflorum",
    "plantPart": "Leaf",
    "description": "Ocimum Sanctum Extract is derived from premium Holy Basil (Tulsi) leaves and standardized for ursolic and oleanolic acid content. Available in 2.5% and 3% standardizations, this extract captures the adaptogenic compounds that make Tulsi a revered herb in Ayurvedic tradition. Our careful extraction process preserves the delicate balance of beneficial compounds while ensuring consistent potency. Each batch undergoes precise titration analysis to verify acid content. Both conventional and certified organic options are available, sourced from carefully cultivated Tulsi plants grown in ideal conditions.",
    "shortDescription": "Premium Ocimum Sanctum extract standardized for ursolic and oleanolic acids.",
    "image": "/images/products/ocimum-sanctum-extract.jpg",
    "gallery": [
      "/images/products/ocimum-sanctum-extract.jpg",
      "/images/products/ocimum-sanctum-extract.jpg",
      "/images/products/ocimum-sanctum-extract.jpg"
    ],
    "applications": [
      "Stress management formulations",
      "Immune support supplements",
      "Respiratory health products",
      "Adaptogenic blends",
      "Cognitive support formulations"
    ],
    "benefits": [
      "Adaptogenic Support: Helps the body adapt to physical and mental stressors.",
      "Immune Modulation: Supports healthy immune system function and response.",
      "Cognitive Balance: Traditionally used to promote mental clarity and focus.",
      "Antioxidant Protection: Contains compounds that help neutralize free radicals.",
      "Respiratory Support: Traditionally used to maintain healthy respiratory function."
    ],
    "specifications": {
      "activeCompounds": "Ursolic acid, oleanolic acid",
      "standardization": "Available in 2.5% and 3% concentrations of ursolic and oleanolic acids",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Light green powder",
      "testing": "Titration analysis for ursolic and oleanolic acid content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Research indicates that Ocimum Sanctum, or Holy Basil, contains ursolic and oleanolic acids which contribute to its adaptogenic, immune-modulating, and antioxidant properties. These compounds help balance physiological functions, support cognitive health, and enhance overall wellness, making it a valuable ingredient in both traditional and modern wellness formulations.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.1 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, Organic, etc.)",
        "Ensure they provide standardized extracts with consistent ursolic and oleanolic acid levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Ocimum Sanctum Extract is produced from premium Holy Basil (Tulsi) leaves, which are cleaned, processed, and standardized for ursolic and oleanolic acid content through precise titration. The extraction process preserves the natural compounds that provide adaptogenic benefits and ensure the extract's potency and consistency.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Ocimum Sanctum Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Hassan, Karnataka is equipped with state-of-the-art technology to ensure the highest quality of Ocimum Sanctum Extract. The facility adheres to strict GMP standards, and we conduct rigorous quality control at every stage of production to ensure consistency and purity of the extract.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds multiple certifications to guarantee the safety and quality of our Ocimum Sanctum Extract. Our facility is FSSC 22000 and ISO 9001:2015 certified, and we also offer organic-certified extracts. We maintain Kosher, Halal, and Non-GMO certifications for our products, and undergo regular audits to ensure ongoing compliance with these standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs showcases our products at major global trade shows, including Vitafoods Europe and Supply Side West. These events allow us to introduce our latest innovations in herbal extracts, such as Ocimum Sanctum, and connect with key players in the nutraceutical and wellness industries.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What makes Holy Basil different from culinary basil varieties?",
        "answer": "Holy Basil (Tulsi) contains higher levels of adaptogenic compounds like ursolic acid and eugenol than culinary basil varieties."
      },
      {
        "id": 2,
        "question": "What are the main benefits of ursolic and oleanolic acids?",
        "answer": "These triterpene acids have adaptogenic, antioxidant, and immunomodulatory properties that support overall wellness."
      },
      {
        "id": 3,
        "question": "Why is Tulsi considered an adaptogen?",
        "answer": "It helps balance physiological functions and support the body's ability to maintain homeostasis during stress."
      },
      {
        "id": 4,
        "question": "How does this extract support immune function?",
        "answer": "The bioactive compounds help modulate immune response and support natural defense mechanisms."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegetarian/vegan formulations?",
        "answer": "Yes, the extract is 100% plant-derived and appropriate for vegetarian and vegan products."
      }
    ]
  },
  {
    "id": "piper-longum",
    "slug": "piper-longum-extract",
    "name": "Piper Longum Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "5%, 95% Piperine",
    "latinName": "Piper longum",
    "plantPart": "Fruit",
    "description": "Piper longum Extract is derived from premium long pepper fruit and standardized for piperine content. Available in both moderate (5%) and highly concentrated (95%) options, this extract serves different formulation needs from traditional herbal blends to bioavailability enhancement applications. Our specialized extraction process carefully isolates and concentrates the piperine alkaloid while ensuring purity and consistency. Each batch undergoes rigorous titration analysis to verify alkaloid content. Both conventional and certified organic options are available to meet diverse formulation requirements.",
    "shortDescription": "Premium Piper Longum extract standardized for piperine.",
    "image": "/images/products/piper-longum-extract.jpg",
    "gallery": [
      "/images/products/piper-longum-extract-1.jpg",
      "/images/products/piper-longum-extract-2.jpg",
      "/images/products/piper-longum-extract-3.jpg"
    ],
    "applications": [
      "Bioavailability enhancement",
      "Thermogenic formulations",
      "Digestive support products",
      "Ayurvedic formulations",
      "Respiratory support supplements"
    ],
    "benefits": [
      "Bioavailability Enhancement: Inhibits certain metabolizing enzymes to increase absorption of nutrients and compounds.",
      "Thermogenic Activity: Supports metabolic rate and thermogenesis for weight management.",
      "Digestive Support: Traditionally used to stimulate digestive secretions and function.",
      "Respiratory Health: Traditionally used in Ayurvedic medicine for respiratory wellness.",
      "Metabolic Support: Helps optimize nutrient utilization and metabolic function."
    ],
    "specifications": {
      "activeCompounds": "Piperine",
      "standardization": "Available in 5% and 95% concentrations of piperine",
      "form": "Powder, Granules",
      "solubility": "Soluble in ethanol and water",
      "appearance": "Light brown powder",
      "testing": "Titration analysis for piperine content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Piperine from Piper longum has been studied for its ability to enhance the bioavailability of other compounds by inhibiting certain liver and intestinal enzymes that metabolize drugs and nutrients. This makes it a valuable ingredient in supplements aimed at improving the absorption of other active ingredients.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.3 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.4 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, Organic, etc.)",
        "Ensure they provide standardized extracts with consistent piperine levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Piper Longum Extract is produced from premium long pepper fruit, which is cleaned, processed, and standardized for piperine content through precise titration. The extraction process carefully isolates piperine, ensuring purity and potency for bioenhancement and other health applications.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Piper Longum Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Hassan, Karnataka is equipped with state-of-the-art technology to ensure the highest quality of Piper Longum Extract. The facility adheres to strict GMP standards, and we conduct rigorous quality control at every stage of production to ensure consistency and purity of the extract.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds multiple certifications to guarantee the safety and quality of our Piper Longum Extract. Our facility is FSSC 22000 and ISO 9001:2015 certified, and we also offer organic-certified extracts. We maintain Kosher, Halal, and Non-GMO certifications for our products, and undergo regular audits to ensure ongoing compliance with these standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs showcases our products at major global trade shows, including Vitafoods Europe and Supply Side West. These events allow us to introduce our latest innovations in herbal extracts, such as Piper Longum, and connect with key players in the nutraceutical and wellness industries.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "How does piperine enhance the bioavailability of other compounds?",
        "answer": "Piperine inhibits certain liver and intestinal enzymes that metabolize drugs and nutrients, potentially increasing their absorption and effectiveness."
      },
      {
        "id": 2,
        "question": "What's the difference between 5% and 95% standardizations?",
        "answer": "The 5% extract provides a more balanced profile of long pepper compounds, while the 95% extract is highly concentrated piperine for maximum bioenhancement."
      },
      {
        "id": 3,
        "question": "How does Piper Longum differ from black pepper extract?",
        "answer": "While both contain piperine, long pepper has a different phytochemical profile and is traditionally valued in Ayurvedic medicine for specific applications."
      },
      {
        "id": 4,
        "question": "What is the typical usage level for bioavailability enhancement?",
        "answer": "Typically 5-10mg of the 95% extract per serving is sufficient to enhance bioavailability of other compounds."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegetarian/vegan formulations?",
        "answer": "Yes, the extract is 100% plant-derived and appropriate for vegetarian and vegan products."
      }
    ]
  },
  {
    "id": "pomegranate-extract",
    "slug": "pomegranate-extract",
    "name": "Pomegranate Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "20%, 30%, 40% Ellagic Acid",
    "latinName": "Punica granatum",
    "plantPart": "Fruit",
    "description": "Pomegranate Extract is derived from premium Punica granatum fruit and standardized for ellagic acid content. Available in multiple concentrations (20%, 30%, and 40%), this extract captures the potent polyphenols responsible for pomegranate's exceptional antioxidant capacity. Our specialized extraction process carefully preserves the delicate balance of ellagitannins, punicalagins, and other beneficial compounds while ensuring consistent ellagic acid content. Each batch undergoes precise titration analysis to verify potency. The extract is available in both powder and granule forms to accommodate diverse formulation requirements.",
    "shortDescription": "Premium Pomegranate extract standardized for ellagic acid.",
    "image": "/images/products/pomegranate-extract.jpg",
    "gallery": [
      "/images/products/pomegranate-extract-1.jpg",
      "/images/products/pomegranate-extract-2.jpg",
      "/images/products/pomegranate-extract-3.jpg"
    ],
    "applications": [
      "Cardiovascular health supplements",
      "Antioxidant formulations",
      "Anti-aging products",
      "Urinary tract health supplements",
      "Sports recovery formulations"
    ],
    "benefits": [
      "Antioxidant Protection: Provides powerful free radical scavenging activity.",
      "Cardiovascular Support: Supports healthy blood vessel function and circulation.",
      "Anti-inflammatory: Helps modulate inflammatory pathways in various tissues.",
      "Cellular Protection: Supports cellular integrity against oxidative stress.",
      "Skin Health: Supports collagen maintenance and skin elasticity when used topically or internally."
    ],
    "specifications": {
      "activeCompounds": "Ellagic Acid, Punicalagins, Ellagitannins",
      "standardization": "Available in 20%, 30%, and 40% ellagic acid concentrations",
      "form": "Powder, Granules",
      "solubility": "Soluble in ethanol and water",
      "appearance": "Light reddish-brown powder",
      "testing": "Titration analysis for ellagic acid content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Pomegranate extract is rich in polyphenols, particularly ellagic acid, which provides powerful antioxidant and anti-inflammatory benefits. Studies show its potential in cardiovascular health by supporting endothelial function and managing oxidative stress. It also helps in skin health by supporting collagen production and reducing inflammation.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.3 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.4 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)",
        "Ensure they provide standardized extracts with consistent ellagic acid levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Pomegranate Extract is produced from high-quality Punica granatum fruit, carefully processed to preserve the beneficial polyphenols. The extraction process is designed to retain the natural balance of ellagic acid, punicalagins, and ellagitannins while ensuring a consistent and potent extract.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Pomegranate Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Ahmedabad, Gujarat, is equipped with state-of-the-art technology to ensure the highest quality of Pomegranate Extract. The facility adheres to strict GMP standards, and we conduct rigorous quality control at every stage of production to ensure consistency and purity of the extract.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds multiple certifications to guarantee the safety and quality of our Pomegranate Extract. Our facility is FSSC 22000 and ISO 9001:2015 certified, and we also offer Non-GMO certified extracts. We maintain Kosher and Halal certifications for our products, and undergo regular audits to ensure ongoing compliance with these standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs showcases our products at major global trade shows, including Vitafoods Europe and Supply Side West. These events allow us to introduce our latest innovations in herbal extracts, such as Pomegranate Extract, and connect with key players in the nutraceutical and wellness industries.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What makes pomegranate extract a powerful antioxidant?",
        "answer": "It contains a unique complex of ellagic acid, punicalagins, and other polyphenols that work synergistically for potent antioxidant activity."
      },
      {
        "id": 2,
        "question": "How does ellagic acid content relate to overall benefits?",
        "answer": "Higher ellagic acid percentages indicate more concentrated polyphenol content and potentially stronger antioxidant capacity."
      },
      {
        "id": 3,
        "question": "What's the difference between pomegranate extract and juice?",
        "answer": "The extract is a concentrated form of pomegranate's beneficial compounds without the sugars, providing therapeutic levels of polyphenols in smaller doses."
      },
      {
        "id": 4,
        "question": "How does pomegranate extract support cardiovascular health?",
        "answer": "Its polyphenols support healthy endothelial function, maintain normal blood pressure, and help manage oxidation of LDL cholesterol."
      },
      {
        "id": 5,
        "question": "Does this extract retain the full polyphenol profile of pomegranate?",
        "answer": "Yes, our extraction process preserves the synergistic complex of polyphenols while standardizing for ellagic acid as a marker compound."
      }
    ]
  },
  {
    "id": "sesamin-extract",
    "slug": "sesamin-extract",
    "name": "Sesamin Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "10%, 20%, 30%, 60%, 70%, 90%, 95%, 98% Sesamin and Sesamolin",
    "latinName": "Sesamum indicum",
    "plantPart": "Seeds",
    "description": "Sesamin Extract is derived from premium sesame seeds and standardized for sesamin and sesamolin content. Available in multiple concentrations ranging from 10% to 98%, this extract offers exceptional versatility for various applications requiring different potency levels. Our specialized extraction process carefully isolates and concentrates these valuable lignans while ensuring purity and consistency. Each batch undergoes precise titration analysis to verify lignan content. The extract is available in both powder and granule forms to accommodate diverse formulation requirements, from nutraceuticals to functional foods.",
    "shortDescription": "Premium Sesamin extract standardized for sesamin and sesamolin.",
    "image": "/images/products/sesamin-extract.jpg",
    "gallery": [
      "/images/products/sesamin-extract-1.jpg",
      "/images/products/sesamin-extract-2.jpg",
      "/images/products/sesamin-extract-3.jpg"
    ],
    "applications": [
      "Liver health formulations",
      "Antioxidant supplements",
      "Cardiovascular support products",
      "Sports nutrition formulas",
      "Anti-aging supplements"
    ],
    "benefits": [
      "Liver Support: Helps maintain healthy liver function and detoxification.",
      "Antioxidant Protection: Provides powerful free radical neutralizing activity.",
      "Lipid Metabolism: Supports healthy cholesterol and fat metabolism.",
      "Exercise Recovery: Helps optimize recovery after physical exertion.",
      "Cardiovascular Health: Supports healthy blood vessel function and circulation."
    ],
    "specifications": {
      "activeCompounds": "Sesamin, Sesamolin",
      "standardization": "Available in 10%, 20%, 30%, 60%, 70%, 90%, 95%, 98% sesamin and sesamolin concentrations",
      "form": "Powder, Granules",
      "solubility": "Soluble in ethanol and water",
      "appearance": "Light yellowish-brown powder",
      "testing": "Titration analysis for sesamin and sesamolin content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Sesamin is a potent lignan with numerous health benefits, particularly for liver detoxification, cholesterol metabolism, and antioxidant protection. Studies suggest that sesamin helps support cardiovascular health by improving blood circulation and has potential benefits in reducing inflammation and oxidative stress. It is also beneficial for exercise recovery due to its antioxidant properties.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.3 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.4 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)",
        "Ensure they provide standardized extracts with consistent sesamin and sesamolin levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Sesamin Extract is produced from high-quality sesame seeds, using an advanced extraction process that isolates and concentrates sesamin and sesamolin. The extract is carefully standardized to ensure consistent potency and quality, providing a reliable ingredient for a wide range of nutraceutical and functional food formulations.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Sesamin Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Ahmedabad, Gujarat, is equipped with state-of-the-art technology to ensure the highest quality of Sesamin Extract. The facility adheres to strict GMP standards, and we conduct rigorous quality control at every stage of production to ensure consistency and purity of the extract.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds multiple certifications to guarantee the safety and quality of our Sesamin Extract. Our facility is FSSC 22000 and ISO 9001:2015 certified, and we also offer Non-GMO certified extracts. We maintain Kosher and Halal certifications for our products, and undergo regular audits to ensure ongoing compliance with these standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs showcases our products at major global trade shows, including Vitafoods Europe and Supply Side West. These events allow us to introduce our latest innovations in herbal extracts, such as Sesamin Extract, and connect with key players in the nutraceutical and wellness industries.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What makes sesamin different from other antioxidants?",
        "answer": "Sesamin is a unique lignan that penetrates cell membranes efficiently and has liver-specific benefits not shared by most antioxidants."
      },
      {
        "id": 2,
        "question": "Why are so many different concentration options available?",
        "answer": "Different applications require varying potency levels, from moderate support in multi-ingredient formulas to intensive support in specialized products."
      },
      {
        "id": 3,
        "question": "How does sesamin support liver health?",
        "answer": "It helps protect liver cells from oxidative stress and supports the body's natural detoxification enzymes."
      },
      {
        "id": 4,
        "question": "What is the difference between sesamin and sesamolin?",
        "answer": "Both are beneficial lignans found naturally in sesame seeds, with similar but complementary biological activities."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegetarian/vegan formulations?",
        "answer": "Yes, the extract is 100% plant-derived and appropriate for vegetarian and vegan products."
      }
    ]
  },
  {
    "id": "shilajit-extract",
    "slug": "shilajit-extract",
    "name": "Shilajit Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "1%, 10%, 20%, 40%, 50% Fulvic Acid",
    "latinName": "Asphaltum",
    "plantPart": "Resin",
    "description": "Shilajit Extract is carefully purified from premium raw shilajit resin and standardized for fulvic acid content. Available in multiple concentrations ranging from 1% to 50%, this extract preserves the complex matrix of minerals, fulvic acid, and other beneficial compounds found in this unique substance. Our specialized purification process removes impurities while maintaining the bioactive components responsible for shilajit's traditional benefits. Each batch undergoes precise gravimetric analysis to verify fulvic acid content. The extract is available in both powder and granule forms for versatile formulation applications.",
    "shortDescription": "Purified Shilajit extract standardized for fulvic acid, supporting energy and vitality.",
    "image": "/images/products/shilajit-extract.jpg",
    "gallery": [
      "/images/products/shilajit-extract.jpg",
      "/images/products/shilajit-extract.jpg",
      "/images/products/shilajit-extract.jpg"
    ],
    "applications": [
      "Energy and vitality supplements",
      "Sports performance formulations",
      "Male health products",
      "Anti-aging supplements",
      "Mineral supplementation"
    ],
    "benefits": [
      "Energy Support: Enhances mitochondrial function and cellular energy production.",
      "Mineral Delivery: Fulvic acid helps transport minerals into cells for optimal utilization.",
      "Adaptogenic Properties: Helps the body adapt to physical stressors and supports homeostasis.",
      "Antioxidant Protection: Contains compounds that help neutralize free radicals.",
      "Male Vitality: Traditionally used to support male reproductive health and hormonal balance."
    ],
    "specifications": {
      "activeCompounds": "Fulvic Acid",
      "standardization": "Available in 1%, 10%, 20%, 40%, 50% fulvic acid concentrations",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Dark brown to black powder",
      "testing": "Gravimetric analysis for fulvic acid content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Shilajit is known for its high mineral content and fulvic acid, which enhances nutrient absorption and boosts energy levels. It has been traditionally used in Ayurvedic medicine as a rejuvenative agent, offering support for vitality, stamina, and male reproductive health. Studies also suggest its antioxidant and adaptogenic properties may support the body during physical stress and aid in faster recovery after exercise.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.3 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.4 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier has proper certifications (FSSC 22000, ISO 9001:2015, etc.)",
        "Ensure they provide standardized extracts with consistent fulvic acid levels",
        "Check if they perform thorough testing for contaminants and active compounds",
        "Evaluate their manufacturing capabilities and capacity",
        "Request samples to verify quality before placing large orders",
        "Assess their technical support and documentation capabilities"
      ]
    },
    "productionDetails": {
      "description": "Our Shilajit Extract is derived from high-quality raw shilajit resin, sourced from the pristine mountain regions of India. The purification process preserves the full spectrum of beneficial compounds while standardizing for fulvic acid content. The extract is carefully tested to ensure consistency and potency, making it ideal for use in a wide variety of formulations, from energy supplements to mineral-rich products.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Shilajit Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our manufacturing facility in Ahmedabad, Gujarat, is equipped with state-of-the-art technology to ensure the highest quality of Shilajit Extract. The facility adheres to strict GMP standards, and we conduct rigorous quality control at every stage of production to ensure consistency and purity of the extract.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds multiple certifications to guarantee the safety and quality of our Shilajit Extract. Our facility is FSSC 22000 and ISO 9001:2015 certified, and we also offer Non-GMO certified extracts. We maintain Kosher and Halal certifications for our products, and undergo regular audits to ensure ongoing compliance with these standards.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs showcases our products at major global trade shows, including Vitafoods Europe and Supply Side West. These events allow us to introduce our latest innovations in herbal extracts, such as Shilajit Extract, and connect with key players in the nutraceutical and wellness industries.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What is fulvic acid and why is it important in shilajit?",
        "answer": "Fulvic acid is a natural compound that helps enhance nutrient absorption and cellular energy production, acting as an electron carrier and mineral transporter."
      },
      {
        "id": 2,
        "question": "How is shilajit extract different from raw shilajit?",
        "answer": "Our extract undergoes purification to remove impurities while concentrating beneficial compounds like fulvic acid for consistent potency."
      },
      {
        "id": 3,
        "question": "Why are there different fulvic acid percentages available?",
        "answer": "Different applications require varying concentrations, with higher percentages offering more intensive mineral transport and cellular energy support."
      },
      {
        "id": 4,
        "question": "Does this extract contain the natural mineral profile of shilajit?",
        "answer": "Yes, our extraction process preserves the beneficial minerals while standardizing for fulvic acid content."
      },
      {
        "id": 5,
        "question": "How is shilajit formed in nature?",
        "answer": "It is formed over centuries by the decomposition of plant material and minerals compressed between rock layers in mountain regions."
      }
    ]
  },
  {
    "id": "tribulus-terrestris-extract",
    "slug": "tribulus-terrestris-extract",
    "name": "Tribulus Terrestris Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "40%, 45%, 60% Saponins",
    "latinName": "Tribulus terrestris",
    "plantPart": "Fruit",
    "description": "Tribulus Terrestris Extract is derived from premium quality fruits and standardized for saponin content using precise gravimetric analysis. Available in multiple concentrations (40%, 45%, and 60%), this extract captures the steroidal saponins responsible for tribulus's traditional benefits. Our careful extraction process preserves the natural balance of protodioscin and other furostanol saponins while ensuring consistent potency between batches. Each production lot undergoes rigorous testing to verify saponin content. Both conventional and certified organic options are available to meet various formulation requirements.",
    "shortDescription": "Standardized Tribulus extract with saponins for male vitality and sports performance.",
    "image": "/images/products/tribulus-extract.jpg",
    "gallery": [
      "/images/products/tribulus-extract-1.jpg",
      "/images/products/tribulus-extract-2.jpg",
      "/images/products/tribulus-extract-3.jpg"
    ],
    "applications": [
      "Sports performance supplements",
      "Male vitality formulations",
      "Libido support products",
      "Urinary health supplements",
      "Hormone support formulations"
    ],
    "benefits": [
      "Hormonal Support: Helps maintain healthy testosterone levels within normal ranges.",
      "Physical Performance: Supports stamina, strength, and recovery during exercise.",
      "Reproductive Health: Traditionally used to support male and female reproductive wellness.",
      "Urinary Function: Supports healthy urinary tract function and comfort.",
      "Vitality Enhancement: Promotes overall energy and vitality levels."
    ],
    "specifications": {
      "activeCompounds": "Saponins (Protodioscin, Furostanol Saponins)",
      "standardization": "Available in 40%, 45%, 60% saponin concentrations",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Yellowish-brown powder",
      "testing": "Gravimetric analysis for saponin content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Tribulus Terrestris is traditionally used in Ayurvedic and Chinese medicine for enhancing vitality and promoting reproductive health. Studies suggest its active compounds, particularly saponins like protodioscin, may help boost luteinizing hormone production, which in turn supports testosterone levels. Additionally, it has been investigated for its role in improving physical performance and recovery, especially in athletes.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.1 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.9 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier offers certified organic options",
        "Ensure standardized extract with consistent saponin levels",
        "Confirm proper testing for contaminants and active compounds",
        "Request samples for verification of quality",
        "Evaluate their manufacturing capacity and delivery timelines"
      ]
    },
    "productionDetails": {
      "description": "Our Tribulus Terrestris Extract is sourced from high-quality fruits grown in India. We use a precise extraction process to standardize the saponin content, ensuring potency and consistency. The extract is available in both conventional and organic forms, catering to a wide range of formulation needs in the sports nutrition and wellness markets.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Tribulus Terrestris Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India is equipped with advanced extraction and testing technology to ensure the highest quality Tribulus Terrestris Extract. We adhere to strict GMP standards and conduct rigorous quality control at each stage of production to guarantee the potency and purity of every batch.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds certifications to ensure the safety and quality of our Tribulus Terrestris Extract. We are FSSC 22000 and ISO 9001:2015 certified, and we also offer Non-GMO and Organic Certified extracts. Regular audits ensure ongoing compliance with these standards, providing transparency and trust in our products.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in major global trade events, such as SupplySide West and Vitafoods Europe, to introduce our latest herbal extracts, including Tribulus Terrestris Extract. These events allow us to connect with industry leaders in the nutraceutical and wellness sectors.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the active compounds in Tribulus extract?",
        "answer": "The primary active compounds are steroidal saponins, particularly protodioscin, which contribute to its traditional benefits."
      },
      {
        "id": 2,
        "question": "How does Tribulus extract support testosterone levels?",
        "answer": "Research suggests it may support luteinizing hormone which signals testosterone production, helping maintain levels within normal ranges."
      },
      {
        "id": 3,
        "question": "What's the difference between the various saponin percentages?",
        "answer": "Higher standardizations contain more concentrated saponin content, allowing for smaller dosage forms or more intensive support."
      },
      {
        "id": 4,
        "question": "Is this extract suitable for both men and women?",
        "answer": "Yes, while often marketed for men, Tribulus has traditional uses for reproductive health in both men and women."
      },
      {
        "id": 5,
        "question": "Does Tribulus extract have any effect on athletic performance?",
        "answer": "Some studies suggest it may support physical performance, though results vary between individuals."
      }
    ]
  },
  {
    "id": "centella-asiatica-extract",
    "slug": "centella-asiatica-extract",
    "name": "Centella Asiatica Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "6%, 10%, 20% Triterpene Saponins",
    "latinName": "Centella asiatica",
    "plantPart": "Leaf",
    "description": "Centella asiatica extract is derived from premium quality leaves and standardized for triterpene saponins using precise gravimetric analysis. Available in multiple concentrations (6%, 10%, and 20%), this extract captures the beneficial triterpenes including asiaticoside, madecassoside, asiatic acid, and madecassic acid. Our careful extraction process preserves these delicate compounds while ensuring consistent potency between batches. Each production lot undergoes rigorous testing to verify triterpene content. Both conventional and certified organic options are available to meet diverse formulation requirements.",
    "shortDescription": "Standardized Centella extract with triterpenes for cognitive, skin, and vascular health.",
    "image": "/images/products/centella-extract.jpg",
    "gallery": [
      "/images/products/centella-extract-1.jpg",
      "/images/products/centella-extract-2.jpg",
      "/images/products/centella-extract-3.jpg"
    ],
    "applications": [
      "Cognitive health supplements",
      "Vein and circulation products",
      "Skin health formulations",
      "Wound healing preparations",
      "Anti-stress supplements"
    ],
    "benefits": [
      "Cognitive Support: Enhances memory, focus, and overall cognitive function.",
      "Vascular Health: Supports healthy veins and capillary integrity.",
      "Collagen Synthesis: Promotes healthy collagen production for skin and connective tissue.",
      "Wound Healing: Accelerates the natural healing process for minor wounds.",
      "Adaptogenic Properties: Helps modulate stress response and support mental calm."
    ],
    "specifications": {
      "activeCompounds": "Triterpene Saponins (Asiaticoside, Madecassoside, Asiatic Acid, Madecassic Acid)",
      "standardization": "Available in 6%, 10%, 20% concentrations of triterpene saponins",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Light green powder",
      "testing": "Gravimetric analysis for triterpene saponin content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Centella asiatica has been used for centuries in traditional medicine for its cognitive, skin, and vascular health benefits. The primary bioactive compounds, including asiaticoside, madecassoside, and asiatic acid, have been shown to stimulate collagen synthesis, enhance skin strength and elasticity, and improve memory and cognitive function. Additionally, Centella has adaptogenic properties that may help modulate the stress response.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.1 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.3 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier offers certified organic options",
        "Ensure standardized extract with consistent triterpene saponin levels",
        "Confirm proper testing for contaminants and active compounds",
        "Request samples for verification of quality",
        "Evaluate their manufacturing capacity and delivery timelines"
      ]
    },
    "productionDetails": {
      "description": "Our Centella Asiatica Extract is sourced from high-quality leaves grown in India. We use a precise extraction process to standardize the triterpene saponin content, ensuring potency and consistency. The extract is available in both conventional and organic forms, catering to a wide range of formulation needs in the nutraceutical, cosmeceutical, and wellness markets.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Centella Asiatica Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to ensure protection against moisture. Smaller quantities are also available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to maintain the integrity of the extract during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India is equipped with advanced extraction and testing technology to ensure the highest quality Centella Asiatica Extract. We adhere to strict GMP standards and conduct rigorous quality control at each stage of production to guarantee the potency and purity of every batch.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs holds certifications to ensure the safety and quality of our Centella Asiatica Extract. We are FSSC 22000 and ISO 9001:2015 certified, and we also offer Non-GMO and Organic Certified extracts. Regular audits ensure ongoing compliance with these standards, providing transparency and trust in our products.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in major global trade events, such as SupplySide West and Vitafoods Europe, to introduce our latest herbal extracts, including Centella Asiatica Extract. These events allow us to connect with industry leaders in the nutraceutical and wellness sectors.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the key active compounds in Centella asiatica?",
        "answer": "The primary bioactive compounds are triterpene saponins including asiaticoside, madecassoside, asiatic acid, and madecassic acid."
      },
      {
        "id": 2,
        "question": "How does Centella extract support skin health?",
        "answer": "It stimulates type I collagen synthesis, supports fibroblast proliferation, and enhances skin strength and elasticity."
      },
      {
        "id": 3,
        "question": "What cognitive benefits does Centella provide?",
        "answer": "Research suggests it may support memory, attention, and overall cognitive function through various neuroprotective mechanisms."
      },
      {
        "id": 4,
        "question": "Why is Centella also called 'Gotu Kola'?",
        "answer": "Gotu Kola is the common name in Ayurvedic tradition, while Centella asiatica is the botanical name."
      },
      {
        "id": 5,
        "question": "What's the difference between the various saponin percentages?",
        "answer": "Higher percentages contain more concentrated triterpene content, allowing for smaller dosage forms or more intensive support."
      }
    ]
  },
  {
    "id": "cinnamon-extract",
    "slug": "cinnamon-extract",
    "name": "Cinnamon Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "5%, 8%, 10%, 12% Polyphenols",
    "latinName": "Cinnamomum verum",
    "plantPart": "Bark",
    "description": "Cinnamon Extract is derived from premium Cinnamomum verum bark and standardized for polyphenol content using UV spectroscopy. Available in multiple concentrations ranging from 5% to 12%, this extract captures the beneficial compounds responsible for cinnamon's metabolic benefits. Our specialized extraction process carefully preserves the delicate balance of type-A polymeric procyanidins and other polyphenols while minimizing coumarin content. Each batch undergoes precise UV analysis to verify polyphenol levels. Both conventional and certified organic options are available to meet diverse formulation requirements.",
    "shortDescription": "Cinnamon extract standardized for polyphenols, supporting metabolic and antioxidant health.",
    "image": "/images/products/cinnamon-extract.jpg",
    "gallery": [
      "/images/products/cinnamon-extract-1.jpg",
      "/images/products/cinnamon-extract-2.jpg",
      "/images/products/cinnamon-extract-3.jpg"
    ],
    "applications": [
      "Blood sugar management formulations",
      "Antioxidant supplements",
      "Cardiovascular support products",
      "Weight management"
    ],
    "benefits": [
      "Antioxidant Support: Rich in polyphenols that help combat oxidative stress.",
      "Metabolic Health: Traditionally used to support healthy blood glucose levels.",
      "Digestive Aid: Known to promote healthy digestion and gastrointestinal comfort.",
      "Aromatic Properties: Provides natural cinnamon flavor and aroma to various formulations."
    ],
    "specifications": {
      "activeCompounds": "Polyphenols, Type-A polymeric procyanidins",
      "standardization": "Available in 5%, 8%, 10%, 12% polyphenols",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Light brown powder",
      "testing": "UV spectroscopy for polyphenol content verification",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Cinnamon Extract is recognized for its beneficial properties, especially in supporting metabolic health and combating oxidative stress. The polyphenols, especially type-A polymeric procyanidins, contribute to its ability to modulate blood sugar levels and provide antioxidant protection. This extract is widely researched for its cardiovascular and weight management benefits, as well as its antioxidant effects.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.0 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify that the supplier offers certified organic options",
        "Ensure standardized extract with consistent polyphenol levels",
        "Confirm proper testing for contaminants and active compounds",
        "Request samples for verification of quality",
        "Evaluate their manufacturing capacity and delivery timelines"
      ]
    },
    "productionDetails": {
      "description": "Cinnamon Extract is derived from high-quality Cinnamomum verum bark sourced from Sri Lanka and India. We utilize UV spectroscopy to ensure precise standardization of polyphenol content in each batch. The extract is available in both conventional and certified organic forms, catering to various applications in nutraceuticals, functional foods, and personal care products.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Cinnamon Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to protect against moisture. Smaller quantities are available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to ensure product integrity during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facilities in Sri Lanka and India are equipped with advanced extraction and quality control technology, adhering to GMP standards to ensure the highest quality Cinnamon Extract. We conduct stringent quality checks at every stage of production to guarantee the potency and purity of the extract.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs is committed to maintaining high-quality standards and is certified under FSSC 22000 and ISO 9001:2015. We offer certified organic Cinnamon Extract, as well as Non-GMO options, to meet the diverse needs of our customers in nutraceutical, food, and personal care industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in key global events like SupplySide West and Vitafoods Europe to showcase our latest ingredients, including Cinnamon Extract. These events allow us to engage with industry professionals and present our cutting-edge herbal extracts to a global audience.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the available standardization percentages for Cinnamon Extract?",
        "answer": "It is available in 5%, 8%, 10%, and 12% polyphenol concentrations."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Yes, organic certified cinnamon extract is available."
      },
      {
        "id": 3,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 4,
        "question": "What is the primary active component in Cinnamon Extract?",
        "answer": "The key actives are polyphenols, which contribute to its antioxidant properties."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegan formulations?",
        "answer": "Yes, our Cinnamon Extract is plant-based and suitable for vegan applications."
      }
    ]
  },
  {
    "id": "clove-extract",
    "slug": "clove-extract",
    "name": "Clove Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "15% Tannins",
    "latinName": "Syzygium aromaticum",
    "plantPart": "Flower buds",
    "description": "Clove Extract, derived from the flower buds of Syzygium aromaticum, is a potent herbal ingredient known for its high tannin content. Our extract is standardized to contain 15% tannins and is available in both powder and granule forms for versatile formulation applications. The extraction process employs USP-grade solvents to ensure product purity and safety. This ingredient is valued in nutraceuticals, oral care products, and aromatherapy applications for its natural antimicrobial properties and distinctive aroma.",
    "shortDescription": "Clove extract standardized for tannins, offering antimicrobial and antioxidant benefits.",
    "image": "/images/products/clove-extract.jpg",
    "gallery": [
      "/images/products/clove-extract-1.jpg",
      "/images/products/clove-extract-2.jpg",
      "/images/products/clove-extract-3.jpg"
    ],
    "applications": [
      "Oral care formulations",
      "Antioxidant supplements",
      "Digestive health products",
      "Aromatherapy blends",
      "Topical analgesic preparations"
    ],
    "benefits": [
      "Antimicrobial Properties: Contains compounds that help inhibit the growth of harmful microorganisms.",
      "Oral Health Support: Traditionally used for dental comfort and oral hygiene.",
      "Antioxidant Activity: Rich in tannins that help neutralize free radicals.",
      "Warming Properties: Creates a pleasant warming sensation when used in topical applications."
    ],
    "specifications": {
      "activeCompounds": "Tannins",
      "standardization": "15% tannins",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Light brown powder",
      "testing": "Tannin content verified by standard assays",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Clove Extract is valued for its antimicrobial, antioxidant, and warming properties. The high tannin content in this extract contributes to its ability to neutralize free radicals and inhibit the growth of harmful microorganisms, making it a popular ingredient in oral care and topical analgesic products.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.0 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify the tannin content through assay results",
        "Ensure the product is free from contaminants",
        "Request samples for evaluation in formulation",
        "Confirm the batch testing for microbial contamination",
        "Evaluate their compliance with GMP standards"
      ]
    },
    "productionDetails": {
      "description": "Clove Extract is derived from the flower buds of Syzygium aromaticum, sourced from Indonesia. We use USP-grade solvents to ensure the purity of the extract while maintaining its potent antimicrobial properties. The extraction process involves carefully standardized methods to retain the highest level of tannins, providing a reliable and effective ingredient for various formulations.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Clove Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to protect against moisture. Smaller quantities are available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to ensure product integrity during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in Indonesia adheres to GMP standards, ensuring that Clove Extract is produced with the highest quality control. Each batch is tested for consistency in tannin content and purity to meet industry standards and customer specifications.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs is committed to maintaining high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Clove Extract is also Non-GMO, Halal, and Kosher certified, making it suitable for a wide range of industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in key global events like SupplySide West and Vitafoods Europe to showcase our latest ingredients, including Clove Extract. These events allow us to engage with industry professionals and present our cutting-edge herbal extracts to a global audience.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What is the standardization percentage for Clove Extract?",
        "answer": "It is standardized to contain 15% tannins."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Currently, the organic variant is not available (NA)."
      },
      {
        "id": 3,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 4,
        "question": "What is the primary active component in Clove Extract?",
        "answer": "The key actives are tannins, which contribute to its antimicrobial and antioxidant properties."
      },
      {
        "id": 5,
        "question": "Can Clove Extract be used in oral care products?",
        "answer": "Yes, it is commonly used in oral care formulations due to its natural antimicrobial properties."
      }
    ]
  },
  {
    "id": "moringa-leaves-extract",
    "slug": "moringa-leaves-extract",
    "name": "Moringa Leaves Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "5%, 10%, 20%, 25%, 40% Saponins",
    "latinName": "Moringa oleifera",
    "plantPart": "Leaves",
    "description": "Moringa Leaves Extract, derived from the leaves of Moringa oleifera, is a nutritionally dense herbal ingredient known for its saponin content. Our extract is available in multiple standardization levels (5%, 10%, 20%, 25%, and 40% saponins) and comes in both powder and granule forms to meet diverse formulation needs. The extraction process uses USP-grade solvents to ensure purity and potency. This ingredient is highly valued in nutraceuticals, functional foods, and cosmeceuticals for its exceptional nutritional profile and antioxidant properties.",
    "shortDescription": "Moringa leaf extract rich in saponins, with potent antioxidant and nutritional properties.",
    "image": "/images/products/moringa-leaves-extract.jpg",
    "gallery": [
      "/images/products/moringa-leaves-extract-1.jpg",
      "/images/products/moringa-leaves-extract-2.jpg",
      "/images/products/moringa-leaves-extract-3.jpg"
    ],
    "applications": [
      "Nutritional supplements",
      "Antioxidant formulations",
      "Immune support products",
      "Skin care applications",
      "Energy and vitality blends"
    ],
    "benefits": [
      "Nutritional Support: Contains a wide array of vitamins, minerals, and amino acids.",
      "Antioxidant Protection: Rich in compounds that help neutralize free radicals.",
      "Immune Enhancement: Traditionally used to support immune system function.",
      "Skin Nourishment: Provides nutrients that support healthy skin structure and appearance."
    ],
    "specifications": {
      "activeCompounds": "Saponins",
      "standardization": "5%, 10%, 20%, 25%, 40% saponins",
      "form": "Powder, Granules",
      "solubility": "Soluble in water and ethanol",
      "appearance": "Green powder",
      "testing": "Saponin content verified by standard assays",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Moringa Leaves Extract is a rich source of nutrients, including vitamins A, C, E, and K, as well as amino acids and antioxidants. It is widely used in supplements and functional foods for its health-promoting properties, including immune system support, skin nourishment, and antioxidant activity.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.0 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify the saponin content through assay results",
        "Ensure the product is free from contaminants",
        "Request samples for evaluation in formulation",
        "Confirm the batch testing for microbial contamination",
        "Evaluate their compliance with GMP standards"
      ]
    },
    "productionDetails": {
      "description": "Moringa Leaves Extract is derived from the leaves of Moringa oleifera, sourced from India. The extraction process uses USP-grade solvents to preserve the nutritional and antioxidant properties of the herb. The extract is standardized for saponins, providing a potent ingredient for a variety of formulations in nutraceuticals, functional foods, and skin care products.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Moringa Leaves Extract is available in bulk packaging (25kg fiber drums) with double polyethylene liners to protect against moisture. Smaller quantities are available in 1kg and 5kg aluminum foil bags. All packaging materials are food-grade to ensure product integrity during transportation and storage.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India adheres to GMP standards, ensuring that Moringa Leaves Extract is produced with the highest quality control. Each batch is tested for consistency in saponin content and purity to meet industry standards and customer specifications.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Moringa Leaves Extract is also Non-GMO, Halal, and Kosher certified, ensuring that it meets the needs of a wide range of industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in key global events like SupplySide West and Vitafoods Europe to showcase our latest ingredients, including Moringa Leaves Extract. These events allow us to engage with industry professionals and present our cutting-edge herbal extracts to a global audience.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the available standardization percentages for Moringa Leaves Extract?",
        "answer": "It is available in 5%, 10%, 20%, 25%, and 40% saponin concentrations."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Yes, organic certified Moringa Leaves Extract is available."
      },
      {
        "id": 3,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 4,
        "question": "What is the primary active component in Moringa Leaves Extract?",
        "answer": "The key actives are saponins, along with a rich profile of nutrients and antioxidant compounds."
      },
      {
        "id": 5,
        "question": "Is this extract suitable for vegan formulations?",
        "answer": "Yes, our Moringa Leaves Extract is plant-based and suitable for vegan applications."
      }
    ]
  },
  {
    "id": "saw-palmetto-extract-oil",
    "slug": "saw-palmetto-extract-oil",
    "name": "Saw Palmetto Extract (Oil)",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "32%, 85% Fatty Acids by GC",
    "latinName": "Serenoa repens",
    "plantPart": "Berries",
    "description": "Saw Palmetto Extract Oil, derived from the berries of Serenoa repens, is a specialized herbal ingredient known for its high fatty acid content. Our extract is standardized using Gas Chromatography (GC) to contain either 32% or 85% fatty acids and is available in oil form. The extraction process utilizes CO2 extraction technology to preserve the delicate fatty acid profile. This ingredient is particularly valued in men's health formulations, hair care products, and prostate support supplements for its traditional benefits.",
    "shortDescription": "Saw Palmetto oil rich in fatty acids, traditionally used for prostate health and hair vitality.",
    "image": "/images/products/saw-palmetto-extract-oil.jpg",
    "gallery": [
      "/images/products/saw-palmetto-extract-oil-1.jpg",
      "/images/products/saw-palmetto-extract-oil-2.jpg",
      "/images/products/saw-palmetto-extract-oil-3.jpg"
    ],
    "applications": [
      "Men's health supplements",
      "Prostate support formulations",
      "Hair vitality products",
      "Hormonal balance supplements",
      "Urinary health formulations"
    ],
    "benefits": [
      "Prostate Support: Traditionally used to support prostate health and urinary function.",
      "Hair Care: Used in formulations aimed at maintaining healthy hair.",
      "Hormonal Balance: Contains compounds that may help maintain healthy hormone metabolism.",
      "Urinary Comfort: Traditionally used to support urinary tract comfort and function."
    ],
    "specifications": {
      "activeCompounds": "Fatty Acids",
      "standardization": "32%, 85% fatty acids by GC",
      "form": "Oil",
      "solubility": "Soluble in oil",
      "appearance": "Clear to yellowish oil",
      "testing": "Fatty acid content verified by GC analysis",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Saw Palmetto Extract Oil is known for its potent fatty acid profile, making it a valuable ingredient for men's health, particularly for prostate support and hair vitality. It has been used traditionally for its anti-inflammatory, antioxidant, and hormone-balancing properties.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.0 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify fatty acid content via GC analysis",
        "Ensure product is free from contaminants",
        "Request samples for evaluation in formulations",
        "Confirm the batch testing for microbial contamination",
        "Evaluate GMP compliance"
      ]
    },
    "productionDetails": {
      "description": "Saw Palmetto Extract Oil is derived from the berries of Serenoa repens, sourced from the United States. The extraction process uses CO2 extraction technology to ensure the purity and potency of the fatty acids. The oil is standardized to either 32% or 85% fatty acids, providing a potent ingredient for men's health formulations, hair care products, and prostate support supplements.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Saw Palmetto Extract Oil is packaged in high-quality, dark-colored glass bottles to protect from light exposure. Available in 500ml, 1L, and bulk 25L containers. Packaging ensures the integrity and stability of the oil during storage and transportation.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in the United States adheres to GMP standards and ensures that Saw Palmetto Extract Oil is produced with strict quality control measures. Each batch is tested for fatty acid content, purity, and microbial contamination to meet industry standards and customer specifications.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Saw Palmetto Extract Oil is also Non-GMO, Halal, and Kosher certified, ensuring that it meets the needs of a wide range of industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in global events such as SupplySide West and Vitafoods Europe, showcasing products like Saw Palmetto Extract Oil. These events provide opportunities to engage with professionals and present our latest ingredient innovations.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the available standardization percentages for Saw Palmetto Extract?",
        "answer": "It is standardized to contain either 32% or 85% fatty acids by GC analysis."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Currently, the organic variant is not available (NA)."
      },
      {
        "id": 3,
        "question": "What form is this extract available in?",
        "answer": "It is available in oil form."
      },
      {
        "id": 4,
        "question": "What is the primary active component in Saw Palmetto Extract?",
        "answer": "The key actives are fatty acids, which contribute to its traditional benefits for prostate health."
      },
      {
        "id": 5,
        "question": "What extraction method is used for this product?",
        "answer": "CO2 extraction is used to preserve the integrity of the fatty acid profile."
      }
    ]
  },
  {
    "id": "senna-extract",
    "slug": "senna-extract",
    "name": "Senna Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "1.5%, 10%, 20%, 40% Sennosides",
    "latinName": "Senna alexandrina",
    "plantPart": "Leaves and Pods",
    "description": "Senna extract, derived from the leaves and pods of Senna alexandrina, is a potent herbal ingredient known for its sennoside content. Our extract is available in multiple standardization levels (1.5%, 10%, 20%, 40% sennosides) and comes in both powder and granule forms to meet various formulation requirements. The extraction process employs USP-grade solvents to ensure product purity and potency. This ingredient is widely used in digestive health supplements and traditional cleansing formulations for its natural properties.",
    "shortDescription": "Senna Extract rich in sennosides, traditionally used for digestive health and detoxification.",
    "image": "/images/products/senna-extract.jpg",
    "gallery": [
      "/images/products/senna-extract-1.jpg",
      "/images/products/senna-extract-2.jpg",
      "/images/products/senna-extract-3.jpg"
    ],
    "applications": [
      "Digestive health products",
      "Detoxification formulations",
      "Traditional cleansing programs",
      "Colon health supplements"
    ],
    "benefits": [
      "Digestive Support: Contains compounds that promote intestinal motility.",
      "Natural Cleansing: Traditionally used in cleansing and detoxification programs.",
      "Colon Health: Supports the natural elimination process.",
      "Temporary Relief: Used in formulations for occasional digestive discomfort."
    ],
    "specifications": {
      "activeCompounds": "Sennosides",
      "standardization": "1.5%, 10%, 20%, 40% sennosides",
      "form": "Powder, Granules",
      "solubility": "Soluble in water",
      "appearance": "Yellowish powder or granules",
      "testing": "Sennoside content verified by HPLC",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Senna Extract is known for its powerful laxative and cleansing properties. It has been used traditionally to promote digestive health and support regular bowel movements. Clinical studies have shown that sennosides, the active compounds in Senna, help stimulate peristalsis in the intestines, facilitating the natural elimination process.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.0 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "1.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify sennoside content through HPLC analysis",
        "Ensure product is free from contaminants",
        "Request samples for formulation evaluation",
        "Confirm the batch testing for microbial contamination",
        "Evaluate GMP compliance"
      ]
    },
    "productionDetails": {
      "description": "Senna Extract is derived from the leaves and pods of Senna alexandrina, sourced primarily from India and Egypt. The extraction process uses USP-grade solvents, including ethanol, to ensure the purity and potency of the sennosides. The extract is available in multiple standardization levels to meet the diverse needs of digestive health and detoxification formulations.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Senna Extract is packaged in high-quality, moisture-resistant bags and drums to maintain product integrity. Available in 500g, 1kg, and bulk 25kg containers. Packaging ensures the extract remains free from moisture and contaminants during storage and transport.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India/Egypt adheres to GMP standards and ensures that Senna Extract is produced with rigorous quality control measures. Each batch is tested for sennoside content, purity, and microbial contamination to meet industry standards.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Senna Extract is also Non-GMO, Halal, and Kosher certified, ensuring that it meets the needs of a wide range of industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in global events such as SupplySide West and Vitafoods Europe, showcasing products like Senna Extract. These events provide opportunities to engage with professionals and present our latest ingredient innovations.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the available standardization percentages for Senna Extract?",
        "answer": "It is available in 1.5%, 10%, 20%, and 40% sennoside concentrations."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Currently, the organic variant is not available (NA)."
      },
      {
        "id": 3,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 4,
        "question": "What is the primary active component in Senna Extract?",
        "answer": "The key actives are sennosides, which contribute to its digestive properties."
      },
      {
        "id": 5,
        "question": "What is the recommended usage duration for products containing Senna Extract?",
        "answer": "Products containing Senna Extract are typically recommended for short-term or occasional use."
      }
    ]
  },
  {
    "id": "terminalia-bellerica-extract",
    "slug": "terminalia-bellerica-extract",
    "name": "Terminalia Bellerica Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "40%, 45% Tannins",
    "latinName": "Terminalia bellerica",
    "plantPart": "Fruit",
    "description": "Terminalia Bellerica Extract, derived from the fruit of Terminalia bellerica, is a valuable Ayurvedic ingredient known for its high tannin content. Our extract is standardized to contain either 40% or 45% tannins and is available in both powder and granule forms to support diverse formulation needs. The extraction process uses USP-grade solvents to ensure purity and potency. This ingredient is widely used in traditional Ayurvedic formulations, digestive health supplements, and antioxidant products for its beneficial properties.",
    "shortDescription": "Terminalia Bellerica Extract rich in tannins, used in digestive health, antioxidant, and Ayurvedic formulations.",
    "image": "/images/products/terminalia-bellerica.jpg",
    "gallery": [
      "/images/products/terminalia-bellerica-1.jpg",
      "/images/products/terminalia-bellerica-1.jpg",
      "/images/products/terminalia-bellerica-1.jpg"
    ],
    "applications": [
      "Digestive health supplements",
      "Antioxidant formulations",
      "Respiratory support products",
      "Traditional Ayurvedic blends",
      "Immune support supplements"
    ],
    "benefits": [
      "Digestive Support: Traditionally used to promote healthy digestion and metabolism.",
      "Antioxidant Protection: Rich in tannins that help neutralize free radicals.",
      "Respiratory Health: Used in traditional formulations for respiratory wellness.",
      "Detoxification: Valued in Ayurvedic traditions for its cleansing properties."
    ],
    "specifications": {
      "activeCompounds": "Tannins",
      "standardization": "40%, 45% tannins",
      "form": "Powder, Granules",
      "solubility": "Soluble in water",
      "appearance": "Light brown powder or granules",
      "testing": "Tannin content verified by UV spectrophotometry",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Terminalia Bellerica Extract is a significant source of tannins, compounds known for their antioxidant properties. Clinical studies show its effectiveness in neutralizing free radicals and supporting digestive health. It has also been used traditionally for respiratory health and detoxification in Ayurvedic medicine, often in combination with other herbs in formulations like Triphala.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.5 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "2.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify tannin content through UV spectrophotometry",
        "Ensure product is free from contaminants",
        "Request samples for formulation evaluation",
        "Confirm the batch testing for microbial contamination",
        "Evaluate GMP compliance"
      ]
    },
    "productionDetails": {
      "description": "Terminalia Bellerica Extract is derived from the fruit of Terminalia bellerica, sourced from India. The extraction process uses USP-grade solvents, including ethanol, to ensure the purity and potency of the tannins. The extract is available in multiple standardization levels to meet the diverse needs of digestive health and antioxidant formulations.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Terminalia Bellerica Extract is packaged in high-quality, moisture-resistant bags and drums to maintain product integrity. Available in 500g, 1kg, and bulk 25kg containers. Packaging ensures the extract remains free from moisture and contaminants during storage and transport.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India adheres to GMP standards and ensures that Terminalia Bellerica Extract is produced with rigorous quality control measures. Each batch is tested for tannin content, purity, and microbial contamination to meet industry standards.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Terminalia Bellerica Extract is also Non-GMO, Halal, and Kosher certified, ensuring that it meets the needs of a wide range of industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in global events such as SupplySide West and Vitafoods Europe, showcasing products like Terminalia Bellerica Extract. These events provide opportunities to engage with professionals and present our latest ingredient innovations.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the available standardization percentages for Terminalia Bellerica Extract?",
        "answer": "It is standardized to contain either 40% or 45% tannins."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Yes, organic certified Terminalia Bellerica extract is available."
      },
      {
        "id": 3,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 4,
        "question": "What is the primary active component in Terminalia Bellerica Extract?",
        "answer": "The key actives are tannins, which contribute to its antioxidant and digestive properties."
      },
      {
        "id": 5,
        "question": "Is this extract commonly used in Ayurvedic formulations?",
        "answer": "Yes, it is one of the three fruits that comprise the traditional Ayurvedic formula Triphala."
      }
    ]
  },
  {
    "id": "terminalia-chebula-extract",
    "slug": "terminalia-chebula-extract",
    "name": "Terminalia Chebula Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "40%, 45% Tannins",
    "latinName": "Terminalia chebula",
    "plantPart": "Fruit",
    "description": "Terminalia Chebula Extract, derived from the fruit of Terminalia chebula, is a renowned Ayurvedic ingredient known for its high tannin content. Our extract is standardized to contain either 40% or 45% tannins and is available in both powder and granule forms to accommodate various formulation needs. The extraction process employs USP-grade solvents to ensure product purity and potency. This ingredient is highly valued in traditional Ayurvedic formulations, digestive health supplements, and antioxidant products for its numerous beneficial properties.",
    "shortDescription": "Terminalia Chebula Extract, rich in tannins, supports digestive health, antioxidant protection, and oral health.",
    "image": "/images/products/terminalia-chebula.jpg",
    "gallery": [
      "/images/products/terminalia-chebula-1.jpg",
      "/images/products/terminalia-chebula-2.jpg",
      "/images/products/terminalia-chebula-3.jpg"
    ],
    "applications": [
      "Digestive health supplements",
      "Antioxidant formulations",
      "Oral health products",
      "Traditional Ayurvedic blends",
      "Immune support supplements"
    ],
    "benefits": [
      "Digestive Support: Traditionally used to promote healthy digestion and elimination.",
      "Antioxidant Protection: Rich in tannins that help combat oxidative stress.",
      "Oral Health: Used in traditional formulations for maintaining oral hygiene.",
      "Detoxification: Valued in Ayurvedic traditions for its cleansing properties."
    ],
    "specifications": {
      "activeCompounds": "Tannins",
      "standardization": "40%, 45% tannins",
      "form": "Powder, Granules",
      "solubility": "Soluble in water",
      "appearance": "Light brown powder or granules",
      "testing": "Tannin content verified by UV spectrophotometry",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Terminalia Chebula Extract is an important component in Ayurvedic medicine, known for its high tannin content. Clinical studies show its effectiveness in supporting digestion, providing antioxidant protection, and enhancing oral health. It has been used for centuries for detoxification and digestive health, and it forms one of the three fruits in the traditional Triphala formula.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.5 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.8 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "2.2 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify tannin content through UV spectrophotometry",
        "Ensure product is free from contaminants",
        "Request samples for formulation evaluation",
        "Confirm the batch testing for microbial contamination",
        "Evaluate GMP compliance"
      ]
    },
    "productionDetails": {
      "description": "Terminalia Chebula Extract is derived from the fruit of Terminalia chebula, sourced from India. The extraction process uses USP-grade solvents, including ethanol, to ensure the purity and potency of the tannins. The extract is available in multiple standardization levels to meet the diverse needs of digestive health and antioxidant formulations.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Terminalia Chebula Extract is packaged in high-quality, moisture-resistant bags and drums to maintain product integrity. Available in 500g, 1kg, and bulk 25kg containers. Packaging ensures the extract remains free from moisture and contaminants during storage and transport.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India adheres to GMP standards and ensures that Terminalia Chebula Extract is produced with rigorous quality control measures. Each batch is tested for tannin content, purity, and microbial contamination to meet industry standards.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Terminalia Chebula Extract is also Non-GMO, Halal, and Kosher certified, ensuring that it meets the needs of a wide range of industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in global events such as SupplySide West and Vitafoods Europe, showcasing products like Terminalia Chebula Extract. These events provide opportunities to engage with professionals and present our latest ingredient innovations.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What are the available standardization percentages for Terminalia chebula Extract?",
        "answer": "It is standardized to contain either 40% or 45% tannins."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Yes, organic certified Terminalia chebula extract is available."
      },
      {
        "id": 3,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 4,
        "question": "What is the primary active component in Terminalia chebula Extract?",
        "answer": "The key actives are tannins, which contribute to its antioxidant and digestive properties."
      },
      {
        "id": 5,
        "question": "Is this extract commonly used in Ayurvedic formulations?",
        "answer": "Yes, it is one of the three fruits that comprise the traditional Ayurvedic formula Triphala."
      }
    ]
  },
  {
    "id": "trikatu-extract",
    "slug": "trikatu-extract",
    "name": "Trikatu Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "1.5% Piperine and 1.0% Total Gingerols",
    "latinName": "Piper longum, Zingiber officinale, Piper nigrum",
    "plantPart": "Fruit and Root",
    "description": "Trikatu Extract is a traditional Ayurvedic formulation derived from a precise blend of three powerful botanicals: Piper Longum (Long Pepper), Zingiber officinale (Ginger), and Piper nigrum (Black Pepper). Our extract is standardized to contain 1.5% piperine and 1.0% total gingerols, and is available in both powder and granule forms to support diverse formulation needs. The extraction process uses USP-grade solvents to ensure purity and potency. This ingredient is highly valued in traditional Ayurvedic formulations, digestive health supplements, and bioavailability enhancers.",
    "shortDescription": "Trikatu Extract, combining long pepper, ginger, and black pepper, supports digestion, metabolism, and nutrient absorption.",
    "image": "/images/products/trikatu.jpg",
    "gallery": [
      "/images/products/trikatu-1.jpg",
      "/images/products/trikatu-2.jpg",
      "/images/products/trikatu-3.jpg"
    ],
    "applications": [
      "Digestive health supplements",
      "Bioavailability enhancers",
      "Thermogenic formulations",
      "Traditional Ayurvedic blends",
      "Metabolism support products"
    ],
    "benefits": [
      "Digestive Support: Traditionally used to promote healthy digestion and metabolism.",
      "Bioavailability Enhancement: Contains piperine, known to enhance the absorption of other nutrients.",
      "Thermogenic Action: Traditionally used to support metabolic thermogenesis.",
      "Synergistic Activity: Combines three botanicals for comprehensive digestive support."
    ],
    "specifications": {
      "activeCompounds": "Piperine (from black pepper and long pepper), Gingerols (from ginger)",
      "standardization": "1.5% piperine and 1.0% total gingerols",
      "form": "Powder, Granules",
      "solubility": "Soluble in ethanol and water",
      "appearance": "Light brown powder or granules",
      "testing": "Piperine and gingerol content verified by HPLC",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Trikatu Extract is a well-known Ayurvedic formulation for digestive health, bioenhancement, and thermogenesis. Research supports the use of piperine to enhance nutrient absorption and gingerols to stimulate metabolism. The synergistic combination of these botanicals improves overall digestion and promotes metabolic activity, making it a valuable ingredient in both traditional medicine and modern supplements.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.0 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "2.3 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify piperine and gingerol content through HPLC",
        "Ensure product purity through microbial testing",
        "Request samples for formulation evaluation",
        "Confirm GMP compliance",
        "Evaluate batch testing for contaminants"
      ]
    },
    "productionDetails": {
      "description": "Trikatu Extract is derived from a blend of three powerful botanicals: Piper Longum (Long Pepper), Zingiber officinale (Ginger), and Piper nigrum (Black Pepper). The extraction process uses USP-grade solvents to ensure a high-quality product. The extract is standardized to contain 1.5% piperine and 1.0% total gingerols, available in both powder and granule forms.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Trikatu Extract is packaged in moisture-resistant bags and drums, ensuring product integrity during storage and transport. Available in 500g, 1kg, and bulk 25kg containers.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India follows GMP standards to produce Trikatu Extract with stringent quality control measures. Each batch undergoes testing for piperine and gingerol content, microbial contamination, and other quality parameters.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs maintains high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Trikatu Extract is also Non-GMO, Halal, and Kosher certified, ensuring that it meets the needs of a wide range of industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in global events such as SupplySide West and Vitafoods Europe, showcasing products like Trikatu Extract. These events provide opportunities to engage with professionals and present our latest ingredient innovations.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "What is the standardization percentage for Trikatu Extract?",
        "answer": "It is standardized to contain 1.5% piperine and 1.0% total gingerols."
      },
      {
        "id": 2,
        "question": "Is organic certification available for this extract?",
        "answer": "Yes, organic certified Trikatu extract is available."
      },
      {
        "id": 3,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 4,
        "question": "What are the primary active components in Trikatu Extract?",
        "answer": "The key actives are piperine (from black pepper and long pepper) and gingerols (from ginger)."
      },
      {
        "id": 5,
        "question": "Can Trikatu Extract be used to enhance the bioavailability of other supplements?",
        "answer": "Yes, it is commonly used as a bioenhancer due to its piperine content."
      }
    ]
  },
  {
    "id": "turmeric-with-water-extract",
    "slug": "turmeric-with-water-extract",
    "name": "Turmeric with Water Extract",
    "categoryId": "standardized-extracts",
    "categorySlug": "standardized-extracts",
    "categoryName": "Standardized Herbal Extracts",
    "standardization": "10% Polysaccharides",
    "latinName": "Curcuma longa",
    "plantPart": "Rhizome",
    "description": "Turmeric with Water Extract, derived from the rhizome of Curcuma longa, is a specialized herbal ingredient focusing on the water-soluble polysaccharide fraction rather than the more common curcuminoid content. Our extract is standardized to contain 10% polysaccharides and is available in both powder and granule forms to support diverse formulation needs. The extraction process uses water extraction technology to specifically isolate the polysaccharide components. This ingredient is valued in immune support formulations, joint health supplements, and holistic wellness products.",
    "shortDescription": "Turmeric with Water Extract, standardized to 10% polysaccharides, focuses on the water-soluble polysaccharide fraction for immune and joint support.",
    "image": "/images/products/turmeric-water.jpg",
    "gallery": [
      "/images/products/turmeric-water.jpg",
      "/images/products/turmeric-water.jpg",
      "/images/products/turmeric-water.jpg"
    ],
    "applications": [
      "Immune support supplements",
      "Joint health formulations",
      "Digestive health products",
      "Holistic wellness blends",
      "Traditional herbal formulations"
    ],
    "benefits": [
      "Immune Support: Contains polysaccharides that may help modulate immune function.",
      "Joint Comfort: Used in formulations aimed at supporting joint health and mobility.",
      "Digestive Support: Traditionally used to promote healthy digestion.",
      "Holistic Wellness: Offers water-soluble components that complement the fat-soluble curcuminoids found in standard turmeric extracts."
    ],
    "specifications": {
      "activeCompounds": "Polysaccharides",
      "standardization": "10% polysaccharides",
      "form": "Powder, Granules",
      "solubility": "Water-soluble",
      "appearance": "Yellow powder or granules",
      "testing": "Polysaccharide content verified by HPLC",
      "heavyMetals": "Meets USP <232> specifications",
      "shelfLife": "24 months when stored properly",
      "storage": "Store in a cool, dry place away from direct sunlight"
    },
    "research": "Turmeric with Water Extract is a specialized product focusing on water-soluble polysaccharides rather than curcuminoids. Research indicates that polysaccharides in turmeric may support immune function, joint comfort, and digestive health. This extract is a unique approach to turmeric's benefits, providing a broader range of bioactive components compared to standard turmeric extracts.",
    "certifications": ["FSSC 22000", "ISO 9001:2015", "Kosher", "Halal", "Non-GMO"],
    "featured": true,
    "documents": [
      { "id": 1, "name": "Technical Data Sheet", "size": "2.0 MB" },
      { "id": 2, "name": "Safety Data Sheet", "size": "1.5 MB" },
      { "id": 3, "name": "Certificate of Analysis", "size": "2.3 MB" }
    ],
    "supplierInfo": {
      "points": [
        "Verify polysaccharide content through HPLC",
        "Ensure product purity through microbial testing",
        "Request samples for formulation evaluation",
        "Confirm GMP compliance",
        "Evaluate batch testing for contaminants"
      ]
    },
    "productionDetails": {
      "description": "Turmeric with Water Extract is derived from the rhizome of Curcuma longa. The extraction process uses water extraction technology to isolate the water-soluble polysaccharide fraction. It is standardized to contain 10% polysaccharides and is available in both powder and granule forms.",
      "image": "/images/process-ch.webp"
    },
    "packaging": {
      "description": "Turmeric with Water Extract is packaged in moisture-resistant bags and drums to maintain product integrity during storage and transport. Available in 500g, 1kg, and bulk 25kg containers.",
      "image": "/images/packaging-ch.webp"
    },
    "factory": {
      "description": "Our facility in India follows GMP standards to produce Turmeric with Water Extract with strict quality control measures. Each batch is tested for polysaccharide content, microbial contamination, and other quality parameters.",
      "image": "/images/factory-ch.webp"
    },
    "certificationsSection": {
      "description": "Star Hi Herbs ensures high-quality standards with certifications such as FSSC 22000 and ISO 9001:2015. Our Turmeric with Water Extract is also Non-GMO, Halal, Kosher, and Organic certified, ensuring it meets the needs of diverse industries.",
      "image": "/images/certifications-ch.webp"
    },
    "events": {
      "description": "Star Hi Herbs participates in global trade shows like SupplySide West and Vitafoods Europe, where Turmeric with Water Extract is showcased. These events provide opportunities to network with industry professionals and explore the latest ingredient innovations.",
      "image": "/images/events.jpg"
    },
    "faqs": [
      {
        "id": 1,
        "question": "How does Turmeric with Water Extract differ from standard turmeric extracts?",
        "answer": "This extract focuses on the water-soluble polysaccharide fraction rather than the fat-soluble curcuminoid compounds typically emphasized in standard turmeric extracts."
      },
      {
        "id": 2,
        "question": "What is the standardization percentage for Turmeric with Water Extract?",
        "answer": "It is standardized to contain 10% polysaccharides."
      },
      {
        "id": 3,
        "question": "Is organic certification available for this extract?",
        "answer": "Yes, organic certified Turmeric with Water extract is available."
      },
      {
        "id": 4,
        "question": "What forms is this extract available in?",
        "answer": "It is available in powder and granule forms."
      },
      {
        "id": 5,
        "question": "What extraction method is used for this product?",
        "answer": "Water extraction is used to specifically isolate the polysaccharide components."
      }
    ]
  }
];

/**
 * Certifications Data
 */
export const certifications: Certification[] = [
  {
    id: 1,
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    image: '/images/certifications/iso.png',
  },
  {
    id: 2,
    name: 'FSSC 22000',
    description: 'Food Safety Management',
    image: '/images/certifications/fssc.png',
  },
  {
    id: 3,
    name: 'Organic India Certified',
    description: 'Organic Certification',
    image: '/images/certifications/organic.jpg',
  },
  {
    id: 4,
    name: 'USDA Organic Certified',
    description: 'USDA & EU Organic Standards',
    image: '/images/certifications/usda-organic.jpg',
  },
  {
    id: 5,
    name: 'Kosher Certified',
    description: 'Meets Kosher Requirements',
    image: '/images/certifications/kosher.jpg',
  },
  {
    id: 6,
    name: 'Halal Certified',
    description: 'Meets Halal Requirements',
    image: '/images/certifications/halal-1.jpg',
  },
  {
    id: 7,
    name: 'DSIR Certified',
    description: 'Meets DSIR Requirements',
    image: '/images/certifications/dsir.jpg',
  },
  {
    id: 8,
    name: 'GMP Certified',
    description: 'Good Manufacturing Practices',
    image: '/images/certifications/gmp.jpg',
  },
  {
    id: 9,
    name: 'FSSAI Certified',
    description: 'Meets FSSAI Requirements',
    image: '/images/certifications/fssai.jpg',
  },
  {
    id: 10,
    name: 'Shefexil Certified',
    description: 'Verified Shefexil Products',
    image: '/images/certifications/shefexil.jpg',
  },
  {
    id: 11,
    name: 'Spice Board of India Certified',
    description: 'Meets Spice Board of India Requirements',
    image: '/images/certifications/spice.jpg',
  },
];

/**
 * News Items Data
 */
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Star Hi Herbs Launches New Organic Andrographis Extract',
    date: '2023-11-15',
    image: '/images/products/andrographis-extract.jpg',
    excerpt: 'Our new organic andrographis extract is standardized to contain up to 90% andrographolides and certified USDA Organic.',
    category: 'Product Launch',
  },
  {
    id: 2,
    title: 'Star Hi Herbs Launches Premium Ashwagandha Extract',
    date: '2023-10-22',
    image: '/images/products/ashwagandha-extract.jpg',
    excerpt: 'Our new premium ashwagandha extract is standardized to contain up to 10% withanolides using both HPLC and gravimetric methods.',
    category: 'Product Launch',
  },
  {
    id: 3,
    title: 'Star Hi Herbs Receives Sustainability Award',
    date: '2023-09-10',
    image: '/images/hassan-plant.jpg',
    excerpt: 'Our commitment to sustainable farming practices has been recognized with the 2023 Green Business Award.',
    category: 'Awards',
  },
  {
    id: 4,
    title: 'New Research Publication on Turmeric Bioavailability',
    date: '2023-08-25',
    image: '/images/products/turmeric-extract-1.jpg',
    excerpt: 'Our R&D team has published groundbreaking research on enhancing turmeric extract bioavailability in the Journal of Medicinal Plants.',
    category: 'Research',
  },
  {
    id: 5,
    title: 'Star Hi Herbs to Exhibit at Vitafoods Europe 2024',
    date: '2023-07-18',
    image: '/images/events/vitafoods-europe.jpg',
    excerpt: 'Visit us at Booth #G135 to discover our latest innovations in herbal extracts and meet our technical experts.',
    category: 'Events',
  },
  {
    id: 6,
    title: 'New Manufacturing Facility Opens in Hassan',
    date: '2023-06-05',
    image: '/images/starhi-hassan-unit-warehouse.png',
    excerpt: 'Our state-of-the-art manufacturing facility in Hassan is now operational, increasing our production capacity by 40%.',
    category: 'Company News',
  },
  {
    id: 7,
    title: 'Star Hi Herbs Achieves FSSC 22000 v5.1 Certification',
    date: '2023-05-12',
    image: '/images/certifications/fssc.png',
    excerpt: 'We are proud to announce that our facilities have been certified to the latest FSSC 22000 v5.1 food safety standard.',
    category: 'Certifications',
  },
  {
    id: 8,
    title: 'New Patent Filed for Innovative Extraction Process',
    date: '2023-04-30',
    image: '/images/advanced-rnd.jpg',
    excerpt: 'Star Hi Herbs has filed a patent for a novel green extraction technology that reduces solvent usage by 60%.',
    category: 'Innovation',
  }
];

/**
 * Global Locations Data
 */
export const locations: Location[] = [
  {
    id: 1,
    name: 'New York, USA',
    country: 'United States',
    type: 'Headquarters',
    position: { left: '22%', top: '38%' },
    details: 'Global headquarters with sales and distribution center',
    address: '123 Herb Lane, Natural Park\nGreenville, NY 12345',
    phone: '+1 (555) 123-4567',
    email: 'us@starhiherbs.com',
  },
  {
    id: 2,
    name: 'Frankfurt, Germany',
    country: 'Germany',
    type: 'Regional Office',
    position: { left: '48%', top: '34%' },
    details: 'European operations hub servicing EU markets',
    address: 'Herbalstraße 45\n60313 Frankfurt',
    phone: '+49 69 1234567',
    email: 'eu@starhiherbs.com',
  },
  {
    id: 3,
    name: 'Mumbai, India',
    country: 'India',
    type: 'Manufacturing Facility',
    position: { left: '63%', top: '48%' },
    details: 'Primary extraction and processing facility with R&D center',
    address: '456 Herbal Avenue\nMumbai 400001',
    phone: '+91 22 1234 5678',
    email: 'india@starhiherbs.com',
  },
  {
    id: 4,
    name: 'Singapore',
    country: 'Singapore',
    type: 'Regional Office',
    position: { left: '72%', top: '54%' },
    details: 'Asia-Pacific distribution and sales center',
    address: '789 Nature Road\nSingapore 123456',
    phone: '+65 6789 0123',
    email: 'asia@starhiherbs.com',
  },
  {
    id: 5,
    name: 'São Paulo, Brazil',
    country: 'Brazil',
    type: 'Regional Office',
    position: { left: '32%', top: '65%' },
    details: 'Latin America market operations',
    address: 'Avenida das Ervas 789\nSão Paulo, SP 01310-100',
    phone: '+55 11 9876 5432',
    email: 'latam@starhiherbs.com',
  },
  {
    id: 6,
    name: 'Sydney, Australia',
    country: 'Australia',
    type: 'Distribution Center',
    position: { left: '85%', top: '70%' },
    details: 'Australia and New Zealand distribution',
    address: '321 Botanical Street\nSydney NSW 2000',
    phone: '+61 2 9876 5432',
    email: 'australia@starhiherbs.com',
  },
];

/**
 * Continents Data
 */
export const continents: Continent[] = [
  { id: 1, name: 'North America', locations: [1] },
  { id: 2, name: 'Europe', locations: [2] },
  { id: 3, name: 'Asia', locations: [3, 4] },
  { id: 4, name: 'South America', locations: [5] },
  { id: 5, name: 'Australia', locations: [6] },
];

/**
 * Testimonials Data
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Star Hi Herbs' standardized extracts have consistently met our strict quality requirements. Their andrographis extract has become a key ingredient in our bestselling immune support supplement line.",
    author: "Sarah Johnson",
    company: "VitaWell Supplements",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    id: 2,
    quote: "We've been working with Star Hi Herbs for over 5 years, and their commitment to quality and sustainability aligns perfectly with our brand values. Their ashwagandha extract has become the cornerstone of our stress management product line.",
    author: "Michael Chen",
    company: "GreenLife Nutrition",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    id: 3,
    quote: "The technical support and documentation provided by Star Hi Herbs is unmatched in the industry. Their team has been instrumental in helping us develop new formulations.",
    author: "Emma Rodriguez",
    company: "Innovate Wellness",
    image: "/images/testimonials/testimonial-3.jpg",
  },
  {
    id: 4,
    quote: "Star Hi Herbs' commitment to sustainable sourcing and fair trade practices makes them an ideal partner for our ethical supplement brand. Quality you can trust.",
    author: "David Patel",
    company: "EcoNutrition",
    image: "/images/testimonials/testimonial-4.jpg",
  },
];

/**
 * Blog Posts Data
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Science Behind Standardized Herbal Extracts",
    date: "2023-05-18",
    image: "/images/blog/blog-1.jpg",
    excerpt: "Understanding the extraction process and benefits of consistent active compound levels in herbal supplements.",
    category: "Research",
    url: "/blog/science-behind-standardized-extracts",
  },
  {
    id: 2,
    title: "Sustainable Sourcing: From Farm to Extract",
    date: "2023-04-22",
    image: "/images/blog/blog-2.jpg",
    excerpt: "How our commitment to sustainable farming practices ensures quality while protecting the environment.",
    category: "Sustainability",
    url: "/blog/sustainable-sourcing",
  },
  {
    id: 3,
    title: "Emerging Trends in Herbal Supplement Formulation",
    date: "2023-03-15",
    image: "/images/blog/blog-3.jpg",
    excerpt: "Exploring innovative delivery systems and combination products in the herbal supplement industry.",
    category: "Industry Trends",
    url: "/blog/emerging-trends-herbal-supplements",
  },
];

/**
 * Sustainability Initiatives Data
 */
export const sustainabilityInitiatives: SustainabilityInitiative[] = [
  {
    id: 1,
    title: 'Organic Farming',
    description: 'Supporting over 1,000 farmers in transitioning to organic practices.',
    icon: 'Leaf',
    stat: '5,000+ acres',
    label: 'Organic Farmland',
  },
  {
    id: 2,
    title: 'Zero Waste',
    description: 'Implementing circular economy principles in our operations.',
    icon: 'Recycle',
    stat: '95%',
    label: 'Waste Recycled',
  },
  {
    id: 3,
    title: 'Community Support',
    description: 'Empowering local communities through education and employment.',
    icon: 'Users',
    stat: '2,000+',
    label: 'Farmers Trained',
  },
  {
    id: 4,
    title: 'Carbon Neutral',
    description: 'Working towards carbon neutrality across our operations.',
    icon: 'Globe',
    stat: '-40%',
    label: 'Carbon Reduction',
  },
];

/**
 * Sustainability Certifications Data
 */
export const sustainabilityCertifications = [
  {
    id: 1,
    name: 'USDA Organic',
    image: '/images/certifications/usda-organic.jpg',
  },
  {
    id: 2,
    name: 'EU Organic',
    image: '/images/certifications/eu-organic.jpg',
  },
  {
    id: 3,
    name: 'Fair Trade',
    image: '/images/certifications/fair-trade.jpg',
  },
  {
    id: 4,
    name: 'Rainforest Alliance',
    image: '/images/certifications/rainforest-alliance.jpg',
  },
];

/**
 * Research Projects Data
 */
export const researchProjects = [
  {
    id: 1,
    title: 'Withanolide Effects on Stress Biomarkers',
    category: 'Clinical Study',
    image: '/images/research/research-1.jpg',
    description: 'Research demonstrating significant reduction in cortisol levels and stress markers with ashwagandha extract.',
  },
  {
    id: 2,
    title: 'Enhanced Andrographolide Bioavailability',
    category: 'Clinical Study',
    image: '/images/research/research-2.jpg',
    description: 'Novel formulation showing 5x better absorption compared to standard extracts.',
  },
  {
    id: 3,
    title: 'Green Extraction Technology',
    category: 'Technology',
    image: '/images/research/research-3.jpg',
    description: 'Sustainable extraction method reducing solvent usage by 60%.',
  },
  {
    id: 4,
    title: 'Standardization Methods',
    category: 'Methodology',
    image: '/images/research/research-4.jpg',
    description: 'New analytical methods for complex herbal matrices.',
  },
];

// Helper functions for data access

/**
 * Get a product category by slug
 */
export function getProductCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(category => category.slug === slug);
}

/**
 * Get a product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

/**
 * Get products by category slug
 */
export function getProductsByCategorySlug(categorySlug: string): Product[] {
  return products.filter(product => product.categorySlug === categorySlug);
}

/**
 * Get a location by ID
 */
export function getLocationById(id: number | string): Location | undefined {
  return locations.find(location => location.id === id);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(count: number = 3): Product[] {
  // In a real app, you might have a "featured" flag on products
  // For now, just return the first few products
  return products.slice(0, count);
}

/**
 * Get related products based on category
 */
export function getRelatedProducts(productId: string | number, count: number = 3): Product[] {
  const currentProduct = products.find(product => product.id === productId);
  if (!currentProduct) return [];

  // Get products from the same category, excluding the current product
  const sameCategory = products.filter(
    product => product.categoryId === currentProduct.categoryId && product.id !== currentProduct.id
  );

  // If we have enough products from the same category, return them
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count);
  }

  // Otherwise, add some products from other categories to reach the desired count
  const otherProducts = products.filter(
    product => product.categoryId !== currentProduct.categoryId && product.id !== currentProduct.id
  );

  return [...sameCategory, ...otherProducts].slice(0, count);
}

/**
 * Product of the Month Configuration
 *
 * This object controls which product is featured as the "Product of the Month"
 * To change the featured product each month, simply update the productId value
 * with the ID of the product you want to feature.
 *
 * Example product IDs:
 * - 'turmeric' (Turmeric Extract)
 * - 'berberis' (Berberis Aristata Extract)
 * - 'black-pepper' (Black Pepper Extract)
 * - 'boswellia' (Boswellia Serrata Extract)
 * - 'ashwagandha' (Ashwagandha Extract)
 * - 'andrographis' (Andrographis Extract)
 * - 'amla' (Amla Extract)
 * - 'cucumis-sativus' (Cucumis Sativus Extract)
 */
export const productOfTheMonthConfig = {
  // Change this value to update the Product of the Month
  productId: 'turmeric',
  // Optional: Add a custom tagline for the product of the month
  tagline: 'Our flagship anti-inflammatory extract',
  // You can add more configuration options here if needed in the future
};

/**
 * Get the Product of the Month
 *
 * This function returns the product configured as the "Product of the Month"
 * If the configured product doesn't exist, it falls back to the first featured product
 */
export function getProductOfTheMonth(): Product | undefined {
  // Try to get the configured product
  const configuredProduct = products.find(product => product.id === productOfTheMonthConfig.productId);

  // If found, return it
  if (configuredProduct) {
    return configuredProduct;
  }

  // Otherwise, fall back to the first featured product
  return products.find(product => product.featured === true);
}

/**
 * Awards Data
 *
 * This array contains the company's awards and recognitions
 */
export const awards: Award[] = [
  {
    id: 1,
    title: 'Times Business Award',
    year: '2020',
    description: 'Recognized for excellence in herbal extract manufacturing and sustainable business practices.',
    image: '/images/times-business-award-2020.jpg',
  },
  {
    id: 2,
    title: 'World Signature Award',
    year: '2023',
    description: 'IBARCASIA recognition for innovation in herbal extract standardization and quality control.',
    image: '/images/world-signature-award-2023.jpg',
  },
];

/**
 * Events Data
 *
 * This array contains upcoming and recent industry events where Star Hi Herbs participates
 */
export const events: Event[] = [
  {
    id: 3,
    name: 'Vitafoods Europe',
    startDate: '2025-05-20',
    endDate: '2025-05-22',
    location: 'Fira Barcelona Gran Via',
    city: 'Barcelona',
    country: 'Spain',
    description: 'Vitafoods Europe is the premier nutraceutical event, featuring exhibitors from the supplement, functional food and beverage, and nutricosmetic industries. Star Hi Herbs will showcase our latest herbal extract innovations and meet with global partners.',
    image: '/images/events/vitafoods-europe.jpg',
    boothNumber: 'TBA',
    website: 'https://www.vitafoods.eu.com/en/home.html',
    upcoming: true
  },
  {
    id: 4,
    name: 'Hi & Fi Asia-China',
    startDate: '2025-06-24',
    endDate: '2025-06-26',
    location: 'NECC',
    city: 'Shanghai',
    country: 'China',
    description: 'Hi & Fi Asia-China is a leading event for health ingredients and food ingredients in Asia. Star Hi Herbs will present our premium herbal extracts and innovative botanical solutions for the Asian market.',
    image: '/images/events/hi-fi-asia-china.jpg',
    boothNumber: 'TBA',
    website: 'https://www.figlobal.com/china/en/home.html',
    upcoming: true
  },
  {
    id: 5,
    name: 'CPHI Korea',
    startDate: '2025-08-26',
    endDate: '2025-08-28',
    location: 'COEX',
    city: 'Seoul',
    country: 'Korea',
    description: 'CPHI Korea connects the pharmaceutical industry in Korea and international markets. Star Hi Herbs will showcase our pharmaceutical-grade herbal extracts and APIs at this important regional event.',
    image: '/images/events/cphi-korea.jpg',
    boothNumber: 'TBA',
    website: 'https://www.cphi.com/korea/en/home.html',
    upcoming: true
  },
  {
    id: 6,
    name: 'Hi Korea',
    startDate: '2025-08-26',
    endDate: '2025-08-28',
    location: 'COEX',
    city: 'Seoul',
    country: 'Korea',
    description: 'Hi Korea is the leading health ingredients exhibition in Korea. Star Hi Herbs will present our innovative herbal extracts and botanical ingredients for the Korean nutraceutical and functional food markets.',
    image: '/images/events/hi-korea.jpg',
    boothNumber: 'TBA',
    website: 'https://www.hi-korea.net/en/main/main.php',
    upcoming: true
  },
  {
    id: 7,
    name: 'Fi India',
    startDate: '2025-09-03',
    endDate: '2025-09-05',
    location: 'IEML',
    city: 'Noida',
    country: 'India',
    description: 'Fi India is the premier food ingredients exhibition in India. Star Hi Herbs will showcase our high-quality herbal extracts and botanical ingredients for the Indian food and nutraceutical industries.',
    image: '/images/events/fi-india.jpg',
    boothNumber: 'TBA',
    website: 'https://www.figlobal.com/india/en/home.html',
    upcoming: true
  },
  {
    id: 8,
    name: 'Fi Asia Thailand',
    startDate: '2025-09-17',
    endDate: '2025-09-19',
    location: 'QSNCC',
    city: 'Bangkok',
    country: 'Thailand',
    description: 'Fi Asia Thailand brings together food ingredient suppliers and buyers from across Southeast Asia. Star Hi Herbs will present our premium herbal extracts and botanical ingredients for the regional food and supplement industries.',
    image: '/images/events/fi-asia-thailand.jpg',
    boothNumber: 'TBA',
    website: 'https://www.figlobal.com/asia-thailand/en/home.html',
    upcoming: true
  },
  {
    id: 9,
    name: 'Vitafoods Asia',
    startDate: '2025-09-17',
    endDate: '2025-09-19',
    location: 'Queen Sirikit National Convention Center',
    city: 'Bangkok',
    country: 'Thailand',
    description: 'Vitafoods Asia is the leading nutraceutical event in Asia, connecting suppliers and manufacturers of dietary supplements, functional food and beverages. Star Hi Herbs will showcase our innovative herbal extract solutions for the Asian market.',
    image: '/images/events/vitafoods-asia.jpg',
    boothNumber: 'TBA',
    website: 'https://www.vitafoodsasia.com/en/home.html',
    upcoming: true
  },
  {
    id: 10,
    name: 'Hi Japan',
    startDate: '2025-10-15',
    endDate: '2025-10-17',
    location: 'Tokyo Big Sight Exhibition Centre',
    city: 'Tokyo',
    country: 'Japan',
    description: 'Hi Japan is the premier health ingredients exhibition in Japan. Star Hi Herbs will present our high-quality herbal extracts and botanical ingredients tailored for the Japanese market.',
    image: '/images/events/hi-japan.jpg',
    boothNumber: 'TBA',
    website: 'https://www.figlobal.com/japan/en/home.html',
    upcoming: true
  },
  {
    id: 11,
    name: 'SupplySide Global',
    startDate: '2025-10-27',
    endDate: '2025-10-30',
    location: 'Mandalay Bay',
    city: 'Las Vegas',
    country: 'United States',
    description: 'SupplySide Global brings together more than 17,000 ingredient buyers and suppliers from the dietary supplement, food, beverage, and cosmetic industries. Visit our booth to discover our premium standardized herbal extracts and discuss custom formulation solutions.',
    image: '/images/events/supplyside-global.jpg',
    boothNumber: 'TBA',
    website: 'https://www.supplysideglobal.com/en/home.html',
    upcoming: true
  },
  {
    id: 12,
    name: 'Fi Europe',
    startDate: '2025-12-02',
    endDate: '2025-12-04',
    location: 'Paris Expo Porte de Versailles',
    city: 'Paris',
    country: 'France',
    description: 'Fi Europe is the world\'s leading food and beverage ingredients platform. Star Hi Herbs will showcase our food-grade botanical extracts and natural ingredients for functional foods and beverages.',
    image: '/images/events/fi-europe.jpg',
    boothNumber: 'TBA',
    website: 'https://www.figlobal.com/europe/en/home.html',
    upcoming: true
  },
  {
    id: 13,
    name: 'Vitafoods India',
    startDate: '2026-02-11',
    endDate: '2026-02-13',
    location: 'Jio World Convention Center',
    city: 'Mumbai',
    country: 'India',
    description: 'Vitafoods India is a premier nutraceutical event connecting suppliers and manufacturers in the Indian market. Star Hi Herbs will showcase our innovative herbal extract solutions tailored for the Indian nutraceutical industry.',
    image: '/images/events/vitafoods-india.jpg',
    boothNumber: 'TBA',
    website: 'https://www.vitafoodsindia.com/en/home.html',
    upcoming: true
  },
  {
    id: 14,
    name: 'Fi Vietnam',
    startDate: '2026-05-13',
    endDate: '2026-05-15',
    location: 'Saigon Exhibition & Convention Centre (SECC)',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    description: 'Fi Vietnam is the leading food ingredients exhibition in Vietnam. Star Hi Herbs will present our high-quality herbal extracts and botanical ingredients for the Vietnamese food and nutraceutical industries.',
    image: '/images/events/fi-vietnam.jpg',
    boothNumber: 'TBA',
    website: 'https://www.figlobal.com/vietnam/en/home.html',
    upcoming: true
  },
  {
    id: 15,
    name: 'Fi Asia Indonesia',
    startDate: '2026-09-16',
    endDate: '2026-09-18',
    location: 'Jakarta International Expo (JIExpo)',
    city: 'Jakarta',
    country: 'Indonesia',
    description: 'Fi Asia Indonesia is a leading food ingredients exhibition in Indonesia. Star Hi Herbs will showcase our premium herbal extracts and botanical ingredients for the Indonesian food and nutraceutical markets.',
    image: '/images/events/fi-asia-indonesia.jpg',
    boothNumber: 'TBA',
    website: 'https://www.figlobal.com/asia-indonesia/en/home.html',
    upcoming: true
  }
];

/**
 * Job Openings Data
 */
export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Senior Quality Control Analyst',
    slug: 'senior-quality-control-analyst',
    department: 'Quality Control',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '3-5 years',
    postedDate: '2024-04-15',
    description: 'We are seeking a Senior Quality Control Analyst to join our team at Star Hi Herbs. The ideal candidate will have extensive experience in analytical testing of herbal extracts and natural products. This role involves ensuring all our products meet the highest quality standards through rigorous testing and documentation.',
    responsibilities: [
      'Perform analytical testing of raw materials, in-process samples, and finished products using HPLC, GC, UV-Vis, and other analytical techniques',
      'Develop and validate analytical methods for new products',
      'Prepare detailed reports and maintain accurate documentation of all test results',
      'Troubleshoot analytical issues and implement corrective actions',
      'Collaborate with R&D and Production teams to ensure quality standards are met',
      'Train and mentor junior analysts in laboratory procedures and techniques',
      'Participate in internal and external audits',
      'Ensure compliance with GMP, ISO, and other regulatory requirements'
    ],
    requirements: [
      'Bachelor\'s or Master\'s degree in Chemistry, Pharmaceutical Sciences, or related field',
      '3-5 years of experience in quality control laboratory, preferably in herbal/natural products industry',
      'Proficiency in analytical techniques such as HPLC, GC, UV-Vis spectroscopy',
      'Strong understanding of GMP, ISO 9001, and other quality management systems',
      'Experience with method development and validation',
      'Excellent attention to detail and problem-solving skills',
      'Strong documentation and reporting abilities'
    ],
    qualifications: [
      'Advanced knowledge of analytical chemistry and instrumentation',
      'Experience with quality control in herbal extracts or natural products',
      'Familiarity with regulatory requirements for dietary supplements and food ingredients',
      'Excellent communication and teamwork skills',
      'Ability to work independently and manage multiple priorities'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Retirement benefits',
      'Professional development opportunities',
      'Work-life balance with flexible scheduling options',
      'Collaborative and innovative work environment'
    ],
    isActive: true
  },
  {
    id: 2,
    title: 'Research & Development Scientist',
    slug: 'research-development-scientist',
    department: 'Research & Development',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '2-4 years',
    postedDate: '2024-04-10',
    description: 'Star Hi Herbs is looking for a talented R&D Scientist to join our innovative research team. This role focuses on developing new herbal extract formulations, improving existing products, and conducting research to support product efficacy. The ideal candidate will have a strong background in natural product chemistry and formulation development.',
    responsibilities: [
      'Develop new herbal extract formulations and improve existing products',
      'Design and conduct experiments to evaluate product stability and efficacy',
      'Collaborate with Quality Control to establish specifications for new products',
      'Stay current with scientific literature and industry trends',
      'Prepare technical documentation and research reports',
      'Support the technical aspects of product commercialization',
      'Participate in cross-functional team projects',
      'Contribute to intellectual property development'
    ],
    requirements: [
      'Master\'s or Ph.D. in Pharmacognosy, Natural Product Chemistry, or related field',
      '2-4 years of experience in R&D, preferably in herbal extracts or natural products',
      'Strong understanding of extraction techniques and formulation development',
      'Experience with analytical methods for natural product characterization',
      'Knowledge of regulatory requirements for dietary supplements',
      'Excellent problem-solving and critical thinking skills',
      'Strong scientific writing and communication abilities'
    ],
    qualifications: [
      'Advanced knowledge of phytochemistry and natural product analysis',
      'Experience with formulation development for dietary supplements',
      'Familiarity with stability testing protocols',
      'Publication record in relevant scientific journals (preferred)',
      'Ability to work both independently and as part of a team'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Retirement benefits',
      'Professional development and conference attendance',
      'Work-life balance with flexible scheduling options',
      'Opportunity to contribute to cutting-edge research in natural products'
    ],
    isActive: true
  },
  {
    id: 3,
    title: 'Production Supervisor',
    slug: 'production-supervisor',
    department: 'Manufacturing',
    location: 'Hassan, Karnataka',
    type: 'Full-time',
    experience: '4-6 years',
    postedDate: '2024-04-05',
    description: 'We are seeking an experienced Production Supervisor to oversee our herbal extraction and processing operations at our Hassan facility. The ideal candidate will have a strong background in manufacturing operations, preferably in the herbal extract or pharmaceutical industry, with excellent leadership and problem-solving skills.',
    responsibilities: [
      'Supervise daily production activities and coordinate workflow',
      'Ensure compliance with GMP, safety protocols, and quality standards',
      'Monitor equipment performance and coordinate maintenance activities',
      'Train and mentor production staff on procedures and best practices',
      'Troubleshoot production issues and implement process improvements',
      'Coordinate with Quality Control for in-process testing and release',
      'Maintain accurate production records and documentation',
      'Participate in production planning and scheduling'
    ],
    requirements: [
      'Bachelor\'s degree in Chemical Engineering, Pharmaceutical Sciences, or related field',
      '4-6 years of experience in production, with at least 2 years in a supervisory role',
      'Strong understanding of GMP and other regulatory requirements',
      'Experience with extraction processes and production equipment',
      'Knowledge of inventory management and production planning',
      'Excellent leadership and team management skills',
      'Strong problem-solving abilities and attention to detail'
    ],
    qualifications: [
      'Advanced knowledge of herbal extraction processes',
      'Experience with production scheduling and resource allocation',
      'Familiarity with continuous improvement methodologies',
      'Strong communication and interpersonal skills',
      'Ability to work in a fast-paced manufacturing environment'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Retirement benefits',
      'Professional development opportunities',
      'Work-life balance with flexible scheduling options',
      'Opportunity to grow with a leading herbal extract manufacturer'
    ],
    isActive: true
  },
  {
    id: 4,
    title: 'International Business Development Manager',
    slug: 'international-business-development-manager',
    department: 'Sales & Marketing',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '5-8 years',
    postedDate: '2024-03-25',
    description: 'Star Hi Herbs is seeking an experienced International Business Development Manager to expand our global presence in the nutraceutical and functional food ingredients market. The ideal candidate will have a strong background in B2B sales within the natural products industry and experience developing business in international markets.',
    responsibilities: [
      'Develop and implement strategies to expand business in key international markets',
      'Build and maintain relationships with distributors, partners, and key accounts',
      'Represent the company at international trade shows and industry events',
      'Identify new market opportunities and potential product applications',
      'Collaborate with R&D and Marketing teams on product development initiatives',
      'Prepare market analyses, sales forecasts, and business reports',
      'Negotiate contracts and agreements with international clients',
      'Stay current with industry trends and competitive landscape'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Marketing, or related field (MBA preferred)',
      '5-8 years of experience in B2B sales, preferably in nutraceutical or natural products',
      'Proven track record in international business development',
      'Strong understanding of the dietary supplement and functional food industry',
      'Experience with contract negotiations and relationship management',
      'Excellent communication and presentation skills',
      'Willingness to travel internationally (30-40%)'
    ],
    qualifications: [
      'Knowledge of global regulatory frameworks for dietary supplements',
      'Experience with CRM systems and sales analytics',
      'Cultural sensitivity and international business etiquette',
      'Strategic thinking and business planning abilities',
      'Fluency in English and additional languages (preferred)'
    ],
    benefits: [
      'Competitive salary plus performance-based incentives',
      'Health insurance coverage',
      'Retirement benefits',
      'International travel opportunities',
      'Professional development and industry conference attendance',
      'Work-life balance with flexible scheduling options'
    ],
    isActive: true
  },
  {
    id: 5,
    title: 'Supply Chain Specialist',
    slug: 'supply-chain-specialist',
    department: 'Supply Chain',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '3-5 years',
    postedDate: '2024-03-20',
    description: 'We are looking for a Supply Chain Specialist to join our team at Star Hi Herbs. This role will focus on optimizing our supply chain operations, from raw material procurement to finished product distribution. The ideal candidate will have experience in supply chain management within the natural products or pharmaceutical industry.',
    responsibilities: [
      'Manage relationships with raw material suppliers and evaluate new sources',
      'Coordinate logistics for domestic and international shipments',
      'Monitor inventory levels and implement inventory control measures',
      'Collaborate with Production and Quality teams on material planning',
      'Develop and implement strategies to optimize supply chain efficiency',
      'Ensure compliance with import/export regulations and documentation',
      'Analyze supply chain metrics and prepare performance reports',
      'Participate in cost reduction initiatives and process improvements'
    ],
    requirements: [
      'Bachelor\'s degree in Supply Chain Management, Business, or related field',
      '3-5 years of experience in supply chain operations',
      'Knowledge of international shipping and import/export procedures',
      'Experience with inventory management and demand planning',
      'Familiarity with ERP systems and supply chain software',
      'Strong analytical and problem-solving skills',
      'Excellent communication and negotiation abilities'
    ],
    qualifications: [
      'Knowledge of GMP and quality requirements for raw materials',
      'Experience with supplier qualification and auditing',
      'Understanding of regulatory requirements for natural products',
      'Proficiency in data analysis and reporting',
      'Ability to manage multiple priorities in a fast-paced environment'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Retirement benefits',
      'Professional development opportunities',
      'Work-life balance with flexible scheduling options',
      'Collaborative and innovative work environment'
    ],
    isActive: true
  }
];