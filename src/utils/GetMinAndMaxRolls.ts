import {StatType} from "../enums/StatType.ts";

export function getMinAndMaxRolls(substat: StatType) : number[] {
    switch(substat) {
        case StatType.HP:
            return [33, 38, 42, 198, 252];
        case StatType.ATK:
            return [16, 19, 21, 101, 126];
        case StatType.DEF:
            return [16, 19, 21, 101, 126];
        case StatType.HPP:
            return [3.4, 3.8, 4.4, 20.7, 25.9];
        case StatType.ATKP:
            return [3.4, 3.8, 4.4, 20.7, 25.9];
        case StatType.DEFP:
            return [4.3, 4.8, 5.4, 25.9, 32.4];
        case StatType.CR:
            return [2.5, 2.9, 3.2, 15.5, 19.4];
        case StatType.CD:
            return [5.1, 5.8, 6.5, 31.0, 38.8];
        case StatType.EHR:
            return [3.4, 3.8, 4.3, 20.7, 25.9];
        case StatType.ERES:
            return [3.4, 3.8, 4.3, 20.7, 25.9];
        case StatType.BE:
            return [5.1, 5.8, 6.5, 31.0, 38.8];
        case StatType.SPD:
            return [2.0, 2.3, 2.6, 12, 15];
    }

    return [];
}
