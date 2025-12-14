import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ocean Resin Coasters',
    price: 850,
    category: 'Resin Art',
    image: 'https://picsum.photos/seed/resin1/600/600',
    shortDescription: 'Set of 4 handcrafted resin coasters with ocean waves.',
    fullDescription: 'Bring the beach to your coffee table with these stunning ocean-inspired coasters. Each piece is individually poured using high-quality non-toxic resin, creating unique wave patterns that can never be perfectly replicated. Heat resistant and durable.',
    handmadeDetails: 'Hand-poured over 3 days to achieve depth and layered wave effects. Sanded and polished by our neurodiverse artisans.',
    reviews: [
      { id: 'r1', user: 'Aditi S.', rating: 5, comment: 'Absolutely beautiful! Matches my decor perfectly.' },
      { id: 'r2', user: 'Rahul K.', rating: 4, comment: 'Great quality, heavy and durable.' }
    ]
  },
  {
    id: '2',
    name: 'Traditional Lippan Art Panel',
    price: 2400,
    category: 'Lippan Art',
    image: 'https://picsum.photos/seed/lippan1/600/600',
    shortDescription: 'Mud and mirror work wall hanging (12x12 inches).',
    fullDescription: 'A vibrant piece of traditional Kutch mud art. This Lippan Kamath panel features intricate geometric patterns accented with real mirrors that catch the light beautifully. Perfect for adding a touch of Indian heritage to your modern home.',
    handmadeDetails: 'Crafted using locally sourced clay and mirrors. The dough is kneaded by hand to improve motor skills of our makers.',
    reviews: [
      { id: 'r3', user: 'Priya M.', rating: 5, comment: 'Stunning craftsmanship. Packed very securely.' }
    ]
  },
  {
    id: '3',
    name: 'Amethyst Crystal Pendant',
    price: 1200,
    category: 'Jewellery',
    image: 'https://picsum.photos/seed/jewel1/600/600',
    shortDescription: 'Wire-wrapped raw amethyst necklace.',
    fullDescription: 'A raw, unpolished amethyst stone carefully wrapped in tarnish-resistant copper wire. This pendant hangs on a durable black cord. Amethyst is known for its calming properties.',
    handmadeDetails: 'Each stone is hand-selected. The wire wrapping requires focus and fine motor precision, a skill our team takes pride in.',
    reviews: []
  },
  {
    id: '4',
    name: 'Boho Macrame Wall Hanging',
    price: 1500,
    category: 'Home Decor',
    image: 'https://picsum.photos/seed/macrame1/600/600',
    shortDescription: 'Cotton macrame wall art for a cozy vibe.',
    fullDescription: 'Add texture and warmth to any room with this handmade macrame wall hanging. Made from 100% natural cotton cord on a driftwood branch.',
    handmadeDetails: 'Knotted by hand using traditional macrame techniques. The repetitive motion is therapeutic for our artisans.',
    reviews: [
      { id: 'r4', user: 'Sneha R.', rating: 5, comment: 'Love the boho vibe!' }
    ]
  },
  {
    id: '5',
    name: 'Floral Resin Bookmark',
    price: 350,
    category: 'Resin Art',
    image: 'https://picsum.photos/seed/book1/600/600',
    shortDescription: 'Preserved real flowers in clear resin.',
    fullDescription: 'Keep your place in your favorite book with a piece of nature. Real pressed flowers encapsulated in crystal clear, non-yellowing resin. Includes a silk tassel.',
    handmadeDetails: 'Flowers are pressed for 2 weeks before being carefully arranged and set in resin.',
    reviews: []
  },
  {
    id: '6',
    name: 'Hand-painted Tote Bag',
    price: 600,
    category: 'Home Decor',
    image: 'https://picsum.photos/seed/bag1/600/600',
    shortDescription: 'Canvas tote with Mandala art.',
    fullDescription: 'Eco-friendly, reusable canvas tote bag featuring a hand-painted Mandala design. Washable and durable, perfect for groceries or books.',
    handmadeDetails: 'Painted with fabric acrylics. Developing focus and patience through detailed painting.',
    reviews: [
      { id: 'r5', user: 'Karan J.', rating: 4, comment: 'Very useful and pretty.' }
    ]
  }
];
