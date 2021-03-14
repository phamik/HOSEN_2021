import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ImgEntrance from '../images/restaurant-entrance.jpg';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledHomepageTitle = styled.h1`
  color: ${(props) => props.theme.color.gold};
  font-size: 74px;
  padding: 20% 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.gold};
  font-family: Roboto, sans-serif;
  padding: 2rem 2rem;
  margin: 0 -1.0875rem;
`;

const TextTitle = styled.h3`
  width: 40%;
  padding: 1rem 0;
  border-top: 2px solid ${(props) => props.theme.color.gold};
  border-bottom: 2px solid ${(props) => props.theme.color.gold};
`;

const ImgContainer = styled.div`
  margin: 0 -1.0875rem;
  background: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${props => props.image});
  filter: grayscale(30%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
 
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageContainer>
      <ImgContainer image={ImgEntrance}>
        <StyledHomepageTitle>Vitejte v restauraci Lotus</StyledHomepageTitle>

      </ImgContainer>
      <TextContainer>
        <TextTitle>KDE VIETNAM NABÍRÁ VÝZNAM</TextTitle>
        <p>
          Zavítejte do naší rodinné restaurace Lotus, v srdci areálu Sapa, a
          ochutnejte autentickou Vietnamskou kuchyni. Naše restaurace se zakládá
          na rodinné tradici a recepty jsou předávány z generace na generaci.
          Mezi náš rodinný recept patří „Ca kho to“ nebo-li ryba v kotlíku, v
          našem menu však najdete i další tradiční vietnamské delikatesy.
        </p>

        <p>
          Nabízíme Vám útulnou restauraci o kapacitě 100 míst a malou terasou,
          kterou můžete využít v letních dnech a sledovat živě vietnamské dění
          kolem Vás. Nabízíme také dvě konferenční místnosti o kapacitě 150 a 30
          míst. Zde je možné pořádat firemní party, oslavu narozenin, setkání s
          přáteli, svatbu a další události, které k úplné dokonalosti rádi
          doplníme našim cateringem.
        </p>

        <p>
          "Přijďte k nám, jen tak na oběd, večeři či něco malého na zub a
          ochutnejte Vietnam…. Těšíme se na Vás."
        </p>

        <p>Team Lotus</p>
      </TextContainer>
      <br />
      <TextContainer>
        <TextTitle>O RESTAURACI LOTUS</TextTitle>
        <p>
          Restaurace Ho Sen Quan Lotus je vietnamská rodinná restaurace, kterou
          najdete v srdci obchodního centra SAPA, Libušská 319/126, Praha 4,
          Písnice.
        </p>

        <p>
          Naše kořeny se nachází v okolí královského města Hue, kde díky
          královského dvora vznikly nejznámější vietnamské jídla, jako je
          tradiční polévka Pho Ga, Pho Bo a Bun Bo Nam Bo.
        </p>

        <p>
          Restaurace si zakládá na autentičnosti vietnamské gastronomie a
          používáme jen čerstvé suroviny!
        </p>

        <p>
          Restaurace se pravidelně účastní festivalů. Letos již druhým rokem
          jsme se účastnili Bosch Fresh Food Festival v Plzni a Pardubicích.
          Loni na festivalu v Praze jsme byli zařazeni mezi osmi soutěžících
          restaurací, u odborné poroty se Zdeňkem Pohlreichem, kde naše
          degustační menu první získalo 4. místo.
        </p>

        <p>Nabídku cateringu přizpůsobujeme na přání našeho klienta!</p>
      </TextContainer>
    </HomePageContainer>
  </Layout>
);

export default IndexPage;
