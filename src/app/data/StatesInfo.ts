// The original StateInfo type remains the same
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

// Define a type for language codes
type LanguageCode = "en" | "es"; // Add more language codes as needed

// Modify MultilingualStateInfo to use LanguageCode
type MultilingualStateInfo = {
  [key in LanguageCode]: StateInfo;
};

// Create a new type that combines the state name with its multilingual info
type StateEntry = {
  [stateName: string]: MultilingualStateInfo;
};

// Export StatesInfo with the new structure
export const StatesInfo: StateEntry = {
  Jalisco: {
    en: {
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
    es: {
      name: "Jalisco",
      overview:
        "Jalisco es uno de los estados más importantes de México, conocido por su rica historia, geografía e importancia cultural. Se considera la cuna de muchos elementos culturales mexicanos clave, como la música de mariachi, el tequila y el baile del sombrero mexicano.",
      capital: "Guadalajara",
      population: "Aproximadamente 8.4 millones",
      economy:
        "Diversificada, incluye agricultura (especialmente producción de tequila), manufactura (electrónica, automoción) y tecnología. A Guadalajara se la suele denominar 'el Silicon Valley de México'.",
      attractions: [
        "Tequila (sitio Patrimonio de la Humanidad de la UNESCO)",
        "Puerto Vallarta",
        "Lago de Chapala",
        "Pirámides de Guachimontones",
        "Centro histórico de Guadalajara",
      ],
      culture:
        "Hogar de la música de mariachi, producción de tequila y gastronomía tradicional como la birria, la torta ahogada y el pozole.",
      education: [
        "Universidad de Guadalajara (UdeG)",
        "Tecnológico de Monterrey - Campus Guadalajara",
        "Universidad Autónoma de Guadalajara (UAG)",
      ],
      funFacts: [
        "Jalisco es el único lugar donde se puede producir tequila auténtico.",
        "Guadalajara es el hogar de las Chivas, uno de los equipos de fútbol más populares de México.",
      ],
    },
  },
  Michoacán: {
    en: {
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
    es: {
      name: "Michoacán",
      overview:
        "Michoacán está ubicado en el oeste de México, conocido por su rica herencia indígena y su historia colonial. Fue hogar del Imperio Purépecha, una de las civilizaciones precolombinas más avanzadas. La geografía del estado incluye regiones costeras, valles fértiles y tierras altas montañosas.",
      capital: "Morelia",
      population: "Aproximadamente 4.8 millones",
      economy:
        "Basada principalmente en la agricultura, especialmente en la producción de aguacate. Otros sectores importantes incluyen la pesca, la minería y las industrias artesanales.",
      attractions: [
        "Centro Histórico de Morelia (sitio Patrimonio de la Humanidad de la UNESCO)",
        "Pátzcuaro y el Lago de Pátzcuaro",
        "Reserva de la Biosfera de la Mariposa Monarca",
        "Santa Clara del Cobre",
        "Volcán Paricutín",
      ],
      culture:
        "Hogar del pueblo Purépecha, con fuertes tradiciones alrededor del Día de los Muertos. Famoso por platillos como corundas, uchepos y carnitas.",
      education: [
        "Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)",
        "Instituto Tecnológico de Morelia",
        "Universidad Vasco de Quiroga (UVAQ)",
      ],
      funFacts: [
        "Michoacán es el productor líder mundial de aguacates.",
        "La migración de la mariposa monarca a Michoacán es uno de los fenómenos naturales más espectaculares.",
      ],
    },
  },
  Zacatecas: {
    en: {
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
    es: {
      name: "Zacatecas",
      overview:
        "Zacatecas está ubicada en el centro-norte de México, conocida por su rica historia minera y su bien conservada arquitectura colonial. Fue un centro minero clave durante el período colonial español, produciendo grandes cantidades de plata. Zacatecas también jugó un papel fundamental en la independencia y revolución de México.",
      capital: "Zacatecas",
      population: "Aproximadamente 1.6 millones",
      economy:
        "La economía de Zacatecas está impulsada por la minería, particularmente de plata, oro, zinc y plomo. La agricultura, incluyendo la ganadería y la producción de frijol, chile y maíz, también es significativa. El turismo está creciendo debido a su patrimonio cultural.",
      attractions: [
        "Cerro de la Bufa",
        "Catedral de Zacatecas (sitio Patrimonio de la Humanidad de la UNESCO)",
        "Mina El Edén",
        "Sitio arqueológico La Quemada",
        "Museo Rafael Coronel",
      ],
      culture:
        "Zacatecas es conocida por su Festival Cultural en abril, la música de tamborazo y platos tradicionales como el asado de boda y las enchiladas zacatecanas. El estado también produce mezcal de alta calidad.",
      education: [
        "Universidad Autónoma de Zacatecas (UAZ)",
        "Tecnológico de Monterrey - Campus Zacatecas",
        "Instituto Politécnico Nacional - Unidad Zacatecas",
      ],
      funFacts: [
        "Zacatecas es uno de los mayores productores de plata del mundo.",
        "La Batalla de Zacatecas en 1914 fue un punto clave en la Revolución Mexicana.",
      ],
    },
  },
  Yucatán: {
    en: {
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
    es: {
      name: "Yucatán",
      overview:
        "Yucatán se encuentra en el sureste de México, en la Península de Yucatán. Conocido por su rico patrimonio maya, el estado alberga ruinas antiguas y una cultura única. Tiene un paisaje plano, ríos subterráneos y cenotes, que son sumideros naturales sagrados para los mayas.",
      capital: "Mérida",
      population: "Aproximadamente 2.3 millones",
      economy:
        "La economía de Yucatán se basa en el turismo, la agricultura (especialmente el henequén y los cítricos) y los servicios. El turismo es impulsado por sus sitios arqueológicos mayas y sus ciudades coloniales.",
      attractions: [
        "Chichén Itzá (Patrimonio de la Humanidad de la UNESCO)",
        "Uxmal",
        "Cenotes de Dzitnup e Ik Kil",
        "Centro Histórico de Mérida",
        "Reserva de la Biosfera de Celestún",
      ],
      culture:
        "Yucatán es reconocido por su herencia maya, con festivales culturales, bailes tradicionales como la jarana y cocina que incluye cochinita pibil, panuchos y sopa de lima. También tiene fuertes influencias del colonialismo español.",
      education: [
        "Universidad Autónoma de Yucatán (UADY)",
        "Instituto Tecnológico de Mérida",
        "Universidad Anáhuac Mayab",
      ],
      funFacts: [
        "Chichén Itzá, una de las Nuevas Siete Maravillas del Mundo, se encuentra en Yucatán.",
        "El estado tiene una de las mayores concentraciones de cenotes en el mundo, más de 6,000 en total.",
      ],
    },
  },
  Veracruz: {
    en: {
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
    es: {
      name: "Veracruz",
      overview:
        "Veracruz se encuentra a lo largo del Golfo de México en el este de México. Jugó un papel crucial en la conquista española y el período colonial como una importante ciudad portuaria. La diversa geografía del estado incluye llanuras costeras, montañas y selvas tropicales, contribuyendo a su importancia económica y cultural.",
      capital: "Xalapa",
      population: "Aproximadamente 8.1 millones",
      economy:
        "Veracruz tiene una economía diversa centrada en la agricultura (caña de azúcar, café y frutas tropicales), la producción de petróleo y gas, y la pesca. El estado es un importante centro de transporte debido a sus puertos e infraestructura.",
      attractions: [
        "El Tajín (sitio de Patrimonio Mundial de la UNESCO)",
        "Fortaleza de San Juan de Ulúa",
        "Acuario de Veracruz",
        "Papantla y la región de Totonacapan",
        "Reserva de la Biosfera de Los Tuxtlas",
      ],
      culture:
        "Veracruz es famoso por su música y baile de influencia afro-caribeña, como el son jarocho y el danzón. La cocina del estado presenta platos de mariscos como el huachinango a la veracruzana, y celebra coloridos festivales como el Carnaval de Veracruz.",
      education: [
        "Universidad Veracruzana",
        "Instituto Tecnológico de Veracruz",
        "Universidad Cristóbal Colón",
      ],
      funFacts: [
        "Veracruz es hogar de uno de los carnavales más grandes y antiguos de México.",
        "El puerto de Veracruz fue la primera ciudad fundada por europeos en las Américas en 1519.",
      ],
    },
  },
  Tlaxcala: {
    en: {
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
    es: {
      name: "Tlaxcala",
      overview:
        "Tlaxcala es el estado más pequeño de México, ubicado en la región central. Conocido por su rica historia indígena, fue un aliado crucial de los españoles durante la conquista del Imperio Azteca. La geografía del estado incluye colinas, valles y varios sitios arqueológicos.",
      capital: "Ciudad de Tlaxcala",
      population: "Aproximadamente 1.3 millones",
      economy:
        "La economía de Tlaxcala se basa principalmente en la agricultura, la manufactura (especialmente textiles y procesamiento de alimentos) y los servicios. La región es conocida por producir maíz, frijol y cebada.",
      attractions: [
        "Centro Histórico de Tlaxcala",
        "Sitio arqueológico de Cacaxtla",
        "Sitio arqueológico de Xochitécatl",
        "Parque Nacional La Malinche",
        "Ex-Convento de San Francisco de Asís",
      ],
      culture:
        "Tlaxcala tiene una vibrante escena cultural con danzas, música y festivales tradicionales. Es conocida por su gastronomía, incluyendo platos como mole y tlacoyos. El estado celebra varios festivales, especialmente durante el Día de los Muertos.",
      education: [
        "Universidad Autónoma de Tlaxcala",
        "Instituto Tecnológico de Tlaxcala",
        "Universidad Politécnica de Tlaxcala",
      ],
      funFacts: [
        "Tlaxcala es el único estado de México que no limita con ningún océano.",
        "El estado es hogar de la danza tradicional conocida como 'La Danza de los Tlacololeros', que se realiza durante festivales.",
      ],
    },
  },
  Tamaulipas: {
    en: {
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
    es: {
      name: "Tamaulipas",
      overview:
        "Tamaulipas está ubicado en el noreste de México, limitado por el Golfo de México al este y los Estados Unidos al norte. Históricamente, ha sido una región importante debido a sus puertos y producción agrícola. La geografía del estado incluye llanuras costeras, ríos y regiones semiáridas.",
      capital: "Ciudad Victoria",
      population: "Aproximadamente 3.6 millones",
      economy:
        "Tamaulipas tiene una economía diversa que incluye la agricultura (notablemente sorgo y algodón), producción de petróleo y maquiladoras (plantas de manufactura). Sus puertos y proximidad a EE.UU. también lo convierten en un jugador clave en el comercio internacional.",
      attractions: [
        "Reserva de la Biosfera El Cielo",
        "Laguna Madre",
        "Playa Miramar en Ciudad Madero",
        "Sierra de Tamaulipas",
        "Catedral de Nuestra Señora del Refugio en Matamoros",
      ],
      culture:
        "Tamaulipas es conocido por sus bailes tradicionales, como la 'polka' y la 'redova,' así como su música folclórica, como el 'norteño.' Su cocina presenta platos como cabrito (chivo asado) y carne asada.",
      education: [
        "Universidad Autónoma de Tamaulipas",
        "Instituto Tecnológico de Ciudad Madero",
        "Instituto de Ciencias y Estudios Superiores de Tamaulipas (ICEST)",
      ],
      funFacts: [
        "Tamaulipas comparte una larga frontera con Texas, con importantes cruces fronterizos en ciudades como Matamoros, Reynosa y Nuevo Laredo.",
        "Es hogar de la segunda reserva de biosfera más grande de México, El Cielo, conocida por su rica biodiversidad.",
      ],
    },
  },
  Tabasco: {
    en: {
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
    es: {
      name: "Tabasco",
      overview:
        "Tabasco está ubicado en el sureste de México, bordeado por el Golfo de México al este. Conocido por sus exuberantes paisajes y rica biodiversidad, jugó un papel importante en la historia de la civilización olmeca, una de las más antiguas de Mesoamérica. La geografía del estado incluye ríos, pantanos y selvas tropicales.",
      capital: "Villahermosa",
      population: "Aproximadamente 2.4 millones",
      economy:
        "La economía de Tabasco se basa principalmente en la producción de petróleo, la agricultura (particularmente cacao y aceite de palma) y la ganadería. El estado es uno de los principales productores de petróleo y gas natural en México.",
      attractions: [
        "Sitio arqueológico de La Venta",
        "Museo de Historia de Tabasco",
        "Parque Agua Selva",
        "Sitio arqueológico de Palenque (cercano)",
        "Cascadas de Agua Blanca",
      ],
      culture:
        "Tabasco tiene una cultura vibrante influenciada por su herencia indígena, con danzas y música tradicionales como el 'son jarocho.' La gastronomía local incluye platos como pejelagarto (un pez local) y tamales de chipilín.",
      education: [
        "Universidad Juárez Autónoma de Tabasco",
        "Instituto Tecnológico de Villahermosa",
        "Universidad Politécnica de Tabasco",
      ],
      funFacts: [
        "Tabasco es conocido como el 'Jardín de México' debido a sus tierras fértiles y producción agrícola.",
        "El estado alberga la Feria Tabasco anual, una de las ferias más grandes de la región, celebrando la cultura y tradiciones locales.",
      ],
    },
  },
  Sonora: {
    en: {
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
    es: {
      name: "Sonora",
      overview:
        "Sonora está ubicada en el noroeste de México, limitada por los Estados Unidos al norte y el Golfo de California al oeste. Conocido por sus paisajes desérticos y su rica cultura indígena, tiene una gran importancia histórica debido a su proximidad con los EE.UU. y su papel en las industrias de la minería y la ganadería.",
      capital: "Hermosillo",
      population: "Aproximadamente 2.9 millones",
      economy:
        "La economía de Sonora es diversa, dependiendo en gran medida de la agricultura (notablemente trigo y ganado), la minería (cobre, plata y oro), y la manufactura, especialmente en los sectores de electrónica y automotriz.",
      attractions: [
        "Sierra Madre Occidental",
        "Puerto Peñasco (Rocky Point)",
        "Bahía de San Carlos",
        "Cerro de la Campana",
        "Centro Cultural de Sonora",
      ],
      culture:
        "Sonora es conocida por su vibrante escena musical, particularmente la música 'norteña' y 'banda.' El estado celebra varios festivales, incluido la Feria del Sol en Hermosillo. Su gastronomía incluye platos como la carne asada y las tortillas de harina.",
      education: [
        "Universidad de Sonora",
        "Instituto Tecnológico de Hermosillo",
        "Universidad Autónoma de Ciudad Juárez (sucursal en Sonora)",
      ],
      funFacts: [
        "Sonora tiene la costa más larga de cualquier estado en México, con más de 1,000 kilómetros de longitud.",
        "Es famosa por su paisaje desértico, con el Desierto de Sonora siendo uno de los más grandes y biodiversos de América del Norte.",
      ],
    },
  },
  Sinaloa: {
    en: {
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
    es: {
      name: "Sinaloa",
      overview:
        "Sinaloa se encuentra en el noroeste de México, limitando al oeste con el Océano Pacífico. Tiene una rica historia agrícola y es conocida por sus paisajes exuberantes y resorts costeros. El estado desempeñó un papel importante en el desarrollo de la agricultura mexicana y tiene una cultura diversa influenciada por su herencia indígena y española.",
      capital: "Culiacán",
      population: "Aproximadamente 2.9 millones",
      economy:
        "La economía de Sinaloa se basa principalmente en la agricultura, especialmente en la producción de maíz, tomates y aguacates. La pesca y el turismo también son sectores importantes, atrayendo a muchos visitantes a sus hermosas playas.",
      attractions: [
        "Playas y centro histórico de Mazatlán",
        "Pueblo de El Quelite",
        "Sierra de Mazatlán",
        "Cerro de la Nevería",
        "Río Aguaruto",
      ],
      culture:
        "Sinaloa es conocida por su música, particularmente los géneros 'banda' y 'norteño'. El estado celebra varios festivales, incluido el Carnaval de Mazatlán. Su cocina incluye platos de mariscos y especialidades como el ceviche y el aguachile.",
      education: [
        "Universidad Autónoma de Sinaloa",
        "Instituto Tecnológico de Culiacán",
        "Universidad de Occidente",
      ],
      funFacts: [
        "Sinaloa es uno de los mayores productores de tomates en México.",
        "Mazatlán es conocida como la 'Perla del Pacífico' y alberga uno de los carnavales más grandes del país.",
      ],
    },
  },
  SanLuisPotosí: {
    en: {
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
    es: {
      name: "San Luis Potosí",
      overview:
        "San Luis Potosí se encuentra en el centro-norte de México y es conocido por su geografía diversa, que incluye desiertos, montañas y llanuras fértiles. El estado tiene una rica historia, influenciada por las culturas indígenas y la colonización española. Desempeñó un papel crucial en la Guerra de Independencia de México y la Revolución Mexicana.",
      capital: "San Luis Potosí",
      population: "Aproximadamente 2.8 millones",
      economy:
        "La economía de San Luis Potosí es diversa, con industrias clave como la manufactura, la agricultura y los servicios. El estado es un importante productor de autopartes, productos electrónicos y agrícolas como el maíz y los frijoles.",
      attractions: [
        "Huasteca Potosina",
        "Cascadas de Tamasopo",
        "Real de Catorce",
        "Parque Tangamanga",
        "Centro Histórico de San Luis Potosí (sitio Patrimonio de la Humanidad de la UNESCO)",
      ],
      culture:
        "San Luis Potosí tiene una escena cultural vibrante, conocida por su música tradicional, danza y festivales. La región celebra eventos como el Festival Internacional de las Artes de San Luis Potosí y tiene una rica tradición culinaria con platos como las enchiladas potosinas y el zacahuil.",
      education: [
        "Universidad Autónoma de San Luis Potosí",
        "Instituto Tecnológico de San Luis Potosí",
        "Universidad Politécnica de San Luis Potosí",
      ],
      funFacts: [
        "San Luis Potosí es conocido por su única cultura huasteca y sus impresionantes paisajes naturales.",
        "La capital del estado, San Luis Potosí, tiene uno de los centros históricos más grandes de México, con hermosas arquitecturas coloniales.",
      ],
    },
  },
  QuintanaRoo: {
    en: {
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
    es: {
      name: "Quintana Roo",
      overview:
        "Quintana Roo se encuentra en la parte oriental de la península de Yucatán en México, conocido por sus impresionantes playas, vibrante vida marina y sitios arqueológicos de la antigua civilización maya. La geografía del estado incluye costas a lo largo del Mar Caribe, densas selvas y cenotes.",
      capital: "Chetumal",
      population: "Aproximadamente 1.7 millones",
      economy:
        "La economía de Quintana Roo depende en gran medida del turismo, con destinos importantes como Cancún, Playa del Carmen y Tulum que atraen a millones de visitantes cada año. Otros sectores importantes incluyen la agricultura y la pesca.",
      attractions: [
        "Cancún y sus playas",
        "Zona arqueológica de Tulum",
        "Isla Cozumel",
        "Parque Eco Xcaret",
        "Reserva de la Biosfera de Sian Ka'an (Patrimonio Mundial de la UNESCO)",
      ],
      culture:
        "Quintana Roo tiene un rico patrimonio cultural influenciado por sus raíces mayas, evidente en su cocina, música y festivales. Los platos tradicionales incluyen cochinita pibil y ceviche. La región también celebra eventos como el Día de Muertos y diversos festivales culturales.",
      education: [
        "Universidad de Quintana Roo",
        "Instituto Tecnológico de Cancún",
        "Universidad Politécnica de Quintana Roo",
      ],
      funFacts: [
        "Quintana Roo alberga algunas de las playas más hermosas del mundo.",
        "El Gran Arrecife Maya, el segundo sistema de arrecifes de coral más grande del mundo, se encuentra frente a la costa de Quintana Roo.",
      ],
    },
  },
  Querétaro: {
    en: {
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
    es: {
      name: "Querétaro",
      overview:
        "Querétaro está ubicado en el centro de México, conocido por su rica historia, arquitectura colonial y vibrante cultura. El estado jugó un papel importante en la independencia de México y tiene una geografía diversa que incluye montañas, llanuras y regiones semiáridas.",
      capital: "Ciudad de Querétaro",
      population: "Aproximadamente 2.4 millones",
      economy:
        "La economía de Querétaro es diversa, con sectores clave que incluyen la manufactura, los servicios y la agricultura. Se ha convertido en un centro para la industria aeroespacial y la innovación tecnológica.",
      attractions: [
        "Centro Histórico de Querétaro (Patrimonio Mundial de la UNESCO)",
        "Tequisquiapan y sus aguas termales",
        "Peña de Bernal",
        "El Acueducto de Querétaro",
        "Reserva de la Biosfera de la Sierra Gorda",
      ],
      culture:
        "Querétaro es conocido por sus vibrantes tradiciones, que incluyen festivales, música y gastronomía. Platos como las enchiladas queretanas y el dulce de leche son favoritos locales. La región también alberga varios eventos culturales a lo largo del año.",
      education: [
        "Universidad Autónoma de Querétaro",
        "Instituto Tecnológico de Querétaro",
        "Universidad Tecnológica de Querétaro",
      ],
      funFacts: [
        "El centro histórico de Querétaro es una de las ciudades coloniales mejor conservadas de México.",
        "El estado alberga numerosos viñedos y bodegas, lo que contribuye a la creciente industria vinícola de México.",
      ],
    },
  },
  Puebla: {
    en: {
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
    es: {
      name: "Puebla",
      overview:
        "Puebla está ubicada en el centro de México, conocida por su rica historia colonial y herencia culinaria. Es famosa por su hermosa cerámica de Talavera y arquitectura histórica, incluida la Catedral de Puebla y la Gran Pirámide de Cholula.",
      capital: "Puebla",
      population: "Aproximadamente 3.2 millones",
      economy:
        "La economía de Puebla es diversa, con sectores clave que incluyen manufactura, automotriz y agricultura. El estado también es conocido por su producción de textiles y productos alimenticios.",
      attractions: [
        "Centro Histórico de Puebla (sitio de Patrimonio Mundial de la UNESCO)",
        "Cholula y su Gran Pirámide",
        "Catedral de Puebla",
        "El Africam Safari Park",
        "La Biblioteca Palafoxiana",
      ],
      culture:
        "Puebla es celebrada por su gastronomía, incluyendo platillos como mole poblano, chiles en nogada y varios pasteles tradicionales. La región alberga numerosos festivales culturales a lo largo del año.",
      education: [
        "Benemérita Universidad Autónoma de Puebla (BUAP)",
        "Universidad de las Américas Puebla (UDLAP)",
        "Instituto Tecnológico de Puebla",
      ],
      funFacts: [
        "Puebla es conocida como la 'Ciudad de los Ángeles' debido a su importancia histórica y arquitectura.",
        "El estado es famoso por su festival anual del mole, celebrando su rica tradición culinaria.",
      ],
    },
  },
  Oaxaca: {
    en: {
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
    es: {
      name: "Oaxaca",
      overview:
        "Oaxaca está ubicada en el sur de México, reconocida por sus ricas culturas indígenas, vibrante escena artística y impresionantes paisajes naturales. El estado alberga a varios grupos indígenas, convirtiéndolo en una de las regiones más culturalmente diversas del país.",
      capital: "Oaxaca",
      population: "Aproximadamente 4.1 millones",
      economy:
        "La economía de Oaxaca se basa en gran medida en la agricultura, con un enfoque en café, mezcal y textiles. El turismo también juega un papel vital, atrayendo a visitantes a sus sitios históricos y festivales culturales.",
      attractions: [
        "Monte Albán (sitio de Patrimonio Mundial de la UNESCO)",
        "Hierve el Agua",
        "Centro Histórico de la Ciudad de Oaxaca",
        "Mitla",
        "El Festival de la Guelaguetza",
      ],
      culture:
        "Oaxaca es famosa por sus vibrantes tradiciones, incluidas las celebraciones del Día de los Muertos, y su herencia culinaria, que presenta platillos como mole, tlayudas y mezcal. El estado tiene una rica comunidad artística, conocida por su cerámica, textiles y artesanías.",
      education: [
        "Universidad Autónoma Benito Juárez de Oaxaca",
        "Instituto Tecnológico de Oaxaca",
        "Universidad del Mar",
      ],
      funFacts: [
        "Oaxaca es considerada la cuna del mole, una de las salsas más famosas de México.",
        "El estado es conocido por sus diversos ecosistemas, que van desde montañas hasta áreas costeras.",
      ],
    },
  },
  NuevoLeón: {
    en: {
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
    es: {
      name: "Nuevo León",
      overview:
        "Nuevo León está ubicado en el noreste de México, conocido por su sólida base industrial y desarrollo urbano. La capital, Monterrey, es una de las ciudades más grandes de México y un importante centro económico.",
      capital: "Monterrey",
      population: "Aproximadamente 5.8 millones",
      economy:
        "La economía de Nuevo León es diversa, basada en gran medida en la industria, el comercio y los servicios. Es un líder en manufactura, especialmente en acero, cemento y electrodomésticos.",
      attractions: [
        "Macroplaza en Monterrey",
        "Parque Fundidora",
        "Parque Ecológico Chipinque",
        "El Cañón de la Huasteca",
        "Museo de Arte Contemporáneo (MARCO)",
      ],
      culture:
        "Nuevo León tiene una vibrante escena cultural, que combina costumbres tradicionales mexicanas con influencias modernas. La región es conocida por su cocina única, incluyendo platillos como el cabrito y la carne asada.",
      education: [
        "Universidad Autónoma de Nuevo León (UANL)",
        "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
        "Universidad de Monterrey (UDEM)",
      ],
      funFacts: [
        "Monterrey a menudo se llama la 'Sultana del Norte' por su importancia cultural y económica.",
        "El estado es conocido por su terreno montañoso, ofreciendo diversas actividades al aire libre como senderismo y escalada.",
      ],
    },
  },
  Nayarit: {
    en: {
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
    es: {
      name: "Nayarit",
      overview:
        "Nayarit se encuentra en la costa del Pacífico de México, conocida por sus impresionantes playas, rica herencia cultural y exuberantes selvas. El estado cuenta con un ecosistema diverso y alberga varias comunidades indígenas.",
      capital: "Tepic",
      population: "Aproximadamente 1.5 millones",
      economy:
        "La economía de Nayarit se basa principalmente en la agricultura, la pesca y el turismo. La región es conocida por su producción de caña de azúcar, tabaco y frutas tropicales.",
      attractions: [
        "Parque Nacional Islas Marietas",
        "San Blas y su puerto histórico",
        "Las playas de Punta Mita",
        "Catedral de Tepic y centro histórico",
        "Parque Nacional Sierra de Vallejo",
      ],
      culture:
        "Nayarit es hogar de los pueblos indígenas Cora y Huichol, conocidos por sus vibrantes tradiciones, artesanías y música. El estado celebra varios festivales, incluido el Festival de San Blas.",
      education: [
        "Universidad Autónoma de Nayarit",
        "Instituto Tecnológico de Tepic",
        "Universidad Politécnica de Nayarit",
      ],
      funFacts: [
        "Nayarit es famoso por la ciudad turística de playa Nuevo Vallarta.",
        "La región alberga una competencia única de surf conocida como el 'La Pura Vida Surf Contest' en Sayulita.",
      ],
    },
  },
  Morelos: {
    en: {
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
    es: {
      name: "Morelos",
      overview:
        "Morelos se encuentra en el centro de México, conocido por su clima templado, paisajes hermosos e historia rica. El estado se caracteriza por sus valles y montañas, y desempeñó un papel significativo en la Revolución Mexicana.",
      capital: "Cuernavaca",
      population: "Aproximadamente 2 millones",
      economy:
        "La economía de Morelos se basa en la agricultura, el turismo y los servicios. Los cultivos clave incluyen caña de azúcar, café y aguacates. El clima cálido del estado lo convierte en un destino popular para el turismo.",
      attractions: [
        "Catedral de Cuernavaca y Palacio de Cortés",
        "Templo de Quetzalcoatl en Tepoztlán",
        "Parque Natural Las Estacas",
        "Sitio Arqueológico Xochicalco (sitio Patrimonio de la Humanidad de la UNESCO)",
        "Zacatepec y su ingenio azucarero",
      ],
      culture:
        "Morelos tiene una vibrante escena cultural con música, danza y festivales tradicionales. El estado es conocido por sus delicias culinarias, incluyendo platos como mole y quesadillas.",
      education: [
        "Universidad Autónoma del Estado de Morelos",
        "Instituto Tecnológico de Cuernavaca",
        "Universidad Politécnica del Estado de Morelos",
      ],
      funFacts: [
        "Cuernavaca a menudo se llama la 'Ciudad de la Eterna Primavera' debido a su agradable clima.",
        "Morelos alberga varios sitios arqueológicos importantes de civilizaciones prehispánicas.",
      ],
    },
  },
  México: {
    en: {
      name: "Estado de México",
      overview:
        "The State of Mexico, located in central Mexico, is the most populous state in the country. It is characterized by a diverse geography that includes mountains, valleys, and lakes. The state is known for its rich history, culture, and proximity to Mexico City.",
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
    es: {
      name: "Estado de México",
      overview:
        "El Estado de México, ubicado en el centro de México, es el estado más poblado del país. Se caracteriza por una geografía diversa que incluye montañas, valles y lagos. El estado es conocido por su rica historia, cultura y proximidad a la Ciudad de México.",
      capital: "Toluca",
      population: "Aproximadamente 17 millones",
      economy:
        "La economía es diversa, con sectores clave que incluyen manufactura, agricultura y servicios. La proximidad del estado a la Ciudad de México potencia su actividad económica, particularmente en comercio.",
      attractions: [
        "Jardín Botánico Cosmovitral de Toluca",
        "Malinalco y su sitio arqueológico",
        "Valle de Bravo y su lago",
        "Parque Nacional Nevado de Toluca",
        "Las Pirámides de Teotihuacan cercanas",
      ],
      culture:
        "El estado cuenta con un rico patrimonio cultural, incluyendo tradiciones como el Día de los Muertos y diversas cocinas locales. Famoso por platos como carnitas, barbacoa y dulces tradicionales.",
      education: [
        "Universidad Autónoma del Estado de México (UAEM)",
        "Instituto Tecnológico de Toluca",
        "Universidad Mexiquense del Bicentenario",
      ],
      funFacts: [
        "El Estado de México alberga el mayor número de municipios en el país.",
        "Toluca es conocida por su clima único y a menudo se le llama 'La Bella Durmiente' debido a sus paisajes pintorescos.",
      ],
    },
  },
  Hidalgo: {
    en: {
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
    es: {
      name: "Hidalgo",
      overview:
        "Hidalgo se encuentra en el centro de México, conocido por sus hermosos paisajes, que incluyen montañas, valles y bosques. El estado tiene una rica historia minera y alberga numerosos sitios arqueológicos de culturas prehispánicas.",
      capital: "Pachuca",
      population: "Aproximadamente 3.2 millones",
      economy:
        "La economía de Hidalgo se basa principalmente en la agricultura, la minería y los servicios. Es conocido por su producción de pulque, una bebida alcohólica tradicional hecha de agave.",
      attractions: [
        "Reloj Monumental de Pachuca",
        "Huasca de Ocampo y los Prismas Basálticos",
        "El Museo del Mineral en Pachuca",
        "El Museo Regional Otomí-Tepehua",
        "El Parque Nacional El Chico",
      ],
      culture:
        "Hidalgo es conocido por su rica herencia cultural, que incluye música, danza y cocina tradicionales. Platos como la barbacoa y los pastes son especialidades locales.",
      education: [
        "Universidad Autónoma del Estado de Hidalgo",
        "Instituto Tecnológico de Pachuca",
        "Universidad Politécnica de Pachuca",
      ],
      funFacts: [
        "Hidalgo es famoso por sus formaciones geológicas únicas, como los Prismas Basálticos.",
        "El estado celebra el Día de Muertos con tradiciones y festivales vibrantes, reflejando su herencia indígena.",
      ],
    },
  },
  Guerrero: {
    en: {
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
    es: {
      name: "Guerrero",
      overview:
        "Guerrero se encuentra en la costa suroeste de México, conocido por sus hermosas playas, vibrante cultura y rica herencia indígena. El estado presenta un paisaje diverso que incluye montañas, selvas y áreas costeras a lo largo del océano Pacífico.",
      capital: "Chilpancingo",
      population: "Aproximadamente 3.5 millones",
      economy:
        "La economía de Guerrero se basa principalmente en el turismo, la agricultura y la pesca. Principales destinos turísticos como Acapulco y Zihuatanejo atraen visitantes de todo el mundo.",
      attractions: [
        "Playas y clavados de Acapulco",
        "Taxco y su historia minera de plata",
        "La Quebrada",
        "El sitio arqueológico de Xochicalco (sitio de Patrimonio Mundial de la UNESCO)",
        "Isla de la Roqueta",
      ],
      culture:
        "Guerrero tiene una rica herencia cultural con fuertes influencias de comunidades indígenas. El estado es famoso por danzas tradicionales, música y deliciosa cocina, incluyendo platos como pozole y mole.",
      education: [
        "Universidad Autónoma de Guerrero",
        "Instituto Tecnológico de Acapulco",
        "Universidad Politécnica de Guerrero",
      ],
      funFacts: [
        "Acapulco fue un famoso refugio para las estrellas de Hollywood en la mitad del siglo XX.",
        "Guerrero alberga algunos de los sitios arqueológicos más importantes de México, reflejando su rica historia prehispánica.",
      ],
    },
  },
  Guanajuato: {
    en: {
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
    es: {
      name: "Guanajuato",
      overview:
        "Guanajuato se encuentra en el centro de México, conocido por su rica historia, hermosa arquitectura colonial y vibrante escena cultural. Fue una región clave durante la Guerra de Independencia de México y es famosa por sus minas de plata.",
      capital: "Ciudad de Guanajuato",
      population: "Aproximadamente 6 millones",
      economy:
        "La economía de Guanajuato se basa principalmente en la agricultura, la minería y la manufactura. El estado también es conocido por su producción de frutas y verduras, así como por productos textiles y de cuero.",
      attractions: [
        "Centro Histórico de Guanajuato (sitio de Patrimonio Mundial de la UNESCO)",
        "El Museo de las Momias",
        "El Callejón del Beso",
        "San Miguel de Allende",
        "La Mina Valenciana",
      ],
      culture:
        "Guanajuato es conocido por sus festivales animados, como el Festival Cervantino, y sus ricas tradiciones en música, arte y cocina. Platos como enchiladas mineras y pasteles guanajuatenses son especialidades locales.",
      education: [
        "Universidad de Guanajuato",
        "Instituto Tecnológico de León",
        "Universidad de San Miguel de Allende",
      ],
      funFacts: [
        "Guanajuato es famoso por su único sistema de calles subterráneas.",
        "El estado produce una cantidad significativa de la plata del país y alberga algunas de las minas más antiguas de las Américas.",
      ],
    },
  },
  Durango: {
    en: {
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
    es: {
      name: "Durango",
      overview:
        "Durango está ubicada en el centro-norte de México, conocida por su terreno montañoso y rica historia. El estado presenta un paisaje diverso, que incluye bosques, desiertos y ríos, convirtiéndolo en un destino popular para actividades al aire libre.",
      capital: "Ciudad Durango",
      population: "Aproximadamente 1.8 millones",
      economy:
        "La economía de Durango se basa principalmente en la agricultura, la ganadería y la minería. Es conocida por la producción de ganado, especialmente de reses, y tiene sectores forestales y mineros significativos.",
      attractions: [
        "Centro Histórico de Durango (sitio de Patrimonio Mundial de la UNESCO)",
        "Las Escalas de la Sierra",
        "Sierra del Carmen",
        "El Mercado Gómez Palacio",
        "El Ferrocarril Durango-Zacatecas",
      ],
      culture:
        "Durango tiene un rico patrimonio cultural, influenciado por sus raíces indígenas y la historia colonial. La música y danza tradicionales, especialmente el género duranguense, son una parte importante de la cultura local.",
      education: [
        "Universidad Juárez del Estado de Durango",
        "Instituto Tecnológico de Durango",
        "Universidad Politécnica de Durango",
      ],
      funFacts: [
        "Durango es conocido como la 'Tierra de las Águilas Doradas' y tiene una población significativa de estas aves.",
        "El estado es famoso por su industria cinematográfica, particularmente por ser un lugar de filmación de muchas películas del Oeste.",
      ],
    },
  },
  CiudaddeMéxico: {
    en: {
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
    es: {
      name: "Ciudad de México",
      overview:
        "Ciudad de México, la capital de México, es una de las ciudades más grandes del mundo. Es conocida por su rica historia, vibrante cultura y diversa población. Construida sobre las ruinas de la antigua ciudad azteca de Tenochtitlan, presenta una mezcla de arquitectura moderna y colonial.",
      capital: "Ciudad de México",
      population:
        "Aproximadamente 9 millones (más de 21 millones en el área metropolitana)",
      economy:
        "La economía de Ciudad de México es altamente diversificada, con sectores clave que incluyen finanzas, comercio, manufactura y turismo. Se considera el centro económico del país.",
      attractions: [
        "Zócalo (Plaza Mayor)",
        "Templo Mayor",
        "Parque y Castillo de Chapultepec",
        "Palacio de Bellas Artes",
        "Museo Frida Kahlo (Casa Azul)",
      ],
      culture:
        "Ciudad de México es un centro cultural, conocido por sus museos, teatros y vibrante escena artística. Alberga numerosos festivales, incluido el Día de los Muertos, y ofrece un rico paisaje culinario que presenta la cocina tradicional mexicana.",
      education: [
        "Universidad Nacional Autónoma de México (UNAM)",
        "Instituto Politécnico Nacional (IPN)",
        "Universidad Iberoamericana",
      ],
      funFacts: [
        "Ciudad de México está construida sobre un lago y se hunde a un ritmo de aproximadamente 10 pulgadas por año.",
        "La ciudad tiene el mayor número de museos del mundo, con más de 150.",
      ],
    },
  },
  Colima: {
    en: {
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
    es: {
      name: "Colima",
      overview:
        "Colima es el estado más pequeño de México, ubicado en la costa del Pacífico. Es conocido por sus impresionantes playas, montañas volcánicas y rica herencia cultural. El estado presenta un clima cálido y es un popular destino turístico.",
      capital: "Colima",
      population: "Aproximadamente 731,000",
      economy:
        "La economía de Colima se basa principalmente en la agricultura, con una producción significativa de coco, lima y café. El turismo también juega un papel importante, apoyado por la hermosa costa y los parques naturales del estado.",
      attractions: [
        "Volcán de Colima (Colima Volcano)",
        "Comala, conocido por su arquitectura tradicional y fincas de café",
        "Manzanillo, una importante ciudad portuaria y destino de playa",
        "Museo Regional de Historia",
        "Parque Nacional La Campana",
      ],
      culture:
        "Colima tiene una rica escena cultural, con música, danza y artesanías tradicionales. La cocina local presenta platos como pozole y tamales, y la región alberga varios festivales culturales a lo largo del año.",
      education: [
        "Universidad de Colima",
        "Instituto Tecnológico de Colima",
        "Universidad Pedagógica Nacional (UPN) - Colima",
      ],
      funFacts: [
        "Colima alberga uno de los volcanes más activos de México, que se monitorea de cerca.",
        "El estado tiene una alta tasa de alfabetización en comparación con el promedio nacional, lo que refleja su fuerte compromiso con la educación.",
      ],
    },
  },
  Coahuila: {
    en: {
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
    es: {
      name: "Coahuila",
      overview:
        "Coahuila está ubicada en el norte de México, conocida por su rica historia minera y paisajes diversos, que incluyen desiertos, montañas y bosques. El estado jugó un papel crucial en el desarrollo de la economía mexicana debido a sus recursos minerales.",
      capital: "Saltillo",
      population: "Aproximadamente 3 millones",
      economy:
        "La economía de Coahuila se basa en gran medida en la minería, la manufactura y la agricultura. Es un productor significativo de carbón, hierro y varios minerales, además de albergar una creciente industria automotriz.",
      attractions: [
        "Monclova y el sitio arqueológico histórico de La Ventana",
        "Parque Nacional Sierra de la Sabina",
        "Desierto de los Leones",
        "Plaza de Armas de Saltillo",
        "Cañón de la Sima",
      ],
      culture:
        "Coahuila tiene una rica herencia cultural, influenciada por tradiciones indígenas y españolas. El estado es conocido por su música, especialmente el norteño y el mariachi, así como por sus delicias culinarias como tacos de carne asada y tamales.",
      education: [
        "Universidad Autónoma de Coahuila",
        "Instituto Tecnológico de Saltillo",
        "Universidad Politécnica de Ramos Arizpe",
      ],
      funFacts: [
        "Coahuila alberga las mayores reservas de carbón en México.",
        "El estado es conocido por sus hermosos paisajes, incluida la impresionante cordillera de Sierra Madre Oriental.",
      ],
    },
  },
  Chihuahua: {
    en: {
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
    es: {
      name: "Chihuahua",
      overview:
        "Chihuahua se encuentra en el norte de México, conocido por sus vastos paisajes, rica historia y diversa cultura. Es el estado más grande de México por área y presenta una mezcla de desiertos, montañas y bosques.",
      capital: "Ciudad de Chihuahua",
      population: "Aproximadamente 3.8 millones",
      economy:
        "La economía de Chihuahua es diversa, con contribuciones significativas de la agricultura, la manufactura y la minería. El estado es conocido por su producción de carne de res, algodón y electrónica.",
      attractions: [
        "Centro Histórico de Chihuahua",
        "Cañón del Cobre (Barrancas del Cobre)",
        "Cascada de Basaseachic",
        "Museo Pancho Villa",
        "Museo del Mamut",
      ],
      culture:
        "Chihuahua alberga una mezcla de influencias indígenas y españolas. El estado tiene una fuerte tradición musical, particularmente norteña, y es conocido por sus deliciosos platos como burritos y carne asada.",
      education: [
        "Universidad Autónoma de Chihuahua",
        "Instituto Tecnológico de Chihuahua",
        "Universidad Tecnológica de Chihuahua",
      ],
      funFacts: [
        "El Cañón del Cobre es más grande y más profundo que el Gran Cañón en los Estados Unidos.",
        "Chihuahua es conocido por su producción de algunos de los chihuahuas más finos del mundo, una raza de perro pequeño.",
      ],
    },
  },
  Chiapas: {
    en: {
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
    es: {
      name: "Chiapas",
      overview:
        "Chiapas está ubicado en el sureste de México, conocido por sus ricas culturas indígenas, impresionantes paisajes y diversos ecosistemas. Es hogar de las ruinas mayas de Palenque y del impresionante Cañón del Sumidero.",
      capital: "Tuxtla Gutiérrez",
      population: "Aproximadamente 5.5 millones",
      economy:
        "La economía de Chiapas se basa principalmente en la agricultura, con productos clave como café, plátanos y maíz. El estado también tiene sectores de turismo y artesanía en crecimiento.",
      attractions: [
        "Cañón del Sumidero (Cañón del Sumidero)",
        "Sitio Arqueológico de Palenque (sitio Patrimonio de la Humanidad de la UNESCO)",
        "San Cristóbal de las Casas",
        "Reserva de la Biosfera de Chiapas",
        "Parque Nacional Laguna de Montebello",
      ],
      culture:
        "Chiapas es rica en patrimonio indígena, con numerosos grupos indígenas que preservan sus tradiciones, lenguas y artesanías. El estado es conocido por sus vibrantes textiles, música tradicional y cocina, que incluye platos como tamales y pozol.",
      education: [
        "Universidad Autónoma de Chiapas (UNACH)",
        "Instituto Tecnológico de Tuxtla Gutiérrez",
        "Universidad Intercultural de Chiapas",
      ],
      funFacts: [
        "Chiapas es uno de los estados más biodiversos de México.",
        "La Selva Lacandona, ubicada en Chiapas, es una de las últimas selvas tropicales que quedan en América del Norte.",
      ],
    },
  },
  Campeche: {
    en: {
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
    es: {
      name: "Campeche",
      overview:
        "Campeche está ubicada en la parte sureste de México, conocida por su rica herencia maya e historia colonial. El estado presenta un paisaje diverso de áreas costeras, selvas y sitios arqueológicos, con una parte significativa de su territorio siendo un sitio del Patrimonio Mundial de la UNESCO.",
      capital: "San Francisco de Campeche",
      population: "Aproximadamente 928,000",
      economy:
        "La economía de Campeche se basa principalmente en la producción de petróleo, la pesca y la agricultura. El estado es conocido por sus mariscos, miel y frutas tropicales.",
      attractions: [
        "Fortificaciones Históricas de San Francisco de Campeche (sitio de Patrimonio Mundial de la UNESCO)",
        "Sitio arqueológico Edzná",
        "Isla Cozumel",
        "Laguna de Términos",
        "Sitios arqueológicos Balamku' y Chicanna",
      ],
      culture:
        "Campeche es conocida por su singular mezcla de culturas indígenas y coloniales. El estado celebra varios festivales, incluyendo el Carnaval de Campeche, y es famoso por sus platos tradicionales como el pan de muerto y el relleno negro.",
      education: [
        "Universidad Autónoma de Campeche",
        "Instituto Tecnológico de Campeche",
        "Universidad Politécnica de Campeche",
      ],
      funFacts: [
        "Campeche es conocida por su arquitectura colonial bien conservada y sus edificios coloridos.",
        "El estado tiene uno de los humedales más grandes de México, proporcionando hábitat para una diversa fauna.",
      ],
    },
  },
  BajaCaliforniaSur: {
    en: {
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
    es: {
      name: "Baja California Sur",
      overview:
        "Baja California Sur se encuentra en la parte sur de la península de Baja California, conocida por sus impresionantes costas, diversa vida marina y hermosos paisajes. Es un popular destino turístico, famoso por sus playas y actividades al aire libre.",
      capital: "La Paz",
      population: "Aproximadamente 798,447",
      economy:
        "La economía está impulsada principalmente por el turismo, la pesca y la agricultura. La región también es conocida por su creciente industria inmobiliaria y de servicios, atendiendo tanto a locales como a visitantes.",
      attractions: [
        "Cabo San Lucas y sus playas",
        "Malecón de La Paz",
        "Isla Espiritu Santo (Reserva de la Biosfera de la UNESCO)",
        "Corredor de Los Cabos",
        "Reserva de la Biosfera Sierra de la Laguna",
      ],
      culture:
        "Baja California Sur tiene una rica herencia cultural influenciada por pueblos indígenas, la historia colonial española y las influencias modernas. La cocina local presenta mariscos y platos tradicionales mexicanos, con ingredientes frescos provenientes de la región.",
      education: [
        "Universidad Autónoma de Baja California Sur",
        "Instituto Tecnológico de La Paz",
        "Universidad Mundial",
      ],
      funFacts: [
        "Baja California Sur alberga la colonia de leones marinos más grande del mundo en Los Islotes.",
        "La región es famosa por la observación de ballenas, particularmente durante la temporada de migración.",
      ],
    },
  },
  BajaCalifornia: {
    en: {
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
    es: {
      name: "Baja California",
      overview:
        "Baja California está ubicada en la región noroeste de México, conocida por su impresionante costa, ecosistemas diversos y vibrante cultura. El estado es famoso por su producción de vino en el Valle de Guadalupe y su proximidad a la frontera con Estados Unidos.",
      capital: "Mexicali",
      population: "Aproximadamente 3.7 millones",
      economy:
        "La economía de Baja California se basa en la manufactura, el turismo, la agricultura y la producción de vino. La industria maquiladora desempeña un papel importante, aprovechando su ubicación fronteriza.",
      attractions: [
        "Región vinícola del Valle de Guadalupe",
        "Escena cultural y oferta culinaria de Tijuana",
        "Belleza costera y playas de Ensenada",
        "Géiser marino La Bufadora",
        "Formaciones rocosas de Cataviña",
      ],
      culture:
        "Baja California tiene una rica herencia cultural influenciada por tradiciones mexicanas y americanas. El estado es conocido por su cocina, que incluye tacos, platillos de mariscos y vino de viñedos locales.",
      education: [
        "Universidad Autónoma de Baja California (UABC)",
        "Instituto Tecnológico de Mexicali",
        "Universidad Iberoamericana Tijuana",
      ],
      funFacts: [
        "Baja California es hogar de algunos de los mejores vinos de México y a menudo se le conoce como el 'Napa Valley de México.'",
        "Tijuana es una de las ciudades de más rápido crecimiento en México y es conocida por su vibrante vida nocturna.",
      ],
    },
  },
  Aguascalientes: {
    en: {
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
    es: {
      name: "Aguascalientes",
      overview:
        "Aguascalientes está ubicada en el centro de México, conocida por sus aguas termales y su vibrante escena cultural. Tiene una rica historia y es famosa por su Feria Nacional de San Marcos, una de las ferias más grandes del país.",
      capital: "Ciudad de Aguascalientes",
      population: "Aproximadamente 1.4 millones",
      economy:
        "La economía de Aguascalientes es diversa, con sectores clave que incluyen manufactura, comercio y agricultura. El estado es conocido por su producción de productos agrícolas como guayabas y uvas.",
      attractions: [
        "Feria Nacional de San Marcos",
        "Centro Histórico de Aguascalientes",
        "Plaza de la Patria",
        "Templo de San Antonio",
        "Museo de Aguascalientes",
      ],
      culture:
        "Aguascalientes es conocida por su vibrante escena artística, que incluye música, danza y teatro. El estado es famoso por su gastronomía, especialmente por platos como birria y carne en su jugo.",
      education: [
        "Universidad Autónoma de Aguascalientes",
        "Instituto Tecnológico de Aguascalientes",
        "Universidad Panamericana (Aguascalientes)",
      ],
      funFacts: [
        "Aguascalientes es uno de los estados más pequeños de México pero tiene una rica herencia cultural.",
        "El nombre del estado significa 'aguas calientes' en español, refiriéndose a sus numerosas aguas termales.",
      ],
    },
  },
};
