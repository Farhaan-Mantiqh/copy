export default function LandingText(): JSX.Element {
  return (
    <div className="pt-20 md:pt-28">
      <div className="bg-commonGradient">
        <div className="flex flex-col items-center justify-center gap-5 px-5 py-6 md:py-[60px]">
          <h2 className="heading1">
            What <span className="text-ecocrewPrimary">Ecocrew</span> is all
            about
          </h2>
          <p className="conSection text-darkLow">
            Ecocrew rewards users for being ecofriendly
          </p>
        </div>
      </div>
    </div>
  );
}
