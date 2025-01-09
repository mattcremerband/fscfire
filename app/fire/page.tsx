"use client";
import { Container, List, Text } from '@mantine/core';
import '../global.css';
import classes from '../styles.module.css'


export default function AboutPage() {
  return (
    <section className={classes.body}>
      <Container size="xl">
        <h1>FSC Fire</h1>

        <section>
          <Text
            variant="gradient"
            gradient={{ from: 'red', to: 'orange', deg: 45 }}
            fz="xl"
            fw={700}
          >
            Igniting the Next Level of Fitness Excellence
          </Text>
          <p>
            Welcome to FSC Fire, where the flames of advanced functional
            fitness burn brightly, pushing the boundaries of what your body can
            achieve. Whether you&apos;re an elite athlete gearing up for
            competitions, a seasoned fitness enthusiast craving a new challenge,
            or someone simply looking to redefine their limits and be more badass,
            FSC Fire is designed for you.
          </p>
        </section>

        <section>
          <Text
            variant="gradient"
            gradient={{ from: 'red', to: 'orange', deg: 45 }}
            fz="xl"
            fw={700}
          >
            Why FSC Fire?
          </Text>
          <p>
            FSC Fire is not your average fitness program. It&apos;s a dynamic
            and intense training experience tailored for individuals who seek the
            pinnacle of physical performance. Our program is meticulously crafted
            to ignite your passion for pushing limits, achieving extraordinary
            feats, and surpassing your personal bests. Join FSC Fire to embrace
            the fire within and unleash your full athletic potential.
          </p>
        </section>

        <section>
          <Text
            variant="gradient"
            gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
            fz="md"
            fw={700}
          >
            What Sets FSC Fire Apart?
          </Text>
          <List withPadding spacing="sm" size="md" center>
            <List.Item>
              Specialized Coaching:
              <br />
              Receive personalized attention and guidance to fine-tune your
              skills, enhance your strength, and optimize your performance.
            </List.Item>
            <List.Item>
              Comprehensive Assessments:
              <br />
              Before you embark on the FSC Fire journey, our coaches conduct
              thorough assessments to understand your unique strengths,
              weaknesses, and goals. This allows us to tailor the program to meet
              your specific needs and aspirations.
            </List.Item>
            <List.Item>
              Advanced Training Techniques:
              <br />
              FSC Fire introduces cutting-edge training methodologies,
              incorporating advanced strength and conditioning exercises,
              sport-specific drills, and specialized techniques. Prepare to dive
              deep into the science of athletic excellence.
            </List.Item>
            <List.Item>
              Competition-Ready Workouts:
              <br />
              Whether you&apos;re gearing up for a competition or simply want to
              train like a champion, FSC Fire workouts are strategically
              designed to enhance your performance. Experience a fusion of
              functional movements, power lifts, and skill-focused drills, all
              aimed at elevating your game.
            </List.Item>
            <List.Item>
              Intense Intervals and Challenges:
              <br />
              Intense Intervals and Challenges: FSC Fire thrives on intensity.
              Engage in high-intensity training sessions, challenging workouts,
              and skill-specific drills that will push you to your limits and
              beyond. This is not just a workout; it&apos;s a relentless pursuit
              of greatness.
            </List.Item>
          </List>
        </section>

        <section>
          <Text
            variant="gradient"
            gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
            fz="md"
            fw={700}
          >
            What to Expect in FSC Fire Sessions:
          </Text>
          <List withPadding spacing="sm" size="md" center>
            <List.Item>
              Advanced Warm-Up:
              <br />
              Prepare your body for the intense session with a specialized warm-up
              that targets specific muscle groups and enhances flexibility.
            </List.Item>
            <List.Item>
              Sport-Specific Training:
              <br />
              Dive into skill and strength sessions tailored to your chosen sport
              or athletic focus. Refine your technique, enhance your power, and
              elevate your game to new heights.
            </List.Item>
            <List.Item>
              FSC Fire Challenge:
              <br />
              The heart of FSC Fire sessions is the exclusive challenge
              designed to test your limits. Expect a combination of demanding
              movements, strategic exercises, and high-intensity intervals that
              will set your soul on fire.
            </List.Item>
            <List.Item>
              Strategic Recovery:
              <br />
              As important as the workout itself, FSC Fire emphasizes recovery
              techniques to ensure your body is ready for the next level. Mobility
              drills and expert guidance will aid in optimizing your recovery.
            </List.Item>
          </List>
        </section>

        <section>
          <Text
            variant="gradient"
            gradient={{ from: 'red', to: 'orange', deg: 45 }}
            fz="xl"
            fw={700}
          >
            Join FSC Fire Today and Ignite Your Potential!
          </Text>
          <p>
            Are you ready to unleash the fire within? Join FSC Fire and embark
            on a journey that will redefine your understanding of fitness, elevate
            your performance, and set you on a path to unparalleled athleticism.
            Ignite your potential with FSC Fire.
          </p>
        </section>
      </Container>
    </section>
  );
}
