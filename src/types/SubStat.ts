import {StatType} from "../enums/StatType.ts";

export type SubStat = {
    statType: StatType,
    step: number,
    count: number,
    value: number
}
