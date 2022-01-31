import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as Hambuger } from 'assets/icons/hamburger.svg';
import gsap from 'gsap/all';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const AnimationWrapper = styled.div`
  grid-column: 1/1;
  /* background-color: yellow; */
  display: grid;
  place-items: center;
  svg {
    width: 700px;
  }
`;
const ContentWrapper = styled.div`
  grid-column: 2/2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;

const Home = () => {
  const image = useRef(null);
  const tl = useRef(null);
  const text = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    // const { current: text } = text;
    const { current: el } = image;
    const ground = el.getElementById('floor');
    const man = el.getElementById('man');
    const rolls_top = el.getElementById('rolls top');
    const cucumber = el.getElementById('cucumber');
    const cheese = el.getElementById('cheese');
    const meet = el.getElementById('meet');
    const tomatoet = el.getElementById('tomatoet');
    const tomatoeb = el.getElementById('toomatoeb');
    const salad = el.getElementById('salad');
    const rolls_bottom = el.getElementById('rolls bottom');
    tl.current = gsap.timeline();
    tl.current.set(
      [
        text.current,
        title.current,
        ground,
        man,
        rolls_top,
        cucumber,
        cheese,
        meet,
        tomatoet,
        tomatoeb,
        salad,
        rolls_bottom,
      ],
      { autoAlpha: 0 }
    );

    tl.current
      .set(
        [
          rolls_top,
          cucumber,
          cheese,
          meet,
          tomatoet,
          tomatoeb,
          salad,
          rolls_bottom,
        ],
        {
          y: '-=200',
        }
      )
      .set(man, { x: '+=100' })
      .set(text.current, { y: '-=300' })
      .set(title.current, { y: '+=300' })
      .to(ground, { autoAlpha: 1, duration: 1 })
      .to(rolls_bottom, { duration: 0.7, autoAlpha: 1, y: '+=200' })
      .to(salad, { duration: 0.5, autoAlpha: 1, y: '+=200' }, '-=0.2')
      .to(tomatoeb, { duration: 0.5, autoAlpha: 1, y: '+=200' }, '-=0.2')
      .to(tomatoet, { duration: 0.5, autoAlpha: 1, y: '+=200' }, '-=0.2')
      .to(meet, { duration: 0.5, autoAlpha: 1, y: '+=200' }, '-=0.2')
      .to(cheese, { duration: 0.5, autoAlpha: 1, y: '+=200' }, '-=0.2')
      .to(cucumber, { duration: 0.5, autoAlpha: 1, y: '+=200' }, '-=0.2')
      .to(rolls_top, { duration: 0.7, autoAlpha: 1, y: '+=200' }, '-=0.2')
      .to(man, { duration: 2, autoAlpha: 1, x: '-=100' }, '-=1,5')
      .to(text.current, { autoAlpha: 1, y: '+=300', duration: 1 }, '-=4')
      .to(title.current, { autoAlpha: 1, y: '-=300', duration: 1 }, '-=5');
  }, []);

  return (
    <Wrapper>
      <AnimationWrapper>
        <Hambuger ref={image} />
      </AnimationWrapper>
      <ContentWrapper>
        <Title ref={title}>
          Znajdź najlepsze przepisy na wyśmienite posiłki
        </Title>
        <Text ref={text}>
          U nas znajdziesz to czego potrzebujesz. Szybkie i tanie przepisy,
          łatwy dostęp, przejrzystość przepisów
          <br/>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, alias, illo exercitationem iste molestias numquam veritatis fugiat velit in maxime ipsum porro cupiditate itaque quis mollitia. Velit qui odit in.
        </Text>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Home;
