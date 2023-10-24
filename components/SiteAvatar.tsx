import Image from 'next/image';
import { css } from '../styled-system/css';

const avatarContainerStyles = css({
  borderRadius: 'circle',
  overflow: 'hidden',
  height: '100px',
  width: '100px',
  marginBottom: '60',
});

export const SiteAvatar: React.FC = () => {
  return (
    <div className={avatarContainerStyles}>
      <Image
        src="/rich_profile.jpg"
        alt="Picture of Rich Bachman"
        width={100}
        height={100}
      />
    </div>
  );
};
