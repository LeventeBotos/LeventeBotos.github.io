export default function Home() {
  return (
    <div className="gradient text-xl lg:text-3xl text-center">
      <div className="h-screen flex-col flex">
        <div className="basis-3/12"></div>
        <div className=' basis-5/12 p-5 md:p-10 font-bold flex items-center justify-center'>
          <div>
            <div className=" text-8xl md:text-9xl text-left md:text-center">Hello,</div>
            <div className="text-3xl md:text-6xl text-left md:text-center">I am Levente Botos</div>
          </div>
        </div>
        <div className="basis-3/12"></div>
        <div className="basis-1/12">Scroll down for more!</div>
      </div>
      <div className='h-screen p-10 font-bold flex-col items-center'>
       <div className="self-center align-middle">
         <div className="text-4xl lg:text-6xl text-left md:text-center"><p>Some of my projects:</p></div>
        </div>
      </div>
    </div>
  )
}
