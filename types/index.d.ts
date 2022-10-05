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
  assignments: ITest;
  presentation: ITest;
}

interface ILabCourse extends ICourse {
  courseType: "lab";
  labReports: ITest[];
  clp: ITest[];
  final: ITest;
}

type Course = ITheoryCourse | ILabCourse;
