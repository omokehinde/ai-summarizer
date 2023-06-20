import {logo} from '../assets';

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justified-between items-center flex-col">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button type="button" onClick={() => window.open()}>
          GitHub
        </button>
      </nav>
    </header>
  )
}

export default Hero