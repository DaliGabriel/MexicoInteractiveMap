"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import InfoModal from "@/components/InfoModal";

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p className="text-center mt-80">Loading...</p>,
});

// You would define this type and populate data for all states
type StateInfo = {
  name: string;
  overview: string;
  capital: string;
  population: string;
  economy: string;
  attractions: string[];
  culture: string;
  education: string[];
  funFacts: string[];
};

const statesInfo: Record<string, StateInfo> = {
  Jalisco: {
    name: "Jalisco",
    overview:
      "Jalisco is one of Mexico's most significant states, known for its rich history, geography, and cultural importance. It's considered the birthplace of many key Mexican cultural elements, such as mariachi music, tequila, and the Mexican hat dance.",
    capital: "Guadalajara",
    population: "Approximately 8.4 million",
    economy:
      "Diversified, including agriculture (notably tequila production), manufacturing (electronics, automotive), and technology. Guadalajara is often referred to as the 'Silicon Valley of Mexico'.",
    attractions: [
      "Tequila (UNESCO World Heritage site)",
      "Puerto Vallarta",
      "Lake Chapala",
      "Guachimontones Pyramids",
      "Guadalajara's historic downtown",
    ],
    culture:
      "Home to mariachi music, tequila production, and traditional cuisine like birria, torta ahogada, and pozole.",
    education: [
      "University of Guadalajara (UdeG)",
      "Tecnológico de Monterrey - Guadalajara Campus",
      "Universidad Autónoma de Guadalajara (UAG)",
    ],
    funFacts: [
      "Jalisco is the only place where authentic tequila can be produced.",
      "Guadalajara is home to Chivas, one of Mexico's most popular soccer teams.",
    ],
  },
  Michoacán: {
    name: "Michoacán",
    overview:
      "Michoacán is located in western Mexico, known for its rich indigenous heritage and colonial history. It was home to the Purépecha Empire, one of the most advanced pre-Columbian civilizations. The state's geography includes coastal regions, fertile valleys, and mountainous highlands.",
    capital: "Morelia",
    population: "Approximately 4.8 million",
    economy:
      "Heavily based on agriculture, particularly avocado production. Other important sectors include fishing, mining, and craft industries.",
    attractions: [
      "Morelia's Historic Center (UNESCO World Heritage site)",
      "Pátzcuaro and Lake Pátzcuaro",
      "Monarch Butterfly Biosphere Reserve",
      "Santa Clara del Cobre",
      "Paricutín Volcano",
    ],
    culture:
      "Home to the Purépecha people, with strong traditions around the Day of the Dead. Famous for dishes like corundas, uchepos, and carnitas.",
    education: [
      "Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)",
      "Instituto Tecnológico de Morelia",
      "Universidad Vasco de Quiroga (UVAQ)",
    ],
    funFacts: [
      "Michoacán is the world's leading producer of avocados.",
      "The Monarch Butterfly migration to Michoacán is one of the most spectacular natural phenomena.",
    ],
  },
  Zacatecas: {
    name: "Zacatecas",
    overview:
      "Zacatecas is located in north-central Mexico, known for its rich mining history and well-preserved colonial architecture. It was a key mining center during the Spanish colonial period, producing vast amounts of silver. Zacatecas also played a pivotal role in Mexico’s independence and revolution.",
    capital: "Zacatecas City",
    population: "Approximately 1.6 million",
    economy:
      "Zacatecas’ economy is driven by mining, particularly silver, gold, zinc, and lead. Agriculture, including cattle ranching and the production of beans, chili, and corn, is also significant. Tourism is growing due to its cultural heritage.",
    attractions: [
      "Cerro de la Bufa",
      "Zacatecas Cathedral (UNESCO World Heritage site)",
      "Mina El Edén",
      "La Quemada archaeological site",
      "Museo Rafael Coronel",
    ],
    culture:
      "Zacatecas is known for its Cultural Festival in April, tamborazo music, and traditional dishes such as asado de boda and enchiladas zacatecanas. The state also produces high-quality mezcal.",
    education: [
      "Universidad Autónoma de Zacatecas (UAZ)",
      "Tecnológico de Monterrey - Zacatecas Campus",
      "Instituto Politécnico Nacional - Unidad Zacatecas",
    ],
    funFacts: [
      "Zacatecas is one of the world's largest producers of silver.",
      "The Battle of Zacatecas in 1914 was a key turning point in the Mexican Revolution.",
    ],
  },
  Yucatán: {
    name: "Yucatán",
    overview:
      "Yucatán is located in southeastern Mexico on the Yucatán Peninsula. Known for its rich Mayan heritage, the state is home to ancient ruins and unique culture. It has a flat landscape, underground rivers, and cenotes, which are natural sinkholes sacred to the Maya.",
    capital: "Mérida",
    population: "Approximately 2.3 million",
    economy:
      "Yucatán's economy is based on tourism, agriculture (especially henequen and citrus fruits), and services. Tourism is driven by its Mayan archaeological sites and colonial towns.",
    attractions: [
      "Chichen Itzá (UNESCO World Heritage site)",
      "Uxmal",
      "Cenotes of Dzitnup and Ik Kil",
      "Mérida’s Historic Center",
      "Celestún Biosphere Reserve",
    ],
    culture:
      "Yucatán is renowned for its Mayan heritage, with cultural festivals, traditional dances like jarana, and cuisine including cochinita pibil, panuchos, and sopa de lima. It also has strong influences from Spanish colonialism.",
    education: [
      "Universidad Autónoma de Yucatán (UADY)",
      "Instituto Tecnológico de Mérida",
      "Universidad Anáhuac Mayab",
    ],
    funFacts: [
      "Chichen Itzá, one of the New Seven Wonders of the World, is located in Yucatán.",
      "The state has one of the largest concentrations of cenotes in the world, over 6,000 in total.",
    ],
  },
  Veracruz: {
    name: "Veracruz",
    overview:
      "Veracruz is located along the Gulf of Mexico in eastern Mexico. It played a crucial role in the Spanish conquest and colonial period as a major port city. The state's diverse geography includes coastal plains, mountains, and rainforests, contributing to its economic and cultural significance.",
    capital: "Xalapa",
    population: "Approximately 8.1 million",
    economy:
      "Veracruz has a diverse economy centered on agriculture (sugarcane, coffee, and tropical fruits), oil and gas production, and fishing. The state is a key transportation hub due to its ports and infrastructure.",
    attractions: [
      "El Tajín (UNESCO World Heritage site)",
      "San Juan de Ulúa fortress",
      "Veracruz Aquarium",
      "Papantla and the Totonacapan region",
      "Los Tuxtlas Biosphere Reserve",
    ],
    culture:
      "Veracruz is famous for its Afro-Caribbean influenced music and dance, such as son jarocho and danzón. The state's cuisine features seafood dishes like huachinango a la veracruzana, and it celebrates colorful festivals like Carnaval de Veracruz.",
    education: [
      "Universidad Veracruzana",
      "Instituto Tecnológico de Veracruz",
      "Universidad Cristóbal Colón",
    ],
    funFacts: [
      "Veracruz is home to one of the largest and oldest carnivals in Mexico.",
      "The port of Veracruz was the first city founded by Europeans in the Americas in 1519.",
    ],
  },
  Tlaxcala: {
    name: "Tlaxcala",
    overview:
      "Tlaxcala is the smallest state in Mexico, located in the central region. Known for its rich indigenous history, it was a crucial ally of the Spanish during the conquest of the Aztec Empire. The state's geography includes rolling hills, valleys, and several archaeological sites.",
    capital: "Tlaxcala City",
    population: "Approximately 1.3 million",
    economy:
      "Tlaxcala's economy is primarily based on agriculture, manufacturing (especially textiles and food processing), and services. The region is known for producing corn, beans, and barley.",
    attractions: [
      "Tlaxcala's Historic Center",
      "Cacaxtla archaeological site",
      "Xochitécatl archaeological site",
      "La Malinche National Park",
      "San Francisco de Asís Ex-Convent",
    ],
    culture:
      "Tlaxcala has a vibrant cultural scene with traditional dances, music, and festivals. It is known for its gastronomy, including dishes like mole and tlacoyos. The state celebrates various festivals, especially during the Day of the Dead.",
    education: [
      "Universidad Autónoma de Tlaxcala",
      "Instituto Tecnológico de Tlaxcala",
      "Universidad Politécnica de Tlaxcala",
    ],
    funFacts: [
      "Tlaxcala is the only state in Mexico that does not border any ocean.",
      "The state is home to the traditional dance known as 'La Danza de los Tlacololeros,' which is performed during festivals.",
    ],
  },
  Tamaulipas: {
    name: "Tamaulipas",
    overview:
      "Tamaulipas is located in northeastern Mexico, bordered by the Gulf of Mexico to the east and the United States to the north. Historically, it has been an important region due to its ports and agricultural production. The state's geography includes coastal plains, rivers, and semi-arid regions.",
    capital: "Ciudad Victoria",
    population: "Approximately 3.6 million",
    economy:
      "Tamaulipas has a diverse economy that includes agriculture (notably sorghum and cotton), oil production, and maquiladoras (manufacturing plants). Its ports and proximity to the U.S. also make it a key player in international trade.",
    attractions: [
      "El Cielo Biosphere Reserve",
      "Laguna Madre",
      "Playa Miramar in Ciudad Madero",
      "Sierra de Tamaulipas",
      "Catedral de Nuestra Señora del Refugio in Matamoros",
    ],
    culture:
      "Tamaulipas is known for its traditional dances, such as the 'polka' and 'redova,' as well as its folk music, including 'norteño.' Its cuisine features dishes like cabrito (roasted goat) and carne asada.",
    education: [
      "Universidad Autónoma de Tamaulipas",
      "Instituto Tecnológico de Ciudad Madero",
      "Instituto de Ciencias y Estudios Superiores de Tamaulipas (ICEST)",
    ],
    funFacts: [
      "Tamaulipas shares a long border with Texas, with major border crossings in cities like Matamoros, Reynosa, and Nuevo Laredo.",
      "It is home to the second-largest biosphere reserve in Mexico, El Cielo, known for its rich biodiversity.",
    ],
  },
  Tabasco: {
    name: "Tabasco",
    overview:
      "Tabasco is located in southeastern Mexico, bordered by the Gulf of Mexico to the east. Known for its lush landscapes and rich biodiversity, it played a significant role in the history of the Olmec civilization, one of the earliest in Mesoamerica. The state's geography includes rivers, swamps, and tropical rainforests.",
    capital: "Villahermosa",
    population: "Approximately 2.4 million",
    economy:
      "Tabasco's economy is primarily based on oil production, agriculture (notably cocoa and palm oil), and livestock. The state is one of Mexico's leading producers of oil and natural gas.",
    attractions: [
      "La Venta archaeological site",
      "Tabasco Museum of History",
      "Agua Selva Park",
      "Palenque archaeological site nearby",
      "Cascadas de Agua Blanca",
    ],
    culture:
      "Tabasco has a vibrant culture influenced by its indigenous heritage, with traditional dances and music such as 'son jarocho.' The local cuisine features dishes like pejelagarto (a local fish) and tamales de chipilín.",
    education: [
      "Universidad Juárez Autónoma de Tabasco",
      "Instituto Tecnológico de Villahermosa",
      "Universidad Politécnica de Tabasco",
    ],
    funFacts: [
      "Tabasco is known as the 'Garden of Mexico' due to its fertile lands and agricultural production.",
      "The state hosts the annual Feria Tabasco, one of the largest fairs in the region, celebrating local culture and traditions.",
    ],
  },
  Sonora: {
    name: "Sonora",
    overview:
      "Sonora is located in northwestern Mexico, bordered by the United States to the north and the Gulf of California to the west. Known for its desert landscapes and rich indigenous culture, it has significant historical importance due to its proximity to the U.S. and its role in the mining and cattle industries.",
    capital: "Hermosillo",
    population: "Approximately 2.9 million",
    economy:
      "Sonora's economy is diverse, heavily reliant on agriculture (notably wheat and cattle), mining (copper, silver, and gold), and manufacturing, particularly in the electronics and automotive sectors.",
    attractions: [
      "Sierra Madre Occidental",
      "Puerto Peñasco (Rocky Point)",
      "San Carlos Bay",
      "Cerro de la Campana",
      "Cultural Center of Sonora",
    ],
    culture:
      "Sonora is known for its vibrant music scene, particularly 'norteño' and 'banda' music. The state celebrates various festivals, including the Feria del Sol in Hermosillo. Its cuisine features dishes like carne asada and flour tortillas.",
    education: [
      "Universidad de Sonora",
      "Instituto Tecnológico de Hermosillo",
      "Universidad Autónoma de Ciudad Juárez (branch in Sonora)",
    ],
    funFacts: [
      "Sonora has the longest coastline of any state in Mexico, stretching over 1,000 kilometers.",
      "It is famous for its desert landscape, with the Sonoran Desert being one of the largest and most biodiverse deserts in North America.",
    ],
  },
  Sinaloa: {
    name: "Sinaloa",
    overview:
      "Sinaloa is located in northwestern Mexico, bordered by the Pacific Ocean to the west. It has a rich agricultural history and is known for its lush landscapes and coastal resorts. The state played a significant role in the development of Mexican agriculture and has a diverse culture influenced by its indigenous and Spanish heritage.",
    capital: "Culiacán",
    population: "Approximately 2.9 million",
    economy:
      "Sinaloa's economy is primarily based on agriculture, particularly the production of corn, tomatoes, and avocados. Fishing and tourism are also important sectors, with many visitors attracted to its beautiful beaches.",
    attractions: [
      "Mazatlán's beaches and historic center",
      "El Quelite village",
      "Sierra de Mazatlán",
      "Cerro de la Nevería",
      "Aguaruto River",
    ],
    culture:
      "Sinaloa is known for its music, particularly 'banda' and 'norteño' genres. The state celebrates various festivals, including the Carnaval de Mazatlán. Its cuisine features seafood dishes and specialties like ceviche and aguachile.",
    education: [
      "Universidad Autónoma de Sinaloa",
      "Instituto Tecnológico de Culiacán",
      "Universidad de Occidente",
    ],
    funFacts: [
      "Sinaloa is one of the largest producers of tomatoes in Mexico.",
      "Mazatlán is known as the 'Pearl of the Pacific' and hosts one of the largest carnivals in the country.",
    ],
  },
  SanLuisPotosí: {
    name: "San Luis Potosí",
    overview:
      "San Luis Potosí is located in north-central Mexico and is known for its diverse geography, including deserts, mountains, and fertile plains. The state has a rich history, influenced by indigenous cultures and Spanish colonization. It played a crucial role in the Mexican War of Independence and the Mexican Revolution.",
    capital: "San Luis Potosí City",
    population: "Approximately 2.8 million",
    economy:
      "The economy of San Luis Potosí is diverse, with key industries including manufacturing, agriculture, and services. The state is a significant producer of automotive parts, electronics, and agricultural products like maize and beans.",
    attractions: [
      "Huasteca Potosina",
      "Tamasopo Waterfalls",
      "Real de Catorce",
      "Tangamanga Park",
      "The Historic Center of San Luis Potosí (UNESCO World Heritage site)",
    ],
    culture:
      "San Luis Potosí has a vibrant cultural scene, known for its traditional music, dance, and festivals. The region celebrates events like the Festival Internacional de las Artes San Luis Potosí and has a rich culinary tradition featuring dishes like enchiladas potosinas and zacahuil.",
    education: [
      "Universidad Autónoma de San Luis Potosí",
      "Instituto Tecnológico de San Luis Potosí",
      "Universidad Politécnica de San Luis Potosí",
    ],
    funFacts: [
      "San Luis Potosí is known for its unique Huastecan culture and stunning natural landscapes.",
      "The state's capital, San Luis Potosí City, has one of the largest historical centers in Mexico, featuring beautiful colonial architecture.",
    ],
  },
  QuintanaRoo: {
    name: "Quintana Roo",
    overview:
      "Quintana Roo is located on the eastern part of Mexico's Yucatán Peninsula, known for its stunning beaches, vibrant marine life, and archaeological sites from the ancient Mayan civilization. The state's geography includes coastlines along the Caribbean Sea, dense jungles, and cenotes.",
    capital: "Chetumal",
    population: "Approximately 1.7 million",
    economy:
      "The economy of Quintana Roo is heavily reliant on tourism, with major destinations like Cancún, Playa del Carmen, and Tulum attracting millions of visitors each year. Other important sectors include agriculture and fishing.",
    attractions: [
      "Cancún and its beaches",
      "Tulum archaeological site",
      "Cozumel Island",
      "Xcaret Eco Park",
      "Sian Ka'an Biosphere Reserve (UNESCO World Heritage site)",
    ],
    culture:
      "Quintana Roo has a rich cultural heritage influenced by its Mayan roots, evident in its cuisine, music, and festivals. Traditional dishes include cochinita pibil and ceviche. The region also celebrates events like the Day of the Dead and various cultural festivals.",
    education: [
      "Universidad de Quintana Roo",
      "Instituto Tecnológico de Cancún",
      "Universidad Politécnica de Quintana Roo",
    ],
    funFacts: [
      "Quintana Roo is home to some of the most beautiful beaches in the world.",
      "The Great Maya Reef, the second-largest coral reef system in the world, is located off the coast of Quintana Roo.",
    ],
  },
  Querétaro: {
    name: "Querétaro",
    overview:
      "Querétaro is located in central Mexico, known for its rich history, colonial architecture, and vibrant culture. The state played a significant role in Mexican independence and has a diverse geography that includes mountains, plains, and semi-arid regions.",
    capital: "Querétaro City",
    population: "Approximately 2.4 million",
    economy:
      "Querétaro's economy is diverse, with key sectors including manufacturing, services, and agriculture. It has become a hub for the aerospace industry and technological innovation.",
    attractions: [
      "Historic Center of Querétaro (UNESCO World Heritage site)",
      "Tequisquiapan and its hot springs",
      "Bernal Rock",
      "The Aqueduct of Querétaro",
      "The Sierra Gorda Biosphere Reserve",
    ],
    culture:
      "Querétaro is known for its vibrant traditions, including festivals, music, and gastronomy. Dishes like enchiladas queretanas and dulce de leche are local favorites. The region also hosts various cultural events throughout the year.",
    education: [
      "Universidad Autónoma de Querétaro",
      "Instituto Tecnológico de Querétaro",
      "Universidad Tecnológica de Querétaro",
    ],
    funFacts: [
      "Querétaro's historic center is one of the best-preserved colonial towns in Mexico.",
      "The state is home to many vineyards and wineries, contributing to Mexico's growing wine industry.",
    ],
  },
  Puebla: {
    name: "Puebla",
    overview:
      "Puebla is located in central Mexico, known for its rich colonial history and culinary heritage. It is famous for its beautiful Talavera pottery and historic architecture, including the Puebla Cathedral and the Great Pyramid of Cholula.",
    capital: "Puebla City",
    population: "Approximately 3.2 million",
    economy:
      "Puebla's economy is diverse, with key sectors including manufacturing, automotive, and agriculture. The state is also known for its production of textiles and food products.",
    attractions: [
      "Historic Center of Puebla (UNESCO World Heritage site)",
      "Cholula and its Great Pyramid",
      "Puebla Cathedral",
      "The Africam Safari Park",
      "The Biblioteca Palafoxiana",
    ],
    culture:
      "Puebla is celebrated for its gastronomy, including dishes like mole poblano, chiles en nogada, and various traditional pastries. The region hosts numerous cultural festivals throughout the year.",
    education: [
      "Benemérita Universidad Autónoma de Puebla (BUAP)",
      "Universidad de las Américas Puebla (UDLAP)",
      "Instituto Tecnológico de Puebla",
    ],
    funFacts: [
      "Puebla is often referred to as the 'City of Angels' due to its historical significance and architecture.",
      "The state is known for its annual mole festival, celebrating its rich culinary tradition.",
    ],
  },
  Oaxaca: {
    name: "Oaxaca",
    overview:
      "Oaxaca is located in southern Mexico, renowned for its rich indigenous cultures, vibrant arts scene, and stunning natural landscapes. The state is home to several indigenous groups, making it one of the most culturally diverse regions in the country.",
    capital: "Oaxaca City",
    population: "Approximately 4.1 million",
    economy:
      "Oaxaca's economy is largely based on agriculture, with a focus on coffee, mezcal, and textiles. Tourism also plays a vital role, with visitors drawn to its historical sites and cultural festivals.",
    attractions: [
      "Monte Albán (UNESCO World Heritage site)",
      "Hierve el Agua",
      "Oaxaca City's Historic Center",
      "Mitla",
      "The Guelaguetza Festival",
    ],
    culture:
      "Oaxaca is famous for its vibrant traditions, including the Day of the Dead celebrations, and its culinary heritage, featuring dishes like mole, tlayudas, and mezcal. The state has a rich artistic community, known for its pottery, textiles, and crafts.",
    education: [
      "Universidad Autónoma Benito Juárez de Oaxaca",
      "Instituto Tecnológico de Oaxaca",
      "Universidad del Mar",
    ],
    funFacts: [
      "Oaxaca is considered the birthplace of mole, one of Mexico's most famous sauces.",
      "The state is known for its diverse ecosystems, ranging from mountains to coastal areas.",
    ],
  },
  NuevoLeón: {
    name: "Nuevo León",
    overview:
      "Nuevo León is located in northeastern Mexico, known for its strong industrial base and urban development. The capital, Monterrey, is one of Mexico's largest cities and an important economic hub.",
    capital: "Monterrey",
    population: "Approximately 5.8 million",
    economy:
      "Nuevo León has a diverse economy, heavily based on industry, commerce, and services. It is a leader in manufacturing, especially in steel, cement, and appliances.",
    attractions: [
      "Macroplaza in Monterrey",
      "Fundidora Park",
      "Chipinque Ecological Park",
      "The Huasteca Canyon",
      "Museum of Contemporary Art (MARCO)",
    ],
    culture:
      "Nuevo León has a vibrant cultural scene, blending traditional Mexican customs with modern influences. The region is known for its unique cuisine, including dishes like cabrito and carne asada.",
    education: [
      "Universidad Autónoma de Nuevo León (UANL)",
      "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
      "Universidad de Monterrey (UDEM)",
    ],
    funFacts: [
      "Monterrey is often called the 'Sultana del Norte' (Sultan of the North) for its cultural and economic significance.",
      "The state is known for its mountainous terrain, offering various outdoor activities like hiking and rock climbing.",
    ],
  },
  Nayarit: {
    name: "Nayarit",
    overview:
      "Nayarit is located on the Pacific coast of Mexico, known for its stunning beaches, rich cultural heritage, and lush jungles. The state boasts a diverse ecosystem and is home to several indigenous communities.",
    capital: "Tepic",
    population: "Approximately 1.5 million",
    economy:
      "Nayarit's economy is primarily based on agriculture, fishing, and tourism. The region is known for its production of sugarcane, tobacco, and tropical fruits.",
    attractions: [
      "Islas Marietas National Park",
      "San Blas and its historic port",
      "The beaches of Punta Mita",
      "Tepic's Cathedral and historical center",
      "The Sierra de Vallejo National Park",
    ],
    culture:
      "Nayarit is home to the Cora and Huichol indigenous peoples, known for their vibrant traditions, crafts, and music. The state celebrates various festivals, including the Festival of San Blas.",
    education: [
      "Universidad Autónoma de Nayarit",
      "Instituto Tecnológico de Tepic",
      "Universidad Politécnica de Nayarit",
    ],
    funFacts: [
      "Nayarit is famous for the beach resort town of Nuevo Vallarta.",
      "The region hosts a unique surfing competition known as the 'La Pura Vida Surf Contest' at Sayulita.",
    ],
  },
  Morelos: {
    name: "Morelos",
    overview:
      "Morelos is located in central Mexico, known for its temperate climate, beautiful landscapes, and rich history. The state is characterized by its valleys and mountains, and it played a significant role in the Mexican Revolution.",
    capital: "Cuernavaca",
    population: "Approximately 2 million",
    economy:
      "Morelos' economy is based on agriculture, tourism, and services. Key crops include sugar cane, coffee, and avocados. The state's warm climate makes it a popular destination for tourism.",
    attractions: [
      "Cuernavaca's Cathedral and Palace of Cortés",
      "Templo de Quetzalcoatl in Tepoztlán",
      "Las Estacas Natural Park",
      "Xochicalco Archaeological Site (UNESCO World Heritage site)",
      "Zacatepec and its sugar mill",
    ],
    culture:
      "Morelos has a vibrant cultural scene with traditional music, dance, and festivals. The state is known for its culinary delights, including dishes like mole and quesadillas.",
    education: [
      "Universidad Autónoma del Estado de Morelos",
      "Instituto Tecnológico de Cuernavaca",
      "Universidad Politécnica del Estado de Morelos",
    ],
    funFacts: [
      "Cuernavaca is often called the 'City of Eternal Spring' due to its pleasant climate.",
      "Morelos is home to several important archaeological sites from pre-Hispanic civilizations.",
    ],
  },
  México: {
    name: "Estado de México",
    overview:
      "El Estado de México, located in central Mexico, is the most populous state in the country. It is characterized by a diverse geography that includes mountains, valleys, and lakes. The state is known for its rich history, culture, and proximity to Mexico City.",
    capital: "Toluca",
    population: "Approximately 17 million",
    economy:
      "The economy is diverse, with key sectors including manufacturing, agriculture, and services. The state's proximity to Mexico City enhances its economic activity, particularly in trade and commerce.",
    attractions: [
      "Toluca's Cosmovitral Botanical Garden",
      "Malinalco and its archaeological site",
      "Valle de Bravo and its lake",
      "The Nevado de Toluca National Park",
      "The Teotihuacan Pyramids nearby",
    ],
    culture:
      "The state boasts a rich cultural heritage, including traditions like the Day of the Dead and various local cuisines. Famous for dishes like carnitas, barbacoa, and traditional sweets.",
    education: [
      "Universidad Autónoma del Estado de México (UAEM)",
      "Instituto Tecnológico de Toluca",
      "Universidad Mexiquense del Bicentenario",
    ],
    funFacts: [
      "The State of Mexico is home to the highest number of municipalities in the country.",
      "Toluca is known for its unique climate and is often referred to as 'La Bella Durmiente' due to its picturesque landscapes.",
    ],
  },
  Hidalgo: {
    name: "Hidalgo",
    overview:
      "Hidalgo is located in central Mexico, known for its beautiful landscapes, including mountains, valleys, and forests. The state has a rich mining history and is home to numerous archaeological sites from pre-Hispanic cultures.",
    capital: "Pachuca",
    population: "Approximately 3.2 million",
    economy:
      "Hidalgo's economy is largely based on agriculture, mining, and services. It is known for its production of pulque, a traditional alcoholic beverage made from agave.",
    attractions: [
      "Pachuca's Clock Tower (Reloj Monumental)",
      "Huasca de Ocampo and the Basaltic Prisms",
      "The Mining Museum in Pachuca",
      "The Otomi-Tepehua Regional Museum",
      "The El Chico National Park",
    ],
    culture:
      "Hidalgo is known for its rich cultural heritage, including traditional music, dance, and cuisine. Dishes such as barbacoa and pastes are local specialties.",
    education: [
      "Universidad Autónoma del Estado de Hidalgo",
      "Instituto Tecnológico de Pachuca",
      "Universidad Politécnica de Pachuca",
    ],
    funFacts: [
      "Hidalgo is famous for its unique geological formations, such as the Basaltic Prisms.",
      "The state celebrates the Day of the Dead with vibrant traditions and festivals, reflecting its indigenous heritage.",
    ],
  },
  Guerrero: {
    name: "Guerrero",
    overview:
      "Guerrero is located on the southwestern coast of Mexico, known for its beautiful beaches, vibrant culture, and rich indigenous heritage. The state features a diverse landscape that includes mountains, jungles, and coastal areas along the Pacific Ocean.",
    capital: "Chilpancingo",
    population: "Approximately 3.5 million",
    economy:
      "Guerrero's economy is primarily based on tourism, agriculture, and fishing. Major tourist destinations like Acapulco and Zihuatanejo attract visitors from around the world.",
    attractions: [
      "Acapulco's beaches and cliff divers",
      "Taxco and its silver mining history",
      "La Quebrada",
      "The archaeological site of Xochicalco (UNESCO World Heritage site)",
      "Isla de la Roqueta",
    ],
    culture:
      "Guerrero has a rich cultural heritage with strong influences from indigenous communities. The state is famous for traditional dances, music, and delicious cuisine, including dishes like pozole and mole.",
    education: [
      "Universidad Autónoma de Guerrero",
      "Instituto Tecnológico de Acapulco",
      "Universidad Politécnica de Guerrero",
    ],
    funFacts: [
      "Acapulco was a famous getaway for Hollywood stars in the mid-20th century.",
      "Guerrero is home to some of the most important archaeological sites in Mexico, reflecting its rich pre-Hispanic history.",
    ],
  },
  Guanajuato: {
    name: "Guanajuato",
    overview:
      "Guanajuato is located in central Mexico, known for its rich history, beautiful colonial architecture, and vibrant cultural scene. It was a key region during the Mexican War of Independence and is famous for its silver mines.",
    capital: "Guanajuato City",
    population: "Approximately 6 million",
    economy:
      "Guanajuato's economy is largely based on agriculture, mining, and manufacturing. The state is also known for its production of fruits and vegetables, as well as textiles and leather goods.",
    attractions: [
      "Historic Center of Guanajuato (UNESCO World Heritage site)",
      "The Mummy Museum",
      "The Alley of the Kiss",
      "San Miguel de Allende",
      "The Valenciana Mine",
    ],
    culture:
      "Guanajuato is known for its lively festivals, such as the Cervantino Festival, and its rich traditions in music, art, and cuisine. Dishes like enchiladas mineras and guanajuatense pastries are local specialties.",
    education: [
      "Universidad de Guanajuato",
      "Instituto Tecnológico de León",
      "Universidad de San Miguel de Allende",
    ],
    funFacts: [
      "Guanajuato is famous for its unique underground street system.",
      "The state produces a significant amount of the country's silver and is home to some of the oldest mines in the Americas.",
    ],
  },
  Durango: {
    name: "Durango",
    overview:
      "Durango is located in north-central Mexico, known for its mountainous terrain and rich history. The state features a diverse landscape, including forests, deserts, and rivers, making it a popular destination for outdoor activities.",
    capital: "Durango City",
    population: "Approximately 1.8 million",
    economy:
      "Durango's economy is primarily based on agriculture, livestock, and mining. It is known for the production of livestock, especially cattle, and has significant forestry and mining sectors.",
    attractions: [
      "Durango's Historic Center (UNESCO World Heritage site)",
      "Las Escalas de la Sierra",
      "Sierra del Carmen",
      "El Mercado Gómez Palacio",
      "The Durango-Zacatecas Railway",
    ],
    culture:
      "Durango has a rich cultural heritage, influenced by its indigenous roots and colonial history. Traditional music and dance, especially the Duranguense genre, are an important part of local culture.",
    education: [
      "Universidad Juárez del Estado de Durango",
      "Instituto Tecnológico de Durango",
      "Universidad Politécnica de Durango",
    ],
    funFacts: [
      "Durango is known as the 'Land of the Golden Eagles' and has a significant population of these birds.",
      "The state is famous for its film industry, particularly for being a filming location for many Western movies.",
    ],
  },
  CiudaddeMéxico: {
    name: "Ciudad de México",
    overview:
      "Ciudad de México, the capital of Mexico, is one of the largest cities in the world. It is known for its rich history, vibrant culture, and diverse population. Built on the ruins of the ancient Aztec city of Tenochtitlan, it features a mix of modern and colonial architecture.",
    capital: "Ciudad de México",
    population:
      "Approximately 9 million (over 21 million in the metropolitan area)",
    economy:
      "The economy of Ciudad de México is highly diversified, with key sectors including finance, commerce, manufacturing, and tourism. It is considered the economic center of the country.",
    attractions: [
      "Zócalo (Plaza Mayor)",
      "Templo Mayor",
      "Chapultepec Park and Castle",
      "Palacio de Bellas Artes",
      "Frida Kahlo Museum (Casa Azul)",
    ],
    culture:
      "Ciudad de México is a cultural hub, known for its museums, theaters, and vibrant arts scene. It hosts numerous festivals, including Día de los Muertos, and offers a rich culinary landscape featuring traditional Mexican cuisine.",
    education: [
      "Universidad Nacional Autónoma de México (UNAM)",
      "Instituto Politécnico Nacional (IPN)",
      "Universidad Iberoamericana",
    ],
    funFacts: [
      "Ciudad de México is built on a lake and is sinking at a rate of approximately 10 inches per year.",
      "The city has the largest number of museums in the world, with over 150.",
    ],
  },
  Colima: {
    name: "Colima",
    overview:
      "Colima is the smallest state in Mexico, located on the Pacific coast. It is known for its stunning beaches, volcanic mountains, and rich cultural heritage. The state features a warm climate and is a popular tourist destination.",
    capital: "Colima City",
    population: "Approximately 731,000",
    economy:
      "Colima's economy is primarily based on agriculture, with significant production of coconut, lime, and coffee. Tourism also plays an important role, supported by the state's beautiful coastline and natural parks.",
    attractions: [
      "Colima Volcano (Volcán de Colima)",
      "Comala, known for its traditional architecture and coffee farms",
      "Manzanillo, a major port city and beach destination",
      "The Regional Museum of History",
      "La Campana National Park",
    ],
    culture:
      "Colima has a rich cultural scene, with traditional music, dance, and crafts. The local cuisine features dishes like pozole and tamales, and the region hosts various cultural festivals throughout the year.",
    education: [
      "Universidad de Colima",
      "Instituto Tecnológico de Colima",
      "Universidad Pedagógica Nacional (UPN) - Colima",
    ],
    funFacts: [
      "Colima is home to one of the most active volcanoes in Mexico, which is closely monitored.",
      "The state has a high literacy rate compared to the national average, reflecting its strong commitment to education.",
    ],
  },
  Coahuila: {
    name: "Coahuila",
    overview:
      "Coahuila is located in northern Mexico, known for its rich mining history and diverse landscapes, which include deserts, mountains, and forests. The state played a crucial role in the development of the Mexican economy due to its mineral resources.",
    capital: "Saltillo",
    population: "Approximately 3 million",
    economy:
      "Coahuila's economy is heavily based on mining, manufacturing, and agriculture. It is a significant producer of coal, iron, and various minerals, as well as being home to a growing automotive industry.",
    attractions: [
      "Monclova and the historic archaeological site of La Ventana",
      "Sierra de la Sabina National Park",
      "Desierto de los Leones",
      "Saltillo's Plaza de Armas",
      "The Cañon de la Sima",
    ],
    culture:
      "Coahuila has a rich cultural heritage, influenced by both indigenous and Spanish traditions. The state is known for its music, especially norteño and mariachi, as well as its culinary delights like tacos de carne asada and tamales.",
    education: [
      "Universidad Autónoma de Coahuila",
      "Instituto Tecnológico de Saltillo",
      "Universidad Politécnica de Ramos Arizpe",
    ],
    funFacts: [
      "Coahuila is home to the largest coal reserves in Mexico.",
      "The state is known for its beautiful landscapes, including the stunning Sierra Madre Oriental mountain range.",
    ],
  },
  Chihuahua: {
    name: "Chihuahua",
    overview:
      "Chihuahua is located in northern Mexico, known for its vast landscapes, rich history, and diverse culture. It is the largest state in Mexico by area and features a mix of deserts, mountains, and forests.",
    capital: "Chihuahua City",
    population: "Approximately 3.8 million",
    economy:
      "Chihuahua's economy is diverse, with significant contributions from agriculture, manufacturing, and mining. The state is known for its production of beef, cotton, and electronics.",
    attractions: [
      "Chihuahua's Historic Center",
      "Copper Canyon (Barrancas del Cobre)",
      "Cascada de Basaseachic",
      "The Pancho Villa Museum",
      "The Mammoth Museum",
    ],
    culture:
      "Chihuahua is home to a blend of indigenous and Spanish influences. The state has a strong tradition of music, particularly norteño, and is known for its delicious dishes like burritos and carne asada.",
    education: [
      "Universidad Autónoma de Chihuahua",
      "Instituto Tecnológico de Chihuahua",
      "Universidad Tecnológica de Chihuahua",
    ],
    funFacts: [
      "Copper Canyon is larger and deeper than the Grand Canyon in the United States.",
      "Chihuahua is known for its production of some of the world's finest chihuahuas, the small dog breed.",
    ],
  },
  Chiapas: {
    name: "Chiapas",
    overview:
      "Chiapas is located in southeastern Mexico, known for its rich indigenous cultures, stunning landscapes, and diverse ecosystems. It is home to the Mayan ruins of Palenque and the stunning Sumidero Canyon.",
    capital: "Tuxtla Gutiérrez",
    population: "Approximately 5.5 million",
    economy:
      "Chiapas' economy is primarily based on agriculture, with key products including coffee, bananas, and corn. The state also has growing tourism and handicraft sectors.",
    attractions: [
      "Sumidero Canyon (Caññon del Sumidero)",
      "Palenque Archaeological Site (UNESCO World Heritage site)",
      "San Cristóbal de las Casas",
      "Chiapas Biosphere Reserve",
      "Laguna de Montebello National Park",
    ],
    culture:
      "Chiapas is rich in indigenous heritage, with numerous indigenous groups preserving their traditions, languages, and crafts. The state is known for its vibrant textiles, traditional music, and cuisine, including dishes like tamales and pozol.",
    education: [
      "Universidad Autónoma de Chiapas (UNACH)",
      "Instituto Tecnológico de Tuxtla Gutiérrez",
      "Universidad Intercultural de Chiapas",
    ],
    funFacts: [
      "Chiapas is one of the most biologically diverse states in Mexico.",
      "The Lacandon Jungle, located in Chiapas, is one of the last remaining rainforests in North America.",
    ],
  },
  Campeche: {
    name: "Campeche",
    overview:
      "Campeche is located in the southeastern part of Mexico, known for its rich Mayan heritage and colonial history. The state features a diverse landscape of coastal areas, jungles, and archaeological sites, with a significant portion of its territory being a UNESCO World Heritage site.",
    capital: "San Francisco de Campeche",
    population: "Approximately 928,000",
    economy:
      "Campeche's economy is primarily based on oil production, fishing, and agriculture. The state is known for its seafood, honey, and tropical fruits.",
    attractions: [
      "Historic Fortifications of San Francisco de Campeche (UNESCO World Heritage site)",
      "Edzná archaeological site",
      "Cozumel Island",
      "Laguna de Términos",
      "Balamku' and Chicanna archaeological sites",
    ],
    culture:
      "Campeche is known for its unique blend of indigenous and colonial cultures. The state celebrates various festivals, including the Carnival of Campeche, and is famous for its traditional dishes such as pan de muerto and relleno negro.",
    education: [
      "Universidad Autónoma de Campeche",
      "Instituto Tecnológico de Campeche",
      "Universidad Politécnica de Campeche",
    ],
    funFacts: [
      "Campeche is known for its well-preserved colonial architecture and colorful buildings.",
      "The state has one of the largest wetlands in Mexico, providing a habitat for diverse wildlife.",
    ],
  },
  BajaCaliforniaSur: {
    name: "Baja California Sur",
    overview:
      "Baja California Sur is located in the southern part of the Baja California Peninsula, known for its stunning coastlines, diverse marine life, and beautiful landscapes. It is a popular tourist destination, famous for its beaches and outdoor activities.",
    capital: "La Paz",
    population: "Approximately 798,447",
    economy:
      "The economy is primarily driven by tourism, fishing, and agriculture. The region is also known for its growing real estate and service industries, catering to both locals and visitors.",
    attractions: [
      "Cabo San Lucas and its beaches",
      "La Paz Malecon",
      "Espiritu Santo Island (UNESCO Biosphere Reserve)",
      "Los Cabos Corridor",
      "Sierra de la Laguna Biosphere Reserve",
    ],
    culture:
      "Baja California Sur has a rich cultural heritage influenced by indigenous peoples, Spanish colonial history, and modern influences. Local cuisine features seafood and traditional Mexican dishes, with fresh ingredients sourced from the region.",
    education: [
      "Universidad Autónoma de Baja California Sur",
      "Instituto Tecnológico de La Paz",
      "Universidad Mundial",
    ],
    funFacts: [
      "Baja California Sur is home to the world's largest colony of sea lions at Los Islotes.",
      "The region is famous for whale watching, particularly during the migration season.",
    ],
  },
  BajaCalifornia: {
    name: "Baja California",
    overview:
      "Baja California is located in the northwestern region of Mexico, known for its stunning coastline, diverse ecosystems, and vibrant culture. The state is famous for its wine production in the Valle de Guadalupe and its close proximity to the U.S. border.",
    capital: "Mexicali",
    population: "Approximately 3.7 million",
    economy:
      "The economy of Baja California is driven by manufacturing, tourism, agriculture, and wine production. The maquiladora industry plays a significant role, taking advantage of its border location.",
    attractions: [
      "Valle de Guadalupe wine region",
      "Tijuana's cultural scene and culinary offerings",
      "Ensenada's coastal beauty and beaches",
      "La Bufadora marine geyser",
      "Cataviña rock formations",
    ],
    culture:
      "Baja California has a rich cultural heritage influenced by both Mexican and American traditions. The state is known for its cuisine, including tacos, seafood dishes, and wine from local vineyards.",
    education: [
      "Universidad Autónoma de Baja California (UABC)",
      "Instituto Tecnológico de Mexicali",
      "Universidad Iberoamericana Tijuana",
    ],
    funFacts: [
      "Baja California is home to some of Mexico's best wine and is often referred to as the 'Napa Valley of Mexico.'",
      "Tijuana is one of the fastest-growing cities in Mexico and is known for its vibrant nightlife.",
    ],
  },
  Aguascalientes: {
    name: "Aguascalientes",
    overview:
      "Aguascalientes is located in central Mexico, known for its hot springs and vibrant cultural scene. It has a rich history and is famous for its annual Feria Nacional de San Marcos, one of the largest fairs in the country.",
    capital: "Aguascalientes City",
    population: "Approximately 1.4 million",
    economy:
      "The economy of Aguascalientes is diverse, with key sectors including manufacturing, commerce, and agriculture. The state is known for its production of agricultural products such as guavas and grapes.",
    attractions: [
      "Feria Nacional de San Marcos",
      "The Historic Center of Aguascalientes",
      "Plaza de la Patria",
      "Templo de San Antonio",
      "The Aguascalientes Museum",
    ],
    culture:
      "Aguascalientes is known for its vibrant arts scene, including music, dance, and theater. The state is famous for its gastronomy, particularly dishes like birria and carne en su jugo.",
    education: [
      "Universidad Autónoma de Aguascalientes",
      "Instituto Tecnológico de Aguascalientes",
      "Universidad Panamericana (Aguascalientes)",
    ],
    funFacts: [
      "Aguascalientes is one of the smallest states in Mexico but has a rich cultural heritage.",
      "The state's name means 'hot waters' in Spanish, referring to its numerous hot springs.",
    ],
  },
  // Add more states here...
};

export default function Home() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <div className=" min-h-screen relative">
      <main className="fixed inset-0 z-10">
        <LazyMap
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
      </main>

      {selectedState && statesInfo[selectedState] && (
        <InfoModal
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          statesInfo={statesInfo}
        />
      )}
    </div>
  );
}
