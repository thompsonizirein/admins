import styled from "styled-components";



export const Navbar = styled.nav`

     box-shadow: 2px 2px 4px;
  padding: 20px 8px;
  position: sticky;
  top: 0;
  background: white;
  font-family: var(--font-geist-sans);
  z-index: 800;

    .main{
        width: 80%;
        margin: auto;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    .images{
        cursor: pointer;
    }

    .menubar{
        display: none;
    }

    .images:hover{
        transform: scale(1.05);
    }

    .middle{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        font-size: 20px;
        margin-left: 10rem;
        text-transform: capitalize;
        cursor: pointer;
    }

    .middle a:hover{
    color: #360966;
    transform: scale(1.1);
    }

    .about a{
    color: black;
    }

     .about a:hover{
    color: #360966;
    transform: scale(1.1);
     }


     .about{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
     }

     .openabouton{
            display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        top: 100%;
        padding: 10px 20px;
        color: whitesmoke;
        background-color: #ff4612;
        /* align-items: center; */
        text-align: center;
        z-index: 10;
     }
     .openabout{
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        z-index: 10;
        top: 100%;
        padding: 10px 20px;
        width: 280px;
        background-color: #ff4612;
        /* align-items: center; */
        text-align: center;
     }

     .openabout a{
      color: whitesmoke;
     }
     .openabouton a{
            color: whitesmoke;
     }

    

    .right button{
      background-color: #ff4612;
      color: whitesmoke;
      text-transform: uppercase;
      padding: 6px 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .right button:hover{
        background-color: #2e2d2d;
        transform: scale(1.04);
    }

    form div span{
     background-color: #ff4612;
      color: whitesmoke;
      padding: 10px 10px;
      border-radius: 10px;
     
    }


    .quotes{
        position: absolute;
        z-index: 10;
        color: whitesmoke;
        width: 100%;
    }

    .quotes form{
        width: 40%;
        margin: auto;
        margin-top: 4rem;
        background-color: white;
        color: black;
        border-radius: 10px;
        align-items: center;
        padding: 30px 40px;
    }

    input{
        width: 100%;
        padding: 10px 10px;
        border:  1px solid lightgray;
        margin-block: 10px;
    }

    textarea{
        width: 100%;
        border: 1px solid lightgray;
        margin-block: 10px;
        padding: 20px 10px;

    }

    form div button{
        background-color: #ff4612;
        width: 100%;
        padding: 10px 10px;
        font-size: 17px;
        color: whitesmoke;
    }


    .mobilenabar{
        display: none;
    }

    @media screen and (max-width: 900px) {

      
        .main{
        width: 95%;
    
        }
        .menubar{
            display: block;
            font-size: 30px;
        }

        .middle{
            display: none;
        }

        .right{
            display: none;
        }

        .mobilenabar{
            display: block;
            z-index: 10;
            background: white;
            height: 100%;
            right: 0;
            width: 70%;
            position: fixed;
            top: 8%;
            z-index: 500;
        }

        .mobilenabar div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            font-size: 20px;
            font-weight: 600;
            margin-block: 1rem;

        }

        a:hover{
            color: #ff4612;
        }


        .quotes{
            width: 95%;
             
        }

        .quotes form{
            width: 95%;
            right: 0;
            left: 0;
        }
    }


`

