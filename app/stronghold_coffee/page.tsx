"use client";
import { Container, Text } from '@mantine/core';
import '../global.css';
import classes from '../styles.module.css'


export default function StrongholdCoffeePage() {
  return (
    <section className={classes.body}>
      <Container size="xl">
      <h1>Stronghold Coffee</h1>

        <section className="basis-full">
          <p>
            brewing...
          </p>
        </section>
      </Container>
    </section>
  );
}
