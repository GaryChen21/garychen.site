/**
 * Represents a certificate with its details
 * @typedef {Object} Certificate
 * @property {string} title - The title/name of the certificate
 * @property {string} image - Path to the certificate's image file (served from /public)
 * @property {string} link - External link to view/download the certificate (e.g. Google Drive)
 */
type Certificate = {
  title: string;
  image: string;
  link: string;
};

/**
 * Array containing all certificate entries
 * @type {Array<Certificate>}
 */
export const Certificates: Array<Certificate> = [
  {
    title: "Presenter of International Conference",
    image: "/img/certificate/Presenter-Gary Chen_page-0001.jpg",
    link: "https://drive.google.com/drive/folders/18JBl906M_JfNmrfoRa5Xil46ePaxmTEB?usp=sharing",
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    image: "/img/certificate/prepare-data-for-ml-apis-on-google-cloud_page-0001.jpg",
    link: "https://drive.google.com/drive/folders/18JBl906M_JfNmrfoRa5Xil46ePaxmTEB?usp=sharing",
  },
  {
    title: "Build a Secure Google Cloud Network",
    image: "/img/certificate/build-a-secure-google-cloud-network_page-0001.jpg",
    link: "https://drive.google.com/drive/folders/18JBl906M_JfNmrfoRa5Xil46ePaxmTEB?usp=sharing",
  },
  {
    title: "Set Up an App Dev Environment on Google Cloud",
    image: "/img/certificate/set-up-an-app-dev-environtment-on-google-cloud_page-0001.jpg",
    link: "https://drive.google.com/drive/folders/18JBl906M_JfNmrfoRa5Xil46ePaxmTEB?usp=sharing",
  },
  {
    title: "The Basics of Google Cloud Compute",
    image: "/img/certificate/the-basics-of-google-cloud-compute_page-0001.jpg",
    link: "https://drive.google.com/drive/folders/18JBl906M_JfNmrfoRa5Xil46ePaxmTEB?usp=sharing",
  },
];
