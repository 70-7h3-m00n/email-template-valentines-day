import { whatToAskStyles as stls } from './whatToAskStyles'
import { Container, Row, Column, Link, Image } from 'postonents'

const WhatToAsk = () => {
  const list = [
    {
      key: 'management',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/whatToAskManagement_mfg2ki.png',
      title: (
        <>
          Хочу найти новую профессию и управлять <br />
          <span style={stls.highlight}>(Менеджмент)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/menedzhment/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'accounting',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/whatToAskAccounting_fkjejx.png',
      title: (
        <>
          Хочу себе новую профессию бухгалтера
          <br />
          <span style={stls.highlight}>(Бухгалтерский учет)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/bukhgalterskoye-delo-pp/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'economics',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/WhatToAskEconomics_mizfms.png',
      title: (
        <>
          Хочу быть экономистом
          <br />
          <span style={stls.highlight}>(Экономика)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/jekonomika/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'design',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/WhatToAskDesign_rtdjmt.png',
      title: (
        <>
          Хочу разбираться в дизайне
          <br />
          <span style={stls.highlight}>(Дизайн)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/dizajn/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'it',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/WhatToAskIT_isuieb.png',
      title: (
        <>
          Хочу работать в FANG
          <br />
          <span style={stls.highlight}>(ИВТ)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/informatika-i-vychislitelnaja-tehnika/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'marketing',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/WhatToAskMarketing_wzlqau.png',
      title: (
        <>
          Хочу быть GURU Маркетинга
          <br />
          <span style={stls.highlight}>(Маркетинг)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/marketing/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'teaching',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/WhatToAskTeaching_swnvq1.png',
      title: (
        <>
          Хочу преподавать и быть ментором
          <br />
          <span style={stls.highlight}>(Педагогика)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/pedagogika/?utm_campaign=email&term=valentines-day'
    },

    {
      key: 'construction',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/WhatToAskConstruction_dvhcvb.png',
      title: (
        <>
          Хочу быть инженером
          <br />
          <span style={stls.highlight}>(Строительство)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/stroitelstvo/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'psychology',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/WhatToAskPsychology_gixdk6.png',
      title: (
        <>
          Хочу стать психологом и помогать другим <br />
          <span style={stls.highlight}>(Психология)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/psihologija/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'jurisprudence',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/whatToAskJurisprudence_lalmxx.png',
      title: (
        <>
          Хочу быть юристом
          <br />
          <span style={stls.highlight}>(Юриспруденция)</span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/jurisprudencija/?utm_campaign=email&term=valentines-day'
    },
    {
      key: 'default',
      img: 'https://res.cloudinary.com/npoipe/image/upload/v1639998885/email-template-new-years/whatToAskDefault_jsu3pi.png',
      title: (
        <>
          Хочу все сразу
          <br />
          <span style={stls.highlight}>
            (Общая страница проф.переподготовки)
          </span>
        </>
      ),
      href: 'https://ipo.msk.ru/professionalnaja-perepodgotovka/?utm_campaign=email&term=valentines-day'
    }
  ]

  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.p} align='center'>
              Праздник <span style={stls.highlight}>«Нового года»</span> родом
              из детства. <br /> Каждый год - это письма Деду Морозу и подарки
              под ёлкой. <br /> Классная была традиция, не правда ли?
            </p>
            <p style={stls.p} align='center'>
              Предлагаем вспомнить о ней! Выбирайте, что попросить <br /> у
              «ИПО» Мороза в <span style={stls.highlight}>2022 году</span>, и
              становитесь ближе к заветной цели:
            </p>
            <ul style={stls.list}>
              {list.map(item => (
                <li key={item.key} style={stls.item}>
                  <Row>
                    <Column style={stls.itemColumnImage}>
                      <Image src={item.img} width={52} alt={item.title} />
                    </Column>
                    <Column style={stls.itemColumnTitle}>
                      <span style={stls.itemTitle}>{item.title}</span>
                    </Column>
                    <Column style={stls.itemColumnBtn}>
                      <Link href={item.href} style={stls.btn}>
                        <span style={stls.link}>Исполнить мечту</span>
                      </Link>
                    </Column>
                  </Row>
                </li>
              ))}
            </ul>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default WhatToAsk
