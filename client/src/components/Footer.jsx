const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <div className='max-w-[1100px] w-full h-[90px] flex flex-col justify-center items-center gap-2'>
      <div className="text-[16px]">Made with ❤️ by Simon Quach &copy; {year}</div>
      <div className="text-[12px]">Last Updated: February 2023</div>
    </div>
  )
}

export default Footer