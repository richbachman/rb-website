import { css } from '../styled-system/css';
import { socialIcons } from '../constants/social-icons';

const siteFooterContainerStyles = css({
  textAlign: 'center',
});

const siteFooterIconContainerStyles = css({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50',
});

const stackStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '60',
});

const siteFooterAnchorStyles = css({
  color: 'textLink',
  display: 'inline-flex',
  textDecoration: 'underline',
  _hover: { color: 'textLinkDarker' },
  _active: { color: 'textLinkDarker' },
  _focus: { color: 'textLinkDarker' },
});

const siteFooterCopyright = css({
  fontSize: '10',
  lineHeight: '10',
});

export const SiteFooter: React.FC = () => {
  return (
    <div className={siteFooterContainerStyles}>
      <div className={siteFooterIconContainerStyles}>
        <div className={stackStyles}>
          {socialIcons.map((icon) => (
            <a
              className={siteFooterAnchorStyles}
              href={icon.URL}
              key={icon.NETWORK}
              title={icon.NETWORK}
            >
              {icon.SVG}
            </a>
          ))}
        </div>
      </div>
      <span className={siteFooterCopyright}>
        &copy; {new Date().getFullYear()} Rich Bachman //{' '}
        <a
          className={siteFooterAnchorStyles}
          href="mailto:rb@richbachman.com"
          title="Contact"
        >
          Contact
        </a>
      </span>
    </div>
  );
};
