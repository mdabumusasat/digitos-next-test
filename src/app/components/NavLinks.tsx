import Link from 'next/link';

interface NavLinksProps {
extraClassName?: string;
}

// Server Component - no hooks or browser APIs
const NavLinks: React.FC<NavLinksProps> = ({ extraClassName = "" }) => {
return (
<>
  <ul className={`navigation ${extraClassName}`}>
    <li className="current dropdown">
      <Link href="/">Home</Link>
      <ul>
        <li><Link href="/">Home 01</Link></li>
        <li><Link href="/index-2">Home 02</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="#">Pages</Link>
      <ul>
        <li><Link href="/page-about">About Us</Link></li>
        <li className="dropdown"><Link href="#">Team</Link>
          <ul>
            <li><Link href="/page-team">Team Grid</Link></li>
            <li><Link href="/page-team-details">Team Details</Link></li>
          </ul>
        </li>
        <li><Link href="/page-pricing">Pricing Plan</Link></li>
        <li><Link href="/page-testimonial">Testimonials</Link></li>
        <li><Link href="/page-faq">Faq</Link></li>
        <li className="dropdown"><Link href="#">Shop</Link>
          <ul>
            <li><Link href="/shop-products">Products</Link></li>
            <li><Link href="/shop-products-sidebar">Products with Sidebar</Link></li>
            <li><Link href="/shop-product-details">Product Details</Link></li>
            <li><Link href="/shop-cart">Cart</Link></li>
            <li><Link href="/shop-checkout">Checkout</Link></li>
          </ul>
        </li>
        <li><Link href="/page-404">404</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="#">Services</Link>
      <ul>
        <li><Link href="/page-services">Services Grid</Link></li>
        <li><Link href="/page-service-details">Services Details</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="#">Projects</Link>
      <ul>
        <li><Link href="/page-projects">Project Grid</Link></li>
        <li><Link href="/page-project-details">Project Details</Link></li>
      </ul>
    </li>
    <li className="dropdown"><Link href="#">Blog</Link>
      <ul>
        <li><Link href="/news-grid">Blog Grid</Link></li>
        <li><Link href="/news-details">Blog Details</Link></li>
      </ul>
    </li>
    <li><Link href="/page-contact">Contact</Link></li>
  </ul>
</>
);
};

export default NavLinks;
