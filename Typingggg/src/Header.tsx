const Header = (
    { title, colour } :  { title: string, colour?: string }
) => {
  return (
    <header>
        <h1 style={{ color: colour ? colour : 'blue' }} >{title}</h1>
    </header>
  )
}

export default Header