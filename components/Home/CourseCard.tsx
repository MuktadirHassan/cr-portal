import React from "react";
import {
  Badge,
  Box,
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import type { Course } from "../../types";
import moment from "moment";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Stack spacing="xs">
          <Title order={4} color="indigo">
            {course.courseName}
          </Title>
          <Text color="dimmed" size="sm" weight="500">
            {course.courseCode}
          </Text>
        </Stack>
        <Badge
          color={course.courseType === "lab" ? "violet" : "blue"}
          variant="light"
        >
          {course.courseType}
        </Badge>
      </Group>
      <Divider size="xs" />
      {course.courseType === "theory" ? (
        <>
          <Box py="xs">
            <Text color="blue" size="sm" weight="500">
              Assignments (5 Mark)
            </Text>
            <Group position="apart">
              <Text color="dimmed" size="sm" weight="500">
                {course.assignments?.topics}
              </Text>
              <Group spacing="xs" my="xs">
                <Text color="dimmed" size="sm" weight="500">
                  {moment().format("LL")}
                </Text>
              </Group>
            </Group>
          </Box>
          <Divider size="xs" />
          <Box py="xs">
            <Text color="blue" size="sm" weight="500">
              Class Tests
            </Text>
            {course.classTests.map((test, index) => (
              <Group position="apart" my="xs" key={index}>
                <Text color="dimmed" size="sm" weight="500">
                  {index + 1}. {test.topics}
                </Text>
                <Group spacing="xs">
                  <Text color="dimmed" size="sm" weight="500">
                    {moment().format("LL")}
                  </Text>
                </Group>
              </Group>
            ))}
          </Box>
          <Divider size="xs" />
          <Box py="xs">
            <Text color="blue" size="sm" weight="500">
              Assignments (5 Mark)
            </Text>
            <Group position="apart">
              <Text color="dimmed" size="sm" weight="500">
                {course.assignments?.topics}
              </Text>
              <Group spacing="xs" my="xs">
                <Text color="dimmed" size="sm" weight="500">
                  {moment().format("LL")}
                </Text>
              </Group>
            </Group>
          </Box>
        </>
      ) : (
        <>
        <Box py="xs">
            <Text color="blue" size="sm" weight="500">
              CLP
            </Text>
            {course.clp.map((test, index) => (
              <Group position="apart" my="xs" key={index}>
                <Text color="dimmed" size="sm" weight="500">
                  {index + 1}. {test.topics}
                </Text>
                <Group spacing="xs">
                  <Text color="dimmed" size="sm" weight="500">
                    {moment().format("LL")}
                  </Text>
                </Group>
              </Group>
            ))}
          </Box>
          <Divider size="xs" />
          <Box py="xs">
            <Text color="blue" size="sm" weight="500">
              Lab Reports
            </Text>
            {course.labReports.map((test, index) => (
              <Group position="apart" my="xs" key={index}>
                <Text color="dimmed" size="sm" weight="500">
                  {index + 1}. {test.topics}
                </Text>
                <Group spacing="xs">
                  <Text color="dimmed" size="sm" weight="500">
                    {moment().format("LL")}
                  </Text>
                </Group>
              </Group>
            ))}
          </Box>
          <Divider size="xs" />
          <Box py="xs">
            <Text color="blue" size="sm" weight="500">
              Final
            </Text>
            <Group position="apart">
              <Text color="dimmed" size="sm" weight="500">
                {course.final?.topics}
              </Text>
              <Group spacing="xs" my="xs">
                <Text color="dimmed" size="sm" weight="500">
                  {moment().format("LL")}
                </Text>
              </Group>
            </Group>
          </Box>
        </>
      )}
    </Card>
  );
}