export const Homepages = styled.main`
font-family: var(--font-geist-sans); 
position: relative;
  width: 100%;
  z-index: 1;
  background-color: transparent;
 overflow: hidden;
 min-height: 100vh;
 position: relative;
  .loader-blur {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;  /* full screen overlay */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 800; /* under spinner */
  }

  .spinner-grow {
    position: fixed;        
    top: 50%;               
    left: 50%; 
    color: whitesmoke;             
    transform: translate(-50%, -50%);
    z-index: 900; /* above blur */
    font-size: 20px;
  }
    .images{
        position: absolute;
        position: fixed;
        object-fit: cover;
        object-position: center;
        z-index: -1;
        
    }

  
  .middlewrite{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .track span:nth-child(1){
    font-weight: 800;
    font-size: 50px;
  }
  .track span:nth-child(2){
    font-weight: 800;
    font-size: 20px;
  }

  .track{
    display: flex;
    flex-direction: column;
    color: white;
  }

  .trackinID{
    width: 35%;
    display: flex;
    margin: auto;
    gap: 10px;
    margin-block: 10px;
  }

  .trackinID input{
    background-color: whitesmoke;
    color: black;
    padding: 10px 10px;
    text-transform: uppercase;
    width: 100%;
    outline: none;
    border: 1px solid light gray;
  }

   .trackinID input:hover{
    border: 2px solid  green;
   }

    .trackinID button{
          background-color: #ff4612;
          padding: 10px 10px;
          cursor: pointer;
    }
     .trackinID button:hover{
        background-color: #2e2d2d;
     }


/* tracking pop up */

.trackngpage {
  position: absolute;
  background-color: wheat;
  width: 40%;
  left: 50%;
  color: black;
  top: 2%;
  transform: translateX(-50%);
  padding: 10px 20px;
   z-index: 900 ;
  border-radius: 20px;
}


.Shiparamatracking{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ff4612;
}

.closetracking{
    margin-bottom: 10px;
    display: flex;
    justify-content: end;
    align-items: end;
    cursor: pointer;
    font-weight: 800;
    color: red;
}

.closetracking span{
    font-size: 18px !important;
    /* margin-bottom: 1rem; */
}

.Shiparamatracking span:nth-child(1){
    font-size: 18px;
    font-weight: 700;
}
.Shiparamatracking span:nth-child(2){
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.trackingnumbers{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-block: 1rem;
    padding: 10px 0px;
    font-weight: 800;
    
}

.trackingnumbers > span{
    font-size: 15px !important;
    
}


.shipment{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 2px;
    padding: 15px 0px;
}

.shipment div{
    background-color: whitesmoke;
    display: flex;
    justify-content:center ;
    align-items: center;
    flex-direction: column;
    padding: 30px 30px;
    gap: 15px;
    color: #4e148c;
    font-size: 20px;
    cursor: pointer;

}

.shipment div span:nth-child(1){
    color: #ff4612;
    font-size: 30px;
}

.shipment div span:hover{
     color: whitesmoke;
}

.shipment div:hover{
    background-color: #4e148c;
    transform: scale(1.07);
    color: whitesmoke;
}

.headeoftracking{
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    font-size: 14px;
}

.arrviedourfacility{
    display: flex;
    flex-direction: column;
    font-size: 15px;
}

.arrviedourfacility span:nth-child(1){
    font-weight: 700;
}

.updated{
    font-size: 15px;
}
.updated p{
    font-size: 20px;
    font-weight: 800;
    color: #ff4612;
}


.arrived{
    display: flex;
    flex-direction: column;
    font-size: 15px;
}

.preparingfor{
    margin-block: 10px;
    width: 80%;
    font-size: 14px;
    color: red;
    font-weight: 600;
}

.movingthroug{
    display: flex;
    flex-direction: column;
    margin-block: 10px;
}

.movingthroug span:nth-child(1){
    color: #ff4612;
    font-weight: 700;
}
    

    .whoweae{
       color: black;
       padding: 10px 0px;
       background-color: white;
    }

    .whoweareimage{
        width: 80%;
        padding: 10px 0px;
    }

    .whoweae .main{
        display: flex;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        padding: 10 20px;
    
    }

  

    .whoare{
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
    }  

    .whoare h2{
       color: #4e148c;
       font-weight: 600;
       font-size: 30px;
    }

    .whoare h3{
        color: #ff4612;
        font-size: 20px;
    }

    .whoare p{
        font-size: 16px;
    }

    .botton button{
     background-color: #ff4612;
     color: whitesmoke;
     padding: 10px 20px;
     cursor: pointer;
    }


    .Delivery{
        width: 80%;
        margin: 5rem auto;
       
        
    }

    .deliver{
        width: 70%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 5px;
        margin:auto ;
    }

    .deliver p{
      color:  #ff4612;
      font-weight: 500;
      font-size: 20px;
    }
    .deliver h2{
        font-size: 30px;
        color: #4e148c;
        font-weight: 800;
    }



    .fastdeliry{
        padding: 20px 0px;
        width: 100%;
    }

    .fast{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        cursor: pointer;
      
    }

    .box{
        flex: 1;
       border-radius: 10px;
        box-shadow: 4px 4px 8px;
    }

    .imgaesbox{
        width: 100%;

    }

    .imgs{
        width: 100%;
        /* height: 250px; */
    }

    .witep{
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        
    }

    .witep>p{
          color: #4e148c;
          font-weight: 600;
          font-size: 17px;
    }
     .witep>span{
opacity: .7;
     }



     .extrafeatures{
        width: 80%;
        margin: auto;
        display: flex;
        padding: 40px 0px;
     }


     .Extra{
  flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
     }

     .Extra span{
        color: #ff4612;
        font-weight: 700;
     }
     .Extra p{
        opacity: .7;
        /* font-weight: 700; */
     }
     .Extra h1{
        color: #4e148c;
        font-weight: 700;
        font-size: 25px;
     }

     .imagesdelivery{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
     }



     @media screen and (max-width: 900px) {
         
        .middlewrite{
            width: 95% !important;
            height: 100% !important;
            margin-top: 3rem;
        }
        .track span{
            font-size: 15px !important;
        }

        .trackinID{
            width: 70% !important;
            flex-direction: column;
        }
        .trackinID input{
            width: 100% !important;
            padding: 12px 15px !important;
        }
          .trackinID button{
            width: 40% !important;
            margin: auto;
          }


          

          .shipment{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px !important;

          }


          .main{
            width: 95% !important;
            flex-direction: column;
          
          }

          .img{
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .whoare{
  align-items: center !important;
  text-align: center;
          }


          .Delivery{
            width: 100%;
          }
          .deliver{
            text-align: center;
            width: 95% !important;
          }

          .fastdeliry{
            width: 100% !important;
          }

          .fast{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            width: 95% !important;
          }


          .extrafeatures{
            flex-direction: column-reverse;
            width: 95% !important;
            text-align: center;
            gap: 30px;
            margin-top: -3rem;
          }


    .trackngpage{
        width: 90%;

        top: 1%;
    }

    .closetracking span{
        font-size: 25px !important;
    }
        
        
     }

   
`

