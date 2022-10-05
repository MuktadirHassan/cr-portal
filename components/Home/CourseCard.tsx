import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";

/**
 * Story:
 * Course Information Needed
 * - Course Name
 * - Course Code
 *
 * -- Topic , Date, Time
 * - Exams
 * - CT 1
 * - CT 2
 * - CT 3
 * - Assignment 4
 * - Presentation 5
 *
 *
 */

interface ITest {
  topics: string;
  date: string;
  time: string;
}
export interface ICourse {
  courseName: string;
  courseCode: string;
  courseImage: string;
  courseType: "theory" | "lab";
}

interface ITheoryCourse extends ICourse {
  courseType: "theory";
  classTests: ITest[];
  assignments: ITest[];
}

interface ILabCourse extends ICourse {
  courseType: "lab";
  labReports: ITest[];
  clp: ITest[];
  presentation: ITest[];
  final: ITest;
}

export type Course = ITheoryCourse | ILabCourse;

const course1: Course = {
  courseName: "Introduction to algorithms",
  courseCode: "CS 201",
  courseImage: "https://picsum.photos/200",
  courseType: "theory",
  classTests: [
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
};

export default function CourseCard() {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardMedia
        component="img"
        height="260"
        image="/images/random.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h4" component="div">
          {course1.courseName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {course1.courseCode}
        </Typography>
        <Typography variant="body2">
          
          {course1.courseType === "theory"
            ? course1.classTests.map((test, i) => (
                <div key={i}>
                  <p>{test.topics}</p>
                  <p>{moment().format('LL')}</p>
                  <p>{test.time}</p>
                </div>
              ))
            : course1.labReports.map((test, i) => (
                <div key={i}>
                  <p>{test.topics}</p>
                  <p>{test.date}</p>
                  <p>{test.time}</p>
                </div>
              ))}
        </Typography>
      </CardContent>

      <CardActions>
        <Button color="primary" variant="outlined" size="small">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
