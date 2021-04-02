import type { AppProps } from 'next/app';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { CustomizationProvider } from '@twilio-paste/core/customization';
import { GenericThemeShape } from '@twilio-paste/core/theme';
import { StylingGlobals, css } from '@twilio-paste/core/styling-library';
import CustomTheme from '../theme/index.json';
import DefaultSeoConfig from '../next-seo.json';

interface GlobalStylesProps {
  theme: GenericThemeShape;
}

const globalStyles = (props: GlobalStylesProps): any =>
  css({
    body: {
      backgroundColor: '#232931',
    },
  })(props);

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...DefaultSeoConfig} />
      <SocialProfileJsonLd
        name="Rich Bachman"
        sameAs={[
          'https://twitter.com/richbachman',
          'https://github.com/richbachman',
          'https://www.linkedin.com/in/richbachman/',
        ]}
        type="Person"
        url="https://richbachman.com"
      />
      {/* @ts-ignore */}
      <StylingGlobals styles={globalStyles({ theme: CustomTheme })} />
      <CustomizationProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </CustomizationProvider>
    </>
  );
};

export default MyApp;
