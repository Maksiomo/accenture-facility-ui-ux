import { ITable } from "./types/ITable";
import * as Exceljs from "exceljs";

export class DataProviderService {
  private tables: ITable[] = [
    {
      tableName: "КПЭ",
      address: "./src/backend/dataSource/01.КПЭ.xlsx",
      worksheet: {},
    },
    {
      tableName: "Загрузка",
      address: "./src/backend/dataSource/02.Загрузка оборудования.xlsx",
      worksheet: {},
    },
    {
      tableName: "Анализ",
      address: "./src/backend/dataSource/03.Анализ загрузки.xlsx",
      worksheet: {},
    },
  ];

  async getTableProperties(tableId: string): Promise<any> {
    for (const table of this.tables) {
      if (tableId == table.tableName) {
        const wb = new Exceljs.Workbook();
        wb.xlsx.readFile(table.address).then(function () {
          console.log(wb.properties);
        });
      }
      throw new Error("Invalid table");
    }
    return [];
  }
}
