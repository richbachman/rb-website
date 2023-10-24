import { css } from '../styled-system/css';

const siteHeadingStyles = css({
  fontSize: '70',
  lineHeight: '70',
  fontWeight: 'bold',
  lg: { fontSize: '110', lineHeight: '110' },
});

export const SiteHeading: React.FC = (props) => (
  <h1 className={siteHeadingStyles} {...props} />
);
