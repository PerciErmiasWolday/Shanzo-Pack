const IMG = {
  paperWrappedStraws:
    'https://merchants.pk/wp-content/uploads/2025/12/PAPER-WRAPPED-STRAWS-600x600.png',
  shakesSmoothiesStraws:
    'https://merchants.pk/wp-content/uploads/2025/11/SHAKES-SMOOTHIES-STRAWS-6MM-8MM-10MM-600x600.png',
  tetraUShape:
    'https://merchants.pk/wp-content/uploads/2025/11/TETRA-PACK-U-SHAPE-STRAWS-2-600x600.png',
  plasticBiodegradableStraws:
    'https://merchants.pk/wp-content/uploads/2025/12/FLEXIBLE-STRAWS-6MM-600x600.png',
  tShirtBag: 'https://merchants.pk/wp-content/uploads/2025/12/t-shirt-bag-600x600.png',
  foodBags: 'https://merchants.pk/wp-content/uploads/2025/11/FOOD-BAGS-600x600.png',
  garbageBags: 'https://merchants.pk/wp-content/uploads/2025/11/GARBAGE-BAGS-600x600.png',
  thankYouBag: 'https://merchants.pk/wp-content/uploads/2025/11/THANK-YOU-BAG-600x600.png',
  blackCutlery: 'https://merchants.pk/wp-content/uploads/2025/11/BLACK-CUTLERY-600x600.png',
  whiteCutlery: 'https://merchants.pk/wp-content/uploads/2025/11/WHITE-CUTLERY-600x600.png',
  woodenCutlery: 'https://merchants.pk/wp-content/uploads/2025/11/WOODEN-CUTLERY-600x600.png'
} as const;

export type StrawProduct = {
  id: string;
  title: string;
  image: string;
  specifications: string[];
  type: string;
  material: string;
  wrapType: string;
  diameter: string;
  length: string;
  style: string;
  color: string;
};

export type BagProduct = {
  id: string;
  title: string;
  image: string;
  specifications: string[];
  material: string;
  size: string;
  strength: string;
  color: string;
};

export type CutleryProduct = {
  id: string;
  title: string;
  image: string;
  specifications: string[];
  type: string;
  material: string;
  color: string;
  packaging: string;
};

export const strawProducts: StrawProduct[] = [
  {
    id: 'paper-wrapped-paper-straws',
    title: 'PAPER WRAPPED PAPER STRAWS',
    image: IMG.paperWrappedStraws,
    specifications: [
      'Material: PP injection food grade',
      'Shape: Flexible straws',
      'Color: Various colors available',
      'Size: 6mm diameter; lengths 210mm, 230mm, 280mm',
      'Categories: Paper straw, straws'
    ],
    type: 'Paper Wrapped',
    material: 'PP (food-grade)',
    wrapType: 'Paper wrapped',
    diameter: '6mm',
    length: '210mm / 230mm / 280mm',
    style: 'Flexible',
    color: 'Various colors'
  },
  {
    id: 'shakes-smoothies-straws',
    title: 'SHAKES & SMOOTHIES STRAWS (6MM, 8MM & 10MM)',
    image: IMG.shakesSmoothiesStraws,
    specifications: [
      'Material: PP injection food grade',
      'Shape: Flexible straws',
      'Color: Various colors available',
      'Size: 6mm, 8mm & 10mm options; lengths 210mm, 230mm, 280mm',
      'Categories: Paper straw, straws'
    ],
    type: 'Shakes & Smoothies',
    material: 'PP (food-grade)',
    wrapType: 'Various',
    diameter: '6mm / 8mm / 10mm',
    length: '210mm / 230mm / 280mm',
    style: 'Flexible',
    color: 'Various colors'
  },
  {
    id: 'tetra-u-shape-4mm-paper-straw',
    title: 'Tetra U-Shape 4mm Paper Straw',
    image: IMG.tetraUShape,
    specifications: [
      'Material: PP injection food-grade with BOPP film',
      'Shape: Flexible U-shape',
      'Colors: Multiple',
      'Sizes: 4mm × 120mm / 140mm',
      'Packaging: 20,000 straws per carton',
      'Suitable for: 125ml, 200ml, and 250ml juice boxes',
      'Highlights: Air-tight fit, hygienic wrapping, easy usability'
    ],
    type: 'Tetra U-Shape',
    material: 'PP + BOPP',
    wrapType: 'Film pack',
    diameter: '4mm',
    length: '120mm / 140mm',
    style: 'U-Shape',
    color: 'Multiple'
  },
  {
    id: 'plastic-biodegradable-straws',
    title: 'PLASTIC BIODEGRADEABLE STRAWS',
    image: IMG.plasticBiodegradableStraws,
    specifications: [
      'Product family includes: flexible bend straws, straight straws, spoon straws',
      'Also available: paper & OPP wrapped straws, artistic straws',
      'Food-grade materials; options across diameters and lengths per line',
      'Ideal for beverage brands, foodservice, and retail packaging programs'
    ],
    type: 'Plastic Biodegradable',
    material: 'Biodegradable plastic',
    wrapType: 'Various',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Straight / Flexible / Spoon',
    color: 'Various colors'
  }
];

