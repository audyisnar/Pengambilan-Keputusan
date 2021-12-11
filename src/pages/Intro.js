import { Link } from "react-router-dom";
import Cover from '../assets/cover.png';

export default function Intro({ slide }) {
  if (slide !== 0) return null;

  return (
    <div className="">
      <div className="imageCover">
          <img src={Cover} alt="Cover" className="h-screen w-full"/> 
          <div className="textCover text-sm font-semibold">
            <p>Audy Istania Narita</p>
            <p>2110191022</p>
            <p>3 D4 IT A</p>
          </div>
          <div className="tittleCover flex flex-col justify-center items-center">
            <p className="text-3xl text-white">PENGAMBILAN KEPUTUSAN</p>
            <p className="text-4xl font-bold">DALAM KONDISI BERISIKO</p>
            <div className="mt-10">
              <Link to="/calculate">
                <div className="btn-start w-32 text-center text-base rounded-md cursor-pointer py-2">Mulai</div>
              </Link>
            </div>
          </div>
      </div>                
    </div>
  );
}
