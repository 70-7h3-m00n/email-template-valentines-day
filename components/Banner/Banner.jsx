import { bannerStyles as stls } from './bannerStyles'
import { Container, Row, Column, Link } from 'postonents'

const Banner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>
              День признаний <br />в любви
            </p>

            <p style={stls.pTop}>
              Институт профессионального образования <br /> поздравляем вас с
              праздником всех влюбленных!
            </p>

            <p style={stls.p}>
              <span style={stls.highlight}>День Святого Валентина</span>, иначе
              называемый{' '}
              <span style={stls.highlight}>Днем Всех Влюбленных</span>, <br />
              существует уже много тысяч лет. Праздник носит имя Валентина -{' '}
              <br />
              простого христианского священника, отважившегося венчать <br />
              легионеров - против воли римского императора. Помимо всего <br />
              прочего, богослужитель был настоящим романтиком.
            </p>

            <p style={stls.pBottom}>
              Несмотря на смерть священника, о бескорыстных и добрых делах{' '}
              <br />
              Валентина не забыли его, по христианскому обычаю, причислили{' '}
              <br /> к лику святых и избрали покровителем всех влюбленных.{' '}
              <br /> В 496 году Геласиус - римский папа - объявил дату <br />
              <span style={stls.highlight}>
                14 февраля Днем Святого Валентина.
              </span>
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Banner
