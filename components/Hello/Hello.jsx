import { HelloStyles as stls } from './helloStyles'
import { Container, Row, Column, Link } from 'postonents'

const Hello = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.fullwidth}>
          <div style={stls.fullwidth}>
            <p style={stls.p} align='center'>
              Приближается завершение непростого{' '}
              <span style={stls.highlight}>2021 года</span>. <br /> От всей души
              желаем вам добиться выполнения поставленных <br /> целей и задач.
              Пусть следующий год станет для вас удачным, <br /> а уходящий
              заберет все невзгоды
            </p>
            <p style={stls.p} align='center'>
              Тем же, кто не планирует ставить на паузу свои образовательные{' '}
              <br />
              амбиции и стремится к получению новых знаний, НАНО «ИПО» <br />
              приглашает на обучение по программам повышения квалификации <br />{' '}
              или профессиональной переподготовки
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Hello
