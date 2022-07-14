import { NextSeo } from "next-seo";
import { Anchor } from "@twilio-paste/core/anchor";
import { Box } from "@twilio-paste/core/box";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Separator } from "@twilio-paste/core/separator";
import { SiteAvatar } from "../components/SiteAvatar";
import { SiteHeading } from "../components/SiteHeading";
import { SiteSubHeading } from "../components/SiteSubHeading";
import { SiteFooter } from "../components/SiteFooter";

const Home: React.FC = () => {
  return (
    <>
      <NextSeo title="Hi" />
      <Box
        as="main"
        marginRight="auto"
        marginLeft="auto"
        maxWidth="860px"
        paddingTop="space200"
        paddingRight="space60"
        paddingBottom="space200"
        paddingLeft="space60"
      >
        <SiteAvatar />
        <SiteHeading>Rich Bachman</SiteHeading>
        <SiteSubHeading>
          Design Systems, Photography, &amp; Cycling
        </SiteSubHeading>

        <Paragraph>
          A UX Engineer currently working at{" "}
          <Anchor href="https://trueplan.io">TruePlan</Anchor>, on the{" "}
          <Anchor href="https://github.com/trueplan/forecast">
            Forecast Design System
          </Anchor>
          . I enjoy working on scalable component-based design systems, or
          anything front-end. My evenings and weekends are spent cycling,
          hiking, and taking photos.
        </Paragraph>

        <Paragraph>
          Previously <Anchor href="https://twilio.com">Twilio</Anchor> working
          on the{" "}
          <Anchor href="https://paste.twilio.design">Paste UX Platform</Anchor>,{" "}
          <Anchor href="https://sendgrid.com">SendGrid</Anchor>,{" "}
          <Anchor href="https://paysimple.com">PaySimple</Anchor>, and{" "}
          <Anchor href="https://www.signaltheory.com/">Signal Theory</Anchor>.
        </Paragraph>

        <Separator orientation="horizontal" verticalSpacing="space120" />

        <SiteFooter />
      </Box>
    </>
  );
};

export default Home;
