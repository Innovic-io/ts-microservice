export interface ISchedulerObject {
  cron: string;
  http: string;
  verb: string;
  payload: object;
}

export interface IScheduler {
  getAll(): ISchedulerObject[];
}