export const bagProducts: BagProduct[] = [
  {
    id: 't-shirt-bags',
    title: 'T-SHIRT BAGS',
    image: IMG.tShirtBag,
    specifications: [
      'Category: Plastic bags',
      'Classic t-shirt / vest-style HDPE carry bags',
      'Suitable for retail, grocery, and general merchandise'
    ],
    material: 'Plastic (HDPE)',
    size: 'T-Shirt style',
    strength: 'Standard',
    color: 'Multiple'
  },
  {
    id: 'food-bags',
    title: 'FOOD BAGS',
    image: IMG.foodBags,
    specifications: [
      'Category: Plastic bags',
      'Designed for food service, takeaway, and related applications',
      'Food-contact suitable options per specification'
    ],
    material: 'Plastic (HDPE)',
    size: 'Food service',
    strength: 'Standard',
    color: 'Clear / printed'
  },
  {
    id: 'garbage-bags',
    title: 'GARBAGE BAGS',
    image: IMG.garbageBags,
    specifications: [
      'Category: Plastic bags',
      'Waste and refuse collection',
      'Available in strengths suited to household and commercial use'
    ],
    material: 'Plastic (HDPE)',
    size: 'Garbage / refuse',
    strength: 'Heavy-Duty',
    color: 'Black / tinted'
  },
  {
    id: 'thank-you-bag',
    title: 'THANK YOU BAG',
    image: IMG.thankYouBag,
    specifications: [
      'Category: Plastic bags',
      'Retail messaging / thank-you print styles',
      'Lightweight counter and checkout use'
    ],
    material: 'Plastic (HDPE)',
    size: 'Thank you / retail',
    strength: 'Lightweight',
    color: 'Printed'
  }
];

export const cutleryProducts: CutleryProduct[] = [
  {
    id: 'black-cutlery',
    title: 'BLACK CUTLERY',
    image: IMG.blackCutlery,
    specifications: [
      'Category: Plastic cutlery',
      'Food-grade PP construction',
      'Uniform black finish for foodservice and takeaway'
    ],
    type: 'Plastic cutlery',
    material: 'PP (food-grade)',
    color: 'Black',
    packaging: 'Bulk'
  },
  {
    id: 'white-cutlery',
    title: 'WHITE CUTLERY',
    image: IMG.whiteCutlery,
    specifications: [
      'Category: Plastic cutlery',
      'Food-grade PP construction',
      'Clean white finish for catering and retail'
    ],
    type: 'Plastic cutlery',
    material: 'PP (food-grade)',
    color: 'White',
    packaging: 'Bulk'
  },
  {
    id: 'wooden-cutlery',
    title: 'WOODEN CUTLERY',
    image: IMG.woodenCutlery,
    specifications: [
      'Category: Wooden cutlery',
      'Sustainable and stylish wooden cutlery made from natural, biodegradable wood',
      'Suited to eco-focused brands and disposable dining programs'
    ],
    type: 'Wooden cutlery',
    material: 'Wood',
    color: 'Natural',
    packaging: 'Bulk'
  }
];

export const strawSubFilters = {
  Type: ['Paper Wrapped', 'Shakes & Smoothies', 'Tetra U-Shape', 'Plastic Biodegradable'],
  Material: ['PP (food-grade)', 'PP + BOPP', 'Biodegradable plastic'],
  'Wrap Type': ['Paper wrapped', 'Various', 'Film pack'],
  Diameter: ['4mm', '6mm', '6mm / 8mm / 10mm', 'Multiple'],
  Length: ['120mm / 140mm', '210mm / 230mm / 280mm', 'Multiple'],
  Style: ['Flexible', 'U-Shape', 'Straight / Flexible / Spoon'],
  Color: ['Various colors', 'Multiple']
} as const;

export const bagSubFilters = {
  Material: ['Plastic (HDPE)'],
  Size: ['T-Shirt style', 'Food service', 'Garbage / refuse', 'Thank you / retail'],
  'Thickness / Strength': ['Lightweight', 'Standard', 'Heavy-Duty'],
  Color: ['Multiple', 'Clear / printed', 'Black / tinted', 'Printed']
} as const;

export const cutlerySubFilters = {
  Type: ['Plastic cutlery', 'Wooden cutlery'],
  Material: ['PP (food-grade)', 'Wood'],
  Color: ['Black', 'White', 'Natural'],
  Packaging: ['Bulk', 'Individually Wrapped']
} as const;

export type CatalogProduct = StrawProduct | BagProduct | CutleryProduct;

export const allCatalogProducts: CatalogProduct[] = [
  ...strawProducts,
  ...bagProducts,
  ...cutleryProducts
];

export function getCatalogProductById(id: string): CatalogProduct | undefined {
  return allCatalogProducts.find((p) => p.id === id);
}

export function getCatalogTypeForProductId(
  id: string
): 'straws' | 'bags' | 'cutlery' | null {
  if (strawProducts.some((p) => p.id === id)) return 'straws';
  if (bagProducts.some((p) => p.id === id)) return 'bags';
  if (cutleryProducts.some((p) => p.id === id)) return 'cutlery';
  return null;
}
