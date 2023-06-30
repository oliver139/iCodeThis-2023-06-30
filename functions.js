window.onload = async e => {
  document.querySelector(".chart-container").classList.add("show");
  document.querySelector(".vs-info").classList.add("show");
  await sleep(400);
  const chart = [
    [[1, 2], [2, 2], [3, 1], [4, 1], [5, 0], [6, 3]],
    [[1, 3], [2, 5], [3, 0], [4, 4], [5, 2], [6, 1]],
  ];
  
  for (let i = 0; i < chart.length; i++) {
    const path = [];
    for (let j = 0; j < chart[i].length; j++) {
      const point = chart[i][j];
      svgPointControl(path, point[0], point[1], j === 0);
    }
    const radar = document.getElementById(`radar${i+1}`);
    radar?.setAttribute("d", path.join(" "));
    radar?.classList.add("show");
    await sleep(400);
  }
}

const svgPointControl = (pathArray, sector, point, initialize = false) => {
  let radius = point + .5;
  let angle = 60 * (sector - 1);
  let action = initialize ? "M" : "L";
  pathArray.push(action, radius * Math.cos(angle * Math.PI/180), radius * Math.sin(angle * Math.PI/180));
}

const sleep = async sec => {
  await new Promise(resolve => setTimeout(resolve, sec));
}
