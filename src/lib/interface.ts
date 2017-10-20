export interface ISchedulerObject {
  cron: string;
  http: string;
  verb: string;
  payload: object;
  id?: string;
}

export interface IScheduler {
  getAll(): ISchedulerObject[];
  getOne(id: string): ISchedulerObject;
  create(payload: ISchedulerObject): ISchedulerObject;
  update(id: string, payload: ISchedulerObject): ISchedulerObject;
  deleteItem(id: string): boolean;
}
