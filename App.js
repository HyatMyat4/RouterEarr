import './App.css';
import './Resualt.css';
import Header from './Header';
import PopularSportCar from './PopularSportCar'
import { useState } from 'react'
import  McLaren from './imgFolder/Screenshot (23).png'
import  CorvetteC8 from './imgFolder/c84.jpg'
import  FerrariSF90 from './imgFolder/Red_2019_Ferrari_SF90_Stradale_(48264238897)_(cropped).jpg'
import  GTR35 from './imgFolder/GtR35.webp'
import lamborghiniSVJ1 from './imgFolder/svj1.webp'
import  MustangGT500 from './imgFolder/Mustang.jpg'
import  Dodge from './imgFolder/dodge kit.jpg'
import  camoryZl1 from './imgFolder/zl12.webp'
import  DodgeViper from './imgFolder/viper.jpg'
import  ToyotaSupra from './imgFolder/2 (1).jpg'
import  BugattiChiron from './imgFolder/Screenshot (31).png'
import hucan34  from './imgFolder/hucan34.jpg'
import hucanSTO   from './imgFolder/STO.jpg'
import bmwM4   from './imgFolder/bmwM4.jpg'
import bmwI8   from './imgFolder/BmwI8.webp'
import KoenigseggGemera  from './imgFolder/KoenigseggGemera.jpg'
import { Route , Switch , useHistory } from 'react-router-dom';
import Resualt from './Resualt'
import All from './All'
import SearchCarinfo from './SearchCarinfo'
import FilterPrice from './FilterPrice'
import Contactus from './Contactus'
function App() {
  const [ Caritem , setCaritem ] = useState(
     [
      {
      
        "id": 126,    
        "title":   "Koenigsegg Gemera",
        "price1" : 1700000 ,
        "price" :  "$1.7 million",
       "Type"  : "Super Sport Family Hypercar",
        "Engin":   "2.0 L TFG twin-turbocharged I3 · 3 electric motors placed both rear wheels and one on crankshaft 3-Cylinder",
       "Torque":  "1,700bhp",
     "Horsepower":  "1,700 hp",
     "Acceleration":  " 0 to 60 mph in 3.5 sec",
     "storage"  :  "200 litres from the boot and frunk",
        "Transmission" : "Single-Speed Koenigsegg Direct Drive (KDD)",
         "TopSpeed" : "248mph",
         "person":  "4",
        "image": KoenigseggGemera,
        "Special":" 90deg door with 4-seat",
        "href" : "https://youtu.be/1mPmCDS66Qc",
        "Carlogoname" : "Koenigsegg"
},
      {
      
        "id": 125,    
        "title":   "Bmw i8",
        "price1" : 147500,
        "price" :  "$147,500",
       "Type"  : "plug-in hybrid sports car",
        "Engin":   "turbocharged 1.5-liter three-cylinder gas engine with an 11.6-kWh battery pack and two electric motors",
       "Torque":  "420 lb-ft of torque",
     "Horsepower":  "   369hp. ",
     "Acceleration":  "0-60mph in 4.2 seconds. ",
     "storage"  :  " 83 litres ",
        "Transmission" : " Aisin F21-360 FT EOP.",
         "TopSpeed" : "155mph",
         "person":  " 4",
        "image": bmwI8,
        "Special":"Butterfly doors",
        "href" : "https://youtu.be/dhMuTlUVaFY",
        "Carlogoname" : "Bmw"
},
      {
      
        "id": 124,    
        "title":   "Bmw M4 CSL",
        "price1" : 139900,
        "price" :  "$139,900",
       "Type"  : " Sport",
        "Engin":   "3.0-litre twin-turbocharged straight-six engine ",
       "Torque":  "(649 Newton-meters) of torque available from 2,750 to 5,950 rpm.",
     "Horsepower":  "  550hp. ",
     "Acceleration":  "0-60mph in 3.7 seconds ",
     "storage"  :  " 83 litres ",
        "Transmission" : " 8-speed automatic transmission",
         "TopSpeed" : "191mph.",
         "person":  "2",
        "image": bmwM4,
        "Special":"body Design",
        "href" : "https://youtu.be/Y2odS-nK3uQ",
        "Carlogoname" : "Bmw"
},
      {
      
        "id": 123,    
        "title":   "lamborghini Huracan STO",
        "price1" : 327838,
        "price" :  "  $327,838",
       "Type"  : "Super Sport",
        "Engin":   "naturally aspirated V-10 engine",
       "Torque":  "565 Nm at 6,500 rpm.",
     "Horsepower":  "  640 hp.",
     "Acceleration":  " 0-100 km/h (MPH 0-62)3.0 s. ",
     "storage"  :  " 83 litres ",
        "Transmission" : " seven-speed dual-clutch automatic",
         "TopSpeed" : "310 km/h.",
         "person":  " 2",
        "image": hucanSTO,
        "Special":"body Design",
        "href" : "https://youtu.be/5MU-b8pm6J0",
        "Carlogoname" : "lamborghini"

},
      {
      
                    "id": 122,    
                    "title":   "lamborghini Huracan",
                    "price1" : 206485,
                    "price" :  "  $206,485",
                   "Type"  : "Super Sport",
                    "Engin":   "V10 5.2 Liter.",
                   "Torque":  "443@6,500",
                 "Horsepower":  "602hp.",
                 "Acceleration":  "0-100 km/h (MPH 0-62)2.9 s. ",
                 "storage"  :  " 60 to 70 litres ",
                    "Transmission" : " 7-speed dual-clutch automatic.",
                     "TopSpeed" : "201 mph.",
                     "person":  " 2",
                    "image": hucan34,
                    "Special":"body Design",
                    "href" : "https://youtu.be/1HpliMCHFSY",
                    "Carlogoname" : "lamborghini"
      },
      {
          "id": 111,    
          "title":   "McLaren 720S",
          "price1" :   284745,
          "price" :  "  $284,745.",
         "Type"  : "Base, Luxury, and Performance",
          "Engin":   "4.0-liter twin-turbo V8.",
         "Torque":  "568 lb-ft.",
       "Horsepower":  "710 hp.",
       "Acceleration":  "0 to 60 : 2.8s ",
       "storage"  :  "150 liters",
          "Transmission" : " 7-speed dual-clutch automatic.",
           "TopSpeed" : "212 mph.",
           "person":  " 2",
          "image": McLaren,
          "Special":"Butterfly doors",
          "href" : "https://youtu.be/Zbzqx-hGOCg",
          "Carlogoname" : "McLaren"
      },
      {
          "id": 112,    
          "title":   "Chevy Chevrolet C8",
          "price1" :   76150,
          "price" :  "$76,150.",
         "Type"  : "1LT,Coupe or a Convertible body",
          "Engin":   "6.2L V8 LT2 engine.",
         "Torque":  "465 lb-ft of torque.",
       "Horsepower":  "490hp .",
       "Acceleration":  "0 to 60 : 2.9s ",
       "storage"  :  "70 litres",
          "Transmission" : "Tremec TR-9080 DCT 8-speed dual clutch ",
           "TopSpeed" : "194 mph ",
           "person":  " 2",
           "Special":"Rear Camera Mirror* Rear park assist* and HD rear vision camera*",
          "image": CorvetteC8,
          "href" : "https://youtu.be/7n3ITV6T2j4",
          "Carlogoname" : "Chevrolet"
      },
      {
          "id": 113,    
          "title":   "Ferrari SF90",
          "price1" :   625000,
          "price" :  "  $625,000",
         "Type"  : "Super Sport",
          "Engin":   "4.0 l V8",
         "Torque":  "590 lb·ft @ 6,000 rpm (800 N·m)",
       "Horsepower":  "769 hp @ 7,500 rpm (573 kW)",
       "Acceleration":  "0  to 60 : 2.0s  ",
       "storage"  :  "50 litres",
          "Transmission" : " 8-speed dual-clutch",
           "TopSpeed" : "211 mph",
           "person":  " 2",
           "Special":"interior ",
          "image":FerrariSF90,
          "href" : "https://youtu.be/AL-GDDN5Y-0",
          "Carlogoname" : "Ferrari"
      },
      {
          "id": 114,    
          "title":   "GTR 35",
          "price1" :   115000,
          "price" :  "$115,000",
         "Type"  : "unique style and performance",
          "Engin":   "3.8-litre twin-turbo V6",
         "Torque":  " 419kW/632Nm",
       "Horsepower":  "710hp",
       "Acceleration":  "   0 to 60  2.5s",
       "storage"  :  " 74 litres",
          "Transmission" : " six-speed dual-clutch automatic.",
           "TopSpeed" : "196 mph.",
           "person":  " 4",
           "Special":"Price to Performent ",
          "image":GTR35,
          "href" : "https://youtu.be/vlDOjTaaEdA",
          "Carlogoname" : "Nissan"
      },
      {
          "id": 115,    
          "title":   "Lamborghini Aventador SVJ",
          "price1" :   517770,
          "price" :  "  $517,770",
         "Type"  : " SuperSport + and bodyDesign",
          "Engin":   "6.5L V12.",
         "Torque":  "443@6,500",
       "Horsepower":  "770 hp",
       "Acceleration":  " 0 to 60 : 2.7s.",
       "storage"  :  "90 liters",
          "Transmission" : "7-Speed Single Clutch",
           "TopSpeed" : "217+ mph.",
           "person":  " 2",
           "Special":"V12 + Design  ",
          "image":lamborghiniSVJ1,
          "href" : "https://youtu.be/42YbTTK7ESc",
          "Carlogoname" : "lamborghini"          
      },
      {
          "id": 116,    
          "title":   "Mustang GT500",
          "price1" :   70000,
          "price" :  "$70,000",
         "Type"  : "Sport muscle Coupe",
          "Engin":   "5.2l V8",
         "Torque":  "625 lb·ft @ 5,000 rpm (847 N·m)",
       "Horsepower":  "760 hp",
       "Acceleration":  " 0 to 60 : 3.3s",
       "storage"  :  "445 litres",
          "Transmission" : "7-Speed Dual-Clutch",
           "TopSpeed" : "180 mph.",
           "Special":"Cheap Price  ",
           "person":  " 2",
          "image":MustangGT500,
          "href" : "https://youtu.be/PWAPQ2fAl5Q",
          "Carlogoname" : "Ford"
      },
      {
          "id": 117,    
          "title":    "Dodge Hellcat Demon With Body Kit",
          "price1" :   84995,
          "price" :  " $84,995",
         "Type"  : "Muscle",
          "Engin":   "6.2 l V8",
         "Torque":  "717 lb·ft @ 4,500 rpm (972 N·m)",
       "Horsepower":  "808 hp ",
       "Acceleration":  "0 to 60 : 2.3 seconds ",
       "storage"  :  "170 liters",
          "Transmission" : " Transmission =915663 · Hurst Billet/Plus Pistol Grip Automatic Shift ... ",
           "TopSpeed" : "196 mph",
           "person":  "4",
           "Special":"Supercharged ",
          "image":Dodge,
          "href" : "https://youtu.be/iHcJr60y6aw",
          "Carlogoname" : "Dodge"
      },
      {
          "id": 118,    
          "title":   "Chevrolet Camaro Zl1",
          "price1" :  65000,
          "price" :  "$65,000",
         "Type"  : "muscle Coupe ",
          "Engin":   "6.2L V8 engine",
         "Torque":  "650 lb-ft @ 3,600 rpm",
       "Horsepower":  "650 hp ",
       "Acceleration":  "0 to 60 : 5.4 s ",
       "storage"  :  "150 liters",
          "Transmission" : "Available paddle-shift 10-speed automatic ... ",
           "TopSpeed" : "198 mph ",
           "person":  " 4",
           "Special":"Supercharged ",
          "image":camoryZl1,
          "href" : "https://youtu.be/bSWGJsDIFY4",
          "Carlogoname" : "Chevrolet"
      },
      {
          "id": 119,    
          "title":   "Dodge Viper GTS-R",
          "price1" :  294857,
          "price" :  "$294,857",
         "Type"  : "Sport Coupe",
          "Engin":   "Viper 8.0-liter (7,998 cc) V10 naturally-aspirated, front-engined, rear-wheel drive",
         "Torque":  "729 lb⋅ft (988 N⋅m) torque",
       "Horsepower":  "709 hp",
       "Acceleration":  "0 to 60  3.3 sec, ",
       "storage"  :  "415 litres.",
          "Transmission" : " Transmission = BorgWarner T56 6-speed manual",
           "TopSpeed" : "185 mph",
           "Special":"Unknow ",
           "person":  " 2",
          "image":DodgeViper,
          "href" : "https://youtu.be/HruMwfBotzs",
          "Carlogoname" : "Dodge"
      },
      {
          "id": 120,    
          "title":   "Toyota Supra ",
          "price1" :   55374,
          "price" :  "$55,374",
         "Type"  : "Sport Coupe",
          "Engin":   "2.0-litre engine with twin-scroll turbocharger.	",
         "Torque":  "400 Nm of torque.",
       "Horsepower":  "335 hp",
       "Acceleration":  "  Acceleration = 0 to 60   4.1 s, ",
       "storage"  :  "290-litre",
          "Transmission" : "(MT) option ... At launch",
           "TopSpeed" : "165 mph ",
           "Special":"Toyota Supra Next Gen ",
           "person":  " 2",
          "image":ToyotaSupra,
          "href" : "https://youtu.be/FblJGCdMlds",
          "Carlogoname" : "Toyota"
      },
      {
          "id": 121,    
          "title":   "Bugatti Chiron ",
          "price1" :   3987000,
          "price" :  "$3.9 million",
         "Type"  : "Super Sport + mid-size sports car",
          "Engin":   "8.0 l W16 	Turbocharged	",
         "Torque":  "1,180 lb·ft @ 2,000 : 6,000 rpm (1,600 N·m) ",
       "Horsepower":  "1500  hp",
       "Acceleration":  "0 to 60   2.4 seconds, ",
       "storage"  :  " 44 litres.",
          "Transmission" : "7-speed dual-clutch automatic",
           "TopSpeed" : "273 mph ",
           "Special":"million Car  ",
           "person":  " 2",
          "image":BugattiChiron,
          "href" : "https://youtu.be/FR8iIMPNqYk",
          "Carlogoname" : "Bugatti"
      },
      ]
  )
  return (
    <div className="App">
 <Header
 Caritem={Caritem}
 setCaritem={setCaritem}
 /> 
 <Resualt/>
 <Switch>
  <Route exact path="/">
 {Caritem.map((item) => (
  <PopularSportCar
  
  key={item.id}
  title ={item.title}
  price ={item.price}
  Type={item.Type}
  Engin={item.Engin}
  Torque={item.Torque}
  Horsepower={item.Horsepower}
  Acceleration={item.Acceleration}  
  Transmission={item.Transmission}
  TopSpeed={item.TopSpeed}
  Special={item.Special}
  person={item.person}
  image={item.image}
  href={item.href}
  />  
 ))} 
</Route>
  
   <Route exact path="/All">
      <All/>
   </Route>
   <Route exact path='/SearchCarinfo'>
      <SearchCarinfo/> 
   </Route>   
   <Route exact path='/FilterPrice' >
    <FilterPrice/>
    </Route>  
   <Route exact path='/Contactus' >
    <Contactus/>
    </Route>  
    </Switch>
   
   
    </div>
  );
}

export default App;
