import Image from 'next/image';
import { Box } from '@twilio-paste/core/box';

export const SiteAvatar: React.FC = () => {
  return (
    <Box
      borderRadius="borderRadiusCircle"
      overflow="hidden"
      height="100px"
      width="100px"
      marginBottom="space60"
    >
      <Image
        src="/rich_profile.jpg"
        alt="Picture of the Rich Bachman"
        width={100}
        height={100}
      />
    </Box>
  );
};
