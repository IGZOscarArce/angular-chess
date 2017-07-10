// Color
type COLOR = WHITE|BLACK;
type WHITE = 'w'
type BLACK = 'b'
// Piece
type BISHOP = 'b'
type KING = 'k'
type KNIGHT = 'n'
type PAWN = 'p'
type QUEEN = 'q'
type ROOK = 'r'
type PIECE = PAWN|ROOK|KNIGHT|BISHOP|QUEEN|KING;
type SQUARE = 'a1'|'a2'|'a3'|'a4'|'a5'|'a6'|'a7'|'a8'|
              'b1'|'b2'|'b3'|'b4'|'b5'|'b6'|'b7'|'b8'|
              'c1'|'c2'|'c3'|'c4'|'c5'|'c6'|'c7'|'c8'|
              'd1'|'d2'|'d3'|'d4'|'d5'|'d6'|'d7'|'d8'|
              'e1'|'e2'|'e3'|'e4'|'e5'|'e6'|'e7'|'e8'|
              'f1'|'f2'|'f3'|'f4'|'f5'|'f6'|'f7'|'f8'|
              'g1'|'g2'|'g3'|'g4'|'g5'|'g6'|'g7'|'g8'|
              'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'h7'|'h8';
type SQUARE_COLOR = 'light'|'dark';
type FLAG = 'n'|'b'|'e'|'c'|'p'|'k'|'q'|'pc';
interface Piece { type: PIECE, color: COLOR }
interface Move { color?: COLOR, from: SQUARE, to: SQUARE, flags?: FLAG, piece?: PIECE, san?: string }

interface Chess {
  ascii(): string;
  clear(): void;
  // board(): Piece[][];
  fen(): string;
  game_over(): boolean;
  get(square: SQUARE): Piece;
  history(options?: { verbose?: boolean }): string[] | any[];
  in_check(): boolean;
  in_checkmate(): boolean;
  in_draw(): boolean;
  in_stalemate(): boolean;
  in_threefold_repetition(): boolean;
  header(...header: string[]): any;
  insufficient_material(): boolean;
  load_pgn(pgn: string[], options?: { newline_char?: string, sloppy?: boolean }): boolean;
  move(move: string | Move, options?: { sloppy?: boolean }): Move;
  moves(options?: { square?: SQUARE, verbose?: boolean }): string[] | Move[];
  pgn(options?: { max_width?: number, newline_char?: string }): string;
  put(piece: Piece, square: SQUARE): boolean;
  remove(square: SQUARE): Piece;
  reset(): void;
  square_color(square: SQUARE): SQUARE_COLOR;
  turn(): COLOR;
  undo(): Move;
  validate_fen(fen: string): { valid: boolean, error_number: number, error: string };
}

interface ChessFactory {
  (fen?: string): Chess;
}

declare var chess: ChessFactory;

declare module "angular-chess" {
  export = chess;
}
