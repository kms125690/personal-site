/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hong Kong Centre For Logistics Robotics',
    position: 'Engineer',
    url: 'https://www.hkclr.hk/',
    startDate: '2023-11-01',
    summary: 'TBD',
    highlights: [
      'TBD',
      'TBD',
    ],
  },
  {
    name: 'Hong Kong Applied Science and Technology Research Institute',
    position: 'Engineer',
    url: 'https://www.astri.org/',
    startDate: '2019-11-01',
    endDate: '2023-10-27',
    summary: 'TBD',
    highlights: [
      'TBD',
      'TBD',
    ],
  },
];

export default work;
