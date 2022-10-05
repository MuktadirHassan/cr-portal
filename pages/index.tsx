import { Button, Container, Group, SimpleGrid, Title } from "@mantine/core";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import CourseCard from "../components/Home/CourseCard";
import type { Course } from "../types";
const courses: Course[] = [
  {
    courseName: "Introduction to algorithms",
    courseCode: "CS 201",
    courseImage: "https://picsum.photos/200",
    courseType: "theory",
    assignments: {
      topics: "Sorting",
      date: "12/12/2021",
      time: "12:00 AM",
    },
    presentation: {
      topics: "Sorting",
      date: "12/12/2021",
      time: "12:00",
    },
    classTests: [
      {
        topics: "Sorting\nRecursion\nGreedy",
        date: "12/12/2021",
        time: "12:00",
      },
      {
        topics: "Sorting",
        date: "12/12/2021",
        time: "12:00",
      },
      {
        topics: "Sorting",
        date: "12/12/2021",
        time: "12:00",
      },
    ],
  },
  {
    courseName: "Introduction to algorithms",
    courseCode: "CS 201",
    courseImage: "https://picsum.photos/200",
    courseType: "lab",
    final: {
      topics: "Sorting",
      date: "12/12/2021",
      time: "12:00",
    },
    labReports: [
      {
        topics: "Sorting\nRecursion\nGreedy",
        date: "12/12/2021",
        time: "12:00",
      },
    ],
    clp: [
      {
        topics: "Sorting",
        date: "12/12/2021",
        time: "12:00",
      },
      {
        topics: "Sorting",
        date: "12/12/2021",
        time: "12:00",
      },
      {
        topics: "Sorting",
        date: "12/12/2021",
        time: "12:00",
      },
    ],
  },
];

export const getServerSideProps: GetServerSideProps<{
  courses: Course[];
}> = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      courses,
    },
  };
};

const Home = ({
  courses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Container>
        <Group position="apart">
          <Title
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            py="md"
          >
            My Courses
          </Title>
          <Button variant="outline" color="indigo">
            Add Course
          </Button>
        </Group>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          {courses.map((course) => (
            <CourseCard key={course.courseCode} course={course} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
