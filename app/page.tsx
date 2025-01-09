"use client";
import Hero from '@/components/Hero/Hero';
import { Container, Grid, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import './global.css';
import classes from './styles.module.css'


export default function HomePage() {
  return (
    <section className={classes.body}>
      <Container size="xl">
        <section>
          <Hero />
        </section>
        
        <section className={classes.section}>
          <Grid>
            <Grid.Col span={6}>
              <Title className={classes.title}>
                Training at FSC
              </Title>
              <Text c="dimmed" mt="md">
                Whether you want to lose weight, build strength or perform at your athletic best, we have a program for you, above all else, you will leave your session at FSC feeling good.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={14} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <strong>Build Strength</strong> - Regular strength training promotes
                  increased muscle mass and enhances bone strength.
                </List.Item>
                <List.Item>
                  <strong>Improve Fitness</strong> - Engaging in exercise 3-4 days a week
                  consistently, enhances overall fitness, boosting endurance and
                  agility
                </List.Item>
                <List.Item>
                  <strong>Lose Weight</strong> - Incorporating regular exercise into your
                  routine along with a healthy diet is a proven strategy for
                  weight management
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src="images/corey-young-6SkHSkt5uTQ-unsplash.jpg"
                className={`${classes.image} stagger`}
                h={400}
              />
            </Grid.Col>
          </Grid>
        </section>
        
        <section className={classes.section}>
          <Grid>
            <Grid.Col span={6}>
              <Image
                src="images/fetish-home2.jpg"
                className={`${classes.image}`}
                h={460}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Title className={classes.title}>
                Functional Fitness
              </Title>
              <Text c="dimmed" mt="md">
                Functional fitness is a strength and conditioning methodology
                aimed at enhancing overall physical fitness and readiness. Our
                workouts incorporate a combination of cardiovascular and
                strength exercises.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={14} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <strong>Improve Health</strong> - Studies have demonstrated that
                  engaging in exercise for 3-4 days per week can have positive
                  effects on overall health.
                </List.Item>
                <List.Item>
                  <strong>Reduce Pain</strong> - Joints that possess both strength and
                  flexibility tend to be healthier and more comfortable.
                </List.Item>
                <List.Item>
                  <strong>Reduce Stress</strong> - Engaging in exercise, in almost any
                  form, can serve as a stress reliever.
                </List.Item>
              </List>
            </Grid.Col>
          </Grid>
        </section>

        <section className={classes.section}>
          <Grid>
            <Grid.Col span={6}>
              <Title className={classes.title}>
                Olympic Weightlifting
              </Title>
              <Text c="dimmed" mt="md">
                Our main discipline here at FSC, a whole body workout focused on strength, speed, mobility and balance. 2 - 5 days per week.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={14} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <strong>Build Strength</strong> - Regular strength training promotes
                  increased muscle mass and enhances bone strength.
                </List.Item>
                <List.Item>
                  <strong>Improve Fitness</strong> - Engaging in exercise 3-4 days a week
                  consistently, enhances overall fitness, boosting endurance and
                  agility
                </List.Item>
                <List.Item>
                  <strong>Lose Weight</strong> - Incorporating regular exercise into your
                  routine along with a healthy diet is a proven strategy for
                  weight management
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src="images/logan-weaver-lgnwvr-LzT-WMv1xrI-unsplash.jpg"
                className={`${classes.image} stagger`}
                h={400}
              />
            </Grid.Col>
          </Grid>
        </section>
      </Container>
    </section>
  );
}
