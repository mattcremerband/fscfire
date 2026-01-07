"use client";
import { Container, Text } from '@mantine/core';
import '../global.css';
import classes from '../styles.module.css'


export default function StrongholdCoffeePage() {
  return (
    <section className={classes.body}>
      <Container size="xl">
      <section className="feature-page stronghold-coffee">
        <h1>Stronghold Coffee at FSC Durban</h1>

        <p><strong>Enjoy high-quality coffee in a relaxed training environment with Stronghold Coffee, the in-house coffee corner at FSC Durban.</strong></p>

        <p>Stronghold Coffee is a premium coffee feature located inside FSC Durban. It is not a standalone coffee shop, but rather a dedicated coffee corner that serves great coffee to both gym members and non-members whenever the gym is open.</p>

        <p>Whether you're grabbing a coffee before training, refuelling after a session, or simply stopping by for a quality cup in a calm and welcoming space, Stronghold Coffee offers a convenient and enjoyable coffee experience in Durban.</p>

        <h2>What Is Stronghold Coffee?</h2>

        <p>Stronghold Coffee is FSC Durban’s in-house coffee corner, created to complement the training experience and provide a space to relax, connect, or recharge. It serves professionally made coffee using high-quality beans and equipment, offering café-level quality within a performance-focused environment.</p>

        <p>It is open to everyone — you do not need to be a member of FSC Durban to purchase coffee.</p>

        <h2>Why Stronghold Coffee?</h2>

        <ul>
          <li><strong>Quality Coffee:</strong> Carefully selected beans and proper brewing methods for consistently great taste.</li>
          <li><strong>Convenience:</strong> Located inside FSC Durban for easy access before or after training.</li>
          <li><strong>Open to the Public:</strong> Members and non-members are welcome to enjoy the coffee.</li>
          <li><strong>Relaxed Atmosphere:</strong> A calm, friendly space to unwind or socialise.</li>
          <li><strong>Part of the FSC Community:</strong> Designed to support connection and recovery alongside training.</li>
        </ul>

        <h2>Who Is Stronghold Coffee For?</h2>

        <ul>
          <li>FSC Durban members looking for a pre- or post-workout coffee</li>
          <li>Visitors waiting for someone training at the gym</li>
          <li>Locals wanting a quality coffee in a relaxed environment</li>
          <li>Anyone passing by who wants a good cup of coffee</li>
        </ul>

        <h2>Visit Stronghold Coffee at FSC Durban</h2>

        <p>Stronghold Coffee is available whenever FSC Durban is open. Simply walk in and order — no gym membership required.</p>

        <p><strong>Stop by FSC Durban and enjoy a great coffee at Stronghold Coffee.</strong></p>
      </section>
      </Container>
    </section>
  );
}
