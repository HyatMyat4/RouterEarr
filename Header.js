import Haderlogo from './imgFolder/3.jpg'
import { Link  } from 'react-router-dom'


function Header( {Caritem , setCaritem} ) {
  const btid = true ;
    const handleClick = (e) => {     
     const value =e.target.id 
     console.log(value)
      if(value === '19979') {
        const icon =document.getElementsByClassName('Dark-light')[0]; 
       const root =document.getElementsByClassName('body')[0];    
      root.style.backgroundColor="white"       
      icon.innerHTML = "" ;
      icon.innerHTML += ` <i class="fa-solid fa-moon icon-moon " id = '19972'></i>`
      console.log('i')
      }
      if(value === '19972') {
        const icon =document.getElementsByClassName('Dark-light')[0]; 
       const root =document.getElementsByClassName('body')[0];    
      root.style.backgroundColor="#333333"       
      icon.innerHTML = "" ;
      icon.innerHTML += `<i class="fa-regular fa-sun light " id='19979' ></i>`
      console.log('i')
      }
    }  
    
    
    const handlefilter = (e) => {
      const Resualt =document.getElementsByClassName('Resualt')[0];
      Resualt.innerHTML="" ;
      console.log(Caritem)
     const value1 =e.target.value.toLowerCase()
     if(value1.length === 0) {
      return
     }
      console.log(value1)
     const CarFilter =Caritem.filter(item => item.Carlogoname.toLowerCase().includes(value1) )
   
     
     for (let i = 0 ; i < CarFilter.length ; i++ ) {
      const caritemcontainer =document.createElement("div");
      caritemcontainer.id=CarFilter[i].id;
      caritemcontainer.classList.add("Resualt-container");            
      const CarName =document.createElement("div");
    CarName.classList.add("carName2");
      CarName.append(CarFilter[i].title);

      const carimg =document.createElement("img");
      carimg.classList.add("Resualt-img");
      carimg.src =CarFilter[i].image;

      caritemcontainer.append(CarName,carimg);
      Resualt.append(caritemcontainer);

  }
     
console.log(CarFilter , "it working")

    }

    return (     
     
      <div className="Header">
  
        <div className="Header-Container">            
           <img className='Header-img' src={Haderlogo}/>
           <div className='Header-input'>                
               <i  className="fa-solid fa-magnifying-glass search-icon" ></i>
               <input className="Header-inpt-Top" type="email" placeholder= " Search Sport Car..." list="Email"
               onChange={handlefilter}
               />  
  
           </div>             
           
                <span className='Top-Page-Name'><Link to="/">PopularSportCar</Link></span>                              
                <span className='Top-Page-Name'><Link to="/All">All</Link></span>
                <span className='Top-Page-Name'><Link to="/SearchCarinfo">Search Car info</Link></span>
                <span className='Top-Page-Name'><Link to="/FilterPrice">Filter Price</Link></span>
                <span className='Top-Page-Name'><Link to="/Contactus">Contact us</Link></span>                
               
            
            <div className='Log-in-father'>
                    <span className= 'login'>Log In</span>
            </div>
            <div className='Header-Container2'>
                    <div className='Dark-light' onClick={handleClick} >                   
                    <i className="fa-regular fa-sun light " id='19979' ></i>
                    </div>
            </div>
            <div className='line-3'>
            <i className="fa-solid fa-bars line"></i>
            </div>
        </div>
      </div>
    
    );
  }
  
  export default Header;
 
 
 