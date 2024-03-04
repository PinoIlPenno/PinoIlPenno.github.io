import {SlotType} from "../../enums/SlotType.ts";
import {StatType} from "../../enums/StatType.ts";
import {SetType} from "../../enums/SetType.ts";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {RelicSubstatSlot} from "../RelicSubstatSlot/RelicSubstatSlot.tsx";
import {z} from "zod"
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Relic} from "../../types/Relic.ts";
import {SubStat} from "../../types/SubStat.ts";

type SelectedRelicProps = {
    slotType: SlotType,
    setType: SetType,
    relicSetter: Dispatch<SetStateAction<Relic | undefined>>,
    pieceImage: string,
    formErrorsSetter: Dispatch<SetStateAction<any | undefined>>
}

function filterMainStats(slot: SlotType) : StatType[] {
    if(slot === SlotType.HEAD)
        return [StatType.HP];
    else if(slot === SlotType.GAUNTLETS)
        return [StatType.ATK];
    else if(slot === SlotType.BOOTS)
        return [StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.SPD];
    else if(slot === SlotType.BODY)
        return [StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.CR, StatType.CD, StatType.HEALING, StatType.EHR];
    else if(slot === SlotType.ORB)
        return [StatType.HPP, StatType.ATKP, StatType.DEFP, StatType.PHYSICAL, StatType.QUANTUM, StatType.LIGHTNING, StatType.ICE, StatType.IMAGINARY, StatType.FIRE, StatType.WIND];

    return [StatType.BE, StatType.ER, StatType.HPP, StatType.ATKP, StatType.DEFP];
}

