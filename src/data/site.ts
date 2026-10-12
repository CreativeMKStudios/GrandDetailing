export const business = {
  name: 'Grand Detailing',
  category: 'Car detailing service',
  phoneDisplay: '07496 014846',
  phoneTel: '+447496014846',
  street: '78 Stagsden Road',
  streetGoogle: '78 Stagsden Rd',
  locality: 'Bedford',
  region: 'Bedfordshire',
  postcode: 'MK43 8PU',
  country: 'GB',
  countryName: 'United Kingdom',
  lat: 52.1444247,
  lng: -0.5337691,
  plusCode: '4FV8+QF Bedford',
  mapsUrl: 'https://maps.app.goo.gl/KTMFC935CUQLovix7',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=52.1444247,-0.5337691',
  appleMapsUrl: 'https://maps.apple.com/?daddr=52.1444247,-0.5337691',
  opens: '09:00',
  closes: '18:00',
  hoursLabel: '9am to 6pm',
  daysLabel: 'Monday to Sunday',
  ratingValue: 5,
  reviewCount: 2,
  checked: '12 October 2026',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/areas', label: 'Areas' },
  { href: '/contact', label: 'Contact' },
] as const;

export const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export const reviews = [
  {
    name: 'Ryan Porte',
    when: '2023',
    photoWhen: 'August 2023',
    stars: 5,
    text: 'Great service from Ollie and Luke. Turned up on time, and cleaned both the vans to a very high standard. Even persevered through the rain! Now booked in for a regular clean. Thanks lads.',
    tags: [
      'Auto detailing',
      'Car waxing',
      'Full body wash',
      'Interior scenting',
      'Auto interior vacuuming',
      'Seat shampooing',
      'Wheel washing',
    ],
  },
  {
    name: 'Ollie Neal',
    when: '2023',
    photoWhen: 'July 2023',
    stars: 5,
    text: 'Had my Vehicle interior and exterior detailed by Grand Detailing was shocked with the amazing customer service and results',
    tags: ['Full body wash'],
    ownerReply:
      "Thanks for leaving a review we're glad you like the final results!",
  },
] as const;

export const services = [
  {
    id: 'full-body-wash',
    title: 'Full body wash',
    summary: 'A wash of the whole outside, tagged on both Google reviews.',
    text: 'Both Google reviews tag a full body wash. That is a wash of the outside of the vehicle, rather than a quick splash on the front. Ryan Porte and Ollie Neal each tagged it. When you call, say how big the vehicle is.',
  },
  {
    id: 'detailing',
    title: 'Interior and exterior detailing',
    summary: 'Inside and outside work, named in Ollie Neal’s review.',
    text: 'Ollie Neal wrote that the inside and the outside of his vehicle were detailed. Ryan Porte tagged auto detailing on the visit for his vans. Ask what is included when you call. The listing has no set menu.',
  },
  {
    id: 'waxing',
    title: 'Car waxing',
    summary: 'Wax on the paint, tagged by Ryan Porte after his van clean.',
    text: 'Ryan Porte tagged car waxing. Wax goes on the paint after the wash. The listing does not name the product. Ask which wax they use, and whether it suits your paint.',
  },
  {
    id: 'wheels',
    title: 'Wheel washing',
    summary: 'Wheels washed, with a close photo of a Range Rover wheel.',
    text: 'Ryan Porte tagged wheel washing. One photo on the profile is a close shot of a clean black wheel and arch on a grey Range Rover. Call if the wheels are very dirty, or if you want them taken off the car. Taking wheels off is not listed as a separate job.',
  },
  {
    id: 'vacuum',
    title: 'Interior vacuuming',
    summary: 'The inside vacuumed, tagged on Ryan Porte’s visit.',
    text: 'Ryan Porte tagged auto interior vacuuming, which means the inside was vacuumed. A photo from the same summer shows the driver’s seat of a Kia. Mention child seats, dog hair, or a van floor when you call.',
  },
  {
    id: 'seats',
    title: 'Seat shampooing',
    summary: 'Seats shampooed, not just wiped, on Ryan Porte’s booking.',
    text: 'Ryan Porte tagged seat shampooing. The seats were shampooed, not just wiped. Cloth and leather need different care, so say what the seats are made of when you call.',
  },
  {
    id: 'scent',
    title: 'Interior scenting',
    summary: 'A scent in the cabin, tagged on the same visit.',
    text: 'Ryan Porte tagged interior scenting. That is a scent in the cabin after the clean. If anyone who uses the car reacts to fragrance, say so and ask them to leave it out.',
  },
  {
    id: 'vans',
    title: 'Van cleaning',
    summary: 'Two vans cleaned in the rain, then a regular clean booked.',
    text: 'Ryan Porte booked two vans. He wrote that both were cleaned to a high standard, even in the rain. One photo shows a Ford van covered in wash foam. Tell them if the van has a roof rack, tools, or a bulkhead.',
  },
  {
    id: 'regular',
    title: 'Regular cleans',
    summary: 'Ryan Porte booked a repeat clean after the first visit.',
    text: 'After the first visit, Ryan Porte wrote that he was booked in for a regular clean. The listing does not say how often that repeat happens. Ask what they can do again, and how far ahead they book.',
  },
] as const;

