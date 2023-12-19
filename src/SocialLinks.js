import React from 'react';
import linkedinImg from './social_imgs/linkedin.jpeg';
import instaImg from './social_imgs/insta.jpeg';
import githubImg from './social_imgs/github.jpeg';
import twitterImg from './social_imgs/twitter.jpg';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vijayaditya-raj-rapaka-5b2659237/', image: linkedinImg  },
    { name: 'GitHub',url: 'https://github.com/Vijayadityaraj-source/', image: githubImg },
    { name: 'Twitter', url: 'https://twitter.com/V_A_R_Rap', image: twitterImg },
    { name: 'Instagram', url: 'https://www.instagram.com/_vijayadityar_/', image: instaImg },
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div  style={{ display: 'flex' }}>
      {socialLinks.map((link) => (
        <div style={{display: 'block', paddingRight: '50px'}}>
        <img src={link.image} alt={link.name} style={{ color: '#8c7366', cursor: 'pointer', borderRadius: '50px',height: '200px' }} onClick={() => handleLinkClick(link.url)} />
        <p style={{ color: '#8c7366', textAlign: 'center'}}>{link.name}</p><br/>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
