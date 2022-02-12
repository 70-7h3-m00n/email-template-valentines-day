import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link, Image } from 'postonents'

const Article = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row alignment='center'>
        <Column style={stls.column} alignment='center'>
          <p style={stls.title} alignment='center'>
            Старт новых групп обучения - 20 февраля!
          </p>
          <p style={stls.p}>
            <span style={stls.highlight}>Начните обучение 20 февраля!</span>{' '}
            <br /> Подарите себе и своей половинке обучение. <br />{' '}
            <span style={stls.highlight}>20 февраля</span> в Институте
            профессионального образования <br />
            начинают обучение новые группы. Присоединяйтесь!
          </p>
          <Link
            href={'https://ipo.msk.ru/?utm_campaign=email&term=valentines-day'}
            style={stls.btn}>
            <span style={stls.link}>Выбрать программу</span>
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
