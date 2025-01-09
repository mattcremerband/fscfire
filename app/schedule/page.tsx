"use client";
import { Container, List, Table, Text } from '@mantine/core';
import '../global.css';
import classes from '../styles.module.css'

interface IScheduleItem {
  name: string;
  time: string;
  coach?: string;
}

const schedule: any = [
  {
    time: '5:00',
    days: [
      [{ monday: '5:00 - 6:00', name: 'Functional Fitness' }, { monday: '5:00 - 7:00', name: 'Strength & Conditioning' }],
      { tuesday: '5:00 - 6:00', name: 'Functional Fitness' },
      { wednesday: '5:00 - 6:00', name: 'Functional Fitness' },
      { thursday: '5:00 - 6:00', name: 'Functional Fitness' },
      { friday: '5:00 - 6:00', name: 'Functional Fitness' },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '6:00',
    days: [
      { monday: '6:00 - 7:00', name: 'Functional Fitness' },
      { tuesday: '6:00 - 7:00', name: 'Functional Fitness' },
      { wednesday: '6:00 - 7:00', name: 'Functional Fitness' },
      { thursday: '6:00 - 7:00', name: 'Functional Fitness' },
      { friday: '6:00 - 7:00', name: 'Functional Fitness' },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '7:00',
    days: [
      { monday: '7:00 - 8:00', name: 'Functional Fitness' },
      { tuesday: '7:00 - 7:35', name: 'Bootcamp/HIIT' },
      { wednesday: '7:00 - 8:00', name: 'Functional Fitness' },
      { thursday: '7:00 - 7:35', name: 'Bootcamp/HIIT' },
      { friday: '7:00 - 8:00', name: 'Functional Fitness' },
      { saturday: '7:00 - 8:00', name: 'Functional Fitness' },
    ],
  },
  {
    time: '12:00',
    days: [
      { monday: '12:00 - 13:00', name: 'Functional Fitness' },
      { tuesday: '12:00 - 13:00', name: 'Functional Fitness' },
      { wednesday: '12:00 - 13:00', name: 'Functional Fitness' },
      { thursday: '12:00 - 13:00', name: 'Functional Fitness' },
      { friday: '12:00 - 13:00', name: 'Functional Fitness' },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '16:30',
    days: [
      { monday: '16:30 - 16:30', name: 'Functional Fitness' },
      { tuesday: '16:30 - 16:30', name: 'Functional Fitness' },
      { wednesday: '16:30 - 16:30', name: 'Functional Fitness' },
      { thursday: '16:30 - 16:30', name: 'Functional Fitness' },
      { friday: '16:30 - 17:05', name: 'Booty Builder' },
      { saturday: '', name: '' },
    ],
  },
  {
    time: '17:30',
    days: [
      { monday: '17:30 - 18:15', name: 'Bootcamp/HIIT' },
      { tuesday: '17:30 - 18:30', name: 'Bootcamp/HIIT' },
      { wednesday: '17:30 - 18:15', name: 'Bootcamp/HIIT' },
      { thursday: '17:30 - 18:30', name: 'Bootcamp/HIIT' },
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
        {(col.name === 'Bootcamp/HIIT' || col.name === 'Booty Builder') && (
          <Text
            variant="gradient"
            gradient={{ from: 'orange', to: 'red', deg: 45 }}
            fz="md"
            fw={700}
          >
            {col.name}
          </Text>
        )}
        {col.name === 'Functional Fitness' && (
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

export default function AboutPage() {
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
