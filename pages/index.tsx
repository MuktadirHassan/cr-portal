import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import CourseCard from "../components/Home/CourseCard";
import CreateCourseModal from "../components/Home/CreateCourseModal";
import Header from "../components/Home/Header";

const Home: NextPage = () => {
  const courses = [1, 2, 3, 4];
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" >
          Courses
        </Typography>
        <Box>
          
        </Box>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid key={course} item xs={12} md={6}>
              <CourseCard />
            </Grid>
          ))}
        </Grid>
      </Container>
      <CreateCourseModal handleClose={handleClose} open={open} />
    </>
  );
};

export default Home;