export const Commets = styled.main`
    
         .review{
        background-color: #010048;
        padding: 30px 0px;
        color: whitesmoke;
     }

     .review>div{
        width: 80%;
        margin: auto;
   
     }

     .tipic{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 1rem;
     }

     .tipic h2{
        font-size: 30px;
          
     }
     .tipic p{
        font-family: italic;
          color:  #ff4612;
          font-size: 18px;
     }

     .myreview{
       display: flex;
        flex-direction: column;
        gap: 10px;
     }
     .stars{
        display: flex;
        gap: 6px;
        margin-bottom: 1rem;
        
     }
         .stars span{
         color:  #ff4612;
         font-size: 20px;
         }

     .comments{
        display: flex;
       gap: 16px;
        align-items: center;
        margin-block: 1rem;
     }

     .nameofcomment{
        display: flex;
        flex-direction: column;
        gap: 4px;
     }

     .cargoship{
        display: flex;
        flex-direction: column;
        gap: 10px;
     }

     .navigatecomment{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
     }
     .navigatecomment span{
        cursor: pointer;
        background-color: #ff4612;
        padding: 10px 10px;
     }

     .navigatecomment span:hover{
        color: green;
        transform: scale(1.09);
     }
`

export const Deloveryeverything = styled.main`
    
    .DeliverAnything{
        padding: 40px 0px;
        width: 80%;
        margin: auto;
     }

     .DeliverAny{
        display: flex;
        flex-direction: column;
        gap: 5px;
    
        justify-content: center;
        align-items: center;
     }

     .DeliverAny p{
        color:#ff4612;
        font-size: 15px;
     }
     .DeliverAny h1{
        color:#010048;
        font-size: 30px;
        font-weight: 700;
     }

     .freightmain{
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        gap: 8px;
        padding: 40px 0px;
     }
     .freight{
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 2px 2px 4px;
        flex: 1;
        padding: 20px 20px;
     }

      .freight >div p{
        color:#010048;
        font-size: 20px;
        font-weight: 700;
      }
     .freight >div{
        display: flex;
        gap: 10px;
        flex-direction: column;
     }

     .icons{
        font-size: 40px;
        color:#010048;
    
     }

     @media screen  and (max-width: 900px){
        
        .DeliverAnything{
            width: 95% !important;
        }
        .freightmain{
            flex-direction: column;
            width: 100% !important;
        }
     }
`

export const Fedes = styled.main`
    
    
     .mainotthercourir{
        background-color: lightgray;
     }

     .otthercourir{
        width: 80%;
        margin: auto;
        padding: 60px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

     }

     @media screen and (max-width: 900px){
        
        .otthercourir{
            width: 95%;
            
        }

        .imge{
            width: 50px !important;
        }

     }
`

