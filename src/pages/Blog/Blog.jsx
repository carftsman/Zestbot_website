import React from "react";
import { FaRocket } from "react-icons/fa";

const Blog = () => {
    return (
        <>
            <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        .coming-section{
          width:100%;
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#f5f7ff 0%,#eef2ff 60%,#e8ecff 100%);
          padding:20px;
        
        }

        .coming-content{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
}

.loader{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top: 35px;
  gap:10px;
}

.wave-text{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    font-size:70px;
    font-weight:700;
    color:#192A5F;
}

.wave-text span{
    display:inline-block;
    animation:wave 1.5s ease-in-out infinite;
}

.wave-text span:nth-child(1){animation-delay:0s;}
.wave-text span:nth-child(2){animation-delay:.1s;}
.wave-text span:nth-child(3){animation-delay:.2s;}
.wave-text span:nth-child(4){animation-delay:.3s;}
.wave-text span:nth-child(5){animation-delay:.4s;}
.wave-text span:nth-child(6){animation-delay:.5s;}
.wave-text span:nth-child(7){animation-delay:.6s;}
.wave-text span:nth-child(8){animation-delay:.7s;}
.wave-text span:nth-child(9){animation-delay:.8s;}
.wave-text span:nth-child(10){animation-delay:.9s;}
.wave-text span:nth-child(11){animation-delay:1s;}

@keyframes wave{
    0%,100%{
        transform:translateY(0);
    }
    50%{
        transform:translateY(-15px);
        color:#FFD54A;
    }
}

@media(max-width:768px){
    .wave-text{
        font-size:42px;
    }
}
       


        .coming-card h1{
          color:#192A5F;
          font-size:70px;
          font-weight:700;
        }

       

        .loader{
          display:flex;
          justify-content:center;
          gap:10px;
        }

        .loader span{
          width:20px;
          height:20px;
          border-radius:50%;
          background:#FFD54A;
          animation:bounce 1.2s infinite;
        }

        .loader span:nth-child(2){
          animation-delay:.2s;
        }

        .loader span:nth-child(3){
          animation-delay:.4s;
        }

        @keyframes bounce{
          0%,80%,100%{
            transform:scale(.6);
            opacity:.5;
          }
          40%{
            transform:scale(1);
            opacity:1;
          }
        }

        @keyframes float{
          0%,100%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-12px);
          }
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @media(max-width:768px){

          .coming-card{
            padding:45px 25px;
          }

          .coming-card h1{
            font-size:38px;
          }

          .coming-card p{
            font-size:16px;
          }

          .coming-icon{
            width:75px;
            height:75px;
            font-size:30px;
          }

        }
      `}</style>

            <section className="coming-section">

                <div className="coming-card">


                    <h1 className="wave-text">
                        <span>C</span>
                        <span>o</span>
                        <span>m</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>

                        <span>&nbsp;</span>

                        <span>S</span>
                        <span>o</span>
                        <span>o</span>
                        <span>n</span>
                    </h1>

                </div>

            </section>
        </>
    );
};

export default Blog;