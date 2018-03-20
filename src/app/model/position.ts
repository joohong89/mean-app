export class TradePosition {

  position: string;
  unit: number;
  type: string;
  entry: number;
  exit:  number;
  entryDate: string;
  exitDate: string;
  profit: number;


  constructor(position: string, unit: number, type: string, entry: number, exit: number, entryDate: string, exitDate: string, profit: number) {
    this.position = position;
    this.unit = unit;
    this.type = type;
    this.entry = entry;
    this.exit = exit;
    this.entryDate = entryDate;
    this.exitDate = exitDate;
    this.profit = profit;
  }


}