export const Footers = styled.footer`
    background-color: #222;
    font-family: var(--font-geist-sans); 


    .footers{
        padding: 40px 0px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 80%;
        color: whitesmoke;
    }

    .footers p{
       font-size: larger;
       font-weight: 700;
       margin-bottom: 10px;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 17px;
        list-style-type: none;
    }

    li{
        cursor: pointer;
    }

    .subscribe{
        margin-block:10px
    }

    .subscribe input{
        background-color: whitesmoke;
        padding: 10px 10px;
        outline: none;
        color: black;
    }
    .subscribe button{
        background-color: #ff4612;
        padding: 10px 10px;
        cursor: pointer;
    }

    .bottom{
       background-color: #050505;
    }

    .bottom .Copyright©{
        display: flex;
        color: whitesmoke;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
    }

    .cards{
        display: flex;
        justify-content: space-between;
        font-size: 40px;
        gap: 10px;
        align-items: center;
        padding: 10px 0px;
    }

    @media screen and (max-width: 900px) {
        

        .footers{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 40px;
        }

        .subscribe{
            display: flex;
            width: 80%;
        }

        .bottom{
            width: 100% !important;
        }

        .Copyright©{
           font-size: 10px;
            flex-direction: column;
            width: 100% !important;
            padding: 12px;
        }
    }
`


export const Aboutus = styled.main`

font-family: var(--font-geist-sans);
  position: relative;
  width: 100%;
  /* min-height: 100vh; */
  overflow: hidden;
  z-index: 1;

  .background {
    position: fixed; /* full-page background */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -2; /* behind content */
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    color: white; /* make text visible */
  }

  .aboutus{
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
  }

  .aboutus h1{
    font-size: 30px;
    color: whitesmoke;
    font-weight: 800;
  }


  .mainabout{
    color: black;
    background-color: lightgray;
    margin-top: 4rem;
     padding: 20px 20px;
  }

  .mainabout .myabouthere{
    width: 80%;
    padding: 20px 20px;
    border-radius: 20px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-color: whitesmoke;
    align-items: center;
    box-shadow: 4px 4px 8px;
  }

  .about-section{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .imags{
    flex: 1;
  }


  @media screen and (max-width: 900px) {
    
    .background{
        height: 100% !important;
    }

    .aboutus{
        height: 20vh !important;
    }

    .myabouthere{
        width: 100% !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
  }

`

export const Fligtht = styled.main`
     font-family: var(--font-geist-sans);
     width: 100%;
     /* height: 100vh; */
     overflow: hidden;
     position: relative;
     background-color: transparent;
     


     .images{
    top: 0;
    left: 0;
    background-image: cover;
    background-position: center;
    z-index: -1;
 
     }


     .manin{
        color: whitesmoke;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        flex-direction: column;
        gap: 20px;
     }

     .oceanbutton{
         background-color: #ff4612;
        padding: 10px 20px;
        font-size: 20px;
     }

     .manin h1{
        font-size: 50px;
        font-weight: 700;
     }





     .Packaging{
        background: whitesmoke;
     }


     .mmytopi{
        box-shadow: 3px 3px 6px;
        padding: 35px 30px !important;
     }

 .suppot{
        border: 1px solid;
        padding: 50px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex-direction: column;
        margin-top: 2rem;
        background-color: #de2823;
        color: whitesmoke;
    }

    .tops{
        display: flex;
        justify-content: space-between;
        gap: 30px;
        width: 80%;
        padding: 30px 10px;
        margin: auto;
    }
    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
       
    }

    .left div{
        border-top: 0.1px solid lightgray;
        display: flex;
        flex-direction: column;
        gap: 10px;
       cursor: pointer;
       padding: 10px 5px;
       z-index: 20px;
       position: relative;
    }

       .left div a:hover{ 
       color: #ff4612;
       }

       .suppot button{
        background-color: white;
        color: black;
        padding: 10px 10px;
        cursor: pointer;
       }

       
       .suppot button:hover{
        background-color: black;
        color: whitesmoke;
       }


       .packaging-storage{
       right: 0;
       width: 80%;
       margin: auto;
        padding: 50px 10px;
       display: flex;
       flex-direction: column;
        text-align: center;
        gap: 10px;
        font-size: 17px;
       }

       .packaging{
        display: flex;
        flex-direction: column;
        gap: 20px;
       }
       .storage{
        display: flex;
        flex-direction: column;
        gap: 20px;
       }

       h2, h3, h4{
        font-weight: 700;
        font-size: 20px;
        color: #de2823;
       }



@media screen and (max-width: 900px) {
    
    .manin{
        width: 100% !important;
        height: 100%;
        padding: 30px 0px;
        
    }
    h1{
        font-size: 25px !important;
        text-align: center;
    }

    .Packaging{
        width: 100%;
    }

    .tops{
     flex-direction: column-reverse;
     width: 100%;
    }
}
`


