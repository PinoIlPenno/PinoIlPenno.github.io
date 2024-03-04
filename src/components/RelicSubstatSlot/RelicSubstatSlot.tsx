import {useFormContext, UseFormReturn} from "react-hook-form";
import {StatType} from "../../enums/StatType.ts";
import "./RelicSubstatSlot.css"
import {Dispatch, ReactNode, SetStateAction, useEffect, useId, useState} from "react";
import {Slider} from "@mui/material";
import {getMinAndMaxRolls} from "../../utils/GetMinAndMaxRolls.ts";
import {SlotType} from "../../enums/SlotType.ts";
import {SubStat} from "../../types/SubStat.ts";

type RelicSubstatSlotProps = {
    mainStatType: StatType,
    slotType: SlotType,
    schemaObjectName: string,
    substatSetter: Dispatch<SetStateAction<SubStat | undefined>>
}

type Mark = {
    value: number,
    label?: string
}

type Roll = {
    rollValue: Mark,
    rollNumber: number,
    step: number,
}

function roundToOneDecimal(n: number) {
    return Math.round(n * 10) / 10;
}

function filterSubStats(slot: SlotType, mainStat: StatType, form: UseFormReturn<any>, schemaObjectName: string) : StatType[] | ReactNode {
    let possibleStats: Set<StatType> = new Set<StatType>();

    const takenSubstats : StatType[] = []

    if(schemaObjectName.endsWith("1")) {
        takenSubstats.push(form.getValues("substat2.substat"));
        takenSubstats.push(form.getValues("substat3.substat"));
        takenSubstats.push(form.getValues("substat4.substat"));
    }
    else if(schemaObjectName.endsWith("2")) {
        takenSubstats.push(form.getValues("substat1.substat"));
        takenSubstats.push(form.getValues("substat3.substat"));
        takenSubstats.push(form.getValues("substat4.substat"));
    }
    else if(schemaObjectName.endsWith("3")) {
        takenSubstats.push(form.getValues("substat1.substat"));
        takenSubstats.push(form.getValues("substat2.substat"));
        takenSubstats.push(form.getValues("substat4.substat"));
    }
    else {
        takenSubstats.push(form.getValues("substat1.substat"));
        takenSubstats.push(form.getValues("substat2.substat"));
        takenSubstats.push(form.getValues("substat3.substat"));
    }

    if(slot === SlotType.HEAD) {
        possibleStats = new Set([StatType.ATK, StatType.DEF, StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.SPD, StatType.CR, StatType.CD, StatType.EHR, StatType.ERES, StatType.BE]);
    }
    else if(slot === SlotType.GAUNTLETS) {
        possibleStats = new Set([StatType.HP, StatType.DEF, StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.SPD, StatType.CR, StatType.CD, StatType.EHR, StatType.ERES, StatType.BE]);
    }
    else if(slot === SlotType.BOOTS) {
        possibleStats = new Set([StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.SPD, StatType.HP, StatType.ATK, StatType.DEF, StatType.CR, StatType.CD, StatType.EHR, StatType.ERES, StatType.BE]);
        possibleStats.delete(mainStat);
    }
    else if(slot === SlotType.BODY) {
        possibleStats = new Set([StatType.HP, StatType.ATK, StatType.DEF, StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.SPD, StatType.CR, StatType.CD, StatType.EHR, StatType.ERES, StatType.BE]);
        possibleStats.delete(mainStat)
    }
    else if(slot === SlotType.ORB) {
        possibleStats = new Set([StatType.HP, StatType.ATK, StatType.DEF, StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.SPD, StatType.CR, StatType.CD, StatType.EHR, StatType.ERES, StatType.BE]);
        // const possibleMainStats: StatType[] = [StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.PHYSICAL, StatType.FIRE, StatType.ICE, StatType.LIGHTNING, StatType.WIND, StatType.QUANTUM, StatType.IMAGINARY];
        // const elementalDamageStats: StatType[] = [StatType.PHYSICAL, StatType.FIRE, StatType.ICE, StatType.LIGHTNING, StatType.WIND, StatType.QUANTUM, StatType.IMAGINARY];
        // possibleMainStats.filter(stat => stat !== mainStat && !elementalDamageStats.includes(stat)).forEach(stat => possibleStats.add(stat));
        possibleStats.delete(mainStat);
    } else {
        //NECKLACE
        possibleStats = new Set([StatType.HP, StatType.ATK, StatType.DEF, StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.SPD, StatType.CR, StatType.CD, StatType.EHR, StatType.ERES, StatType.BE]);
        // const possibleMainStats: StatType[] = [StatType.BE, StatType.ER, StatType.HPP, StatType.ATKP, StatType.DEFP];
        // possibleMainStats.filter(stat => stat !== mainStat && stat !== StatType.ER).forEach(stat => possibleStats.add(stat));
        possibleStats.delete(mainStat);
    }

    // takenSubstats.forEach(takenSubstat => {
    //     if(possibleStats.has(takenSubstat))
    //         possibleStats.delete(takenSubstat);
    // })

    // return [...possibleStats];

    return (
        <>
            {
                [...possibleStats].map(possibleStat => (
                    <option style={takenSubstats.includes(possibleStat) ? {display: "none"} : {}} disabled={takenSubstats.includes(possibleStat)} value={possibleStat}>{possibleStat}</option>
                ))
            }
        </>
    )
}

