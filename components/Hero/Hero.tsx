"use client";

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import '@mantine/carousel/styles.css';
import classes from './Hero.module.css';

interface ISlideProps {
  image: string;
  title: string;
  category: string;
}

function Slide({ image, title, category }: ISlideProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})`}}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      '/images/john-arano-h4i9G-de7Po-unsplash.jpg',
    title: '',
    category: 'Functional Fitness',
    key: 1,
  },
  {
    image:
      'images/victor-freitas-E2FLRJtZx2E-unsplash.jpg',
    title: '',
    category: 'Functional Fitness',
    key: 3,
  },
  {
    image:
      'images/kyle-johnson-Yi-4X9ZJU6Y-unsplash.jpg',
    title: '',
    category: 'Functional Fitness',
    key: 2,
  },
  {
    image:
      'images/victor-freitas-nA0UDNDbxys-unsplash.jpg',
    title: '',
    category: 'Olympic Weightlifting',
    key: 5,
  },
  {
    image:
      'images/victor-freitas-KkYWWpurqbE-unsplash.jpg',
    title: '',
    category: 'Functional Fitness',
    key: 4,
  },
];

export default function Hero() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.key}>
      <Slide {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      loop 
      withIndicators 
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}