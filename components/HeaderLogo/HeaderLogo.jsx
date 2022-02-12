import { headerLogoStyles as stls } from './headerLogoStyles'
import { Header } from 'postonents'

const HeaderLogo = () => {
  return (
    <Header
      logo='https://res.cloudinary.com/npoipe/image/upload/v1642150944/email-template-old-new-years/logo_dqoxim.png'
      title={
        <>
          Московский институт <br /> профессионального образования
        </>
      }
      logoHeight={68}
      style={stls.container}></Header>
  )
}

export default HeaderLogo
