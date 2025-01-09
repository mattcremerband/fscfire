"use client";

import { useState } from 'react';
import { Container, Group, Burger, useMantineColorScheme, useComputedColorScheme, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../../public/fsc_logo.png';
import darkLogo from '../../../public/fsc_dark_logo.png';
import classes from './SiteHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'clsx';
import { IconMoon, IconSun } from '@tabler/icons-react';

const links = [
  { link: 'about', label: 'About' },
  { link: 'training', label: 'Training' },
  { link: 'membership', label: 'Membership' },
  { link: 'schedule', label: 'Schedule' },
  { link: 'fire', label: 'Fire' },
  { link: 'contact', label: 'Contact' },
];

export default function HeaderSimple() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<string | null>(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Link
          href="/"
          onClick={() => {
            setActive(null);
          }}
        >
          <Container darkHidden>
            <Image src={logo} alt="FSC" height={80} />
          </Container>
          <Container lightHidden>
            <Image src={darkLogo} alt="FSC" height={80} />
          </Container>
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
          <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
          >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}