/** Site-wide facts. Edit here, not in the pages. */
export const SITE = {
  name: 'Hunny Farm',
  email: 'contact@hunnyfarm.com',
  /** Where the honey is bottled. Shown in the footer, farm page and product "Good to know" list. */
  bottledIn: 'Lake County, Illinois',
  bottledLine: 'Bottled by hand in Lake County, Illinois.',
  /**
   * Social profiles. Leave a URL empty ('') and its link is not rendered.
   * Fill these in as the accounts go live.
   */
  social: [
    { label: 'Instagram', href: '' },
    { label: 'Facebook', href: '' },
    { label: 'TikTok', href: '' },
  ] as { label: string; href: string }[],
  /** Master switch for the store. false = every product shows as sold out, no cart actions. */
  storeOpen: false,
  /** Copy shown wherever an "Add to cart" would be while the store is closed. */
  soldOut: 'Sold out',
  soldOutNote: 'First bottling is on the way. Email us and we will let you know the day it lands.',
};

export const socialLinks = () => SITE.social.filter((s) => s.href);
