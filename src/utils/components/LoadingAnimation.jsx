function LoadingAnimation() {
  return (
    <>
      <div className="mt-[3rem] animate-pulse flex flex-row justify-center gap-3">
        <div className="w-6 h-6 bg-info rounded-full opacity-50"></div>
        <div className="w-6 h-6 bg-info rounded-full opacity-75"></div>
        <div className="w-6 h-6 bg-info rounded-full"></div>
      </div>
    </>
  );
}

export default LoadingAnimation;