export const FAQs = styled.main`
      position: relative;
  width: 100%;
  /* min-height: 100vh; */
  overflow: hidden;
  z-index: 1;
  font-family: var(--font-geist-sans);


    .imgas{
        z-index: -1;
        background-image: cover;
        background-position: center;
        /* width: 100%; */
       
    }

    .faq{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

   .faq h1{
    color: whitesmoke ;
    font-size: 30px;
    font-weight: 700;
   }

   .skquestion{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 60%;
    margin: auto;
    
   
   }

   .themain{
        display: flex;
        background-color: whitesmoke;
    flex-direction: column;
    gap: 10px;
    margin-block: 2rem;
    padding: 40px 30px;
    border-radius: 30px;
   }

   .skquestion h1{
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 10px;
   }

   .askquestions{
    display: flex;
    justify-content: space-between;
      cursor: pointer;
   }


   .peopelask{
    border: 1px solid lightgray;
    padding: 20px 20px;
    border-radius: 40px;
   }


   @media screen and (max-width: 900px) {
    
       .faq{
        height: 100% !important;
        padding: 70px 40px;
    }

    h1{
        font-size: 25px !important;
    }

    .pttes p{
        font-size: 20px !important;
    }

    .skquestion{
        width: 95%;
    }

 
   }
`


export const Cntacts = styled.main`
    overflow: hidden;
    /* height: 100vh; */
    width: 100%;
    position: relative;
    background-color: transparent;

    .image{
        background-position: center;
        background-image: center;
        z-index: -1;
    }

    .contactsupt{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 100px;
    }

    .contactsupt button{
        background-color:#de2823;
        color: whitesmoke;
        padding: 10px 20px;
        font-size: 30px;
        cursor: pointer;
    }

    .contactform{
        display: flex ;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       padding: 10px 10px;
    }

    form{
        width: 40%;
         background-color: rgba(245, 245, 245, 0.8);
         display: flex;
         flex-direction: column;
         gap: 10px;
         padding: 20px 20px;
    }

    form h1{
        font-size: 30px;
    }

    input{
        padding: 10px 10px;
        background-color: wheat;
        width: 100%;
    }

    textarea{
     padding: 10px 10px;
        background-color: wheat;
        width: 100%;
    }

    .sendmess button{
        width: 100%;
                background-color:#de2823;
        color: whitesmoke;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
    }


    @media screen and (max-width: 900px) {
        
        .contactsupt{
            height: 100% !important;
            padding: 30px 0px;
        }

        .contactsupt button{
          font-size: 20px;
        }
        .contactform{
            width: 100%;
        }

        form{
            width: 95%;
        }
    }

`


export const Packings = styled.main`
font-family: var(--font-geist-sans);
    .Packaging{
        width: 80%;
        margin: auto;
         padding: 20px 20px;
    }

    .suppot{
        border: 1px solid;
        padding: 50px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 10px;
        flex-direction: column;
        margin-top: 2rem;
        background-color: #de2823;
        color: whitesmoke;
    }

    .tops{
        display: flex;
        justify-content: space-between;
        gap: 30px;
          margin-bottom: 2rem;
    }
    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
       
    }

    .left div{
        border-top: 0.1px solid lightgray;
        display: flex;
        flex-direction: column;
        gap: 10px;
       cursor: pointer;
       padding: 10px 5px;
       z-index: 20px;
       position: relative;
    }

       .left div a:hover{ 
       color: #ff4612;
       }

       .suppot button{
        background-color: white;
        color: black;
        padding: 10px 10px;
        cursor: pointer;
       }

       
       .suppot button:hover{
        background-color: black;
        color: whitesmoke;
       }


       .packaging-storage{
        width: 100%;
       right: 0;
        padding: 20px 20px;
       margin: 2rem auto;
       display: flex;
       flex-direction: column;
        text-align: center;
        gap: 10px;
        font-size: 17px;
       }

       .packaging{
        display: flex;
        flex-direction: column;
        gap: 20px;
       }
       .storage{
        display: flex;
        flex-direction: column;
        gap: 20px;
       }

       h2, h3, h4{
        font-weight: 700;
        font-size: 20px;
        color: #de2823;
       }


       @media screen and (max-width: 900px) {
        
        .Packaging{
            width: 100%;
        }
        .tops{
            flex-direction: column-reverse;
            width: 100%;
        }

        .packaging-storage{
            width: 100% !important;
        }

        .container{
            width: 100% !important;
        }
       }

`

