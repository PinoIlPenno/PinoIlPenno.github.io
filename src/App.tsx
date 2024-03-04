import './App.css'
import {Tab} from "./components/tab/Tab.tsx";
import {useEffect, useState} from "react";
import {SetType} from "./enums/SetType.ts";
import {SetDescription} from "./components/setDescription/SetDescription.tsx";
import {PLANAR} from "./utils/SetsAndPlanars.ts";
import {
    BreakEffectSetImages,
    CritDamagePlanarImages,
    DebuffSetImages,
    DefPlanarImages,
    DmgTakenSetImages,
    DotSetImages,
    EffectHitRatePlanarImages,
    FireSetImages,
    FollowUpSetImages,
    GlamothPlanarImages,
    HealingSetImages,
    HpPlanarImages,
    HpSetImages,
    IceSetImages,
    ImaginarySetImages,
    IzumoPlanarImages,
    KeelPlanarImages,
    KnightSetImages,
    LightningSetImages,
    MessengerSetImages,
    MuskeeterSetImages,
    PenaconyPlanarImages,
    PhysicalSetImages,
    PureFictionPlanarImages,
    QuantumSetImages,
    RutilantPlanarImages,
    SalsottoPlanarImages,
    SpaceStationPlanarImages,
    TaliaPlanarImages,
    ThiefSetImages,
    VonwacqPlanarImages,
    WindSetImages
} from "./images.ts";
import {SlotType} from "./enums/SlotType.ts";
import {SelectedRelic} from "./components/selectedRelic/SelectedRelic.tsx";
import {Relic} from "./types/Relic.ts";
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import "highlight.js/styles/github.css"
import {TrasformedRelic} from "./types/TrasformedRelic.ts";
import {StatType} from "./enums/StatType.ts";
import {SubStat} from "./types/SubStat.ts";

