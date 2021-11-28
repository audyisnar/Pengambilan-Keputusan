export default function Tutorial3({ slide, setSlide }) {
  if (slide !== 3) return null;

  return (
    <div className="bg-image h-full p-8 text">
      <div className="text-xs font-semibold">
        <p>FAZA GHULAM AHMAD</p>
        <p>2110191035</p>
        <p>3 D4 IT B</p>
      </div>
      <div className="h-90 flex">
        <div className="w-1/2 text-4xl self-center">
          <p>
            Hasil dapat dilihat pada <b>tabel</b>
          </p>
          <p>
            dan <b>kesimpulan</b> yang ditampilkan
          </p>
          <div className="flex mt-4">
            <div className="w-4 h-4 mr-2 cursor-pointer rounded-full border border-biru" onClick={() => setSlide(1)} />
            <div className="w-4 h-4 mr-2 cursor-pointer rounded-full border border-biru" onClick={() => setSlide(2)} />
            <div className="w-4 h-4 mr-2 cursor-pointer rounded-full bg-biru" />
          </div>
          <div className="btn-start w-32 text-center text-base rounded-md cursor-pointer py-2 mt-8">Mulai</div>
        </div>
        <div className="w-1/2 flex justify-center self-center">lalala</div>
      </div>
      <div className="flex text-base font-semibold hover:underline cursor-pointer" onClick={() => setSlide(0)}>
        <svg className="w-5 h-5 self-center mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <p>kembali ke beranda</p>
      </div>
    </div>
  );
}
