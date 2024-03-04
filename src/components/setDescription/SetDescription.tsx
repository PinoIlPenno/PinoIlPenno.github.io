import {SetType} from "../../enums/SetType.ts";
import {PLANAR} from "../../utils/SetsAndPlanars.ts";



export const SetDescription = ({image, set} : {image: string, set: SetType}) => {
    let setName : string = "";
    const setEffects : string[] = [];

    if(PLANAR.includes(set)) {
        switch (set) {
            case SetType.PLANAR_STATION:
                setName = "Space Sealing Station";
                setEffects.push("2-Pc: Increases the wearer's ATK by 12%. When the wearer's SPD reaches 120 or higher, the wearer's ATK increases by an extra 12%.");
                break;
            case SetType.PLANAR_HP:
                setName = "Fleet of the Ageless";
                setEffects.push("2-Pc: Increases the wearer's Max HP by 12%. When the wearer's SPD reaches 120 or higher, all allies' ATK increases by 8%.");
                break;
            case SetType.PLANAR_EHR:
                setName = "Pan-Cosmic Commercial Enterprise";
                setEffects.push("2-Pc: Increases the wearer's Effect Hit Rate by 10%. Meanwhile, the wearer's ATK increases by an amount that is equal to 25% of the current Effect Hit Rate, up to a maximum of 25%.");
                break;
            case SetType.PLANAR_DEF:
                setName = "Belobog of the Architects";
                setEffects.push("2-Pc: Increases the wearer's DEF by 15%. When the wearer's Effect Hit Rate is 50% or higher, the wearer gains an extra 15% DEF.");
                break;
            case SetType.PLANAR_CD:
                setName = "Celestial Differentiator";
                setEffects.push("2-Pc: Increases the wearer's CRIT DMG by 16%. When the wearer's current CRIT DMG reaches 120% or higher, after entering battle, the wearer's CRIT Rate increases by 60% until the end of their first attack.");
                break;
            case SetType.PLANAR_SALSOTTO:
                setName = "Inert Salsotto";
                setEffects.push("2-Pc: Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 50% or higher, the wearer's Ultimate and follow-up attack DMG increases by 15%.");
                break;
            case SetType.PLANAR_TALIA:
                setName = "Talia: Kingdom of Banditry";
                setEffects.push("2-Pc: Increases the wearer's Break Effect by 16%. When the wearer's SPD reaches 145 or higher, the wearer's Break Effect increases by an extra 20%.");
                break;
            case SetType.PLANAR_VONWACQ:
                setName = "Sprightly Vonwacq";
                setEffects.push("2-Pc: Increases the wearer's Energy Regeneration Rate by 5%. When the wearer's SPD reaches 120 or higher, the wearer's action is Advanced Forward by 40% immediately upon entering battle.");
                break;
            case SetType.PLANAR_RUTILANT:
                setName = "Rutilant Arena";
                setEffects.push("2-Pc: Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 70% or higher, the wearer's Basic ATK and Skill DMG increase by 20%.");
                break;
            case SetType.PLANAR_KEEL:
                setName = "Broken Keel";
                setEffects.push("2-Pc: Increases the wearer's Effect RES by 10%. When the wearer's Effect RES is at 30% or higher, all allies' CRIT DMG increases by 10%.");
                break;
            case SetType.PLANAR_GLAMOTH:
                setName = "Firmament Frontline: Glamoth";
                setEffects.push("2-Pc: Increases the wearer's ATK by 12%. When the wearer's SPD is equal to or higher than 135/160, the wearer deals 12%/18% more DMG.");
                break;
            case SetType.PLANAR_SAMETYPE:
                setName = "Penacony, Land of the Dreams";
                setEffects.push("2-Pc: Increases wearer's Energy Regeneration Rate by 5%. Increases DMG by 10% for all other allies that are of the same Type as the wearer.");
                break;
            case SetType.PLANAR_PUREFICTION:
                setName = "Sigonia, the Unclaimed Desolation";
                setEffects.push("2-Pc: When enemies are defeated, the wearer's CRIT DMG increases by 4%, up to 10 times.");
                break;
            case SetType.PLANAR_SAMEPATH:
                setName = "Izumo Gensei and Takama Divine Realm";
                setEffects.push("2-Pc: Increases the wearer's ATK by 12%. When entering battle, if at least one other ally follows the same Path as the wearer, then the wearer's CRIT Rate increases by 12%.");
                break;
        }
    } else
    {
        switch (set) {
            case SetType.SET_HEALING:
                setName = "Passerby of Wandering Cloud";
                setEffects.push("2-Pc: Increases Outgoing Healing by 10%.");
                setEffects.push("4-Pc: At the start of the battle, immediately regenerates 1 Skill Point.");
                break;
            case SetType.SET_MUSKEETER:
                setName = "Musketeer of Wild Wheat";
                setEffects.push("2-Pc: ATK increases by 12%.");
                setEffects.push("4-Pc: The wearer's SPD increases by 6% and Basic ATK DMG increases by 10%.");
                break;
            case SetType.SET_DEF:
                setName = "Knight of Purity Palace";
                setEffects.push("2-Pc: Increases DEF by 15%.");
                setEffects.push("4-Pc: Increases the max DMG that can be absorbed by the Shield created by the wearer by 20%.");
                break;
            case SetType.SET_ICE:
                setName = "Hunter of Glacial Forest";
                setEffects.push("2-Pc: Increases Ice DMG by 10%.");
                setEffects.push("4-Pc: After the wearer uses their Ultimate, their CRIT DMG increases by 25% for 2 turn(s).");
                break;
            case SetType.SET_PHSYICAL:
                setName = "Champion of Streetwise Boxing";
                setEffects.push("2-Pc: Increases Physical DMG by 10%.");
                setEffects.push("4-Pc: After the wearer attacks or is hit, their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s).");
                break;
            case SetType.SET_DMGTAKEN:
                setName = "Guard of Wuthering Snow";
                setEffects.push("2-Pc: Reduces DMG taken by 8%.");
                setEffects.push("4-Pc: At the beginning of the turn, if the wearer's HP is equal to or less than 50%, restores HP equal to 8% of their Max HP and regenerates 5 Energy.");
                break;
            case SetType.SET_FIRE:
                setName = "Firesmith of Lava-Forging";
                setEffects.push("2-Pc: Increases Fire DMG by 10%.");
                setEffects.push("4-Pc: Increases the wearer's Skill DMG by 12%. After unleashing Ultimate, increases the wearer's Fire DMG by 12% for the next attack.");
                break;
            case SetType.SET_QUANTUM:
                setName = "Genius of Brilliant Stars";
                setEffects.push("2-Pc: Increases Quantum DMG by 10%.");
                setEffects.push("4-Pc: When the wearer deals DMG to the target enemy, ignores 10% DEF. If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF.");
                break;
            case SetType.SET_LIGHTNING:
                setName = "Band of Sizzling Thunder";
                setEffects.push("2-Pc: Increases Lightning DMG by 10%.");
                setEffects.push("4-Pc: When the wearer uses their Skill, increases the wearer's ATK by 20% for 1 turn(s).");
                break;
            case SetType.SET_WIND:
                setName = "Eagle of Twilight Line";
                setEffects.push("2-Pc: Increases Wind DMG by 10%.");
                setEffects.push("4-Pc: After the wearer uses their Ultimate, their action is Advanced Forward by 25%.");
                break;
            case SetType.SET_THIEF:
                setName = "Thief of Shooting Meteor";
                setEffects.push("2-Pc: Increases Break Effect by 16%.");
                setEffects.push("4-Pc: Increases the wearer's Break Effect by 16%. After the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy.");
                break;
            case SetType.SET_IMAGINARY:
                setName = "Wastelander of Banditry Desert";
                setEffects.push("2-Pc: Increases Imaginary DMG by 10%.");
                setEffects.push("4-Pc: When attacking debuffed enemies, the wearer's CRIT Rate increases by 10%, and their CRIT DMG increases by 20% against Imprisoned enemies.");
                break;
            case SetType.SET_HP:
                setName = "Longevous Disciple";
                setEffects.push("2-Pc: Increases Max HP by 12%.");
                setEffects.push("4-Pc: When the wearer is hit or has their HP consumed by an ally or themselves, their CRIT Rate increases by 8% for 2 turn(s) and up to 2 stacks.");
                break;
            case SetType.SET_MESSENGER:
                setName = "Messenger Traversing Hackerspace";
                setEffects.push("2-Pc: Increases SPD by 6%.");
                setEffects.push("4-Pc: When the wearer uses their Ultimate on an ally, SPD for all allies increases by 12% for 1 turn(s). This effect cannot be stacked.");
                break;
            case SetType.SET_FOLLOWUP:
                setName = "The Ashblazing Grand Duke";
                setEffects.push("2-Pc: Increases the DMG dealt by follow-up attacks by 20%.");
                setEffects.push("4-Pc: When the wearer uses follow-up attacks, increases the wearer's ATK by 6% for every time the follow-up attack deals DMG. This effect can stack up to 8 time(s) and lasts for 3 turn(s). This effect is removed the next time the wearer uses a follow-up attack.");
                break;
            case SetType.SET_DOT:
                setName = "Prisoner in Deep Confinement";
                setEffects.push("2-Pc: ATK increases by 12%.");
                setEffects.push("4-Pc: For every DoT the target enemy is afflicted with, the wearer will ignore 6% of its DEF when dealing DMG to it. This effect is valid for a max of 3 DoTs.");
                break;
            case SetType.SET_DEBUFF:
                setName = "Pioneer Diver of Dead Waters";
                setEffects.push("2-Pc: Increases DMG dealt to enemies with debuff by 12%.");
                setEffects.push("4-Pc: Increases CRIT Rate by 4%. The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs. After the wearer inflicts a debuff on enemy targets, the aforementioned effects increase by 100%, lasting for 1 turn(s).");
                break;
            case SetType.SET_BREAKEFFECT:
                setName = "Watchmaker, Master of Dream Machinations";
                setEffects.push("2-Pc: Increases Break Effect by 16%.");
                setEffects.push("4-Pc: When the wearer uses their Ultimate on an ally, all allies' Break Effect increases by 30% for 2 turn(s). This effect cannot be stacked.");
                break;
        }
    }

    return (
        <div className="d-inline-block">
            <div className="d-flex flex-row">
                <div>
                    <img style={{width: "100%", minWidth: "50px", maxWidth: "200px"}} src={image} alt="chosen set image"/>
                </div>

                <div className="d-flex flex-column row-gap-2 w-100">
                    <h2 className="text-wrap">{setName}</h2>
                    {
                        setEffects.map(setEffect => (
                            <p className="text-wrap">{setEffect}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
