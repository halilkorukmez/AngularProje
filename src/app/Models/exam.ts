export interface Exams {   
    id:string;
    name:string;
    password:string;
    examEndTime:Date;
    examStartTime:Date
    examCount:number;
    score:number;
    teacherId:string;
    lessonId:string;
    isActive:boolean;
}