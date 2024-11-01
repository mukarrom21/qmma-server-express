import { Router } from "express";
import { UserRoutes } from "../modules/Users/user.route";
import { AcademicYearRoutes } from "../modules/AcademicYear/academicYear.route";
import { ClassRoutes } from "../modules/Classes/class.route";
import { GroupRoutes } from "../modules/Groups/group.route";
import { GuardianRoutes } from "../modules/Guardians/guardian.route";
import { StudentRoutes } from "../modules/Students/student.route";

const router = Router();
interface IModuleRoutes {
  path: string;
  route: Router;
}

const moduleRoutes: IModuleRoutes[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/guardians",
    route: GuardianRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-years",
    route: AcademicYearRoutes,
  },
  {
    path: "/classes",
    route: ClassRoutes,
  },
  {
    path: "/groups",
    route: GroupRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
