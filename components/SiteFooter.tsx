import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';
import { socialIcons } from '../constants/social-icons';

export const SiteFooter: React.FC = () => {
  return (
    <Box textAlign="center">
      <Box display="flex" justifyContent="center">
        <Stack orientation="horizontal" spacing="space60">
          {socialIcons.map((icon) => (
            <Anchor
              display="inline-flex"
              href={icon.URL}
              key={icon.NETWORK}
              title={icon.NETWORK}
            >
              {icon.SVG}
            </Anchor>
          ))}
        </Stack>
      </Box>
      <Text as="span" fontSize="fontSize10" lineHeight="lineHeight10">
        &copy; {new Date().getFullYear()} Rich Bachman //{' '}
        <Anchor href="mailto:rb@richbachman.com" title="Contact">
          Contact
        </Anchor>
      </Text>
    </Box>
  );
};