function convertSetTypeToId(slotType: SlotType, setType: SetType) : number {
    const setId : number = 61000;
    const planarId : number = 63000;

    switch (setType) {
        case SetType.SET_HEALING:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 11);
                case SlotType.GAUNTLETS:
                    return (setId + 12);
                case SlotType.BODY:
                    return (setId + 13);
                case SlotType.BOOTS:
                    return (setId + 14);
                default:
                    return 0;
            }
        case SetType.SET_MUSKEETER:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 21);
                case SlotType.GAUNTLETS:
                    return (setId + 22);
                case SlotType.BODY:
                    return (setId + 23);
                case SlotType.BOOTS:
                    return (setId + 24);
                default:
                    return 0;
            }
        case SetType.SET_DEF:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 31);
                case SlotType.GAUNTLETS:
                    return (setId + 32);
                case SlotType.BODY:
                    return (setId + 33);
                case SlotType.BOOTS:
                    return (setId + 34);
                default:
                    return 0;
            }
        case SetType.SET_ICE:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 41);
                case SlotType.GAUNTLETS:
                    return (setId + 42);
                case SlotType.BODY:
                    return (setId + 43);
                case SlotType.BOOTS:
                    return (setId + 44);
                default:
                    return 0;
            }
        case SetType.SET_PHSYICAL:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 51);
                case SlotType.GAUNTLETS:
                    return (setId + 52);
                case SlotType.BODY:
                    return (setId + 53);
                case SlotType.BOOTS:
                    return (setId + 54);
                default:
                    return 0;
            }
        case SetType.SET_DMGTAKEN:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 61);
                case SlotType.GAUNTLETS:
                    return (setId + 62);
                case SlotType.BODY:
                    return (setId + 63);
                case SlotType.BOOTS:
                    return (setId + 64);
                default:
                    return 0;
            }
        case SetType.SET_FIRE:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 71);
                case SlotType.GAUNTLETS:
                    return (setId + 72);
                case SlotType.BODY:
                    return (setId + 73);
                case SlotType.BOOTS:
                    return (setId + 74);
                default:
                    return 0;
            }
        case SetType.SET_QUANTUM:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 81);
                case SlotType.GAUNTLETS:
                    return (setId + 82);
                case SlotType.BODY:
                    return (setId + 83);
                case SlotType.BOOTS:
                    return (setId + 84);
                default:
                    return 0;
            }
        case SetType.SET_LIGHTNING:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 91);
                case SlotType.GAUNTLETS:
                    return (setId + 92);
                case SlotType.BODY:
                    return (setId + 93);
                case SlotType.BOOTS:
                    return (setId + 94);
                default:
                    return 0;
            }
        case SetType.SET_WIND:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 101);
                case SlotType.GAUNTLETS:
                    return (setId + 102);
                case SlotType.BODY:
                    return (setId + 103);
                case SlotType.BOOTS:
                    return (setId + 104);
                default:
                    return 0;
            }
        case SetType.SET_THIEF:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 111);
                case SlotType.GAUNTLETS:
                    return (setId + 112);
                case SlotType.BODY:
                    return (setId + 113);
                case SlotType.BOOTS:
                    return (setId + 114);
                default:
                    return 0;
            }
        case SetType.SET_IMAGINARY:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 121);
                case SlotType.GAUNTLETS:
                    return (setId + 122);
                case SlotType.BODY:
                    return (setId + 123);
                case SlotType.BOOTS:
                    return (setId + 124);
                default:
                    return 0;
            }
        case SetType.SET_HP:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 131);
                case SlotType.GAUNTLETS:
                    return (setId + 132);
                case SlotType.BODY:
                    return (setId + 133);
                case SlotType.BOOTS:
                    return (setId + 134);
                default:
                    return 0;
            }
        case SetType.SET_MESSENGER:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 141);
                case SlotType.GAUNTLETS:
                    return (setId + 142);
                case SlotType.BODY:
                    return (setId + 143);
                case SlotType.BOOTS:
                    return (setId + 144);
                default:
                    return 0;
            }
        case SetType.SET_FOLLOWUP:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 151);
                case SlotType.GAUNTLETS:
                    return (setId + 152);
                case SlotType.BODY:
                    return (setId + 153);
                case SlotType.BOOTS:
                    return (setId + 154);
                default:
                    return 0;
            }
        case SetType.SET_DOT:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 161);
                case SlotType.GAUNTLETS:
                    return (setId + 162);
                case SlotType.BODY:
                    return (setId + 163);
                case SlotType.BOOTS:
                    return (setId + 164);
                default:
                    return 0;
            }
        case SetType.SET_DEBUFF:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 171);
                case SlotType.GAUNTLETS:
                    return (setId + 172);
                case SlotType.BODY:
                    return (setId + 173);
                case SlotType.BOOTS:
                    return (setId + 174);
                default:
                    return 0;
            }
        case SetType.SET_BREAKEFFECT:
            switch (slotType) {
                case SlotType.HEAD:
                    return (setId + 181);
                case SlotType.GAUNTLETS:
                    return (setId + 182);
                case SlotType.BODY:
                    return (setId + 183);
                case SlotType.BOOTS:
                    return (setId + 184);
                default:
                    return 0;
            }
        case SetType.PLANAR_STATION:
            if(slotType === SlotType.ORB)
                return (planarId + 15);
            else
                return (planarId + 16);
        case SetType.PLANAR_HP:
            if(slotType === SlotType.ORB)
                return (planarId + 25);
            else
                return (planarId + 26);
        case SetType.PLANAR_EHR:
            if(slotType === SlotType.ORB)
                return (planarId + 35);
            else
                return (planarId + 36);
        case SetType.PLANAR_DEF:
            if(slotType === SlotType.ORB)
                return (planarId + 45);
            else
                return (planarId + 46);
        case SetType.PLANAR_CD:
            if(slotType === SlotType.ORB)
                return (planarId + 55);
            else
                return (planarId + 56);
        case SetType.PLANAR_SALSOTTO:
            if(slotType === SlotType.ORB)
                return (planarId + 65);
            else
                return (planarId + 66);
        case SetType.PLANAR_TALIA:
            if(slotType === SlotType.ORB)
                return (planarId + 75);
            else
                return (planarId + 76);
        case SetType.PLANAR_VONWACQ:
            if(slotType === SlotType.ORB)
                return (planarId + 85);
            else
                return (planarId + 86);
        case SetType.PLANAR_RUTILANT:
            if(slotType === SlotType.ORB)
                return (planarId + 95);
            else
                return (planarId + 96);
        case SetType.PLANAR_KEEL:
            if(slotType === SlotType.ORB)
                return (planarId + 105);
            else
                return (planarId + 106);
        case SetType.PLANAR_GLAMOTH:
            if(slotType === SlotType.ORB)
                return (planarId + 115);
            else
                return (planarId + 116);
        case SetType.PLANAR_SAMETYPE:
            if(slotType === SlotType.ORB)
                return (planarId + 125);
            else
                return (planarId + 126);
        case SetType.PLANAR_PUREFICTION:
            if(slotType === SlotType.ORB)
                return (planarId + 135);
            else
                return (planarId + 136);
        case SetType.PLANAR_SAMEPATH:
            if(slotType === SlotType.ORB)
                return (planarId + 145);
            else
                return (planarId + 146);
    }

    return 0;
}

