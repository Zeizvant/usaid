export const divideListIntoGroups = (list, numberOfitems) => {
    const groups = []
    for (let i = 0; i < list.length; i += numberOfitems) {
        groups.push(list.slice(i, i + numberOfitems))
      }
      return groups
}