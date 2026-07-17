import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-pink-600 text-white p-5 flex justify-between">
        <Link to="/" className="text-2xl font-bold">Murugi's Store</Link>
        <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
