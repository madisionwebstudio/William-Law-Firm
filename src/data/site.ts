/**
 * Single source of truth for firm details.
 * Update values here and every page, schema block and footer follows.
 */

export const site = {
  url: 'https://gowilliamslawfirm.com',
  name: 'The Williams Law Firm',
  legalName: 'The Williams Law Firm, LLC',
  attorney: 'Iymaan Williams',
  phoneDisplay: '404-998-2992',
  phoneHref: 'tel:+14049982992',
  email: 'iymaan@gowilliamslawfirm.com',
  address: {
    street: '2330 Scenic Hwy. S',
    city: 'Snellville',
    state: 'GA',
    stateName: 'Georgia',
    zip: '30078',
  },
  // Hours as shown on the firm's Google Business Profile (checked 12 Nov 2026).
  hours: [
    { days: 'Monday – Friday', time: '8:30 AM – 5:00 PM' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=2330+Scenic+Hwy+S%2C+Snellville%2C+GA+30078',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/gowilliamslawfirm' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/the-williams-law-firm' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@gowilliamslawfirm' },
    { label: 'X', href: 'https://x.com/gowilliamslaw' },
  ],
  serviceAreas: ['Snellville', 'Gwinnett County', 'Lawrenceville', 'Conyers'],
  /**
   * Contact form delivery.
   * Set to a form-handling endpoint that accepts a JSON POST (Formspree, Web3Forms,
   * Basin, a serverless function, etc.). While empty, the form falls back to opening
   * a pre-filled email to the firm so no enquiry is ever silently lost.
   */
  formEndpoint: '',
};

/**
 * GOOGLE REVIEWS — update these three values whenever the profile changes.
 * Figures were read from the live public Google listing on the date below.
 */
const PLACE_ID = 'ChIJBT5SybRCxSwR3nESX_08ltE';

export const google = {
  rating: '5.0',
  reviewCount: 23,
  verifiedOn: 'November 12, 2026',
  profileUrl: 'https://share.google/A115PCvxlxlcwrlin',
  reviewsUrl: `https://search.google.com/local/reviews?placeid=${PLACE_ID}`,
  writeReviewUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
  // Topics Google itself surfaces on the listing, with the number of reviews mentioning each.
  topics: [
    { label: 'Communication', count: 6 },
    { label: 'Clear explanations', count: 4 },
    { label: 'Attention to detail', count: 3 },
    { label: 'Answering questions', count: 3 },
    { label: 'Responsiveness', count: 2 },
    { label: 'Kindness', count: 2 },
  ],
};

/**
 * Genuine reviews copied from the firm's public Google listing.
 * `quote` is a verbatim excerpt (sentences are untouched; omissions are marked with an ellipsis).
 * Names appear exactly as displayed publicly on Google.
 */
export const reviews = [
  {
    name: 'Anthony Molina',
    when: 'August 2026',
    theme: 'Kept informed at every step',
    lead: 'She kept me informed every step of the way, always took the time to explain everything clearly, and made me feel supported during an incredibly stressful experience.',
    quote:
      'From the moment she accepted my case, she immediately showed genuine care and made herself available by giving me every possible way to contact her whenever I had questions or concerns. … She kept me informed every step of the way, always took the time to explain everything clearly, and made me feel supported during an incredibly stressful experience.',
  },
  {
    name: 'Sidique Geloo',
    when: 'March 2026',
    theme: 'Patient, clear explanations',
    lead: 'Her exceptional legal expertise, meticulous attention to detail, and remarkable patience in clearly explaining my options were truly invaluable.',
    quote:
      'I would like to sincerely express my gratitude to Attorney Williams for transforming what was one of the most difficult periods of my life into a positive and reassuring experience. Her exceptional legal expertise, meticulous attention to detail, and remarkable patience in clearly explaining my options were truly invaluable.',
  },
  {
    name: 'Carter Family',
    when: 'May 2026',
    theme: 'Returned the call after hours',
    lead: 'She had already left work for the day, yet still took the time to return my call and listen patiently to everything I had to say.',
    quote:
      'She had already left work for the day, yet still took the time to return my call and listen patiently to everything I had to say. She walked me through her recommendations step-by-step, explaining things clearly and thoroughly in a way that made me feel informed and supported during a very stressful situation.',
  },
];

export const nav = {
  criminal: [
    { label: 'Criminal Defense', href: '/criminal-defense/', note: 'Overview' },
    { label: 'DUI Defense', href: '/criminal-defense/dui-defense/' },
    { label: 'Drug Charges', href: '/criminal-defense/drug-charges/' },
    { label: 'Assault & Violent Crimes', href: '/criminal-defense/assault-violent-crimes/' },
  ],
  injury: [
    { label: 'Personal Injury', href: '/personal-injury/', note: 'Overview' },
    { label: 'Car Accidents', href: '/personal-injury/car-accidents/' },
    { label: 'Slip and Fall', href: '/personal-injury/slip-and-fall/' },
  ],
};
