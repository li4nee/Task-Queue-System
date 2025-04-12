import { TASK_PRIORITY, TASK_TYPE } from "src/types/base.type";

export interface TaskCreateDto {
    type:TASK_TYPE
    payload: Record<string, any>
    priority: TASK_PRIORITY
    maxRetries: number
    scheduledAt: Date
}

export interface TaskUpdateDto {
    id: string
    type?: TASK_TYPE
    payload?: Record<string, any>
    priority?: TASK_PRIORITY
    maxRetries?: number
    scheduledAt?: Date
}

export interface TaskDeleteDto {
    id: string
}

export interface TaskRetryDto {
    id: string
    maxRetries?: number
}

export interface TaskGetDto {
    id?: string
    type?: TASK_TYPE
    priority?: TASK_PRIORITY
    maxRetries?: number
    toDate?: Date
    fromDate?: Date

}

export enum DATE_FILTER_BY {
    CREATED_DATE = "createdAt",
    COMPLETED_DATE = "completedAt",
    FAILED_DATE = "failedAt",
    SCHEDULED_DATE = "scheduledAt",
}