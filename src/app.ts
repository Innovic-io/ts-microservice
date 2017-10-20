import { Scheduler } from "./lib/scheduler";

const scheduler = new Scheduler();
const schedulerObject = scheduler.create(
  {payload: {data: "Data"}, verb: "GET", http: "http://web.com", cron: "Every 3 days"});

scheduler.getAll();
scheduler.update(schedulerObject.id, {cron: "data", http: "https", verb: "POST", payload: {data : "data 1"}});
scheduler.getAll();

scheduler.deleteItem(schedulerObject.id);
scheduler.getAll();
