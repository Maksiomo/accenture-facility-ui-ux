import { ITable } from "./types/ITable";
import * as Exceljs from "exceljs";
import { TableOneObj } from "./types/tableOneObj";
import { TableTwoObj } from "./types/tableTwoObj";
import { TableThreeResourceUsage } from "./types/tableThreeResourceUsage";
import { TableThreeResourceLeftovers } from "./types/tableThreeResourceLeftovers";
import { IProblem } from "./types/IProblem";

export class DataProviderService {
  private tables: ITable[] = [
    {
      tableName: "КПЭ",
      address: "./src/backend/dataSource/01.КПЭ.xlsx",
    },
    {
      tableName: "Загрузка",
      address: "./src/backend/dataSource/02.Загрузка оборудования.xlsx",
    },
    {
      tableName: "Расход",
      address: "./src/backend/dataSource/03.Анализ загрузки.xlsx",
    },
    {
      tableName: "Запасы",
      address: "./src/backend/dataSource/03.Анализ загрузки.xlsx",
    },
  ];

  async getTableData(
    tableId: string
  ): Promise<
    Array<
      | TableOneObj
      | TableTwoObj
      | TableThreeResourceUsage
      | TableThreeResourceLeftovers
    >
  > {
    let result:
      | TableOneObj[]
      | TableTwoObj[]
      | TableThreeResourceUsage[]
      | TableThreeResourceLeftovers[] = [];
    switch (tableId.trim()) {
      case "КПЭ": {
        const wb = new Exceljs.Workbook();
        result = await wb.xlsx
          .readFile(this.tables[0].address)
          .then(function () {
            const res: TableOneObj[] = [];
            const ws = wb.getWorksheet(1);
            ws.eachRow({ includeEmpty: false }, function (row, rowIndex) {
              const buffer: any = [];
              for (let i = 2; i <= row.actualCellCount + 1; i++) {
                buffer.push(row.getCell(i).value);
              }
              const obj: TableOneObj = {
                administrativeMetric: buffer[0],
                metricParam: buffer[1],
                date1value: Number(buffer[2]),
                date2value: Number(buffer[3]),
                date3value: Number(buffer[4]),
                date4value: Number(buffer[5]),
                date5value: Number(buffer[6]),
              };
              res.push(obj);
            });
            res.shift();
            return res;
          });
        return result;
      }
      case "Загрузка": {
        const wb = new Exceljs.Workbook();
        result = await wb.xlsx
          .readFile(this.tables[1].address)
          .then(function () {
            const res: TableTwoObj[] = [];
            for (let i = 2; i < 4; i++) {
              const ws = wb.getWorksheet(i);
              ws.eachRow({ includeEmpty: false }, function (row, rowIndex) {
                const buffer: any = [];
                for (let i = 3; i <= row.actualCellCount + 1; i++) {
                  buffer.push(row.getCell(i).value);
                }
                const obj: TableTwoObj = {
                  parentWorkshop: buffer[0],
                  objectId: buffer[1],
                  objectName: buffer[2],
                  resourceId: buffer[3],
                  resourceName: buffer[4],
                  startDate: buffer[5],
                  day: Number(buffer[6]),
                  durationDays: Number(buffer[7]),
                  occupiedPercentageOfObject: Number(buffer[8]),
                  unavaliablePercentageOfResource: Number(buffer[9]),
                  employeeId: buffer[10],
                  status: buffer[11],
                };
                res.push(obj);
              });
            }
            res.shift();
            return res;
          });
        return result;
      }
      case "Расход": {
        const wb = new Exceljs.Workbook();
        result = await wb.xlsx
          .readFile(this.tables[2].address)
          .then(function () {
            const res: TableThreeResourceUsage[] = [];
            const ws = wb.getWorksheet(2);
            ws.eachRow({ includeEmpty: false }, function (row, rowIndex) {
              const buffer: any = [];
              for (let i = 2; i <= row.actualCellCount; i++) {
                buffer.push(row.getCell(i).value);
              }
              const obj: TableThreeResourceUsage = {
                unitName: buffer[0],
                unitId: buffer[2],
                inputSP: buffer[3],
                outputSP: buffer[4],
              };
              res.push(obj);
            });
            res.shift();
            return res;
          });
        return result;
      }
      case "Запасы": {
        const wb = new Exceljs.Workbook();
        result = await wb.xlsx
          .readFile(this.tables[2].address)
          .then(function () {
            const res: TableThreeResourceLeftovers[] = [];
            const ws = wb.getWorksheet(3);
            ws.eachRow({ includeEmpty: false }, function (row, rowIndex) {
              const buffer: any = [];
              for (let i = 1; i <= row.actualCellCount; i++) {
                buffer.push(row.getCell(i).value);
              }
              const obj: TableThreeResourceLeftovers = {
                storageId: buffer[0],
                storageName: buffer[1],
                planningDate: buffer[3],
                actualStockAmount: Number(buffer[4]),
                stockedMoreThanPlanned: Boolean(
                  Number(buffer[4]) > Number(buffer[6])
                ),
                maxStockAmount: Number(buffer[6]),
                employeeId: buffer[7],
                status: buffer[8],
              };
              res.push(obj);
            });
            res.shift();
            return res;
          });
        return result;
      }
    }
    throw new Error("Invalid table");
  }

