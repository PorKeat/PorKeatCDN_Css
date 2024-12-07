const styleValue = {
  "ផ្ទៃខាងក្រោយខៀវ": "dodgerblue",
  "ផ្ទៃខាងក្រោយក្រហម": "red",
  "ផ្ទៃខាងក្រោយស": "white",
  "ផ្ទៃខាងក្រោយខ្មៅ": "black",
  "ផ្ទៃខាងក្រោយត្នោត": "brown",
  "ផ្ទៃខាងក្រោយប្រផេះ": "gray",
  "ផ្ទៃខាងក្រោយលឿង": "yellow",
  "ផ្ទៃខាងក្រោយផ្កាឈូក": "pink",
  "ផ្ទៃខាងក្រោយទឹកក្រូច": "orangered",
  "ផ្ទៃខាងក្រោយមាស": "gold",
  "ផ្ទៃខាងក្រោយបៃតង": "green",
  "ផ្ទៃខាងក្រោយស្វាយ": "purple",
  "អក្សរខៀវ": "dodgerblue",
  "អក្សរក្រហម": "red",
  "អក្សរស": "white",
  "អក្សរខ្មៅ": "black",
  "អក្សរត្នោត": "brown",
  "អក្សរប្រផេះ": "gray",
  "អក្សរលឿង": "yellow",
  "អក្សរផ្កាឈូក": "pink",
  "អក្សរទឹកក្រូច": "orangered",
  "អក្សរមាស": "gold",
  "អក្សរបៃតង": "green",
  "អក្សរស្វាយ": "purple",
};

document.querySelectorAll("*").forEach((a) => {
  a.classList.forEach((x) => {
    if (styleValue[x]) {
      if (x.startsWith("ផ្ទៃខាងក្រោយ")) {
        a.style["backgroundColor"] = styleValue[x];
      } else if (x.startsWith("អក្សរ")) {
        a.style.color = styleValue[x];
      }
    }
  });
});

document.querySelectorAll('[class*="ពណ៏-[#"], [class*="ទំហំអក្សរ-["],[class*="ផ្ទៃខាងក្រោយ-[#"]').forEach((a) => {
  const color = a.className.match(/ពណ៏-\[(#[0-9a-fA-F]{3,8})\]/)?.[1];
  const bg_color = a.className.match(/ផ្ទៃខាងក្រោយ-\[(#[0-9a-fA-F]{3,8})\]/)?.[1];
  const fontSize = a.className.match(/ទំហំអក្សរ-\[([^\]]+)\]/)?.[1];

  if (color) a.style.color = color;
  if (bg_color) a.style.backgroundColor = bg_color;
  if (fontSize) a.style.fontSize = fontSize;
});

        
const container = document.querySelector('#បេះដូង');
        
if (container) {
  container.style.width = '100px';
  container.style.height = '90px';
  
  const leftHeart = document.createElement('div');
  leftHeart.style.position = 'absolute';
  leftHeart.style.content = '""';
  leftHeart.style.left = '50px';
  leftHeart.style.top = '0';
  leftHeart.style.width = '50px';
  leftHeart.style.height = '80px';
  leftHeart.style.backgroundColor = 'red';
  leftHeart.style.borderRadius = '50px 50px 0 0';
  leftHeart.style.transform = 'rotate(-45deg)';
  leftHeart.style.transformOrigin = '0 100%';
  container.appendChild(leftHeart);
  
  const rightHeart = document.createElement('div');
  rightHeart.style.position = 'absolute';
  rightHeart.style.content = '""';
  rightHeart.style.left = '0';
  rightHeart.style.top = '0';
  rightHeart.style.width = '50px';
  rightHeart.style.height = '80px';
  rightHeart.style.backgroundColor = 'red';
  rightHeart.style.borderRadius = '50px 50px 0 0';
  rightHeart.style.transform = 'rotate(45deg)';
  rightHeart.style.transformOrigin = '100% 100%';
  container.appendChild(rightHeart);
}

container.style.position = 'relative';

