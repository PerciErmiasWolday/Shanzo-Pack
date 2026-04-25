const IMG = {
  artisticStraw: '/straws/artistic-straw.png',
  spoonStraw: '/straws/Spoon-Straw.png',
  paperStraw: '/straws/paper-straw.png',
  paperWrappedStraw: '/straws/paper-wrapped-staw.png',
  oppWrappedStraw: '/straws/oop-staw rapped.png',
  tetraUShapePaperStraw: '/straws/tera-pack-u.png',
  straightStraw: '/straws/straight-straw.png',
  flexibleStraw: '/straws/flexible-straw.png',
  flexibleBendStraw: '/straws/flexible-bend-straw.png',
  stirSipperStraw: '/straws/stri-slipper.png',
  bubbleTeaStraw: '/straws/bubble-t-straw.png',
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
    id: 'artistic-straws',
    title: 'Artistic Straws',
    image: IMG.artisticStraw,
    specifications: [
      'Decorative drinking straws for premium beverage presentation',
      'Suitable for cafes, restaurants, and event service',
      'Available in multiple colors and printed patterns'
    ],
    type: 'Artistic',
    material: 'Plastic (food-grade)',
    wrapType: 'Unwrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Straight',
    color: 'Various colors'
  },
  {
    id: 'spoon-straws',
    title: 'Spoon Straws',
    image: IMG.spoonStraw,
    specifications: [
      'Designed for desserts, slush, and thick drinks',
      'Integrated spoon tip for scoop-and-sip use',
      'Food-grade material with assorted color options'
    ],
    type: 'Spoon',
    material: 'Plastic (food-grade)',
    wrapType: 'Unwrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Spoon',
    color: 'Various colors'
  },
  {
    id: 'paper-straws',
    title: 'Paper Straws',
    image: IMG.paperStraw,
    specifications: [
      'Biodegradable paper straws for eco-focused foodservice',
      'Compatible with cold beverages and takeaway service',
      'Available in striped and solid color styles'
    ],
    type: 'Paper',
    material: 'Paper',
    wrapType: 'Unwrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Straight',
    color: 'Various colors'
  },
  {
    id: 'paper-wrapped-straws',
    title: 'Paper Wrapped Straws',
    image: IMG.paperWrappedStraw,
    specifications: [
      'Individually wrapped in paper for hygienic service',
      'Best fit for dine-in, delivery, and takeaway',
      'Available in multiple sizes and color variants'
    ],
    type: 'Paper Wrapped',
    material: 'Plastic (food-grade)',
    wrapType: 'Paper wrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Straight',
    color: 'Various colors'
  },
  {
    id: 'opp-wrapped-straws',
    title: 'OPP Wrapped Straws',
    image: IMG.oppWrappedStraw,
    specifications: [
      'Individually wrapped with OPP film for hygiene',
      'Clear wrapping keeps products visible for retail',
      'Suitable for restaurants, cafes, and beverage brands'
    ],
    type: 'OPP Wrapped',
    material: 'Plastic (food-grade)',
    wrapType: 'OPP wrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Straight',
    color: 'Various colors'
  },
  {
    id: 'tetra-u-shape-paper-straws',
    title: 'Tetra U-Shape Paper Straws',
    image: IMG.tetraUShapePaperStraw,
    specifications: [
      'Also known as Tetra Pack U-Shape Straws',
      'Made for juice and milk carton packs',
      'U-shape profile for easy puncture and sipping'
    ],
    type: 'Tetra U-Shape',
    material: 'Paper',
    wrapType: 'Wrapped',
    diameter: '4mm',
    length: '120mm / 140mm',
    style: 'U-Shape',
    color: 'Multiple'
  },
  {
    id: 'straight-straws',
    title: 'Straight Straws',
    image: IMG.straightStraw,
    specifications: [
      'Classic straight straw design for regular beverages',
      'Common for soft drinks, juices, and water',
      'Food-grade and available in assorted colors'
    ],
    type: 'Straight',
    material: 'Plastic (food-grade)',
    wrapType: 'Unwrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Straight',
    color: 'Various colors'
  },
  {
    id: 'flexible-straws',
    title: 'Flexible Straws',
    image: IMG.flexibleStraw,
    specifications: [
      'Flexible neck section for comfort and control',
      'Suitable for children and hospital or care use',
      'Available in mixed colors and bulk packs'
    ],
    type: 'Flexible',
    material: 'Plastic (food-grade)',
    wrapType: 'Unwrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Flexible',
    color: 'Various colors'
  },
  {
    id: 'flexible-bend-straws',
    title: 'Flexible Bend Straws',
    image: IMG.flexibleBendStraw,
    specifications: [
      'Corrugated bend section for angled sipping',
      'Durable structure for hot and cold drinks',
      'Preferred in beverage service and food chains'
    ],
    type: 'Flexible Bend',
    material: 'Plastic (food-grade)',
    wrapType: 'Unwrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Flexible',
    color: 'Various colors'
  },
  {
    id: 'stir-sipper-straw',
    title: 'Stir Sipper Straw',
    image: IMG.stirSipperStraw,
    specifications: [
      'Dual-use design for stirring and sipping',
      'Popular for coffee, cocktails, and cold drinks',
      'Compact profile for takeaway cups'
    ],
    type: 'Stir Sipper',
    material: 'Plastic (food-grade)',
    wrapType: 'Unwrapped',
    diameter: 'Multiple',
    length: 'Multiple',
    style: 'Stir',
    color: 'Various colors'
  },
  {
    id: 'bubble-tea-straws',
    title: 'Bubble Tea Straws',
    image: IMG.bubbleTeaStraw,
    specifications: [
      'Wide diameter designed for tapioca pearls',
      'Strong wall thickness for thick beverages',
      'Suitable for bubble tea and smoothies'
    ],
    type: 'Bubble Tea',
    material: 'Plastic (food-grade)',
    wrapType: 'Unwrapped',
    diameter: '12mm',
    length: 'Multiple',
    style: 'Straight',
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
  Type: [
    'Artistic',
    'Spoon',
    'Paper',
    'Paper Wrapped',
    'OPP Wrapped',
    'Tetra U-Shape',
    'Straight',
    'Flexible',
    'Flexible Bend',
    'Stir Sipper',
    'Bubble Tea'
  ],
  Material: ['Paper', 'Plastic (food-grade)'],
  'Wrap Type': ['Unwrapped', 'Paper wrapped', 'OPP wrapped', 'Wrapped'],
  Diameter: ['4mm', '12mm', 'Multiple'],
  Length: ['120mm / 140mm', 'Multiple'],
  Style: ['Straight', 'Flexible', 'Spoon', 'U-Shape', 'Stir'],
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