  async analyzeResourceStock(): Promise<IProblem[] | string> {
    const stockProblems: IProblem[] = [];
    const tableData = (await this.getTableData(
      "Запасы"
    )) as TableThreeResourceLeftovers[];
    for (const warehouse of tableData) {
      const ratio = warehouse.actualStockAmount / warehouse.maxStockAmount;
      if (ratio > 1) {
        const problem: IProblem = {
          elementId: warehouse.storageId,
          elementName: warehouse.storageName,
          legend: "Превышен лимит заготовки",
          dangerTier: ratio - 1,
          employeeId: warehouse.employeeId,
          status: warehouse.status,
        };
        stockProblems.push(problem);
      } else if (ratio < 0.85) {
        const problem: IProblem = {
          elementId: warehouse.storageId,
          elementName: warehouse.storageName,
          legend: "Лимит заготовки не достигнут",
          dangerTier: 0.85 - ratio,
          employeeId: warehouse.employeeId,
          status: warehouse.status,
        };
        stockProblems.push(problem);
      }
    }
    if (stockProblems.length > 0) {
      return stockProblems;
    } else {
      return "Склады функционируют в пределах нормы";
    }
  }

  async analyzeObjectLoad(): Promise<IProblem[] | string> {
    const loadProblems: IProblem[] = [];
    const tableData = (await this.getTableData("Загрузка")) as TableTwoObj[];
    let sortedByObjectData: any = [];
    for (const object of tableData) {
      if (object.day == 14) {
        let avrgLoad: any = [];
        let avrgUnavaliablity: any = [];
        const resources: string[] = [];
        for (const obj of sortedByObjectData[object.objectId]) {
          resources.push(obj.resourceId);
        }
        for (let i = 0; i < 14; i++) {
          for (const resource of resources) {
            avrgLoad[resource] +=
              sortedByObjectData[object.objectId][i][
                resource
              ].occupiedPercentageOfObject;
            avrgUnavaliablity[resource] +=
              sortedByObjectData[object.objectId][i][
                resource
              ].unavaliablePercentageOfResource;
          }
        }
        for (const resource of resources) {
          avrgLoad[resource] /= 14;
          avrgUnavaliablity[resource] /= 14;

          if (avrgLoad[resource] < 0.85) {
            loadProblems.push({
              elementId: object.objectId,
              elementName: object.objectName,
              legend:
                "Недостаточная средняя загрузка при обработке ресурса: " +
                resource,
              dangerTier: 0.85 - avrgLoad,
              employeeId: object.employeeId,
              status: object.status,
            });
          }
          if (avrgUnavaliablity[resource] > 0.15) {
            loadProblems.push({
              elementId: object.objectId,
              elementName: object.objectName,
              legend: "Слишком малый объём ресурса: " + resource,
              dangerTier: 0.85 - avrgLoad,
              employeeId: object.employeeId,
              status: object.status,
            });
          }
          continue;
        }
      }
      if (object.day > 15) {
        sortedByObjectData = [];
        continue;
      }
      console.log(object);
      sortedByObjectData.push();
    }
    if (loadProblems.length > 0) {
      return loadProblems;
    } else {
      return "Нагрузка на агрегаты распределена эффективно";
    }
  }
}
