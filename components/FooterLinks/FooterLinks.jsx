import { footerLinksStyles as stls } from './footerLinksStyles'
import { Row, Column, Footer, Link, Text } from 'postonents'

const FooterLinks = () => {
  return (
    <Footer style={stls.container}>
      <Row>
        <Column>
          <Link
            href={`https://ipo.msk.ru/professionalnaja-perepodgotovka/?utm_campaign=email&term=valentines-day`}
            style={stls.link}>
            ПРОФЕССИИ
          </Link>
          <Text style={stls.separator}>|</Text>
          <Link
            href={`https://ipo.msk.ru/povyshenie-kvalifikacii/?utm_campaign=email&term=valentines-day`}
            style={stls.link}>
            КУРСЫ
          </Link>
          <Text style={stls.separator}>|</Text>
          <Link
            href={`https://ipo.msk.ru/mba-1/?utm_campaign=email&term=valentines-day`}
            style={stls.link}>
            MBA
          </Link>
        </Column>
      </Row>
    </Footer>
  )
}

export default FooterLinks
