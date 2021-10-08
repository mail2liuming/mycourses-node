import { randomUUID } from "crypto";
import { RegisterationDTO } from "./RegisterationDTO";

export type CourseFrequency = 'DAILY' | 'WEEKLY' | 'FORNIGHTLY' | 'MONTHLY' | 'YEARLY';

export interface CourseRun {
    date: string;
    cost: number;
    address: string;
}

export interface RegisterationModel {
    userId: string;
    courseId: string;
    name: string;
    courses: CourseRun[]
    frequency: CourseFrequency;
}

export function transferFromDTO(dto: RegisterationDTO): RegisterationModel {
    return {
        userId: dto.userEmail,
        courseId: `${dto.courseName} - ${randomUUID()}`,
        name: dto.courseName,
        courses: dto.courses,
        frequency: dto.frequency
    }
}