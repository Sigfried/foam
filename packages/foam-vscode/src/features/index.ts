import createReferences from "./wikilink-reference-generation";
import openDailyNote from "./open-daily-note";
import janitor from "./janitor";
import copyWithoutBrackets from './copy-without-brackets';
import dataviz from './dataviz'
import { FoamFeature } from "../types";

export const features: FoamFeature[] = [createReferences, openDailyNote, janitor, copyWithoutBrackets, dataviz];
