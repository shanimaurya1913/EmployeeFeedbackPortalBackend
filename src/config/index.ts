import { Router } from "express";
const router = Router();
import auth from "../auth/auth.route";
import feedback from "../feedback/feedback.route";

interface IRoutes {
  path: string;
  route: Router;
}

const productionRoutes: IRoutes[] = [
  {
    path: "/auth",
    route: auth,
  },
  {
    path: "/feedback",
    route: feedback,
  },
];

// Setting the production route
productionRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
