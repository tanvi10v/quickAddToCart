// Referenced: https://github.com/maciejcieslar/OCR
import tesseract from "tesseract.js";

(tesseract as any).workerOptions.workerPath =
  "http://localhost:8080/worker.min.js";

// API that will return the last buy of the product per user and if not available, then it will be the bestseller in category
const lastOrderPerUser = [
  // {
  //   title: "MasterChow Japanese Ramen Noodles",
  //   img: "./img/noodles.jpg",
  //   type: "Ramen noodles",
  // },
  // {
  //   title: "Preserved Black Beans",
  //   img: "./img/blackBeans.jpg",
  //   type: "black beans",
  // },
  // {
  //   title: "King Breakfast Cereals Strawberry Muesli",
  //   img: "./img/cereals.jpg",
  //   type: "cereal",
  // },
  // {
  //   title: "Jioo Organics Standard Cornmeal",
  //   img: "./img/blackBeans.jpg",
  //   type: "cornmeal",
  // },
  // {
  //   title: "CROWN English crackers packet",
  //   img: "./img/crakers.jpg",
  //   type: "crackers",
  // },
  // {
  //   title: "Saffola Oats",
  //   img: "./img/oats.jpg",
  //   type: "oats",
  // },
  // {
  //   title: "Weikfield High Protein Penne Pasta",
  //   img: "./img/pasta.jpg",
  //   type: "pasta(s)",
  // },
  {
    title: "Pinto GOYA Pack ",
    img: "./img/pintoBeans.jpg",
    type: "pinto beans",
  },
];

const bestSellerProducts = [
  {
    title: "ACT II Microwave Popcorn",
    img: "./img/popcorns.jpg",
    type: "popcorn",
  },
  {
    title: "Green Habit Organic White Quinoa ",
    img: "./img/quinoa.jpg",
    type: "Quinoa",
  },
  {
    title: "Shri Ram Agro Foods",
    img: "./img/redBeans.jpg",
    type: "red beans",
  },
  {
    title: "BB Royal Sona Masoori Raw Rice",
    img: "./img/rice.jpg",
    type: "rice",
  },
  {
    title: "Whole Wheat Atta (Sharbati) ",
    img: "./img/wheat.jpg",
    type: "wheat",
  },
];

const getRefinedExtractedTextList = (extractedTextList: any) => {
  let refinedExtractedTextList: any = [];
  extractedTextList.map((item: any) => {
    const texts = item.text.split("\n").filter((i: any) => i != "");
    refinedExtractedTextList = refinedExtractedTextList.concat(texts);
  });
  return refinedExtractedTextList;
};

const addToCart = (img: any) => {
  const cartItemPlaceholder: any = document.querySelector("#cart-item-dummy");
  const cloneCartItemPlaceholder: any = cartItemPlaceholder.cloneNode(true);
  cloneCartItemPlaceholder.removeAttribute("id");
  cloneCartItemPlaceholder
    .querySelector("#cart-item-img")
    .setAttribute("src", img);
  const cartSection: any = document.querySelector("#cart");
  cartSection.appendChild(cloneCartItemPlaceholder);
};

const filterProductListToAddInCart = (refinedProductList: any) => {
  refinedProductList.forEach((product: any) => {
    const productInLastOrder: any = lastOrderPerUser.filter(
      (order) => product === order.type
    )[0];
    if (productInLastOrder) {
      addToCart(productInLastOrder.img);
    } else {
      const productInBestSeller: any = bestSellerProducts.filter(
        (bestSellerProduct) => product === bestSellerProduct.type
      )[0];
      if (productInBestSeller) addToCart(productInBestSeller.img);
    }
  });
};

const setImageSrc = (image: HTMLImageElement, imageFile: File) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();

    fr.onload = function () {
      if (typeof fr.result !== "string") {
        return reject(null);
      }

      image.src = fr.result;

      return resolve();
    };

    fr.onerror = reject;

    fr.readAsDataURL(imageFile);
  });
};

const recognitionImageInputElement = document.querySelector(
  "#recognition-image-input"
) as HTMLInputElement;
const recognitionConfidenceInputElement = document.querySelector(
  "#recognition-confidence-input"
) as HTMLInputElement;
const recognitionProgressElement = document.querySelector(
  "#recognition-progress"
);
const recognitionTextElement = document.querySelector("#recognition-text");

const originalImageElement = document.querySelector("#original-image");
const labeledImageElement = document.querySelector("#labeled-image");

if (
  !recognitionImageInputElement ||
  !recognitionTextElement ||
  !originalImageElement ||
  !labeledImageElement ||
  !recognitionProgressElement ||
  !recognitionConfidenceInputElement
) {
  throw new Error("Missing elements");
}

recognitionImageInputElement.addEventListener("change", () => {
  if (!recognitionImageInputElement.files) {
    return null;
  }

  const file = recognitionImageInputElement.files[0];

  return tesseract
    .recognize(file, {
      lang: "eng",
    })
    .progress(({ progress, status }) => {
      if (!progress || !status || status !== "recognizing text") {
        return null;
      }

      const p = (progress * 100).toFixed(2);

      recognitionProgressElement.textContent = `${status}: ${p}%`;
      (recognitionProgressElement as any).value = p;
    })
    .then(async (res) => {
      originalImageElement.innerHTML = "";
      labeledImageElement.innerHTML = "";
      recognitionTextElement.innerHTML = "";

      const paragraphsElements = res.paragraphs.map(({ text }) => {
        const p = document.createElement("p");

        p.textContent = text;

        return p;
      });

      recognitionTextElement.append(...paragraphsElements);

      const refinedProductList = getRefinedExtractedTextList(res.paragraphs);
      filterProductListToAddInCart(refinedProductList);

      const originalImage = document.createElement("img");

      await setImageSrc(originalImage, file);

      const labeledImage = originalImage.cloneNode(true);

      const wordsElements = res.words
        .filter(({ confidence }) => {
          return (
            confidence > parseInt(recognitionConfidenceInputElement.value, 10)
          );
        })
        .map((word) => {
          const div = document.createElement("div");
          const { x0, x1, y0, y1 } = word.bbox;

          div.classList.add("word-element");

          Object.assign(div.style, {
            top: `${y0}px`,
            left: `${x0}px`,
            width: `${x1 - x0}px`,
            height: `${y1 - y0}px`,
            border: "1px solid black",
            position: "absolute",
          });

          return div;
        });

      originalImageElement.appendChild(originalImage);
      labeledImageElement.appendChild(labeledImage);
      labeledImageElement.append(...wordsElements);
    });
});
