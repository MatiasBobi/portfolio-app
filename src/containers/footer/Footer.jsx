import github from '../../assets/img/github-white.svg'
import linkedn from '../../assets/img/linkedin.svg'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div>
          <p>Pagina desarollada por @Matias Leonardo Bobi</p>
        </div>
        <div className='svg__footer_container'>
          <img src={github} alt="Imagen con un link a mi perfil de github" />
          <img src={linkedn} alt="Imagen con un link a mi perfil de linkedn" />{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
