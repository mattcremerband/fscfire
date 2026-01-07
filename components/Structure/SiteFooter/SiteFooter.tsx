'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconBrandInstagram } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Container, Group, rem, Text } from '@mantine/core';
import darkLogo from '../../../public/fsc_dark_logo.png';
import logo from '../../../public/fsc_logo.png';
import classes from './SiteFooter.module.css';

interface IFooterLinks {
  title: string;
  links: { label: string; link: string; target?: string }[];
}

const footerLinks: IFooterLinks[] = [
  {
    title: 'About',
    links: [
      { label: 'Training', link: '/training' },
      { label: 'Membership', link: '/membership' },
      { label: 'Schedule', link: '/schedule' },
      { label: 'Fire', link: '/fire' },
      { label: 'Contact', link: '/contact' },
    ],
  },
  {
    title: 'Training',
    links: [
      { label: 'Functional Fitness', link: '/training/functional_fitness' },
      { label: 'Strength & Conditioning', link: '/training/strength_conditioning' },
      { label: 'Olympic Weightlifting', link: '/training/olympic_weightlifting' },
      { label: 'Calisthenics', link: '/training/calisthenics' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Stronghold Coffee', link: '/stronghold_coffee' },
      {
        label: 'Follow on Instagram',
        link: 'https://www.instagram.com/_fsc_fitness/',
        target: '_blank',
      },
      {
        label: 'Drop In',
        link: 'https://app.octivfitness.com/widget/schedule?isDropIn=true&publicToken=8b2ab68457c118e71ba576089fd0e46ac3959583',
        target: '_blank',
      },
      {
        label: 'Sign Up',
        link: 'https://app.octivfitness.com/widget/sign-up?publicToken=8b2ab68457c118e71ba576089fd0e46ac3959583',
        target: '_blank',
      },
    ],
  },
];

export default function FooterLinks() {
  const groups = footerLinks.map((group) => {
    const links = group.links.map((link) => (
      <Link
        key={link.label}
        href={link.link}
        className={cx(classes.link)}
        target={link?.target || '_self'}
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
            target="_blank"
          >
            <IconBrandInstagram style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
