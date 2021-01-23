import { Vilao } from './vilao';

export interface Local {
    id: number;
    nome: string;
    revelado?: boolean;
    vilao?: Vilao;
}