function convertMainStatToId(slotType: SlotType, mainStatType: StatType | undefined) : number {
    if(mainStatType === undefined)
        throw "MAIN STAT TYPE IS UNDEFINED";

    switch (slotType) {
        case SlotType.HEAD:
            return 1;
        case SlotType.GAUNTLETS:
            return 1;
        case SlotType.BODY:
            switch (mainStatType) {
                case StatType.HPP:
                    return 1;
                case StatType.ATK:
                    return 2;
                case StatType.DEFP:
                    return 3;
                case StatType.CR:
                    return 4;
                case StatType.CD:
                    return 5;
                case StatType.HEALING:
                    return 6;
                case StatType.EHR:
                    return 7;
                default:
                    return 0
            }
        case SlotType.BOOTS:
            switch (mainStatType) {
                case StatType.HPP:
                    return 1;
                case StatType.ATKP:
                    return 2;
                case StatType.DEFP:
                    return 3;
                case StatType.SPD:
                    return 4;
                default:
                    return 0;
            }
        case SlotType.ORB:
            switch (mainStatType) {
                case StatType.HPP:
                    return 1;
                case StatType.ATKP:
                    return 2;
                case StatType.DEFP:
                    return 3;
                case StatType.PHYSICAL:
                    return 4;
                case StatType.FIRE:
                    return 5;
                case StatType.ICE:
                    return 6;
                case StatType.LIGHTNING:
                    return 7;
                case StatType.WIND:
                    return 8;
                case StatType.QUANTUM:
                    return 9;
                case StatType.IMAGINARY:
                    return 10;
                default:
                    return 0;
            }
        case SlotType.NECKLACE:
            switch (mainStatType) {
                case StatType.BE:
                    return 1;
                case StatType.ER:
                    return 2;
                case StatType.HPP:
                    return 3;
                case StatType.ATKP:
                    return 4;
                case StatType.DEFP:
                    return 5;
            }
    }

    return 0;
}

