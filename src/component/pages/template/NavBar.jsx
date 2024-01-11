import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../asset/image/template/Logo2.svg';
import ConnectWalletButton from './ConnectWalletButton';

function NavBar() {
      return (
            <>

                  <Navbar className="bg-body-tertiary navbar-frame ">
                        <Container className='header-frame' >
                              <Navbar.Brand href="#home" >
                                    <div className='vm'>
                                          <img
                                                alt="Melarix Logo"
                                                src={logo}
                                                width="36"
                                                className="d-inline-block align-top"
                                          />{' '}
                                          <span className='nav-br-p'>
                                                Melarix
                                          </span>
                                    </div>
                              </Navbar.Brand>
                              <ConnectWalletButton />
                        </Container>
                  </Navbar>
            </>
      );
}

export default NavBar;