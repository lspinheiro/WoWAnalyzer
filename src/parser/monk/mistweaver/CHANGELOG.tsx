import React from 'react';

import { Anomoly, Gao, Zerotorescue, Abelito75, niseko, blazyb, JeremyDwayne, FraunchToost, Tyndi, Moonrabbit, Vohrr } from 'CONTRIBUTORS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import { change, date } from 'common/changelog';


export default [
  change(date(2020, 10, 12), <>Updated <SpellLink id={SPELLS.ENVELOPING_MIST.id} /> and <SpellLink id={SPELLS.SOOTHING_MIST.id} /> modules to use Event Listeners.</>, [Anomoly]),
  change(date(2020, 10, 12), <>Converted the majority of files to typescript. </>, Abelito75),
  change(date(2020, 10, 7), <>Updated Stat value scaling. </>, Abelito75),
  change(date(2020, 10, 7), <>Updated Harm Denial to include the expel harm cast on an ally.</>, Moonrabbit),
  change(date(2020, 10, 6), <>Updated <SpellLink id={SPELLS.SPINNING_CRANE_KICK.id} /> and <SpellLink id={SPELLS.ESSENCE_FONT.id} /> modules to use Event Listeners.</>, [Anomoly]),
  change(date(2020, 10, 6), <>Updated most talents to use action listeners.</>, Abelito75),
  change(date(2020, 10, 6), <>Updated <SpellLink id={SPELLS.RENEWING_MIST.id} /> to use Event Listeners.</>, [Anomoly]),
  change(date(2020, 10, 6), <>Added Fallen Order statistic.</>, Abelito75),
  change(date(2020, 10, 6), <>Updated core spec module files to TypeScript.</>, [Anomoly]),
  change(date(2020, 10, 6), <>Moved <SpellLink id={SPELLS.INVOKE_CHIJI_THE_RED_CRANE_TALENT.id} /> statistic box to the correct location.</>, [Moonrabbit]),
  change(date(2020, 10, 4), <>Added Expel Harm module and updated relevant files.</>, [Vohrr]),
  change(date(2020, 10, 4), <>Corrected overhealing a few spells in MistweaverHealingEfficiencyTracker.</>, [Vohrr]),
  change(date(2020, 10, 3), <>Updated <SpellLink id={SPELLS.INVOKE_CHIJI_THE_RED_CRANE_TALENT.id} /> statbox to include enveloping breath healing.</>, [Vohrr]),
  change(date(2020, 10, 3), <>Added the Clouded Focus legendary.</>, [Abelito75]),
  change(date(2020, 10, 2), <>Corrected Life Cocoon to track all hots.</>, [Moonrabbit]),
  change(date(2020, 10, 2), <>Corrected Nourshing Chi to track all hots.</>, [Moonrabbit]),
  change(date(2020, 10, 1), <>Updated spell data so stat weights will be accurate.</>, [Abelito75]),
  change(date(2020, 10, 1), <>Added Statistics for Tear of Morning and Ancient Teachings of the Monastery.</>, [Abelito75]),
  change(date(2020, 9, 30), <>Integration Tests have been added for Mistweaver.</>, [Anomoly]),
  change(date(2020, 9, 30), <>Statistic created for the potency conduit Imbued Reflections. </>, [Abelito75]),
  change(date(2020, 9, 26), <>Added <SpellLink id={SPELLS.INVOKE_YULON_THE_JADE_SERPENT.id} /> and <SpellLink id={SPELLS.INVOKE_CHIJI_THE_RED_CRANE_TALENT.id} /> to the cooldown tracker.</>, [Abelito75]),
  change(date(2020, 9, 26), <>Added Rising Sun Revival, Jade Bond, and Nourishing Chi.</>, [Abelito75]),
  change(date(2020, 9, 26), <>Updated Checklist to include Touch of Death, Yu'lon and Chi-ji.</>, [Abelito75]),
  change(date(2020, 9, 22), <>Updated pieces to the Mistweaver Core for Shadowlands.</>, [Tyndi]),
  change(date(2020, 9, 22), <>Mistweaver cleanup for shadowlands.</>, [Abelito75]),
  change(date(2020, 9, 21), <>Added all endurance conduits.</>, [Abelito75]),
  change(date(2020, 9, 1), <>Initial Shadowlands cleanup activities.</>, [Anomoly]),
  change(date(2020, 5, 24), <>Updated the <SpellLink id={SPELLS.RISING_MIST_TALENT.id} /> modules and generally made tracking hots better.</>, [Abelito75]),
  change(date(2020, 4, 22), <>Corrected cooldown for Rising Sun Kick and Blackout Kick.</>,[Abelito75]),
  change(date(2020, 4, 1), <>Added average haste gained statistic from Mist Peaks azerite trait.</>, [FraunchToost]),
  change(date(2020, 3, 22), <>Fixed <SpellLink id={SPELLS.RISING_MIST_TALENT.id} /> healing for hot extensions.</>, [Abelito75]),
  change(date(2020, 3, 5), <>Added average time between <SpellLink id={SPELLS.RISING_SUN_KICK.id} /> casts statistic when <SpellLink id={SPELLS.RISING_MIST_TALENT.id} /> is talented.</>, [FraunchToost]),
  change(date(2020, 2, 27), <>Bugfix to only show <SpellLink id={SPELLS.RISING_SUN_KICK.id} /> cast efficiency suggestion when <SpellLink id={SPELLS.RISING_MIST_TALENT.id} /> is talented.</>, [FraunchToost]),
  change(date(2020, 1, 8), <>Updated for 8.3.</>, [Abelito75]),
  change(date(2020, 1, 8), <>Updated stat weight calculation for <SpellLink id={SPELLS.RISING_MIST_TALENT.id} />, added new essence font statistic, tft rsk with rm is a correct use of tft now.</>,[ Abelito75]),
  change(date(2019, 12, 5), <>Updated stat weight calculation for Way of the Crane and Lucid Dreams.</>, [Anomoly]),
  change(date(2019, 11, 25), <>Added a Essence Font healing breakdown donut.</>, [Abelito75]),
  change(date(2019, 11, 25), <>Fixed upwelling randomly bugging out.</>, [Abelito75]),
  change(date(2019, 11, 20), <>Added Uplift revival reduction to <SpellLink id={SPELLS.RISING_MIST_TALENT.id} /> tooltip.</>, [Abelito75]),
  change(date(2019, 11, 16), <>Updated a few spells to use new methods.</>, [Abelito75]),
  change(date(2019, 11, 12), <>Big <SpellLink id={SPELLS.RISING_MIST_TALENT.id} /> overhaul. Now includes extra <SpellLink id={SPELLS.VIVIFY.id} /> cleaves, Enveloping Mist, and Gusts Of Mist hits from Essence Font's Hot.</>, [Abelito75]),
  change(date(2019, 11, 9), <>Added upwelling statistic.</>, [Abelito75]),
  change(date(2019, 11, 9), <>Fixed Tier45 comparison if you didn't play in a way where mana would be returned/saved.</>, [Abelito75]),
  change(date(2019, 10, 14), <>Fixed small typos for <SpellLink id={SPELLS.RISING_MIST_TALENT.id} /> statistic box.</>, [Abelito75]),
  change(date(2019, 10, 14), <>Spelling and grammar corrections in Tier 45 comparison tool.</>,JeremyDwayne),
  change(date(2019, 10, 13), <>Fixed Tier 45 comparison tool.</>, [Abelito75]),
  change(date(2019, 10, 13), <>New Tier 45 comparison tool to see if you picked the best talent for your playstyle.</>, [Abelito75]),
  change(date(2019, 10, 4), <>Added missing array declaration for enemiesHitSCK <SpellLink id={SPELLS.SPINNING_CRANE_KICK.id} />.</>, [JeremyDwayne]),
  change(date(2019, 10, 1), <>Bugfix for Lifecycles adding the potential mana reduction from an empowered <SpellLink id={SPELLS.VIVIFY.id} />.</>, [Anomoly]),
  change(date(2019, 9, 27), <>Update to date for 8.2.5.</>, [Abelito75]),
  change(date(2019, 8, 17), <>Fixed bug where you could have NaN mana tea overhealing.</>, [Abelito75]),
  change(date(2019, 8, 14), <>WotC infographic now checks for physical damage only.</>, [Abelito75]),
  change(date(2019, 8, 12), <>Added essence Lucid Dreams.</>, [blazyb]),
  change(date(2019, 8, 10), <>Fixed bug where if you end the fight with WotC buff it said everything was 0 hps. Added more info the the WotC infographic.</>, [Abelito75]),
  change(date(2019, 8, 6), <>Valid for 8.2.</>, Abelito75),
  change(date(2019, 8, 2), <>Fixed trait calculations being unaffected by healing increases or decreases.</>, [niseko]),
  change(date(2019, 7, 23), <>Fixed strange bug with <SpellLink id={SPELLS.MANA_TEA_TALENT.id} /> where if you didn't have it selected it crashed the Overview tab.</>, [Abelito75]),
  change(date(2019, 7, 18), <>Made Way of the Crane infographic.</>, Abelito75),
  change(date(2019, 7, 2), <><SpellLink id={SPELLS.MANA_TEA_TALENT.id} /> rewrite. Includes all spells.</>, Abelito75),
  change(date(2019, 7, 2), <>Added Way of the Crane to the cooldowns tab.</>, [Anomoly]),
  change(date(2019, 6, 1), <>Added a check to make sure you using <SpellLink id={SPELLS.SOOTHING_MIST.id} /> efficiency while channeling it.</>, [Abelito75]),
  change(date(2019, 3, 30), <>Added a check to make sure you cast <SpellLink id={SPELLS.SPINNING_CRANE_KICK.id} /> when there are enough targets around.</>, [Abelito75]),
  change(date(2019, 3, 23), <>Updated <SpellLink id={SPELLS.MANA_TEA_TALENT.id} /> to check if you have innervate before counting mana.</>, [Abelito75]),
  change(date(2019, 3, 21), <>Updated mastery tracking to more accurately reflect the spell that triggered the <SpellLink id={SPELLS.GUSTS_OF_MISTS.id} />. This includes updates to the statistic and healing efficiency sections.</>, [Abelito75]),
  change(date(2019, 3, 15), <>Updated Mistweaver Spreadsheet tab to include  <SpellLink id={SPELLS.REFRESHING_JADE_WIND_TALENT.id} /> efficiency.</>, [Abelito75]),
  change(date(2019, 3, 15), <>Added SI to buffs to buffs module to track Secret Infusion.</>, [Abelito75]),
  change(date(2019, 3, 11), <>Added new Buffs module to track and highlight Mistweaver specific buffs on the timeline.</>, [Anomoly]),
  change(date(2019, 3, 11), <>Updated look and feel of Mistweaver Azerite traits to conform to new 3.0 style.</>, [Anomoly]),
  change(date(2019, 3, 10), <>Added overhealing check for <SpellLink id={SPELLS.MANA_TEA_TALENT.id} />.</>, [Abelito75]),
  change(date(2019, 2, 25), <>Added statistics, suggestion, and checklist item for  <SpellLink id={SPELLS.SUMMON_JADE_SERPENT_STATUE_TALENT.id} /> casting uptime.</>, [Anomoly]),
  change(date(2019, 2, 21), <>Added statistics for tracking the average stat gain from Secret Infusion.</>, [Anomoly]),
  change(date(2019, 2, 7), <>Added statistics for tracking the number of <SpellLink id={SPELLS.RENEWING_MIST.id} /> during <SpellLink id={SPELLS.VIVIFY.id} /> casts. Also, did a quick bug fix for the Monk Spreadsheet import.</>, [Anomoly]),
  change(date(2019, 2, 7), <>Added statistics, suggestions, and checklist item for tracking the number of <SpellLink id={SPELLS.RENEWING_MIST.id} /> during <SpellLink id={SPELLS.MANA_TEA_TALENT.id} />. Also, adding some additional tooltips to the Healing Efficiency page.</>, [Anomoly]),
  change(date(2019, 1, 21), <>Ignore cooldown errors caused by Font of Life (it is not detectable in logs so we can't make it 100% accurate).</>, [Zerotorescue]),
  change(date(2019, 1, 21), <>Fixed a bug where <SpellLink id={SPELLS.SOOTHING_MIST.id} /> incorrectly triggered two GCDs, making downtime off.</>, [Zerotorescue]),
  change(date(2018, 11, 14), <>Added <SpellLink id={SPELLS.GUSTS_OF_MISTS.id}>Gusts of Mists</SpellLink> breakdown chart. Fixed bug with the ReM and <SpellLink id={SPELLS.VIVIFY.id} /> mana efficiency.</>, [Gao]),
  change(date(2018, 11, 2), <>Added the mana efficiency tab. Updated the Env:Viv cast ratio picture sizes.</>, [Gao]),
  change(date(2018, 10, 30), <>Fixed an bug with <SpellLink id={SPELLS.MANA_TEA_TALENT.id} /> suggestion not displaying the correct mana saved amount.</>, [Anomoly]),
  change(date(2018, 9, 11), <>Added <SpellLink id={SPELLS.SUMMON_JADE_SERPENT_STATUE_TALENT.id} /> to spreadsheet tab for use importing into Monk spreadsheet.</>, [Anomoly]),
  change(date(2018, 9, 11), <>Fixed <SpellLink id={SPELLS.SOOTHING_MIST.id} /> channeling time to be taken into account with Downtime statistic and suggestion.</>, [Anomoly]),
  change(date(2018, 9, 11), <>Added healing contribution statistic box for the Mistweaver Specific Azerite traits.</>, [Anomoly]),
  change(date(2018, 9, 8), <>Updated Checklist to leverage new format and included updates to the suggestions and thresholds. Cleaned up unused legendary files also.</>, [Anomoly]),
  change(date(2018, 9, 7), <>Updated Player Log Data tab to include fixes and additional data needed to support the BfA Mistweaver Monk spreadsheet.</>, [Anomoly]),
  change(date(2018, 9, 5), <>Fixed mana cost of all spells. Updated suggestion for <SpellLink id={SPELLS.LIFECYCLES_TALENT.id} /> usage and removed <SpellLink id={SPELLS.SOOTHING_MIST.id} /> suggestion from the analyzer.</>, [Anomoly]),
  change(date(2018, 7, 22), <>Fix crash when Drape of Shame is used.</>, [Anomoly]),
  change(date(2018, 7, 20), <>Pre-Patch Updates: Removed Effuse from the analyzer as the ability was removed in BfA. Updated Mana Costs of spells to use fixed cost versus a percentage of max mana.</>, [Anomoly]),
  change(date(2018, 7, 19), <>Pre-Patch Updates: Removed Uplifting Trance, Updated Renewing Mist Cooldown, Removed Essence Font from Thunder Focus Tea statistics, Removed Thunder Focus Tea suggestion for now as correct use is being defined.</>, [Anomoly]),
  change(date(2018, 7, 1), <>Trait and Artifact clean up along with GCD changes in Abilities for Battle for Azeroth</>, [Anomoly]),
  change(date(2018, 6, 15), <>Updated <SpellLink id={SPELLS.VIVIFY.id} /> to incorporate new healing interaction with <SpellLink id={SPELLS.RENEWING_MIST.id} />. Updated <SpellLink id={SPELLS.RENEWING_MIST.id} /> change to now be a 2 charge spell.</>, [Anomoly]),
];