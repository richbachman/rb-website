import { css } from '../styled-system/css';

const siteSubHeadingStyles = css({
  color: 'textBrandHighlight',
  fontSize: '50',
  lineHeight: '50',
  fontWeight: 'bold',
  marginBottom: '120',
  lg: { fontSize: '70', lineHeight: '70' },
});

export const SiteSubHeading: React.FC = (props) => (
  <p className={siteSubHeadingStyles} {...props} />
);