export const areas = [
  {
    id: 'bromham',
    name: 'Bromham',
    distance: 'The base is here',
    text: '78 Stagsden Road sits in Bromham. Google prints the postal town, which is Bedford, and the postcode MK43 8PU. The plus code on the listing is 4FV8+QF Bedford. If the vehicle is on a Bromham road, you are as close as it gets.',
  },
  {
    id: 'bedford',
    name: 'Bedford',
    distance: 'About 3 miles to the town centre',
    text: 'St Paul’s Square is about 3 miles east of the base. The listing uses Bedford as the town name. Grand Detailing has not published a map of streets they will travel. Ring and name the road.',
  },
  {
    id: 'biddenham',
    name: 'Biddenham',
    distance: 'About 1 mile',
    text: 'Biddenham is the next village towards Bedford, about 1 mile from the base. It is a short hop along the west side of town.',
  },
  {
    id: 'great-denham',
    name: 'Great Denham',
    distance: 'About 1.5 miles',
    text: 'Great Denham is about 1.5 miles south of the base. Name the street when you call, the same as anywhere else.',
  },
  {
    id: 'oakley',
    name: 'Oakley',
    distance: 'About 2 miles',
    text: 'Oakley is about 2 miles north of the base. It is one of the nearer villages on this side of Bedford.',
  },
  {
    id: 'stagsden',
    name: 'Stagsden',
    distance: 'About 2 miles',
    text: 'The road is named for Stagsden, which is about 2 miles west. The business address is the Bromham end of Stagsden Road, not the village itself.',
  },
  {
    id: 'stevington',
    name: 'Stevington',
    distance: 'About 2 miles',
    text: 'Stevington is about 2 miles north-west. It is close enough to ask about. It is not listed as a fixed stop.',
  },
  {
    id: 'kempston',
    name: 'Kempston',
    distance: 'About 2.5 miles',
    text: 'Kempston is about 2.5 miles south-east, on the far side of the Great Ouse from Bromham. Call and check the day.',
  },
  {
    id: 'clapham',
    name: 'Clapham',
    distance: 'About 3 miles',
    text: 'Clapham, the Bedford one, is about 3 miles north-east. This is not Clapham in London.',
  },
  {
    id: 'turvey',
    name: 'Turvey',
    distance: 'About 3 miles',
    text: 'Turvey is about 3 miles west, further out along the same side of the county. Ask before you assume they can reach you that week.',
  },
  {
    id: 'pavenham',
    name: 'Pavenham',
    distance: 'About 3 miles',
    text: 'Pavenham is about 3 miles north. Same rule: call, give the road, and let them say yes or no.',
  },
] as const;

export const faqs = [
  {
    q: 'Where is Grand Detailing?',
    a: '78 Stagsden Road, Bedford, MK43 8PU. The road is in Bromham. Bedford is the postal town. The Google plus code is 4FV8+QF Bedford.',
  },
  {
    q: 'Do you come to the vehicle?',
    a: 'Ryan Porte wrote that Ollie and Luke turned up and cleaned two vans where they were. Call with your road. The listing does not give a mile limit.',
  },
  {
    q: 'What time are you open?',
    a: 'Google lists 9am to 6pm, Monday to Sunday. On 12 October 2026 the listing showed those hours for each day.',
  },
  {
    q: 'What work can I book?',
    a: 'The review tags name a full body wash, detailing, waxing, wheel washing, vacuuming, seat shampooing, and interior scenting. Ryan Porte also had two vans cleaned, then booked a regular clean. There is no full price list on the listing.',
  },
  {
    q: 'How much does it cost?',
    a: 'No prices are published on the Google listing. Call 07496 014846 and describe the vehicle and the job.',
  },
  {
    q: 'How do I book?',
    a: 'Phone 07496 014846. There is no email and no website link on the Google listing. Have the vehicle type, the job, your road, and the day you want.',
  },
  {
    q: 'Is the car park step-free?',
    a: 'Google lists a wheelchair-accessible car park for the business. If you need a particular space or help, say so on the phone.',
  },
] as const;

export function fullAddress() {
  return `${business.street}, ${business.locality} ${business.postcode}`;
}