export const SelectedRelic = ({slotType, setType, pieceImage, relicSetter, formErrorsSetter} : SelectedRelicProps) => {

    const schema = z.object({
        substat1: z.object({
            substat: z.nativeEnum(StatType).refine(stat => stat !== StatType.NO_OPTION),
            step: z.number(),
            count: z.number().min(1, "A substat must have at least one roll").max(6, "A substat can have a max of 6 rolls"),
            value: z.number()
        }),
        substat2: z.object({
            substat: z.nativeEnum(StatType).refine(stat => stat !== StatType.NO_OPTION),
            step: z.number(),
            count: z.number().min(1, "A substat must have at least one roll").max(6, "A substat can have a max of 6 rolls"),
            value: z.number()
        }),
        substat3: z.object({
            substat: z.nativeEnum(StatType).refine(stat => stat !== StatType.NO_OPTION),
            step: z.number(),
            count: z.number().min(1, "A substat must have at least one roll").max(6, "A substat can have a max of 6 rolls"),
            value: z.number()
        }),
        substat4: z.object({
            substat: z.nativeEnum(StatType).refine(stat => stat !== StatType.NO_OPTION),
            step: z.number(),
            count: z.number().min(1, "A substat must have at least one roll").max(6, "A substat can have a max of 6 rolls"),
            value: z.number()
        }),
    });

    const [chosenSubstat1, setChosenSubstat1] = useState<SubStat | undefined>(undefined);
    const [chosenSubstat2, setChosenSubstat2] = useState<SubStat | undefined>(undefined);
    const [chosenSubstat3, setChosenSubstat3] = useState<SubStat | undefined>(undefined);
    const [chosenSubstat4, setChosenSubstat4] = useState<SubStat | undefined>(undefined);

    type MySchema = z.infer<typeof schema>;
    const form = useForm<MySchema>(
        {
            resolver: zodResolver(schema),
            mode: "onChange",
            defaultValues:
                {
                    substat1: {value: 0, step: 0, count: 0, substat: StatType.NO_OPTION},
                    substat2: {value: 0, step: 0, count: 0, substat: StatType.NO_OPTION},
                    substat3: {value: 0, step: 0, count: 0, substat: StatType.NO_OPTION},
                    substat4: {value: 0, step: 0, count: 0, substat: StatType.NO_OPTION},
                }
        }
    );

    form.watch(["substat1.substat", "substat2.substat", "substat3.substat", "substat4.substat"]);
    // const countWatch = form.watch(["substat1.count", "substat2.count", "substat3.count", "substat4.count"]);

    const [mainStatType, setMainStatType] = useState<StatType | undefined>(undefined);
    const [numberOfRolls, setNumberOfRolls] = useState<number>(0);

    useEffect(() => {
        setMainStatType(undefined);
        form.reset();
    }, [form, slotType])
    
    useEffect(() => {
        setChosenSubstat1(undefined);
        setChosenSubstat2(undefined);
        setChosenSubstat3(undefined);
        setChosenSubstat4(undefined);
        relicSetter(undefined);
        form.reset();
    }, [form, mainStatType, relicSetter])
    
    useEffect(() => {
        if(mainStatType && chosenSubstat1 && chosenSubstat2 && chosenSubstat3 && chosenSubstat4 && form.formState.errors)
            relicSetter({
                set: setType,
                mainStat: {statType: mainStatType},
                slot: slotType,
                substats: [chosenSubstat1, chosenSubstat2, chosenSubstat3, chosenSubstat4]
            })
    }, [chosenSubstat1, chosenSubstat2, chosenSubstat3, chosenSubstat4, form.formState.errors, mainStatType, relicSetter, setType, slotType])

    useEffect(() => {
        const numberOfRolls = form.getValues(["substat1.count", "substat2.count", "substat3.count", "substat4.count"]).reduce((acc, value) => {
            return acc + value;
        }, 0);

        setNumberOfRolls(numberOfRolls);

        if(numberOfRolls < 8 || numberOfRolls > 9)
            if(numberOfRolls < 8) {
                form.setError("substat1", {
                    type: "rollAmount",
                    message: "Number of total rolls across substats must be at least 8"
                });
            }
            else {
                form.setError("substat1", {
                    type: "rollAmount",
                    message: "Number of total rolls across substats must be at maximum 9"
                })
            }
        
        form.trigger().then();
        formErrorsSetter(form.formState.errors);
    }, [form, formErrorsSetter, form.getValues("substat1.count"), form.getValues("substat2.count"), form.getValues("substat3.count"), form.getValues("substat4.count")])

    return (
        <>
            <div className="d-flex flex-column row-gap-5 align-self-center">
                <h3 className="align-self-center mt-3">Select Main Stat</h3>
                {/*<div className="align-self-center btn-group flex-wrap" role="group" style={{maxWidth: "800px"}}>*/}
                {/*    {*/}
                {/*        filterMainStats(slotType).map(mainStat => (*/}
                {/*            <button*/}
                {/*                onClick={() => {*/}
                {/*                    setMainStatType(mainStat);*/}
                {/*                }}*/}
                {/*                className="btn btn-secondary"*/}
                {/*            >*/}
                {/*                {mainStat}*/}
                {/*            </button>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</div>*/}
                {/*    mainStatType &&*/}
                    <div className="d-flex flex-column flex-wrap align-self-center row-gap-3 py-4 w-100" style={{borderTop: "2px solid black", borderBottom: "2px solid black"}}>
                        <h3 className="align-self-center">Artifact Editor</h3>
                        <img className="align-self-center" style={{width: "100%", maxWidth: "80px"}} src={pieceImage} alt={pieceImage}/>
                        <h5 className="align-self-center">Select the main stat</h5>
                        <select
                            className="form-select"
                            onChange={($event) => {
                                setMainStatType($event.target.value as StatType);
                            }}
                        >
                            <option selected value={StatType.NO_OPTION}>{StatType.NO_OPTION}</option>
                            {
                                filterMainStats(slotType).map(mainStat => (
                                    <option value={mainStat}>{mainStat}</option>
                                ))
                            }
                        </select>
                        {
                            mainStatType &&
                            <>
                                <h4 className="align-self-center">Select the substats</h4>
                                <h6 className="align-self-center">Rolls: {numberOfRolls}</h6>
                                <div className="d-flex flex-wrap align-self-center column-gap-2">
                                    <div className="d-flex flex-column align-self-center row-gap-2">
                                        <FormProvider {...form}>
                                            <RelicSubstatSlot mainStatType={mainStatType} slotType={slotType} schemaObjectName="substat1" substatSetter={setChosenSubstat1}/>
                                            <RelicSubstatSlot mainStatType={mainStatType} slotType={slotType} schemaObjectName="substat2" substatSetter={setChosenSubstat2}/>
                                            <RelicSubstatSlot mainStatType={mainStatType} slotType={slotType} schemaObjectName="substat3" substatSetter={setChosenSubstat3}/>
                                            <RelicSubstatSlot mainStatType={mainStatType} slotType={slotType} schemaObjectName="substat4" substatSetter={setChosenSubstat4}/>
                                        </FormProvider>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
            </div>
        </>
    )
}
