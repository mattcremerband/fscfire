'use client';

import { Container, Table, Text } from '@mantine/core';
import '../global.css';
import classes from '../styles.module.css';

const ff = 'Functional Fitness';
const sc = 'Strength & Conditioning';
const ca = 'Calisthenics';

const schedule: any = [
  {
    time: '5:00',
    days: [
      { monday: '5:00 - 6:00', name: ff },
      { tuesday: '5:00 - 6:00', name: ff },
      { wednesday: '5:00 - 6:00', name: ff },
      { thursday: '5:00 - 6:00', name: ff },
      { friday: '5:00 - 6:00', name: ff },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '5:00',
    days: [
      { monday: '5:00 - 7:00', name: sc },
      { tuesday: '5:00 - 7:00', name: sc },
      { wednesday: '5:00 - 7:00', name: sc },
      { thursday: '5:00 - 7:00', name: sc },
      { friday: '5:00 - 7:00', name: sc },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '6:00',
    days: [
      { monday: '6:00 - 7:00', name: ff },
      { tuesday: '6:00 - 7:00', name: ff },
      { wednesday: '6:00 - 7:00', name: ff },
      { thursday: '6:00 - 7:00', name: ff },
      { friday: '6:00 - 7:00', name: ff },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '7:00',
    days: [
      { monday: '7:00 - 8:00', name: ff },
      { tuesday: '7:00 - 7:35', name: ff },
      { wednesday: '7:00 - 8:00', name: ff },
      { thursday: '7:00 - 7:35', name: ff },
      { friday: '7:00 - 8:00', name: ff },
      { saturday: '7:00 - 8:00', name: ff },
    ],
  },
  {
    time: '7:00',
    days: [
      { monday: '', name: '' },
      { tuesday: '', name: '' },
      { wednesday: '', name: '' },
      { thursday: '', name: '' },
      { friday: '', name: '' },
      { saturday: '7:00 - 9:00', name: sc },
    ],
  },
  {
    time: '12:00',
    days: [
      { monday: '12:00 - 13:00', name: ff },
      { tuesday: '12:00 - 13:00', name: ff },
      { wednesday: '12:00 - 13:00', name: ff },
      { thursday: '12:00 - 13:00', name: ff },
      { friday: '12:00 - 13:00', name: ff },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '16:00',
    days: [
      { monday: '16:00 - 18:30', name: sc },
      { tuesday: '16:00 - 18:30', name: sc },
      { wednesday: '16:00 - 18:30', name: sc },
      { thursday: '16:00 - 18:30', name: sc },
      { friday: '16:00 - 18:30', name: sc },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '16:30',
    days: [
      { monday: '16:30 - 16:30', name: ff },
      { tuesday: '16:30 - 16:30', name: ff },
      { wednesday: '16:30 - 16:30', name: ff },
      { thursday: '16:30 - 16:30', name: ff },
      { friday: '16:30 - 17:30', name: ff },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '17:30',
    days: [
      { monday: '17:30 - 18:30', name: ff },
      { tuesday: '17:30 - 18:30', name: ff },
      { wednesday: '17:30 - 18:30', name: ca },
      { thursday: '17:30 - 18:30', name: ff },
      { friday: '', name: '' },
      { saturday: '', name: '' },
    ],
  },
];

const rowsCols = schedule.map((rows: any, rowKey: any) => (
  <Table.Tr key={rowKey}>
    <Table.Td>{rows.time}</Table.Td>
    {rows.days.map((col: any, colKey: any) => (
      <Table.Td key={colKey}>
        {(col.name === sc || col.name === ca) && (
          <Text
            variant="gradient"
            gradient={{ from: 'orange', to: 'red', deg: 45 }}
            fz="md"
            fw={700}
          >
            {col.name}
          </Text>
        )}
        {col.name === ff && (
          <Text
            variant="gradient"
            gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
            fz="md"
            fw={700}
          >
            {col.name}
          </Text>
        )}
        <br />
        <Text size="xs">{col.monday}</Text>
        <Text size="xs">{col.tuesday}</Text>
        <Text size="xs">{col.wednesday}</Text>
        <Text size="xs">{col.thursday}</Text>
        <Text size="xs">{col.friday}</Text>
        <Text size="xs">{col.saturday}</Text>
        <Text size="xs">{col.sunday}</Text>
      </Table.Td>
    ))}
  </Table.Tr>
));

export default function SchedulePage() {
  return (
    <section className={classes.body}>
      <Container size="xl">
        <h1>Training Schedule</h1>

        <section className="basis-full overflow-x-auto">
          <Table striped highlightOnHover withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th></Table.Th>
                <Table.Th>Monday</Table.Th>
                <Table.Th>Tuesday</Table.Th>
                <Table.Th>Wednesday</Table.Th>
                <Table.Th>Thursday</Table.Th>
                <Table.Th>Friday</Table.Th>
                <Table.Th>Saturday</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rowsCols}</Table.Tbody>
          </Table>
        </section>
      </Container>
    </section>
  );
}
