const { MongoClient } = require("mongodb");
const uri="mongodb+srv://baldeepsharma:fullstack@cluster0.nw8eqzz.mongodb.net/";
const MongoScript = async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("[Connected to mongodb]");
    const db = client.db("Urban-attire");
    const dbCollectionList = [
      "users",
      "userData",
      "clothes",
      "productStock",
      "cart",
    ];
    for (let collectionName of dbCollectionList) {
      const collection = db.collection(collectionName);
      await collection.deleteMany({});
      console.log(`cleared collection:${collectionName}`);
    }
    const clothDB = [
      {
        product_id: 1,
        product_name: "Summer Floral Tops ",
        product_category: "Girl",
        product_price: "$14.50",
        product_longDescription:
          "womens western tops womens resort wear 2024 womens summer shirts blouses for women casual plus size tshirts for women summer shirts women summer tops womens tees womens tshirt cute summer tops for women casual shirts for women beach clothes plus size summer tops women's summer tops short sleeve tunic tops for women women's tops",
        product_shortDescription:
          "for women boho tops for women womens tops casual tunic tops tops for women basics womens clothing womens fashion 2024 work clothes for women 2024 oversized shirts for women",
        occassion: "casual shirts",
        product_image_url: "/Images/product1.jpg",
      },
      {
        product_id: 2,
        product_name: "Tanst Sky Womens Long Sleeve ",
        product_category: "Women",
        product_price: "$33.99",
        product_longDescription:
          "Fashion Blouses for Women Buffalo Plaid Shirts Zip Up V Neck Roll Sleeve Tunic Tops for Leggings for Women Figure Flattering Style Casual and Simple Tunic Loose Fit Clothes.",
        product_shortDescription:
          "The Rolled Sleeves with Buckle Loops to Let You Make It 3/4 Sleeve Or Long Sleeve According To The Weather.suits for spring,autumn,winter.",
        occassion: "You can Wear it for Home,Office and Casual.",
        product_image_url: "/Images/product2.jpg",
      },
      {
        product_id: 3,
        product_name: "Tunic Tops Summer",
        product_category: "Women",
        product_price: "$10.99",
        product_longDescription:
          "Womens Summer Tunic Tops, Short Sleeve Shirt, Split V Neck, Solid Tunics Tops, Flare Ruffle Swing Tops, Summer T-Shirt Blouse, Ladies Tunic Tops for Leggings, Loose Fit Style, Casual Tunic Tops for Women, T Shirt for Women, Length Can Cover The Hips.",
        product_shortDescription:
          "The material of women summer tunic tops is Ultra-light, comfortable, good stretch and skin-friendly",
        occassion:
          " Women tunic tops suitable for daily wear, travel, running, playing ball, dancing, cycling, hiking, walking, exercising, home, for spring, summer and fal",
        product_image_url: "/Images/product3.jpg",
      },
      {
        product_id: 4,
        product_name: "COOFANDY Men's Shirt",
        product_category: "Men",
        product_price: "$33.29",
        product_longDescription:
          "Designed for year-round wear,COOFANDY button up wrinkle-free dress shirt is tailored for comfort and breathability.Ideal for layering in cooler weather or standing alone during warmer days, it adapts to your needs while maintaining a smart appearance.",
        product_shortDescription:
          "HIGH-QUALITY MATERIAL-Experience unmatched quality with our Men's Casual Long Sleeve Stretch Dress Shirt with Pocket. ",
        occassion:
          "CASUAL & FASHION-Elevate your style effortlessly with COOFANDY wrinkle free dress shirt's modern twist on classic design",
        product_image_url: "/Images/product4.jpg",
      },
      {
        product_id: 5,
        product_name: "BUXUIEY Men's Polo Shirts Short",
        product_category: "Men",
        product_price: "$32.99",
        product_longDescription:
          "polo shirts for men,short sleeve shirts for men,men's slim fit t shirt,basic designed top for men.Say goodbye to boring V-neck shirts for men. Our polo shirts with a zipper adds a touch of modern sophistication to your look.",
        product_shortDescription:
          "The Men's Zipper Polo Shirt is made of Stretch Ribbed Knit.Soft, elastic, skin friendly and lightweight are the biggest advantages of this shirt.",
        occassion:
          "An elegant and comfortable men's shirt is an excellent choice for any occasion.Such as dating, vacation, party, golf wearing, daily life, office, indoor and outdoor activities.",
        product_image_url: "/Images/product5.jpg",
      },
      {
        product_id: 6,
        product_name: "LVCBL Mens Linen Shirts",
        product_category: "Men",
        product_price: "$22.00",
        product_longDescription:
          "Simple and stylish mens kent collar linen short sleeve shirt is one of the essential styles in men's wardrobes. Moreover, with the cardigan style shirt, you can freely match with your favorite t-shirt or vest",
        product_shortDescription:
          "Our casual linen mens shirt is made of 75% cotton and 25% linen . Careful manufacturing and high quality raw materials make it more durable, skin-friendly and non-irritating",
        occassion:
          "It is very suitable for everyday casual wear, be it at work, in the office or in business, on vacation, in the club, at parties, when dating, during outdoor activities, playing sports, on the beach, on the street, at home, etc.",
        product_image_url: "/Images/product6.jpg",
      },
      {
        product_id: 7,
        product_name: "Ecojoy Girls Ball Gown Bow Dress",
        product_category: "Kids",
        product_price: "$17.97",
        product_longDescription:
          "Ball gown Get ready to twirl like never before! This glamorous ball gown is every girl's dream come true. The flowing layers of chiffon or satin will give you ethereal vibes, making you feel like a modern-day princess at any event. ",
        product_shortDescription:
          "Lace, Polyester, Sparkly tulle, Cotton. Cotton lined for a smooth and comfortable fit.",
        occassion:
          "Available for wedding, bridesmaid, birthday party, ceremony, pageant, prom, photo shoot, evening, recital, reception, daddy daughter dance, graduation, banquet, photography, holiday, Christmas, Halloween, New Year, Easter, celebration, gala, vacation",
        product_image_url: "/Images/product7.jpg",
      },
      {
        product_id: 8,
        product_name: "Flypigs Toddler Dress Girls",
        product_category: "Kids",
        product_price: "$25.99",
        product_longDescription:
          "Little girls party dress featured Pull-on style for easy dressing, fashionable and classic to be an essential part of your girl's outfit",
        product_shortDescription:
          "60% polyester & 35% cotton & 5 %spandex, lightweight and stretchy cotton of the toddler tutu dress",
        occassion:
          "Tulle dress perfect for Birthday, Casual, Holiday, Role Playing, Photoshoots, Outfits, Park, Party, School, Home, Outdoors Wedding Party, and More",
        product_image_url: "/Images/product8.jpg",
      },
      {
        product_id: 9,
        product_name: "Arshiner Girls Summer Dress",
        product_category: "Kids",
        product_price: "$35.99",
        product_longDescription:
          "This cute and sweet solid midi dress featuring casual and elegant style,a-line silhouette irregular high-low hem, cold shoulder design,ruched elastic seam flutter sleeve,underline the cute look of the fashion dress,two side hidden pockets,length above the knee",
        product_shortDescription:
          "The party dress made of 95% Polyester and 5% Spandex fabric,elastic and skin-friendly, comfortable to wear,durable stitching, ideal summer girls dresses",
        occassion:
          " many occasions:backyard wedding,festival, party,perform,dance,birthday,outdoor,picnic,school etc.It is the best choice for girls daily dresses and speciel festival dress",
        product_image_url: "/Images/product9.jpg",
      },
      {
        product_id: 10,
        product_name: "ANRABESS Women's Floral Midi",
        product_category: "Long Dress",
        product_price: "$79.77",
        product_longDescription:
          "This dress is a woman's romantic dream, in such a nice weather, you should wear it, the printing is retro and magnificent, and the color is gorgeous and elegant, looks very lovely and beautiful, soft, comfortable and airy for fall and sprint,when you wear this dress you will attracting more attention",
        product_shortDescription:
          " this elegant midi dress is ANRABESS recommendation,which featured sheer sleeve without lined,ruffle trim neckine,smocked and pleated A-Line body shape,chiffon fabrication make flowy swing skirt",
        occassion:
          "This boho floral dress is so perfect for beach, casual, work and party and any events.",
        product_image_url: "/Images/product10.jpg",
      },
      {
        product_id: 11,
        product_name: "ININ Women 2024 Fall Midi ",
        product_category: "Long Dress",
        product_price: "$58.99",
        product_longDescription:
          "Women dress, v neck, long sleeve, a-line, midi length, smocked design, lantern sleeve, solid color, casual style, women clothing trendy 2024",
        product_shortDescription:
          "Lantern long sleeve casual dress is made of 100% polyester, soft, lightweight and breathable, comfortable to wear all day",
        occassion:
          "This v neck midi dress is perfect for casual, daily, vacation, holiday, wedding, party, dating, work, family gathering, maternity photos",
        product_image_url: "/Images/product11.jpg",
      },
      {
        product_id: 12,
        product_name: "MOLERANI Women  Dresses",
        product_category: "Long Dress",
        product_price: "$19.99",
        product_longDescription: "Swing flowy dress, V-Neck, a line dress features long sleeves and decoration buttons, plus a functional pocket. It is great for carrying your phone or useful items. The softly gathered waistline creates natural pleating to let you look more slender and can Hide Your Bumps Area Well.",
        product_shortDescription: "This Autumn and Winter dress for Women is 90%Polyester+10%Spandex. The Fabric is Lightweight, Loose, Stretchy, and Soft. It's Comfy Against the Skin.",
        occassion: "his long sleeve dress suit is for Daily wear, party, homes, Offices, Vacations, schools, Shopping, and Travel. Various holidays such as Halloween, Thanksgiving, Christmas",
        product_image_url: "/Images/product12.jpg",
      },
    ];
    await db.collection("clothes").insertMany(clothDB);
    const count = await db.collection("clothes").countDocuments();
    console.log(`Inserted ${count} documents into 'clothes' collection.`);
    await db.collection("users").createIndex({ user_id: 1 }),
      await db.collection("users").createIndex({ userName: 1 }),
      await db.collection("users").createIndex({ password: 1 }),
      await db.collection("userData").createIndex({ user_id: 1 }),
      await db.collection("userData").createIndex({ name: 1 }),
      await db.collection("userData").createIndex({ phone: 1 }),
      await db.collection("userData").createIndex({ address: 1 }),
      await db.collection("userData").createIndex({ email: 1 }),
      await db.collection("userData").createIndex({ dob: 1 }),
      await db.collection("clothes").createIndex({ product_id: 1 });
    await db.collection("clothes").createIndex({ product_name: 1 });
    await db.collection("clothes").createIndex({ product_category: 1 }),
      await db.collection("clothes").createIndex({ product_price: 1 }),
      await db
        .collection("clothes")
        .createIndex({ product_shortDescription: 1 });
    await db.collection("clothes").createIndex({ product_longDescription: 1 });
    await db.collection("clothes").createIndex({ occassion: 1 });
    await db.collection("clothes").createIndex({ product_image_url: 1 });

    await db.collection("productStock").createIndex({ product_id: 1 });
    await db.collection("productStock").createIndex({ available_quantity: 1 });
    await db.collection("cart").createIndex({ product_id: 1 });
  } catch (error) {
    console.log("error");
  }finally{
    client.close();
  }
};

MongoScript();