export const Trackins = styled.main`
    
         font-family: var(--font-geist-sans);
     width: 100%;
     /* height: 100vh; */
     overflow: hidden;
     position: relative;
     background-color: transparent;
     


     .images{
    top: 0;
    left: 0;
    background-image: cover;
    background-position: center;
    z-index: -1;
 
     }

     

     .Mains{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
     }

     .form{
        background-color: whitesmoke; 
        width: 50%;
        margin: auto;
        align-items: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 40px 20px;
     }

     .topis h1{
        font-weight: 700;
        font-size: 40px;
        text-align: center;
       color: #ff4612;
     }
     
     .topis p{
       font-weight: 700;
        font-size: 20px;
        text-align: center;
     }

     input{
        background-color: wheat;
        padding: 10px 10px;
     }

     button{
        background-color: #ff4612;
        padding: 10px 10px;
        cursor: pointer;
        color: whitesmoke;
     }

     @media screen and (max-width: 900px) {
        .Mains{
            height: 100%;
            padding: 20px 0px;
        }

        form{
            width: 100%;
            padding: 20 0pxpx;
            background-color: rgba(255, 255, 255, 0) !important;
        }

        .topis h1{
            display: none;
        }
        .topis p{
        font-size: 30px;
            font-weight: 900;
            color: #ff4612;
        }
     }
`



export const Oceanic = styled.main`
     font-family: var(--font-geist-sans);
     width: 100%;
     overflow: hidden;
     position: relative;
     background-color: transparent;
     
     

     .images{
    top: 0;
    left: 0;
    background-image: cover;
    background-position: center;
    z-index: -1;
 
     }


     .manin{
        color: whitesmoke;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        flex-direction: column;
        gap: 20px;
     }

     .oceanbutton{
         background-color: #ff4612;
        padding: 10px 20px;
        font-size: 20px;
     }

     .manin h1{
        font-size: 50px;
        font-weight: 700;
     }





     .Packaging{
        background: whitesmoke;
     }


     .mmytopi{
        box-shadow: 3px 3px 6px;
        padding: 35px 30px !important;
     }

 .suppot{
        border: 1px solid;
        padding: 50px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex-direction: column;
        margin-top: 2rem;
        background-color: #de2823;
        color: whitesmoke;
    }

    .tops{
        display: flex;
        justify-content: space-between;
        gap: 30px;
        width: 80%;
        padding: 30px 10px;
        margin: auto;
    }
    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
       
    }

    .left div{
        border-top: 0.1px solid lightgray;
        display: flex;
        flex-direction: column;
        gap: 10px;
       cursor: pointer;
       padding: 10px 5px;
       z-index: 20px;
       position: relative;
    }

       .left div a:hover{ 
       color: #ff4612;
       }

       .suppot button{
        background-color: white;
        color: black;
        padding: 10px 10px;
        cursor: pointer;
       }

       
       .suppot button:hover{
        background-color: black;
        color: whitesmoke;
       }


       .packaging-storage{
       right: 0;
       width: 80%;
       margin: auto;
        padding: 50px 10px;
       display: flex;
       flex-direction: column;
        text-align: center;
        gap: 10px;
        font-size: 17px;
       }

       .packaging{
        display: flex;
        flex-direction: column;
        gap: 20px;
       }
       .storage{
        display: flex;
        flex-direction: column;
        gap: 20px;
       }

       h2, h3, h4{
        font-weight: 700;
        font-size: 20px;
        color: #de2823;
       }


       @media screen and (max-width: 900px) {
        
        .manin{
            height: 100%;
            padding: 40px 0px;
        }

        .manin h1{
            font-size: 30px;
        }
        .manin button{
            font-size: 20px;
        }

        .tops{
            flex-direction: column-reverse;
            width: 100%;
        }

        .packaging-storage{
            width: 100% !important;
        }
        .container{
            width: 100% !important;
        }
       }

`





export const Chatlive = styled.main`
    position: fixed;
    z-index: 100;
    color: #1dad52;
    right: 5%;
    z-index: 9999;
    bottom: 8%; 

    a{
        cursor: pointer;
        font-size: 55px;
        font-weight: 900;

    }
`




export const Tracking = styled.main`
    

`