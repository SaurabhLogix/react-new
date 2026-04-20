import img838 from './838.jpg';
import img890 from './0890franklin.jpg';
import img140265 from './140265hsbc.jpg';
import img250536 from './250536idfc.jpg';
import img3523 from './3523.jpg';
import img44014 from './44014.jpg';
import img48401 from './48401.jpg';
import img539 from './539images.jpg';
import img5564 from './5564.jpg';
import img7610 from './7610.jpg';
import img80359 from './80359hdfc.jpg';
import img80712 from './80712.jpg';
import img860437 from './860437icici.jpg';
import img9395 from './9395.jpg';

// Row 1 — Mutual Fund Partners
// Export a single array with all client logos so the home page can render them
export const mutualFundLogos = [
    img890,      // Franklin Templeton
    img80359,    // HDFC
    img860437,   // ICICI
    img140265,   // HSBC
    img250536,   // IDFC
    img838,
    img3523,
    img44014,
    img48401,
    img539,
    img5564,
    img7610,
    img80712,
    img9395,
];

// Row 2 — Health Insurance Partners
export const insuranceLogos = [
    img44014,
    img48401,
    img539,
    img5564,
    img7610,
    img80712,
    img9395,
];

// All logos (backwards compatible)
const clientImages = {
    standard838: img838,
    franklin: img890,
    hsbc: img140265,
    idfc: img250536,
    standard3523: img3523,
    standard44014: img44014,
    standard48401: img48401,
    genericImages: img539,
    img5564: img5564,
    img7610: img7610,
    hdfc: img80359,
    img80712: img80712,
    icici: img860437,
    standard9395: img9395,
};

export default clientImages;
