

const NavBarLink = (props) =>{
    const {text, keyId} = props
    return(
        <li className='links' key={keyId}>
            {text}
        </li>
    )
}

export default NavBarLink