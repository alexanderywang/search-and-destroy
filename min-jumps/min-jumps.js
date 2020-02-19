"use strict";

// Complete this algo
const minJumps = arr => {
  let jump = 1;
  if (arr.length < 1) return 0;
  if (arr[0] >= arr.length - 1) return 1;
  let nextJump = arr.slice(1, arr[0] + 1);
  let max = Math.max(...nextJump);
  // console.log("TCL: max", max);
  let nextJumpIndex = arr.indexOf(max);
  // console.log("TCL: nextJumpIndex", nextJumpIndex);

  jump += minJumps(arr.slice(nextJumpIndex));
  return jump;
};

module.exports = minJumps;
