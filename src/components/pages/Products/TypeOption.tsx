import './NewProductStyles.css'

import DigitalProductIcon from "../../../assets/images/digital-product-icon.png";
import CourseIcon from "../../../assets/images/course-tutorial-icon.png";
import EbookIcon from "../../../assets/images/ebook-icon.png";
import MembershipIcon from "../../../assets/images/membership-icon.png";
import PhysicalGoodIcon from "../../../assets/images/physical-good-icon.png";
import BundleIcon from "../../../assets/images/bundle-icon.png";

interface TypeOptionProps {
  iconPath: string;
  title: string;
  description: string;
}

export const typeOptions = [
  {
    iconPath: DigitalProductIcon,
    title: "Digital product",
    description: "Any set of files to download or stream.",
  },
  {
    iconPath: CourseIcon,
    title: "Course or tutorial",
    description: "Sell a single lesson or teach a whole cohort of students.",
  },
  {
    iconPath: EbookIcon,
    title: "E-book",
    description: "Offer a book or comic in PDF, ePub, and Mobi formats.",
  },
  {
    iconPath: MembershipIcon,
    title: "Membership",
    description: "Start a membership business around your fans.",
  },
  {
    iconPath: PhysicalGoodIcon,
    title: "Physical good",
    description: "Sell anything that requires shipping something.",
  },
  {
    iconPath: BundleIcon,
    title: "Bundle",
    description: "Sell two or more existing products for a new price",
  },
];

const TypeOption = ({ iconPath, title, description }: TypeOptionProps) => (
  <button role="button" className="type-option" tabIndex={0}>
    <img src={iconPath} alt={`${title} icon`} />
    <h4>{title}</h4>
    <p>{description}</p>
  </button>
);

export default TypeOption;
