


const NavBarLink = (props) =>{
    const {text, linkto} = props
    return(
        <a href={linkto} className='links'>{text}</a>
    )
}

export default NavBarLink