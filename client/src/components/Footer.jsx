import { GithubLogo, LinkedInLogo, MailLogo } from '../assets/logos'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <div className='max-w-[1100px] w-full h-auto py-[2rem] mt-[4rem] flex flex-col justify-center items-center gap-2'>
      <div className='flex lg:hidden items-center justify-center gap-6'>
            <a href='https://github.com/simon-quach' target='_blank'>
              <img src={GithubLogo} alt='github-logo' className='w-[30px] '/>
            </a>
            <a href='https://www.linkedin.com/in/simon-quach/' target='_blank'>
              <img src={LinkedInLogo} alt='linkedin-logo' className='w-[30px]'/>
            </a>
            <a href='mailto: simonquach.tech@gmail.com' target='_blank'>
              <img src={MailLogo} alt='mail-logo' className='w-[24px]'/>
            </a>
          </div>
      <div className="text-[16px]">Made with ❤️ by Simon Quach &copy; {year}</div>
      <div className="text-[12px]">Last Updated: February 2023</div>
    </div>
  )
}

export default Footer