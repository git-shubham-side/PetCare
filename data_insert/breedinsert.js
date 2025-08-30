const mongoose = require("mongoose");
const breed = require("../models/breeds");
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/profile");
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
main();

const breeddata = [
  {
    image:
      "https://girorganic.com/cdn/shop/articles/what-is-gir-cow-453725.jpg?v=1673547600",
    name: "Gir Cow / गिर गाय",
    description:
      "An indigenous dairy breed from Gujarat, known for long ears, domed forehead, and A2 quality milk. Highly tolerant to heat and disease.",
    marathi_desc:
      "गुजरातमधील स्थानिक दुग्धजन्य जात, लांब कान, उंच कपाळ आणि A2 प्रकारच्या दुधासाठी प्रसिद्ध. उष्णता व रोग प्रतिकारक्षम.",
    cat: "cow",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/sahiwal-cattle-cow-600w-2527815883.jpg",
    name: "Sahiwal Cow / सहिवाल गाय",
    description:
      "Originating from Punjab, this calm and high-yielding breed produces nutrient-rich A2 milk. Adaptable to hot climates.",
    marathi_desc:
      "पंजाबमधील शांत स्वभावाची, जास्त दूध देणारी जात, पौष्टिक A2 दूध देते. उष्ण हवामानाशी जुळवून घेणारी.",
    cat: "cow",
  },
  {
    image: "https://kj1bcdn.b-cdn.net/media/68039/red-sindhi-cattle.jpg",
    name: "Red Sindhi Cow / रेड सिंधी गाय",
    description:
      "A hardy reddish-brown breed from Sindh, valued for both milk and draught purposes. Produces A2 milk.",
    marathi_desc:
      "सिंध प्रांतातील तपकिरी-लालसर रंगाची तगडी जात, दूध व ओझे वाहण्यासाठी उपयुक्त. A2 दूध देते.",
    cat: "cow",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JQDZTG9_VL-9sViKk93HjYEE0-zX7h0rNw&s",
    name: "Tharparkar Cow / थारपारकर गाय",
    description:
      "A drought-resistant white or grey breed from Rajasthan’s Thar Desert, used for milk and draught work.",
    marathi_desc:
      "राजस्थानच्या थार वाळवंटातील दुष्काळ सहन करणारी पांढरी/राखाडी जात, दूध व ओझे वाहण्यासाठी वापरली जाते.",
    cat: "cow",
  },
  {
    image: "https://cdn.britannica.com/22/522-050-25222A61/Jersey-cow.jpg",
    name: "Jersey Cow / जर्सी गाय",
    description:
      "A foreign breed from Jersey Island, UK, widely reared in India for its high butterfat milk and adaptability.",
    marathi_desc:
      "जर्सी आयलंड, यूके येथील विदेशी जात, भारतात जास्त प्रमाणात पाळली जाते, जास्त बटरफॅट असलेले दूध व हवामानाशी जुळवून घेण्याची क्षमता.",
    cat: "cow",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVwLBtGIATp60SGbUCgxCWuUhPmq262iiEBAvF61iP5ezoW7ITRIqNgs-N0vueyp8DXJMDCq4uHTUBY6bcK219zg",
    name: "Murrah Buffalo / मुर्रा म्हैस",
    description:
      "The most popular and high-yielding buffalo breed in India, native to Haryana and Punjab. Known for its jet-black color, curled horns, and high-fat milk production.",
    marathi_desc:
      "हरियाणा आणि पंजाबमधील सर्वाधिक दूध देणारी लोकप्रिय म्हैस, गडद काळा रंग, वाकडी शिंगे आणि जास्त फॅट असलेल्या दुधासाठी प्रसिद्ध.",
    cat: "buffalo",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5phXbOCYQJ7b0KARkc07b3pAZ8TzNrQHa-w&s",
    name: "Surti Buffalo / सुरती म्हैस",
    description:
      "Originating from Gujarat, this breed is medium-sized with sickle-shaped horns and produces high-quality milk with good fat content.",
    marathi_desc:
      "गुजरातमधील मध्यम आकाराची जात, वाकडी विळ्यासारखी शिंगे आणि उत्तम दर्जाचे जास्त फॅट असलेले दूध देणारी.",
    cat: "buffalo",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HKrEO09XKmtP9M7NgsEkg1VLuc77LCt81A&s",
    name: "Jaffarabadi Buffalo / जाफराबादी म्हैस",
    description:
      "One of the heaviest buffalo breeds from Gujarat, known for its large body, drooping horns, and rich milk production.",
    marathi_desc:
      "गुजरातमधील सर्वात मोठ्या आकाराची म्हैस, मोठे शरीर, खाली वाकलेली शिंगे आणि जास्त फॅट असलेले दूध देणारी.",
    cat: "buffalo",
  },
  {
    image:
      "https://www.dairyknowledge.in/dkp/sites/default/files/styles/medium_large/public/mehsana_buffalo.jpg?itok=jHuTkAPa",
    name: "Mehsana Buffalo / मेहसाणा म्हैस",
    description:
      "A crossbreed of Murrah and Surti buffaloes from Gujarat, known for regular calving and good milk yield.",
    marathi_desc:
      "गुजरातमधील मुर्रा व सुरती यांचा संकरित प्रकार, नियमित वासरू देणारी आणि चांगले दूध देणारी.",
    cat: "buffalo",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Buffalo_at_Chinawal.jpg/250px-Buffalo_at_Chinawal.jpg",
    name: "Nagpuri Buffalo / नागपुरी म्हैस",
    description:
      "A dual-purpose breed from Maharashtra, suitable for both milk production and draught work, with long flat horns.",
    marathi_desc:
      "महाराष्ट्रातील दूध व ओझे वाहण्यासाठी उपयुक्त अशी जात, लांब आणि सरळ शिंगांसाठी प्रसिद्ध.",
    cat: "buffalo",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWM2RDrMekY9LSOYc8K3Zl3pxtSUJd8tljKU4AegumDWudQR4EtY0MVb0akYJConi3kZE&usqp=CAU",
    name: "Bhadawari Buffalo / भदावरी म्हैस",
    description:
      "Native to Uttar Pradesh and Madhya Pradesh, produces milk with one of the highest fat percentages among buffaloes.",
    marathi_desc:
      "उत्तर प्रदेश आणि मध्य प्रदेशातील जात, म्हशींच्या जातींमध्ये सर्वाधिक फॅट असलेले दूध देणारी.",
    cat: "buffalo",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczJY2TK8mf9MzsdEe8XlSqXjmxlryNYhDFg&s",
    name: "Toda Buffalo / तोडा म्हैस",
    description:
      "A rare breed from Nilgiri Hills in Tamil Nadu, kept mainly by the Toda tribe for milk and cultural purposes.",
    marathi_desc:
      "तामिळनाडूतील निलगिरी टेकड्यांमधील दुर्मिळ जात, तोडा जमातीने दूध व सांस्कृतिक कारणांसाठी पाळलेली.",
    cat: "buffalo",
  },
  {
    image:
      "https://www.apnikheti.com/upload/liveStock/5251idea99Jamunapari-male-Goat.jpg",
    name: "Jamunapari Goat / जामुनापरी शेळी",
    description:
      "Tall and elegant dairy goat breed from Uttar Pradesh, known for high milk yield.",
    marathi_desc:
      "उत्तर प्रदेशातील उंच व शाही शेळी, उच्च दूध उत्पादनासाठी प्रसिद्ध.",
    cat: "goat",
  },
  {
    image:
      "https://www.apnikheti.com/upload/liveStock/8412idea99barbari-male-goat.jpg",
    name: "Barbari Goat / बारबरी शेळी",
    description:
      "Small hardy goat breed from Uttar Pradesh and Rajasthan, dual-purpose for meat and milk.",
    marathi_desc:
      "उत्तर प्रदेश व राजस्थानातील लहान व मजबूत शेळी, मांस व दूध दोन्हीसाठी उपयुक्त.",
    cat: "goat",
  },
  {
    image:
      "https://4.imimg.com/data4/AR/RF/ANDROID-6373247/product-500x500.jpeg",
    name: "Beetal Goat / बीटल शेळी",
    description:
      "Large dual-purpose goat from Punjab, known for milk and meat production.",
    marathi_desc: "पंजाबची मोठी शेळी, दूध व मांस दोन्हीसाठी प्रसिद्ध.",
    cat: "goat",
  },
  {
    image:
      "https://www.apnikheti.com/upload/liveStock/2215idea99black_bengal.jpg",
    name: "Black Bengal Goat / ब्लॅक बंगाल शेळी",
    description:
      "Small breed from West Bengal, prized for meat and skin quality.",
    marathi_desc:
      "पश्चिम बंगालातील लहान शेळी, मांस व कातडी संवेदनासाठी प्रसिद्ध.",
    cat: "goat",
  },
  {
    image:
      "https://www.agrifarming.in/wp-content/uploads/Osmanabadi-Goat-Breed-Profile-Information-3.jpg",
    name: "Osmanabadi Goat / उस्मानाबादी शेळी",
    description: "From Maharashtra; hardy, suitable for both milk and meat.",
    marathi_desc: "महाराष्ट्रातील ताकदवान शेळी, दूध व मांस दोन्हीसाठी उपयुक्त.",
    cat: "goat",
  },
  {
    image:
      "https://www.apnikheti.com/upload/liveStock/2250idea99sirohi-male-goat.jpg",
    name: "Sirohi Goat / सिरोही शेळी",
    description:
      "Adaptable breed from Rajasthan, used for milk in arid climates.",
    marathi_desc:
      "राजस्थानातील जुळणारी शेळी, कोरड्या हवामानात दूधासाठी वापरली जाते.",
    cat: "goat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3V8Uc1G-44s2b2EPeezdylz9CZQ8BGEL5Zw&s",
    name: "Totapari Goat / तोतापरी शेळी",
    description:
      "Dual-purpose breed, primarily from North India, for milk and meat.",
    marathi_desc: "उत्तर भारतातील दुहेरी उद्देशाची शेळी, दूध व मांसासाठी.",
    cat: "goat",
  },
  {
    image:
      "https://i.pinimg.com/736x/e3/23/25/e3232529f5dcc657777be7cf47374f28.jpg",
    name: "Gaddi Goat / गद्दी शेळी",
    description:
      "Hill breed from Himachal Pradesh, valued for wool, meat, and milk.",
    marathi_desc:
      "हिमाचल प्रदेशातील डोंगराळ शेळी, लोकर, दूध व मांसासाठी महत्त्वाची.",
    cat: "goat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvpw-HLq6VJSmpyGxYrWCQZPS9V2TX3ZtSuA&s",
    name: "Kanni Aadu Goat / कन्नी अडू शेळी",
    description:
      "Native to Tamil Nadu, tall and slender, raised mainly for meat.",
    marathi_desc: "तमिळनाडूची उंच व पातळ शेळी, मुख्यतः मांसासाठी पाळली जाते.",
    cat: "goat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gq16OYJnjUeCGZG5jfdztbKwniSZTwDoig&s",
    name: "Mehsana Goat / मेहसाणा शेळी",
    description: "Crossbreed from Gujarat, good milk yielding capacity.",
    marathi_desc: "गुजरातची संकर शेळी, दूध उत्पादनासाठी चांगली.",
    cat: "goat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NYD-bRuX2VjNC3WiDEC9rB7Fy1_gfnjL0A&s",
    name: "Budgerigar / बजरीगर",
    description:
      "Small, colorful, friendly parakeet, one of the most popular pet birds in India.",
    marathi_desc:
      "लहान, रंगीबेरंगी व मैत्रीपूर्ण पोपट, भारतातील अत्यंत लोकप्रिय पाळीव पक्षी.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNitvn4OgcGpfPIu13TQrxjKQ5yZZRM36FgQ&s",
    name: "Indian Ringneck Parakeet / भारतीय रिंगनेक पोपट",
    description:
      "Medium-sized parrot known for its talking ability and colorful appearance.",
    marathi_desc: "मध्य आकाराचा रंगीत पोपट, बोलण्याच्या क्षमतेसाठी प्रसिद्ध.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-131BdPEpDaOmT17nnRM_I8AQ0Xu0KgqXEg&s",
    name: "Cockatiel / कॉकाटील",
    description:
      "Friendly and playful bird with crest, common in Indian homes.",
    marathi_desc:
      "कलगी असलेला मैत्रीपूर्ण व खेळकर पक्षी, भारतीय घरांत सामान्य.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibr84bXhFPMH3z9Okux-VOnsx5zA84BNAiA&s",
    name: "Lovebird / लव्हबर्ड",
    description: "Affectionate small parrot usually kept in pairs.",
    marathi_desc: "प्रेमळ लहान पोपट, सहसा जोडप्यात पाळली जाते.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqDrvMAbuUQjM-3F1NXlW3zM9feOLzxU2DQ&s",
    name: "Zebra Finch / झेब्रा फिंच",
    description: "Small songbird, active and easy to care for.",
    marathi_desc: "लहान गाणारा पक्षी, सक्रिय व सोप्या पालनासाठी.",
    cat: "bird",
  },
  {
    image:
      "https://cdn.britannica.com/33/226533-050-404C15AF/Canary-on-pear-branch.jpg",
    name: "Canary / कॅनरी",
    description: "Bright yellow bird, loved for its melodious singing.",
    marathi_desc: "पिवळ्या रंगाचा पक्षी, मधुर गाण्यासाठी प्रिय.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqHjjoRSw_ZSCmb8JAraHdLzuKaAenkOL8A&s",
    name: "Macaw / मॅकॉ",
    description:
      "Large, colorful parrot, intelligent but requires space and care.",
    marathi_desc: "मोठा, रंगीबेरंगी व हुशार पोपट, जास्त जागा व काळजीची गरज.",
    cat: "bird",
  },
  {
    image:
      "https://pet-health-content-media.chewy.com/wp-content/uploads/2025/04/16171201/202503bec-parrotlet-native-south-america-flickr-1.jpg",
    name: "Parrotlet / छोटा तोता",
    description: "Tiny, energetic, and charming as a pet bird.",
    marathi_desc: "अत्यंत लहान, ऊर्जावान व मोहक पोपट पाळीसाठी.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYzkM7-LfdcIA-3rJtMy4L0ji6DEw7ZxX2w&s",
    name: "Blue-crowned Hanging Parrot / झुलणारा तोता",
    description: "Small, colorful parrot known for its clown-like behavior.",
    marathi_desc: "लहान, रंगीत व हास्यास्पद वर्तनासाठी प्रसिद्ध पोपट.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLd2kwZSG9yCLU4uXM0Z-_MhDuHfPXDaHQ6Q&s",
    name: "Meyer's Parrot / मेयर्स पोपट",
    description: "Compact parrot with pleasant chatter and calm disposition.",
    marathi_desc: "लहान पोपट, सुखद गप्पा व शांत स्वभावासाठी.",
    cat: "bird",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpa1pWFtXklZuQEzpJpm2itl3Iz_vZhDazQ&s",
    name: "Labrador Retriever / लॅब्राडोर रिट्रिव्हर",
    description:
      "Friendly, intelligent, one of India’s most popular family dogs.",
    marathi_desc:
      "मैत्रीपूर्ण, बुद्धिमान व भारतातील एक अत्यंत लोकप्रिय पाळीव कुत्रा.",
    cat: "dog",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX04hff9Jppn12y_X1tIk_ciDRU-ywzwmgbg&s",
    name: "German Shepherd / जर्मन शेफर्ड",
    description:
      "Loyal, protective breed widely used in households and security.",
    marathi_desc:
      "निष्ठावंत, रक्षक स्वभावाचा कुत्रा, घरात व सुरक्षा क्षेत्रात लोकप्रिय.",
    cat: "dog",
  },
  {
    image:
      "https://supertails.com/cdn/shop/articles/golden-retriever_bb80d080-de9e-40e1-b0d8-1d53cb110b64.jpg?v=1751966047",
    name: "Golden Retriever / गोल्डन रिट्रिव्हर",
    description: "Gentle, friendly, great with kids and families.",
    marathi_desc: "नम्र, मैत्रीपूर्ण, मुलांशी व परिवारासोबत उत्कृष्ट.",
    cat: "dog",
  },
  {
    image:
      "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",
    name: "Beagle / बिगल",
    description:
      "Curious, merry dog, known for its sniffing ability and family suitability.",
    marathi_desc:
      "जिज्ञासू, आनंदी कुत्रा, चांगली सुंघण्याची क्षमता व परिवारासाठी योग्य.",
    cat: "dog",
  },
  {
    image:
      "https://cdn05.zipify.com/SeAXrZgkldgROAHxVRkunyo8ph8=/fit-in/3840x0/d72a83335cd5479c869636cea1031e9f/_-pot013-oct-blogs.jpeg",
    name: "Pug / पग",
    description: "Small companion dog, playful and adorable face.",
    marathi_desc: "लहान साथीदार कुत्रा, खेळकर व आकर्षक चेहरा.",
    cat: "dog",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9Bx6Gj3HHQ4GqE30qlewthqsZQFhLVPzEw&s",
    name: "Shih Tzu / शिह त्जु",
    description: "Compact and affectionate toy breed suited for apartments.",
    marathi_desc: "लहान व प्रेमळ टॉय जाती, फ्लॅटमध्ये राहण्यासाठी योग्य.",
    cat: "dog",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-5DVfIvGU56VEO8u1AXj077RspmH8t5D7A&s",
    name: "Pomeranian / पोमेरेनियन",
    description: "Tiny, energetic, and loyal companion dog.",
    marathi_desc: "अत्यंत लहान, ऊर्जा भरपूर व निष्ठावंत साथीदार कुत्रा.",
    cat: "dog",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2s_jHcB4ILFA6AswuXxUe3EFFMVkQAZVpw&s",
    name: "Dachshund / डॅक्सहाउंड",
    description: "Long-bodied, brave, and affectionate dog breed.",
    marathi_desc: "लांब शरीराची, धैर्यशील व प्रेमळ जाती.",
    cat: "dog",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcNEk_AYJ1ZGbC_SRLsmXvWnnD376hlzwuA&s",
    name: "Boxer / बॉक्सर",
    description: "Active, protective, and loving family dog.",
    marathi_desc: "सक्रिय, रक्षक व प्रेमळ पारिवारिक कुत्रा.",
    cat: "dog",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9k23JPPGfTgAuktJ9eh0AJFjh65EPHdO0_A&s",
    name: "Indian Pariah Dog / भारतीय परिया कुत्रा",
    description: "Native Indian breed, intelligent, hardy, and loyal.",
    marathi_desc: "स्थानिक भारतीय जाती, बुद्धिमान, ताकदवान व निष्ठावंत.",
    cat: "dog",
  },
  {
    image:
      "https://breed-assets.wisdompanel.com/cat/indian-street-cat/Indian_Street.png",
    name: "Indian Billi / भारतीय मांजर",
    description: "Common domestic street cat in India—resilient and adaptable.",
    marathi_desc:
      "भारताचा सर्वसामान्य पाळीव रस्त्यावरील मांजर—सहनशील व जुळवून घेण्याची क्षमता.",
    cat: "cat",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/1199/8502/files/persian-doll-face.jpg",
    name: "Persian Cat / पर्शियन मांजर",
    description: "Long-haired, calm, and affectionate luxury cat breed.",
    marathi_desc: "लांब केसांची, शांत व प्रेमळ शोभेची मांजर.",
    cat: "cat",
  },
  {
    image:
      "https://mlo1wbhvgmgt.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://pethero.co.za/wp-content/uploads/2016/02/Siamese-Cat-Blog-Banner.png",
    name: "Siamese Cat / सायमीज मांजर",
    description: "Vocal, affectionate, with striking blue eyes and sleek body.",
    marathi_desc: "आवाज करणारी, प्रेमळ, निळी डोळे व सडपातळ शरीर.",
    cat: "cat",
  },
  {
    image:
      "https://image.petmd.com/files/styles/863x625/public/2023-04/bengal-cat-breed.jpg",
    name: "Bengal Cat / बंगाल मांजर",
    description: "Exotic-looking, active, and playful cat breed.",
    marathi_desc: "दुर्लभ दिसण्याचे, सक्रिय व खेळकर मांजर.",
    cat: "cat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHe3MKngzML1hyAOr3cF_dRd4jGk5WSA-aQ&s",
    name: "Bombay Cat / बॉम्बे मांजर",
    description: "Sleek black coat, affectionate and easygoing breed.",
    marathi_desc: "सडपातळ काळा रंग, प्रेमळ व सौम्य स्वभावाची.",
    cat: "cat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_qOpDep9lPToENDXVFAZapLTngL02JSygw&s",
    name: "Abyssinian / अबिसिनियन मांजर",
    description: "Short-haired, active, and curious breed.",
    marathi_desc: "लहान केसांची, सक्रिय व जिज्ञासू जाती.",
    cat: "cat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_feeBnI5FHvsiFdjv_kJ6zgYs3TBmPxx2Gg&s",
    name: "Maine Coon / मेन कून मांजर",
    description: "Large, friendly, and fluffy cat breed.",
    marathi_desc: "मोठे, मैत्रीपूर्ण व मऊ केसांचे मांजर.",
    cat: "cat",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ragdoll_from_Gatil_Ragbelas.jpg/640px-Ragdoll_from_Gatil_Ragbelas.jpg",
    name: "Ragdoll / रॅगडॉल मांजर",
    description: "Gentle, affectionate, and ideal indoor companion.",
    marathi_desc: "नम्र, प्रेमळ व घरात ठेवण्यासाठी आदर्श.",
    cat: "cat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4EfGqKwLzucH0v_qn4hTfcBMcPdib0ceBw&s",
    name: "Himalayan / हिमालयन मांजर",
    description: "Persian-Siamese mix with long coat and sweet temper.",
    marathi_desc: "पर्शियन-सायमीज संकर, लांब केस व मृदू स्वभाव.",
    cat: "cat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u4n6VsF4s63uvjoMwMrLF9Ct4HVeu_Mq6g&s",
    name: "American Bobtail / अमेरिकन बॉबटेल मांजर",
    description: "Playful and intelligent short-tailed cat breed.",
    marathi_desc: "खेळकर व हुशार कमी शेपूट असलेली जाती.",
    cat: "cat",
  },
];

breed
  .insertMany(breeddata)
  .then(() => {
    console.log("Data Inserted");
  })
  .catch((err) => {
    console.log(err);
  });

// breed
//   .deleteMany({})
//   .then((res) => {
//     console.log("data deleted");
//   })
//   .catch((err) => {
//     console.log("Err");
//   });