function convertSubstatToSubAffix(substat: SubStat) : {AffixId: number, Cnt: number, Step: number} {

    switch (substat.statType) {
        case StatType.HP:
            return {
                AffixId: 1,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.ATK:
            return {
                AffixId: 2,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.DEF:
            return {
                AffixId: 3,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.HPP:
            return {
                AffixId: 4,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.ATKP:
            return {
                AffixId: 5,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.DEFP:
            return {
                AffixId: 6,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.SPD:
            return {
                AffixId: 7,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.CR:
            return {
                AffixId: 8,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.CD:
            return {
                AffixId: 9,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.EHR:
            return {
                AffixId: 10,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.ERES:
            return {
                AffixId: 11,
                Cnt: substat.count,
                Step: substat.step,
            };
        case StatType.BE:
            return {
                AffixId: 12,
                Cnt: substat.count,
                Step: substat.step,
            };
    }

    return {
        AffixId: 0,
        Cnt: 0,
        Step: 0
    }
}

function convertSubstatsToSubAffixs(substats: SubStat[] | undefined) : {AffixId: number, Cnt: number, Step: number}[] {
    substats = substats as SubStat[];

    return substats?.map(substat => {
        return convertSubstatToSubAffix(substat)
    })
}

function trasformRelic(relic: Relic) : TrasformedRelic {
    return {
        Id: convertSetTypeToId(relic.slot, relic.set),
        Level: 15,
        MainAffixId: convertMainStatToId(relic.slot, relic.mainStat?.statType),
        SubAffixLists: convertSubstatsToSubAffixs(relic.substats)
    };
}

function trasformToCodeRelic(relic: Relic) : string {
    const trasformedRelic : TrasformedRelic = trasformRelic(relic);

    const code : string =
    `{
        Id = ${trasformedRelic.Id},
        Level = ${trasformedRelic.Level},
        MainAffixId = ${trasformedRelic.MainAffixId},
        SubAffixLists = {
            new RelicAffix
            {
                AffixId = ${trasformedRelic.SubAffixLists[0].AffixId},
                Cnt = ${trasformedRelic.SubAffixLists[0].Cnt},
                Step = ${trasformedRelic.SubAffixLists[0].Step}
            },
            new RelicAffix
            {
                AffixId = ${trasformedRelic.SubAffixLists[1].AffixId},
                Cnt = ${trasformedRelic.SubAffixLists[1].Cnt},
                Step = ${trasformedRelic.SubAffixLists[1].Step}
            },
            new RelicAffix
            {
                AffixId = ${trasformedRelic.SubAffixLists[2].AffixId},
                Cnt = ${trasformedRelic.SubAffixLists[2].Cnt},
                Step = ${trasformedRelic.SubAffixLists[2].Step}
            },
            new RelicAffix
            {
                AffixId = ${trasformedRelic.SubAffixLists[3].AffixId},
                Cnt = ${trasformedRelic.SubAffixLists[3].Cnt},
                Step = ${trasformedRelic.SubAffixLists[3].Step}
            }
        }
    };`;

    return code;
}

function App() {
    const [setType, setSetType] = useState<SetType | undefined>(undefined);
    const [setImage, setSetImage] = useState<string>("");
    const [setPiecesImages, setSetPiecesImages] = useState<string[]>([]);
    const [slotType, setSlotType] = useState<SlotType | undefined>(undefined);
    const [selectedSetPieceImage, setSelectedSetPieceImage] = useState<string>("");
    const [formErrors, setFormErrors] = useState<any | undefined>(undefined);

    const [relic, setRelic] = useState<Relic | undefined>(undefined);

    hljs.registerLanguage("json", json);
    // const relicCodeSnippet = hljs.highlightAuto(JSON.stringify(relic), ["json"]);


    useEffect(() => {
        hljs.highlightAll();
    }, [])

    useEffect(() => {
        if(setImage === "" || setType === undefined)
            return;

        const images: string[] = [];

        const index = setImage.lastIndexOf("/");

        const rightPath: string = setImage.substring(0, index + 1);

        if(PLANAR.includes(setType)) {
            images.push(rightPath + "5.webp");
            images.push(rightPath + "6.webp");
        } else {
            images.push(rightPath + "1.webp");
            images.push(rightPath + "2.webp");
            images.push(rightPath + "3.webp");
            images.push(rightPath + "4.webp");
        }

        setSetPiecesImages(images);
    }, [setImage, setType]);

    return (
        <>
            <div className="d-flex column-gap-5">
                <Tab
                    items={[
                        {
                            id: "relic",
                            title: "Relic",
                            node: (
                                <>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_HEALING);
                                                        setSetImage(HealingSetImages.HealingSet)
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={HealingSetImages.HealingSet} alt="healing set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_MUSKEETER);
                                                        setSetImage(MuskeeterSetImages.MuskeeterSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={MuskeeterSetImages.MuskeeterSet} alt="muskeeter set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_DEF);
                                                        setSetImage(KnightSetImages.KnightSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={KnightSetImages.KnightSet} alt="knight set"/></button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_ICE);
                                                        setSetImage(IceSetImages.IceSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={IceSetImages.IceSet} alt="ice set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_PHSYICAL);
                                                        setSetImage(PhysicalSetImages.PhysicalSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={PhysicalSetImages.PhysicalSet} alt="physical set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_DMGTAKEN);
                                                        setSetImage(DmgTakenSetImages.DmgTakenSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={DmgTakenSetImages.DmgTakenSet} alt="damage reduction set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_FIRE);
                                                        setSetImage(FireSetImages.FireSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={FireSetImages.FireSet} alt="fire set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_QUANTUM);
                                                        setSetImage(QuantumSetImages.QuantumSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={QuantumSetImages.QuantumSet} alt="quantum set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_LIGHTNING);
                                                        setSetImage(LightningSetImages.LightningSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={LightningSetImages.LightningSet} alt="lightning set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_WIND);
                                                        setSetImage(WindSetImages.WindSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={WindSetImages.WindSet} alt="wind set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_THIEF);
                                                        setSetImage(ThiefSetImages.ThiefSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={ThiefSetImages.ThiefSet} alt="thief set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_IMAGINARY);
                                                        setSetImage(ImaginarySetImages.ImaginarySet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={ImaginarySetImages.ImaginarySet} alt="imaginary set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_HP);
                                                        setSetImage(HpSetImages.HpSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={HpSetImages.HpSet} alt="hp set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_MESSENGER);
                                                        setSetImage(MessengerSetImages.MessengerSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={MessengerSetImages.MessengerSet} alt="speed set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_FOLLOWUP);
                                                        setSetImage(FollowUpSetImages.FollowUpSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={FollowUpSetImages.FollowUpSet} alt="follow up set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_DOT);
                                                        setSetImage(DotSetImages.DotSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={DotSetImages.DotSet} alt="dot set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_DEBUFF);
                                                        setSetImage(DebuffSetImages.DebuffSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={DebuffSetImages.DebuffSet} alt="debuff set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.SET_BREAKEFFECT);
                                                        setSetImage(BreakEffectSetImages.BreakEffectSet);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={BreakEffectSetImages.BreakEffectSet} alt="break effect set"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        },
                        {
                            id: "planar",
                            title: "Planetary",
                            node: (
                                <>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_STATION);
                                                        setSetImage(SpaceStationPlanarImages.SpaceStationPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={SpaceStationPlanarImages.SpaceStationPlanar} alt="space station planar set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_HP);
                                                        setSetImage(HpPlanarImages.HpPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={HpPlanarImages.HpPlanar} alt="hp planar set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_EHR);
                                                        setSetImage(EffectHitRatePlanarImages.EffectHitRatePlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={EffectHitRatePlanarImages.EffectHitRatePlanar} alt="hit rate planar set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_DEF);
                                                        setSetImage(DefPlanarImages.DefPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={DefPlanarImages.DefPlanar} alt="def planar set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_CD);
                                                        setSetImage(CritDamagePlanarImages.CritDamagePlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={CritDamagePlanarImages.CritDamagePlanar} alt="crit damage planar set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_SALSOTTO);
                                                        setSetImage(SalsottoPlanarImages.SalsottoPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={SalsottoPlanarImages.SalsottoPlanar} alt="salsotto planar set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_TALIA);
                                                        setSetImage(TaliaPlanarImages.TaliaPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={TaliaPlanarImages.TaliaPlanar} alt="talia planar set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_VONWACQ);
                                                        setSetImage(VonwacqPlanarImages.VonwacqPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={VonwacqPlanarImages.VonwacqPlanar} alt="vonwacq planar set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_RUTILANT);
                                                        setSetImage(RutilantPlanarImages.RutilantPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={RutilantPlanarImages.RutilantPlanar} alt="rutilant planar set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_KEEL);
                                                        setSetImage(KeelPlanarImages.KeelPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={KeelPlanarImages.KeelPlanar} alt="effect res planar set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_GLAMOTH);
                                                        setSetImage(GlamothPlanarImages.GlamothPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={GlamothPlanarImages.GlamothPlanar} alt="glamoth planar set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_SAMETYPE);
                                                        setSetImage(PenaconyPlanarImages.PenaconyPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={PenaconyPlanarImages.PenaconyPlanar} alt="penacony planar set"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm">
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_PUREFICTION);
                                                        setSetImage(PureFictionPlanarImages.PureFictionPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px", minWidth: "50px"}} src={PureFictionPlanarImages.PureFictionPlanar} alt="pure fiction planar set"/>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSetType(SetType.PLANAR_SAMEPATH);
                                                        setSetImage(IzumoPlanarImages.IzumoPlanar);
                                                    }}
                                                    className="btn btn-outline-secondary rounded-circle" style={{minWidth: "50px"}}
                                                >
                                                    <img style={{width: "100%", maxWidth: "110px"}} src={IzumoPlanarImages.IzumoPlanar} alt="izumo planar set"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    ]}
                    active="relic"
                />
                {
                    setImage && setType &&
                    <div className="d-flex flex-column">
                        <SetDescription image={setImage} set={setType}/>
                        <div className="d-flex flex-row justify-content-evenly">
                            {
                                setPiecesImages.map(setPieceImage => (
                                    <button
                                        onClick={() => {
                                            if(setPieceImage.endsWith("1.webp"))
                                                setSlotType(SlotType.HEAD);
                                            else if(setPieceImage.endsWith("2.webp"))
                                                setSlotType(SlotType.GAUNTLETS);
                                            else if(setPieceImage.endsWith("3.webp"))
                                                setSlotType(SlotType.BODY);
                                            else if(setPieceImage.endsWith("4.webp"))
                                                setSlotType(SlotType.BOOTS);
                                            else if(setPieceImage.endsWith("5.webp"))
                                                setSlotType(SlotType.ORB);
                                            else
                                                setSlotType(SlotType.NECKLACE);

                                            setSelectedSetPieceImage(setPieceImage);
                                        }}
                                        className="btn btn-outline-secondary rounded-circle" style={{minWidth: "40px"}}
                                    >
                                        <img className="p-1" style={{maxWidth: "80px"}} src={setPieceImage} alt={setPieceImage}/>
                                    </button>
                                ))
                            }
                        </div>

                        {
                            slotType &&
                            <SelectedRelic setType={setType} slotType={slotType} relicSetter={setRelic} pieceImage={selectedSetPieceImage} formErrorsSetter={setFormErrors} />
                        }
                        {
                            (relic !== undefined) && (Object.keys(formErrors).length === 0) &&
                            <button
                                className="btn btn-primary mt-3"
                                id="json-copy-button"
                                onClick={async () => {
                                    await navigator.clipboard.writeText(trasformToCodeRelic(relic)).then();
                                    const button = document.getElementById("json-copy-button") as HTMLButtonElement;
                                    button.innerText = "Copied!";

                                    setTimeout(() => {
                                        button.innerText = "Copy JSON";
                                    }, 2500);
                                }}
                            >
                                Copy JSON
                            </button>
                        }
                    </div>
                }
            </div>
        </>


    )
}

export default App
