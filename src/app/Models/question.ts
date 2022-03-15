import { Byte } from "@angular/compiler/src/util";

export interface Questions {   
    id:string;
    content:string;
    point:Byte;
    answerCount:Byte; 
    isActive:boolean;
    isTrue:boolean;
    examId:string;
}