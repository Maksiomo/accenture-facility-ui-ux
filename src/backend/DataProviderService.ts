import { ITable } from "./types/ITable";
import * as Exceljs from "exceljs";
import { IShop } from "./types/IShop";

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
      tableName: "Анализ",
      address: "./src/backend/dataSource/03.Анализ загрузки.xlsx",
    },
  ];

  async getTableData(tableId: string): Promise<any> {
    for (const table of this.tables) {
      if (tableId == table.tableName) {
        const wb = new Exceljs.Workbook();
        wb.xlsx.readFile(table.address).then(function () {
          const ws = wb.getWorksheet("data");
        });
      }
      throw new Error("Invalid table");
    }
    return [];
  }
}
