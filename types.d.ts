/**
 * Single roll containing a die face and a result 
 */
type Roll = [number, number];

/**
 * A collection of Rolls that will result in a total
 */
type RollGroup = Roll[];

/**
 * A log of RollGroups to be used as a history
 */
type RollLog = RollGroup[];