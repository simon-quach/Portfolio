// Colors: Main = #1E72D9, Secondary = #458DE5, Black = #1b1b1b
import { Navbar, Home, About, Skills, Projects, Contact, Footer } from './components';
import { GithubLogo, LinkedInLogo, MailLogo } from './assets/logos'

import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <main className='flex flex-col items-center relative text-[#1b1b1b] bg-[#f4f9ff]'>
        <aside className='hidden lg:block'>
          <div className='flex flex-col items-center justify-center gap-4 fixed bottom-[8rem] left-[50px] z-[2]'>
            <a href='https://github.com/simon-quach' target='_blank'>
              <img src={GithubLogo} alt='github-logo' className='w-[30px]'/>
            </a>
            <a href='https://www.linkedin.com/in/simon-quach/' target='_blank'>
              <img src={LinkedInLogo} alt='linkedin-logo' className='w-[30px]'/>
            </a>
            <a href='mailto: simonquach.tech@gmail.com' target='_blank'>
              <img src={MailLogo} alt='mail-logo' className='w-[24px]'/>
            </a>
          </div>
          <div className='fixed w-[4px] h-[100px] bg-[#1b1b1b] bottom-0 left-[64px]'></div>
          <div className='fixed w-[4px] h-[100px] bg-[#1b1b1b] bottom-0 right-[64px]'></div>
        </aside>

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App