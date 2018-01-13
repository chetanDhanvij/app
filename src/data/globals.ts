export class GLOBALS {
    public static AUTH_URL = '';

}

export enum QuesType {
    MCQSA = "MCQSA",
    MCQMA = "MCQMA",
    TINA = "TINA",
    TIAA = "TIAA",
}

export interface Options{
    id: string,
    opt: string,
    img?: string
}

export interface Question{
    id: string,
    type: QuesType,
    ques: string,
    img?: string,
    options: Options[]

}