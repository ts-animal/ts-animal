export interface IPrinter {
  printer: any;
  clearTerminal: () => void;
  print: (content: string) => void;
}
