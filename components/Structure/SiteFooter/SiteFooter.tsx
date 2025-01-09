"use client";
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
import logo from '../../../public/fsc_logo.png';
import darkLogo from '../../../public/fsc_dark_logo.png';
import classes from './SiteFooter.module.css';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'clsx';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Training', link: '/training' },
      { label: 'Pricing', link: '/membership' },
      { label: 'Schedule', link: '/schedule' },
      { label: 'Fire', link: '/fire' },
      { label: 'Contact', link: '/contact' },
    ],
  },
  {
    title: 'Training',
    links: [
      { label: 'Olympic Weightlifting', link: '/training/olympic_weightlifting' },
      { label: 'Power Building', link: '/training/power_building' },
      { label: 'Push Pull', link: '/training/push_pull' },
      { label: 'Mobility', link: '/training/mobility' },
      { label: 'Calisthenics', link: '/training/calisthenics' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Stronghold Coffee', link: '/stronghold_coffee' },
      { label: 'Follow on Instagram', link: 'https://www.instagram.com/_fsc_fitness/' },
      { label: 'Drop In', link: 'https://app.octivfitness.com/widget/schedule?isDropIn=true&publicToken=8b2ab68457c118e71ba576089fd0e46ac3959583' },
      { label: 'Sign Up', link: 'https://app.octivfitness.com/widget/sign-up?publicToken=8b2ab68457c118e71ba576089fd0e46ac3959583' },
    ],
  },
];

export default function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={link.label}
        href={link.link}
        className={cx(classes.link)}
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.logo}>
          <Container darkHidden>
            <Image src={logo} alt="FSC" height={40} />
          </Container>
          <Container lightHidden>
            <Image src={darkLogo} alt="FSC" height={40} />
          </Container>
          <Text size="xs" c="dimmed" className={classes.description}>
            Fitness, Strength and Conditioning
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container size="xl" className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} FSC. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
              size="lg"
              color="gray" 
              variant="subtle"
              component="a"
              href="https://www.instagram.com/_fsc_fitness/"
              target="_blank">
            <IconBrandInstagram style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}