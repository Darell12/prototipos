import Link from "next/link"

const Menu = () => {
  return (
    <nav>
        <div>
            <Link href='/'>
                Home
            </Link>
            <Link href='/login'>
                Login
            </Link>
            <Link href='/horarios'>
                Horarios
            </Link>
        </div>
    </nav>
  )
}

export default Menu