import { companyLogo, companyName } from '../../CompanyInfo/CompanyInfo';

export default function LogoFiligran() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0.2,
        zIndex: 0,
      }}
    >
      <img style={{ width: '100px' }} src={companyLogo} alt={companyName} />
    </div>
  );
}
