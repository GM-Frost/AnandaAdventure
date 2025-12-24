import { logoImg } from '@/assets/images/images';

const LogoSpinner = () => (
  <div
    className="
    fixed inset-0 z-50 flex items-center justify-center
    bg-white/10 backdrop-blur-sm
  "
    role="status"
    aria-live="polite"
  >
    <img src={logoImg} alt="Loading" className="w-24 h-24 animate-revolve-y" />
  </div>
);

export default LogoSpinner;