function calculateMarks(substat: StatType, maxNumberOfRolls: number = 5) : Roll[] {
    if(substat === StatType.NO_OPTION)
        return [];

    try {
        const possibleRolls = getMinAndMaxRolls(substat);
        // const results = calculateRolls(possibleRolls, [], 0, maxNumberOfRolls).map(roll => roll.rollValue);
        const results = calculateRolls(possibleRolls, [], 0, maxNumberOfRolls);



        results.push({rollValue: {value: 0}, rollNumber: 0, step: 0});
        return results;
    } catch (e) {
        console.error("ERROR, RETURNING 0 AS MARK");
        return [{rollValue: {value: 0}, rollNumber: 0, step: 0}];
    }
}

function calculateRolls(possibleRolls: number[], values: Roll[] = [], actualNumberOfRolls: number = 0, maxNumberOfRolls: number): Roll[] {
    if(actualNumberOfRolls > maxNumberOfRolls) {
        return values;
    }

    if(actualNumberOfRolls === 0) {
        values.push(
            {rollValue: {value: possibleRolls[0]}, rollNumber: 1, step: 0},
            {rollValue: {value: possibleRolls[1]}, rollNumber: 1, step: 1},
            {rollValue: {value: possibleRolls[2]}, rollNumber: 1, step: 2}
        );
        return calculateRolls(possibleRolls, values, actualNumberOfRolls + 1, maxNumberOfRolls)
    } else {
        const valuesToCalculate: Roll[] = [values[values.length -3], values[values.length -2], values[values.length -1]];

        for(const value of valuesToCalculate) {
            values.push(...(addRoll(possibleRolls, value)));
        }

        return calculateRolls(possibleRolls, values, actualNumberOfRolls + 1, maxNumberOfRolls);
    }
}

function addRoll(possibleRolls: number[], value: Roll) : Roll[] {
    const newValues : Roll[] = [];

    newValues.push({rollValue: {value: roundToOneDecimal(value.rollValue.value + possibleRolls[0]), label: value.rollValue.label}, rollNumber: value.rollNumber + 1, step: value.step});
    newValues.push({rollValue: {value: roundToOneDecimal(value.rollValue.value + possibleRolls[1]), label: value.rollValue.label}, rollNumber: value.rollNumber + 1, step: value.step + 1});
    newValues.push({rollValue: {value: roundToOneDecimal(value.rollValue.value + possibleRolls[2]), label: value.rollValue.label}, rollNumber: value.rollNumber + 1, step: value.step + 2});

    return newValues;
}

