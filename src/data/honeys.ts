export type Honey = {
  slug: string;
  name: string;
  number: number;
  notes: [string, string, string];
  price: number;
  origin: string;
  season: string;
  source: string;
  color: string;
  ink: string;
  blurb: string;
  story: string[];
  pairings: string[];
  crystallizes: string;
  /** Stripe Payment Link / Shopify checkout URL. Placeholder until checkout is set up. */
  buyUrl: string;
  /** Per-product availability. The store-wide switch is SITE.storeOpen in site.ts. */
  inStock: boolean;
};

export const HONEYS: Honey[] = [
  {
    slug: 'white-clover',
    name: 'White Clover',
    number: 1,
    notes: ['Sweet', 'Cinnamon', 'Apple pie'],
    price: 15,
    origin: 'Sweet-clover fields',
    season: 'Summer harvest',
    source: 'Sweet clover (Melilotus)',
    color: '#E9A93B',
    ink: '#3A2208',
    blurb:
      'Harvested from bright fields of sweet clover. Smooth and warm, with a flavor that lands somewhere between cinnamon and apple pie.',
    story: [
      'Harvested from bright yellow and white fields of sweet clover, this is the honey most people picture when they picture honey — and then a little more. Each bucket is pure, unprocessed honey that keeps its natural enzymes, antioxidants and floral notes.',
      'As the bees work endless blossoms of sweet clover, they make a honey with a smooth, warm flavor reminiscent of cinnamon and apple pie. Those notes come from the nectar itself; nothing is added.',
    ],
    pairings: ['Morning oatmeal', 'Cornbread, still warm', 'Plain yogurt', 'A spoon'],
    crystallizes: 'Sets within weeks — that is a sign it is raw.',
    buyUrl: '#',
    inStock: false,
  },
  {
    slug: 'linden',
    name: 'Linden',
    number: 2,
    notes: ['Floral', 'Pear', 'Citrus'],
    price: 15,
    origin: 'Driftless area, Wisconsin',
    season: 'June harvest',
    source: 'Basswood (Tilia americana)',
    color: '#F0C12E',
    ink: '#3A2A05',
    blurb:
      "Basswood blooms for a few weeks each June in the hills of Wisconsin's Driftless. Sweet, with pear and citrus and a long floral finish. Made for fresh bread and butter.",
    story: [
      'Linden trees — basswood, to most of Wisconsin — thrive in the hills and valleys of the Driftless, and from the first days of June they bloom for a few short weeks. The nectar makes a honey that is sweet up front, with pear and citrus behind it and a floral aftertaste that stays.',
      'Known as липовый to anyone who grew up with it. It goes with fresh bread and butter better than almost anything.',
    ],
    pairings: ['Fresh bread and cold butter', 'Chamomile or black tea', 'Soft cheeses — chèvre, brie', 'Over ripe pears'],
    crystallizes: 'Sets in a month or two.',
    buyUrl: '#',
    inStock: false,
  },
  {
    slug: 'tupelo',
    name: 'Tupelo',
    number: 3,
    notes: ['Buttery', 'Floral', 'Mild'],
    price: 20,
    origin: 'River swamps, Northwest Florida',
    season: 'Spring harvest',
    source: 'White Ogeechee Tupelo (Nyssa ogeche)',
    color: '#C9691B',
    ink: '#FBF3E6',
    blurb:
      "A single source: the White Ogeechee Tupelo of northwest Florida's river swamps. Buttery and mild, and the one honey that never crystallizes.",
    story: [
      'Tupelo honey comes from a single source: the White Ogeechee Tupelo tree, which grows in the river swamplands of northwest Florida and blooms for a short window each spring. Hives go in on barges and platforms along the river to catch it.',
      'Unlike every other raw honey, pure tupelo will not crystallize — its sugars lean heavily toward fructose. Perfect on biscuits or in your morning tea.',
    ],
    pairings: ['Hot biscuits', 'Morning tea', 'Ricotta on toast', 'Grilled peaches'],
    crystallizes: 'Almost never. That is the tupelo signature.',
    buyUrl: '#',
    inStock: false,
  },
  {
    slug: 'florida-red',
    name: 'Florida Red',
    number: 4,
    notes: ['Bold', 'Tangy', 'Sweet'],
    price: 15,
    origin: 'Florida Panhandle',
    season: 'Spring harvest',
    source: 'Black titi (Cliftonia monophylla) and spring wildflowers',
    color: '#7B2912',
    ink: '#FBF3E6',
    blurb:
      "Spring nectar from black titi and wildflowers in the Panhandle's forests and swamps. Deep reddish amber; starts sweet, turns tangy, and lingers.",
    story: [
      "Harvested each spring in the forests and swamps of Florida's Panhandle, Florida Red comes primarily from black titi along with a mix of native spring wildflowers.",
      'It stands out for its deep reddish-amber color and bold flavor. Next to lighter honeys like clover it has more depth and character: it starts sweet, follows with subtle tangy notes, and finishes long enough to keep you coming back for another spoonful.',
    ],
    pairings: ['Sharp cheddar', 'Fried chicken', 'Dark rye', 'A whiskey cocktail'],
    crystallizes: 'Sets over a few months.',
    buyUrl: '#',
    inStock: false,
  },
];

export type Extra = {
  slug: string;
  name: string;
  sub: string;
  size: string;
  price: number;
  notes: [string, string, string];
  blurb: string;
  buyUrl: string;
  /** Per-product availability. The store-wide switch is SITE.storeOpen in site.ts. */
  inStock: boolean;
};

export const EXTRAS: Extra[] = [
  {
    slug: 'maple-syrup',
    name: 'Maple Syrup',
    sub: 'Northern Wisconsin',
    size: '12 fl oz',
    price: 17,
    notes: ['Caramel', 'Toasted sugar', 'Woodsy'],
    blurb:
      'Sugar-maple sap from the hardwood forests of northern Wisconsin, boiled down each spring. Grade A Amber: rich, smooth, with caramel and a warm woodsy finish.',
    buyUrl: '#',
    inStock: false,
  },
  {
    slug: 'buckwheat',
    name: 'Buckwheat Honey',
    sub: 'South Dakota',
    size: '1 lb',
    price: 10,
    notes: ['Molasses', 'Toffee', 'Earthy'],
    blurb:
      'Dark, rich and much less sweet than clover, with molasses, toasted toffee and a deep earthy aroma. An acquired taste — try one jar before you buy more.',
    buyUrl: '#',
    inStock: false,
  },
];

export const COLORS = {
  cream: '#FBF6EA',
  paper: '#FFFDF7',
  ink: '#2A1A10',
};
