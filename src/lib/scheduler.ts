import { isNullOrUndefined } from "util";
import * as uuid from "uuid";
import { IScheduler, ISchedulerObject } from "./interface";

export class Scheduler implements IScheduler {
  private listOfObjects: ISchedulerObject[];

  constructor() {
    this.listOfObjects = [];
  }

  public getOne(id: string): ISchedulerObject {
    const [schedulerItem] = this.listOfObjects.filter(((item) => item.id === id ));
    return schedulerItem;
  }

  public create(payload: ISchedulerObject): ISchedulerObject {
    payload.id = uuid.v4();
    this.listOfObjects.push(payload);
    return payload;
  }

  public update(id: string, payload: ISchedulerObject): ISchedulerObject {
    const [itemFiltered] = this.listOfObjects.filter((item) => item.id === id);
    if (!isNullOrUndefined(itemFiltered)) {
      this.listOfObjects.splice(this.listOfObjects.indexOf(itemFiltered), 1, payload);
      return payload;
    }
  }

  public deleteItem(id: string): boolean {
    const [itemFiltered] = this.listOfObjects.filter((item) => item.id === id);
    if (isNullOrUndefined(itemFiltered)) {
      const index = this.listOfObjects.indexOf(itemFiltered);
      this.listOfObjects.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  public getAll(): ISchedulerObject[] {
    return this.listOfObjects;
  }
}