export const RelicSubstatSlot = ({mainStatType, slotType, schemaObjectName, substatSetter} : RelicSubstatSlotProps) => {
    const form = useFormContext();
    const [chosenSubstat, setChosenSubstat] = useState<StatType | undefined>(undefined);
    const [rolls, setRolls] = useState<Roll[]>([]);
    const [value, setValue] = useState(0);
    const rangeId = useId();

    useEffect(() => {
        setChosenSubstat(undefined);
    }, [mainStatType])

    return (
        <>
            <div className="d-flex flex-row">
                <select
                    defaultValue={chosenSubstat ? chosenSubstat : StatType.NO_OPTION}
                    className="form-select"
                    {...form.register(`${schemaObjectName}.substat`)}
                    onChange={async ($event) => {
                        form.setValue(`${schemaObjectName}.substat`, ($event.target.value as StatType), {shouldValidate: true});
                        setChosenSubstat($event.target.value as StatType);
                        form.setValue(`${schemaObjectName}.value`, 0);
                        setValue(0);
                        const calculatedRolls = calculateMarks(form.getValues(`${schemaObjectName}.substat`));
                        setRolls(calculatedRolls);
                        await form.trigger(`${schemaObjectName}.substat`).then();
                    }}
                >
                    <option value={StatType.NO_OPTION}>{StatType.NO_OPTION}</option>
                    {
                        filterSubStats(slotType, mainStatType, form, schemaObjectName)
                    }
                </select>
                {
                    chosenSubstat && chosenSubstat !== StatType.NO_OPTION &&
                    <input
                        disabled
                        {...form.register(`${schemaObjectName}.value`)}
                        type="number"
                        className="form-control"
                        onChange={($event) => {
                            (document.getElementById(rangeId) as HTMLInputElement).value = $event.target.value
                        }}
                    />
                }
            </div>
            {
                chosenSubstat && chosenSubstat !== StatType.NO_OPTION &&
                <Slider
                    min={0}
                    max={getMinAndMaxRolls(form.getValues(`${schemaObjectName}.substat`))[4]}
                    marks={rolls.map(roll => roll.rollValue)}
                    onChange={(_, value) => {
                        setValue(value as number);
                    }}
                    onChangeCommitted={async (_, value) => {
                        setValue(value as number);
                        form.setValue(`${schemaObjectName}.value`, (value as number));

                        let roll: Roll | undefined;
                        const mostSimilarRolls = rolls.filter(roll => {
                            const difference = Math.abs((value as number) - roll.rollValue.value);
                            return difference <= 0.21;
                        });

                        roll = mostSimilarRolls.find(roll => {
                            return roll.rollValue.value === (value as number);
                        });

                        if (roll === undefined && mostSimilarRolls.length > 0)
                            roll = mostSimilarRolls[mostSimilarRolls.length - 1];

                        if (roll) {
                            // console.log("Roll was set!")
                            // console.log(roll);
                            substatSetter({
                                value: roll.rollValue.value,
                                step: roll.step,
                                count: roll.rollNumber,
                                statType: form.getValues(`${schemaObjectName}.substat`)
                            });
                            form.setValue(`${schemaObjectName}.count`, roll.rollNumber);
                            form.setValue(`${schemaObjectName}.step`, roll.step);
                        } else {
                            console.log("Roll not found");
                        }

                        await form.trigger(["root", "substat1.count", "substat2.count", "substat3.count", "substat4.count"]).then();
                        // console.log(form.formState.isValid);
                        // console.log(form.formState.errors.root);
                        // console.log(form.getValues("substat1.count"));
                    }}
                    valueLabelDisplay={"auto"}
                    value={value}
                    step={null}
                ></Slider>
            }
        </>
    );
}
