import { Request, Response } from "express";
import CreateCourseServece from "./CreateCourseServece";

export function createCourse(request: Request, response: Response) {
  CreateCourseServece.execute({
    name: "NodeJS",
    educator: "Fillipe",
    duration: 10,
  });

  return response.send();
}
