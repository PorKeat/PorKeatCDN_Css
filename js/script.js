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
  "ផ្ទៃខាងក្រោយផ្សែងបារី": "whitesmoke",
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
  "អក្សរផ្សែងបារី": "whitesmoke",
  "ស៊ុមខៀវ": "dodgerblue",
  "ស៊ុមក្រហម": "red",
  "ស៊ុមស": "white",
  "ស៊ុមខ្មៅ": "black",
  "ស៊ុមត្នោត": "brown",
  "ស៊ុមប្រផេះ": "gray",
  "ស៊ុមលឿង": "yellow",
  "ស៊ុមផ្កាឈូក": "pink",
  "ស៊ុមទឹកក្រូច": "orangered",
  "ស៊ុមមាស": "gold",
  "ស៊ុមបៃតង": "green",
  "ស៊ុមស្វាយ": "purple",
  "ស៊ុមផ្សែងបារី": "whitesmoke",
};

const flexValue = {
  "នៅចំកណ្ដាលនៃអេក្រង់": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  "ជួរឈរ": {
    display: "flex",
    flexDirection: "column",
  },
  "អក្សរនៅកណ្ដាល": {
    textAlign: "center",
  },
  "គ្មានស៊ុម": {
    border: "none",
  },
  "ម៉ៅចង្អុល": {
    cursor: "pointer",
  },
  "ម៉ៅទូទៅ": {
    cursor: "default",
  }
};



document.querySelectorAll("*").forEach((a) => {
  a.style.margin = "0";
  a.style.padding = "0";
  a.style.boxSizing = "border-box";
  a.classList.forEach((x) => {
    if (styleValue[x]) {
      if (x.startsWith("ផ្ទៃខាងក្រោយ")) {
        a.style["backgroundColor"] = styleValue[x];
      } else if (x.startsWith("អក្សរ")) {
        a.style.color = styleValue[x];
      } else if (x.startsWith("ស៊ុម")) {
        a.style.borderColor = styleValue[x];
      }
    } else if (flexValue[x]) {
      for (var key in flexValue[x]) {
        console.log(key);
        a.style[key] = flexValue[x][key];
        console.log(flexValue[x][key]);
      }
    }
  });
});


document
  .querySelectorAll(
    '[class*="អក្សរ-[#"], [class*="ទំហំអក្សរ-["], [class*="ផ្ទៃខាងក្រោយ-[#"], [class*="ក្បាច់អក្សរ-["], [class*="កម្ពស់-["], [class*="ប្រវែង-["],[class*="ចន្លោះខាងក្រៅ-["],[class*="ចន្លោះខាងក្នុង-["],[class*="កេមស៊ុម-["], [class*="ទំហំស៊ុម-["], [class*="ពណ៌ស៊ុម-["], [class*="ស្តាយស៊ុម-["],[class*="កម្រាស់អក្សរ-["]'
  )
  .forEach((a) => {
    const styles = {
      color: a.className.match(/អក្សរ-\[(#[0-9a-fA-F]{3,8})\]/)?.[1],
      backgroundColor: a.className.match(/ផ្ទៃខាងក្រោយ-\[(#[0-9a-fA-F]{3,8})\]/)?.[1],
      fontSize: a.className.match(/ទំហំអក្សរ-\[([^\]]+)\]/)?.[1],
      fontFamily: a.className.match(/ក្បាច់អក្សរ-\[([^\]]+)\]/)?.[1],
      height: a.className.match(/កម្ពស់-\[([^\]]+)\]/)?.[1],
      width: a.className.match(/ប្រវែង-\[([^\]]+)\]/)?.[1],
      borderWidth: a.className.match(/ទំហំស៊ុម-\[([^\]]+)\]/)?.[1],
      borderRadius: a.className.match(/កេមស៊ុម-\[([^\]]+)\]/)?.[1],
      borderColor: a.className.match(/ពណ៌ស៊ុម-\[([^\]]+)\]/)?.[1],
      borderStyle: a.className.match(/ស្តាយស៊ុម-\[([^\]]+)\]/)?.[1],
      fontWeight: a.className.match(/កម្រាស់អក្សរ-\[([^\]]+)\]/)?.[1],
    };

    const spacingStyles = {
      margin: a.className.match(/ចន្លោះខាងក្រៅ-\[([^\]]+)\]/),
      padding: a.className.match(/ចន្លោះខាងក្នុង-\[([^\]]+)\]/),
    }

    for (const spaceKey in spacingStyles) {
      if (spacingStyles[spaceKey]) {
        const values = spacingStyles[spaceKey][1].split("_"); // split shorthand into value
        styles[spaceKey] = values.join(" "); // convert to "10px 0 10px 0"
      }
    }

    for (const key in styles) {
      if (styles[key]) {
        a.style[key] = styles[key];
      }
    }
  });


const container = document.querySelector("#បេះដូង");

if (container) {
  container.style.width = "100px";
  container.style.height = "90px";

  const leftHeart = document.createElement("div");
  leftHeart.style.position = "absolute";
  leftHeart.style.content = '""';
  leftHeart.style.left = "50px";
  leftHeart.style.top = "0";
  leftHeart.style.width = "50px";
  leftHeart.style.height = "80px";
  leftHeart.style.backgroundColor = "red";
  leftHeart.style.borderRadius = "50px 50px 0 0";
  leftHeart.style.transform = "rotate(-45deg)";
  leftHeart.style.transformOrigin = "0 100%";
  container.appendChild(leftHeart);

  const rightHeart = document.createElement("div");
  rightHeart.style.position = "absolute";
  rightHeart.style.content = '""';
  rightHeart.style.left = "0";
  rightHeart.style.top = "0";
  rightHeart.style.width = "50px";
  rightHeart.style.height = "80px";
  rightHeart.style.backgroundColor = "red";
  rightHeart.style.borderRadius = "50px 50px 0 0";
  rightHeart.style.transform = "rotate(45deg)";
  rightHeart.style.transformOrigin = "100% 100%";
  container.appendChild(rightHeart);
}

container.style.position = "relative";
