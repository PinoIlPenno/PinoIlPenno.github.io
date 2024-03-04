import {SetType} from "../enums/SetType.ts";
import {SlotType} from "../enums/SlotType.ts";
import {SubStat} from "./SubStat.ts";
import {MainStat} from "./MainStat.ts";

export type Relic = {
    set: SetType,
    slot: SlotType,
    mainStat?: MainStat,
    substats?: SubStat[],
}
