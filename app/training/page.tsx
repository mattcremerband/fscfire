'use client';

import { Container, List, Text } from '@mantine/core';

import '../global.css';

import classes from '../styles.module.css';

export default function AboutPage() {
  return (
    <Container className={classes.body}>
      <h1>Training</h1>

      <Container>
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Functional Fitness
        </Text>
        <p>
          Functional fitness is a leading strength and conditioning methodology aimed at enhancing
          overall physical fitness and readiness. It serves as the strength and conditioning
          regimen for numerous police academies, tactical operations teams, military special
          operations units, and a wide array of elite and professional athletes worldwide.
        </p>

        <p>
          Moreover, functional fitness is accessible to everyone, catering to those with a general
          interest in fitness and well-trained athletes seeking to complement their sport-specific
          training. Functional fitness equips you comprehensively for the challenges of everyday
          life.
        </p>

        <p>
          This approach to fitness fosters a deliberately broad, inclusive, and encompassing
          fitness level, achieved through a combination of gymnastics, weightlifting,
          powerlifting, and mono-structural endurance exercises such as running or rowing. The
          core principle is versatility rather than specialization. It instills the ability to
          excel in common activities exceptionally well, while establishing a foundation of
          strength and endurance to support an active lifestyle. The success of this methodology
          hinges on the dedication, commitment, and sense of community shared by its participants.
        </p>

        <p>
          One notable feature of functional fitness is its adaptability, making it suitable for
          individuals of all ages, fitness levels, and backgrounds. The same principles apply
          whether you are an Olympic athlete or an elderly individual with heart disease;
          adjustments are made in load and intensity, not the program itself. Olympic athletes,
          weekend warriors, homemakers, and senior citizens alike have achieved their peak fitness
          potential through this universal approach.
        </p>

        <p>
          Functional fitness workouts are typically short, lasting 20 minutes or less, they are
          constantly varied, functional movements performed at high intensity. These movements are
          combined in various combinations to create a daily workout. By diligently tracking each
          workout, you can tangibly measure your fitness and strength progress.
        </p>

        <h4>This is what a typical Functional Fitness session looks like:</h4>

        <List withPadding spacing="sm" size="md" center>
          <List.Item>
            <strong>Warm-Up</strong>:
            <br />
            The workout begins with a brief warm-up to prepare the body for the work ahead. Our
            warmups invole a combination of soft tissue work, mobility/stretching, a dynamic
            warmup, and a movement-specific warmup.
          </List.Item>
          <List.Item>
            <strong>Strength or Skill Training</strong>:
            <br />
            This phase focuses on strength training or skill development. This could involve
            activities like weightlifting, gymnastics, or even bodyweight exercises. The strength
            or skill training phase typically lasts for 10 to 20 minutes.
          </List.Item>
          <List.Item>
            <strong>Metabolic Conditioning</strong>:
            <br />
            This phase focuses on fitness, conditioning, and endurance. This could involve
            activities like running, rowing, or cycling, gymnastics movements like pull-ups or
            push-ups, or weightlifting movements like deadlifts or squats. The metabolic
            conditioning phase typically lasts for 5 to 20 minutes.
          </List.Item>
        </List>
      </Container>

      <Container>
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Strength & Conditioning
        </Text>
        <p>
          Strength and conditioning training is a holistic approach to improving physical
          performance, athleticism, and overall fitness. It combines elements of strength
          training, cardiovascular conditioning, mobility, flexibility, and skill work to develop
          all aspects of physical ability. The primary goals are to increase strength, power,
          endurance, speed, and agility while reducing the risk of injury.
        </p>

        <h4>A typical strength and conditioning program includes:</h4>

        <List withPadding spacing="sm" size="md" center>
          <List.Item>
            <strong>Strength Training</strong>:
            <br />
            Exercises like squats, deadlifts, presses, and pulls to build muscle strength and
            improve bone density.
          </List.Item>
          <List.Item>
            <strong>Power Development</strong>:
            <br />
            Explosive movements such as Olympic lifts, plyometrics, and medicine ball work to
            enhance speed and reaction time.
          </List.Item>
          <List.Item>
            <strong>Endurance and Cardiovascular Conditioning</strong>:
            <br />
            Running, cycling, rowing, or circuit training to improve aerobic and anaerobic fitness
            levels.
          </List.Item>
          <List.Item>
            <strong>Mobility and Flexibility</strong>:
            <br />
            Dynamic stretching, yoga, and mobility drills to improve joint range of motion and
            prevent injuries.
          </List.Item>
          <List.Item>
            <strong>Core Stability and Balance</strong>:
            <br />
            Exercises that enhance core strength and balance, essential for stability and overall
            functional movement.
          </List.Item>
        </List>

        <p>
          Strength and conditioning is widely used by athletes across various sports to optimize
          performance, but it’s also valuable for non-athletes who want to improve their physical
          fitness, strength, and resilience. The training is highly adaptable and can be
          customized to target specific fitness goals, from muscle building to enhanced
          cardiovascular health.
        </p>
      </Container>

      <Container>
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Olympic Weightlifting
        </Text>
        <p>
          Olympic weightlifting is a strength sport that involves lifting a loaded barbell in two
          main movements: the snatch and the clean and jerk. The goal is to lift the maximum
          weight possible with proper technique. In the snatch, athletes lift the barbell from the
          floor to overhead in one continuous motion. In the clean and jerk, they first lift the
          bar to their shoulders (the clean) and then push it overhead (the jerk). Olympic
          weightlifting requires a mix of strength, power, speed, flexibility, and precision, and
          it’s commonly practiced to improve athletic performance, build explosive strength, and
          enhance overall body coordination.
        </p>
      </Container>

      <Container>
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Calisthenics
        </Text>
        <p>
          Calisthenics training is a form of bodyweight exercise focused on improving strength,
          flexibility, and endurance without the use of weights or machines. It includes movements
          like push-ups, pull-ups, squats, dips, and planks, often performed in sets and
          repetitions. The training emphasizes natural body movement, core stability, and balance,
          making it accessible and adaptable to all fitness levels. Calisthenics can be done
          anywhere and is popular for building functional strength, improving mobility, and
          developing lean muscle, with exercises that range from basic moves to advanced skills
          like muscle-ups and handstands.
        </p>
      </Container>
    </Container>
  );
}
