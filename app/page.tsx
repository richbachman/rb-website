import { Metadata } from 'next';
import { SiteAvatar } from '@/components/SiteAvatar';
import { SiteHeading } from '@/components/SiteHeading';
import { SiteSubHeading } from '@/components/SiteSubHeading';
import { SiteFooter } from '@/components/SiteFooter';
import { css } from '../styled-system/css';

export const metadata: Metadata = {
  title: 'Hi',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>',
  },
};

const mainStyles = css({
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '800px',
  paddingTop: '200',
  paddingRight: '60',
  paddingBottom: '200',
  paddingLeft: '60',
});

const paragraphStyles = css({
  marginTop: 0,
  padding: 0,
  marginBottom: '70',
  fontSize: '30',
  lineHeight: '30',
  fontWeight: 'normal',
  color: 'text',
});

const anchorStyles = css({
  color: 'textLink',
  textDecoration: 'underline',
  _hover: { color: 'textLinkDarker' },
  _active: { color: 'textLinkDarker' },
  _focus: { color: 'textLinkDarker' },
});

const hrStyles = css({
  marginRight: 0,
  marginLeft: 0,
  marginBottom: '120',
  marginTop: '120',
  borderWidth: 0,
  borderColor: 'borderLight',
  borderStyle: 'solid',
  borderBottomWidth: '1px',
  width: 'auto',
});

export default function Home() {
  return (
    <main className={mainStyles}>
      <SiteAvatar />
      <SiteHeading>Rich Bachman</SiteHeading>
      <SiteSubHeading>
        Design Systems, Photography, &amp; Cycling
      </SiteSubHeading>
      <p className={paragraphStyles}>
        A Senior Frontend Engineer currently working at{' '}
        <a className={anchorStyles} href="https://fivetran.com">
          Fivetran
        </a>{' '}
        working on the Fivetran Design System. I enjoy working on scalable
        component-based design systems, or anything front-end. My evenings and
        weekends are spent cycling, hiking, and taking photos.
      </p>

      <p className={paragraphStyles}>
        Previously{' '}
        <a className={anchorStyles} href="https://www.localyzeapp.com">
          Localyze
        </a>{' '}
        working on the{' '}
        <a className={anchorStyles} href="https://github.com/Localitos/pluto">
          Pluto Design System
        </a>
        ,{' '}
        <a className={anchorStyles} href="https://trueplan.io">
          TruePlan
        </a>{' '}
        working on the{' '}
        <a className={anchorStyles} href="https://github.com/trueplan/forecast">
          Forecast Design System
        </a>
        ,{' '}
        <a className={anchorStyles} href="https://twilio.com">
          Twilio
        </a>{' '}
        working on the{' '}
        <a className={anchorStyles} href="https://paste.twilio.design">
          Paste UX Platform
        </a>
        ,{' '}
        <a className={anchorStyles} href="https://sendgrid.com">
          SendGrid
        </a>
        ,{' '}
        <a className={anchorStyles} href="https://paysimple.com">
          PaySimple
        </a>
        , and{' '}
        <a className={anchorStyles} href="https://www.signaltheory.com/">
          Signal Theory
        </a>
        .
      </p>

      <hr aria-orientation="horizontal" className={hrStyles} />

      <SiteFooter />
    </main>
  );
}
