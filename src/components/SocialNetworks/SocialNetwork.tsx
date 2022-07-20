
import { AiFillFacebook } from 'react-icons/ai'; 
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

type SocialNetowksProps = {
  classNameSocial: string;
  size?: string
}

export const SocialNetwork = ({ classNameSocial, size }: SocialNetowksProps) => {

  return (
    <div className={`${classNameSocial} iconsSocial`}>
      <a href="https://www.facebook.com/" target="_blank" className='facebook'>
        <AiFillFacebook size={size} />
      </a>
      <a href="https://www.instagram.com/"  target="_blank" className='instagram mt-1'>
        <BsInstagram size={size} />
      </a>
      <a href="https://twitter.com/home"  target="_blank" className='twitter mt-1'>
        <BsTwitter size={size} />
      </a>
    </div>
  )
}
