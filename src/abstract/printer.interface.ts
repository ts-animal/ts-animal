export interface IPrinter {
  printer: any;
  color: string;
  randomColor: boolean;
  clearTerminal: () => void;
  print: (content: string) => void;
}
