function superbowlWin(array) {
  const sWin = array.find(obj => obj.result === 'W');
  return sWin ? sWin.year : undefined;
}
